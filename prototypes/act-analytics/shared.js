/* ACT Analytics prototypes — shared data model, renderers and helpers */
window.ACT = (function () {
  "use strict";

  // ---------- Data ----------
  const SUBJECTS = [
    { key: "english", name: "English", bm: 18, icon: "book" },
    { key: "math", name: "Math", bm: 22, icon: "calc" },
    { key: "reading", name: "Reading", bm: 22, icon: "reading" },
    { key: "science", name: "Science", bm: 23, icon: "flask" },
  ];
  const WRITING = { key: "writing", name: "Writing", range: "2–12" };
  const BM_NOTE = "BM = ACT College Readiness Benchmark";
  const SUMMARY = "17 of 18 students submitted · 1 in progress · 1 auto-submitted · 3 essays pending review";
  const SUMMARY_EMPTY = "0 of 18 students submitted · 6 in progress · 12 not started";
  const TOTAL_SKILLS = 12;

  // writing: number | "pending" | null (no score) ; noScoreReason shown as tooltip on "—"
  const STUDENTS = [
    { id: "amelia", name: "Amelia Quinn", english: 21, math: 19, reading: 22, science: 20, writing: 7 },
    { id: "ava", name: "Ava Robinson", english: 32, math: 30, reading: 31, science: 28, writing: 10 },
    { id: "avery", name: "Avery Parker", english: 15, math: 16, reading: null, science: null, writing: null, tag: "Auto-submitted" },
    { id: "carter", name: "Carter Diaz", english: 24, math: 26, reading: 23, science: 25, writing: 8 },
    { id: "charlotte", name: "Charlotte Bell", english: 27, math: 23, reading: 26, science: 22, writing: null, noScoreReason: "No score. See Grading for details." },
    { id: "emma", name: "Emma Brooks", english: 30, math: 27, reading: 29, science: 26, writing: 9 },
    { id: "ethan", name: "Ethan Murphy", english: 20, math: 17, reading: 19, science: 18, writing: "pending" },
    { id: "harper", name: "Harper Kim", english: 16, math: 15, reading: 17, science: 14, writing: "pending" },
    { id: "isabella", name: "Isabella Cox", english: 23, math: 25, reading: 22, science: 24, writing: 8 },
    { id: "jackson", name: "Jackson Cole", english: 17, math: 16, reading: 18, science: 15, writing: 5 },
    { id: "liam", name: "Liam Garcia", english: 22, math: 24, reading: 21, science: 22, writing: 7 },
    { id: "logan", name: "Logan Reed", english: 19, math: 22, reading: 18, science: 20, writing: 6 },
    { id: "lucas", name: "Lucas Chen", english: 18, math: 19, reading: 18, science: 17, writing: 6 },
    { id: "mason", name: "Mason Hill", english: 15, math: 14, reading: 16, science: 13, writing: 5 },
    { id: "mia", name: "Mia Collins", english: 26, math: 22, reading: 25, science: 21, writing: 8 },
    { id: "noah", name: "Noah Patel", english: 24, math: 21, reading: 23, science: 20, writing: "pending" },
    { id: "olivia", name: "Olivia Wright", english: 25, math: 20, reading: 24, science: 19, writing: 7 },
  ];
  STUDENTS.forEach((s) => { s.avatar = "assets/avatars/" + s.name.toLowerCase().replace(/ /g, "-") + ".png"; });

  // ACT reporting categories. accuracy = class accuracy %, weak = students below the 70% line
  const SKILLS = [
    { id: "eng-pow", subject: "english", name: "Production of Writing", accuracy: 52, weak: ["avery", "harper", "jackson", "lucas", "mason"] },
    { id: "eng-cse", subject: "english", name: "Conventions of Standard English", accuracy: 72, weak: ["mason"] },
    { id: "eng-kol", subject: "english", name: "Knowledge of Language", accuracy: 78, weak: [] },
    { id: "math-phm", subject: "math", name: "Preparing for Higher Math", accuracy: 58, weak: ["avery", "harper", "jackson", "mason"] },
    { id: "math-ies", subject: "math", name: "Integrating Essential Skills", accuracy: 66, weak: ["harper", "mason"] },
    { id: "math-mod", subject: "math", name: "Modeling", accuracy: 74, weak: [] },
    { id: "read-kid", subject: "reading", name: "Key Ideas & Details", accuracy: 61, weak: ["ethan", "harper", "mason"] },
    { id: "read-cs", subject: "reading", name: "Craft & Structure", accuracy: 70, weak: ["mason"] },
    { id: "read-iki", subject: "reading", name: "Integration of Knowledge & Ideas", accuracy: 79, weak: [] },
    { id: "sci-iod", subject: "science", name: "Interpretation of Data", accuracy: 38, weak: ["harper", "jackson", "logan", "mason", "mia", "olivia"] },
    { id: "sci-si", subject: "science", name: "Scientific Investigation", accuracy: 44, weak: ["amelia", "ethan", "harper", "jackson", "lucas", "mason"] },
    { id: "sci-emi", subject: "science", name: "Evaluation of Models, Inferences, & Experimental Results", accuracy: 85, weak: [] },
  ];

  const BINS = [[1, 8], [9, 12], [13, 16], [17, 20], [21, 24], [25, 28], [29, 32], [33, 36]];

  const subject = (key) => SUBJECTS.find((s) => s.key === key);
  const student = (id) => STUDENTS.find((s) => s.id === id);
  const skill = (id) => SKILLS.find((s) => s.id === id);

  function fmtAvg(n) {
    if (n == null || isNaN(n)) return "—";
    const r = Math.round(n * 10) / 10;
    return Number.isInteger(r) ? String(r) : r.toFixed(1);
  }

  // Denominator = students with a score in that subject
  function subjectStats(key, students) {
    const subj = subject(key);
    const scored = (students || STUDENTS).filter((s) => typeof s[key] === "number");
    const n = scored.length;
    const sum = scored.reduce((a, s) => a + s[key], 0);
    const met = scored.filter((s) => s[key] >= subj.bm).length;
    const below = n - met;
    const near = scored.filter((s) => s[key] < subj.bm && s[key] >= subj.bm - 3).length;
    return { key, name: subj.name, bm: subj.bm, n, met, below, near, avg: n ? sum / n : null, avgText: n ? fmtAvg(sum / n) : "—" };
  }

  function bins(key, students) {
    const subj = subject(key);
    const scored = (students || STUDENTS).filter((s) => typeof s[key] === "number");
    return BINS.map(([lo, hi]) => {
      const list = scored.filter((s) => s[key] >= lo && s[key] <= hi).sort((a, b) => b[key] - a[key]);
      const kind = subj.bm >= lo && subj.bm <= hi ? "bm" : hi < subj.bm ? "below" : "above";
      return { lo, hi, label: lo + "–" + hi, students: list, count: list.length, kind };
    });
  }

  function badgeKind(score, bm) {
    if (score > bm) return "above";
    if (score === bm) return "at";
    return "below";
  }

  // ---------- Icons ----------
  const svg = (paths, size, extra) =>
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + (size || 16) + '" height="' + (size || 16) +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' +
    (extra || "") + ">" + paths + "</svg>";
  const ICONS = {
    book: (s) => svg('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>', s),
    calc: (s) => svg('<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="18" x2="8" y2="18.01"/><line x1="12" y1="18" x2="12" y2="18.01"/>', s),
    reading: (s) => svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h7"/><path d="M9 11h5"/>', s),
    flask: (s) => svg('<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>', s),
    chevronDown: (s) => svg('<path d="m6 9 6 6 6-6"/>', s),
    chevronUp: (s) => svg('<path d="m18 15-6-6-6 6"/>', s),
    chevronsUpDown: (s) => svg('<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>', s),
    arrowUp: (s) => svg('<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>', s),
    arrowDown: (s) => svg('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>', s),
    check: (s) => svg('<path d="M20 6 9 17l-5-5"/>', s),
    x: (s) => svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>', s),
    arrowLeft: (s) => svg('<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>', s),
    arrowRight: (s) => svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', s),
    list: (s) => svg('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>', s),
    home: (s) => svg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', s),
    layout: (s) => svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>', s),
    sparkles: (s) => svg('<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>', s),
    gem: (s) => svg('<path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>', s),
    chart: (s) => svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17V11"/><path d="M12 17V7"/><path d="M16 17v-3"/>', s),
    help: (s) => svg('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>', s),
    settings: (s) => svg('<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>', s),
    refresh: (s) => svg('<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>', s),
    logo: (s) => svg('<path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M5 20a7 7 0 0 1 14 0"/>', s, ' stroke="#fff"'),
  };

  // ---------- Chrome ----------
  function renderChrome(opts) {
    const el = document.createElement("div");
    el.className = "app";
    el.innerHTML =
      '<nav class="global-nav" aria-label="Global navigation">' +
      '<div class="logo">' + ICONS.logo(18) + "</div>" +
      '<div class="nav-icons">' +
      ['home', 'list', 'reading', 'sparkles', 'gem', 'chart'].map((k, i) => '<div class="nav-icon' + (k === 'chart' ? ' active' : '') + '">' + ICONS[k](18) + "</div>").join("") +
      "</div>" +
      '<div class="nav-bottom"><div class="nav-icon">' + ICONS.help(18) + '</div><div class="nav-icon">' + ICONS.settings(18) + '</div><div class="nav-avatar">A</div></div>' +
      "</nav>" +
      '<div class="page">' +
      '<header class="top-nav">' +
      '<button class="back" aria-label="Back">' + ICONS.arrowLeft(18) + "</button>" +
      '<div class="title">Assignment Summary</div><div class="spacer"></div>' +
      '<button class="btn btn-secondary">' + ICONS.list(14) + "View All Assignments</button>" +
      '<button class="btn btn-primary">Create New Assignment</button>' +
      "</header>" +
      '<main class="main">' +
      '<div class="page-header"><img src="assets/page-header@2x.png" alt="ACT Practice Exam #3 · ACT Practice · Assignment ended" width="1360" height="332"></div>' +
      '<section class="panel" id="panel">' +
      '<div class="panel-tabs"><button class="panel-tab">Overview</button><button class="panel-tab active">Analytics</button></div>' +
      '<div class="panel-header"><div class="panel-title">ACT Practice Exam #3</div><div class="panel-subtitle" id="panel-subtitle">' + SUMMARY + "</div></div>" +
      '<div id="analytics-root"></div>' +
      "</section></main></div>";
    (opts && opts.mount ? opts.mount : document.body).appendChild(el);
    return el.querySelector("#analytics-root");
  }

  // ---------- Sorting ----------
  function sortStudents(list, sort) {
    const arr = list.slice();
    const dir = sort.dir === "desc" ? -1 : 1;
    arr.sort((a, b) => {
      if (!sort.col || sort.col === "student") return dir * a.name.localeCompare(b.name);
      const va = a[sort.col], vb = b[sort.col];
      const na = typeof va === "number", nb = typeof vb === "number";
      if (na && nb) return dir * (va - vb) || a.name.localeCompare(b.name);
      if (na) return -1; // scored students always above pending / missing
      if (nb) return 1;
      const pa = va === "pending" ? 0 : 1, pb = vb === "pending" ? 0 : 1;
      return pa - pb || a.name.localeCompare(b.name);
    });
    return arr;
  }

  // ---------- Student table ----------
  function renderStudentTable(container, opts) {
    const students = sortStudents(opts.students, opts.sort);
    const cols = [{ key: "student", label: "Student", sub: "" }]
      .concat(SUBJECTS.map((s) => ({ key: s.key, label: s.name, sub: "BM " + s.bm })))
      .concat([{ key: "writing", label: WRITING.name, sub: WRITING.range }]);
    const sortIcon = (key) => {
      if (opts.sort.col !== key) return '<span class="sort-icon">' + ICONS.chevronsUpDown(12) + "</span>";
      return '<span class="sort-icon">' + (opts.sort.dir === "desc" ? ICONS.arrowDown(12) : ICONS.arrowUp(12)) + "</span>";
    };
    let html = '<div class="table-wrap' + (opts.flat ? " flat" : "") + '"><table class="students"><colgroup><col class="col-student">' + '<col class="col-subject">'.repeat(5) + "</colgroup><thead><tr>";
    cols.forEach((c) => {
      const cls = [opts.sort.col === c.key ? "sorted" : "", opts.highlight === c.key ? "highlight" : ""].filter(Boolean).join(" ");
      html += '<th data-col="' + c.key + '" class="' + cls + '"><span class="th-line">' + c.label + sortIcon(c.key) + "</span>" + (c.sub ? '<span class="th-sub">' + c.sub + "</span>" : "") + "</th>";
    });
    html += "</tr></thead><tbody>";
    students.forEach((s) => {
      html += '<tr data-id="' + s.id + '"><td class="student"><div class="student-cell"><img class="avatar" src="' + s.avatar + '" alt=""><span class="name">' + s.name + "</span>" + (s.tag ? '<span class="tag">' + s.tag + "</span>" : "") + "</div></td>";
      SUBJECTS.forEach((sub) => {
        const v = s[sub.key];
        const hl = opts.highlight === sub.key ? ' class="highlight"' : "";
        html += "<td" + hl + ">" + (typeof v === "number" ? '<span class="pill ' + badgeKind(v, sub.bm) + '">' + v + "</span>" : '<span class="dash">—</span>') + "</td>";
      });
      const w = s.writing;
      let wcell;
      if (typeof w === "number") wcell = '<span class="pill neutral">' + w + "</span>";
      else if (w === "pending") wcell = '<span class="pending">Pending</span>';
      else if (s.noScoreReason) wcell = '<span class="cell-tip"><span class="dash">—</span><span class="tip">' + s.noScoreReason + "</span></span>";
      else wcell = '<span class="dash">—</span>';
      html += "<td>" + wcell + "</td></tr>";
    });
    html += "</tbody></table></div>";
    container.innerHTML = html;
    container.querySelectorAll("th").forEach((th) => {
      th.addEventListener("click", () => {
        const col = th.dataset.col;
        const next = opts.sort.col === col ? { col, dir: opts.sort.dir === "asc" ? "desc" : "asc" } : { col, dir: col === "student" ? "asc" : "desc" };
        opts.onSort && opts.onSort(next);
      });
    });
  }

  function renderLegend(container, opts) {
    container.innerHTML =
      '<div class="legend">' +
      '<span class="legend-item"><span class="swatch above"></span>Above benchmark</span>' +
      '<span class="legend-item"><span class="swatch at"></span>At benchmark</span>' +
      '<span class="legend-item"><span class="swatch below"></span>Below benchmark</span>' +
      '<span class="legend-note">' + BM_NOTE + "</span></div>";
  }

  // ---------- Histogram ----------
  function renderHistogram(container, opts) {
    const data = bins(opts.subject, opts.students);
    const subj = subject(opts.subject);
    const max = Math.max(1, ...data.map((b) => b.count));
    const maxBar = opts.maxBar || 84;
    let html = '<div class="histogram"><div class="hist-bins">';
    data.forEach((b, i) => {
      const h = b.count ? Math.max(10, Math.round((b.count / max) * maxBar)) : 2;
      html += '<div class="hist-bin' + (b.count ? " has-students" : "") + '" data-i="' + i + '">' +
        (b.count ? '<div class="hist-count">' + b.count + "</div>" : "") +
        (b.kind === "bm" && b.count ? '<div class="hist-bm-label">BM ' + subj.bm + "</div>" : "") +
        '<div class="hist-bar ' + b.kind + (b.count ? "" : " empty") + '" style="height:' + h + 'px"></div></div>';
    });
    html += '</div><div class="hist-labels">' + data.map((b) => "<span>" + b.label + "</span>").join("") + "</div>";
    if (opts.showRange) html += '<div class="hist-range"><span>1</span><span>36</span></div>';
    html += "</div>";
    container.innerHTML = html;

    const root = container.querySelector(".histogram");
    let tip = null;
    container.querySelectorAll(".hist-bin.has-students").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const b = data[+el.dataset.i];
        tip = document.createElement("div");
        tip.className = "hist-tooltip";
        tip.innerHTML = '<div class="tt-title">Score ' + b.label + "</div>" +
          b.students.map((s) => '<div class="tt-row"><img class="avatar" src="' + s.avatar + '" alt=""><span class="name">' + s.name + '</span><span class="score">' + s[subj.key] + "</span></div>").join("");
        root.appendChild(tip);
        const r = el.getBoundingClientRect(), rr = root.getBoundingClientRect();
        let left = r.right - rr.left + 8;
        if (left + tip.offsetWidth > rr.width) left = r.left - rr.left - tip.offsetWidth - 8;
        tip.style.left = Math.max(0, left) + "px";
        tip.style.top = Math.max(0, r.top - rr.top - 8) + "px";
      });
      el.addEventListener("mouseleave", () => { if (tip) { tip.remove(); tip = null; } });
    });
  }

  // ---------- Empty states ----------
  const MASCOT = { thankful: "assets/mascot-thankful.png", uhoh: "assets/mascot-uhoh.png", shy: "assets/mascot-shy.png", cheering: "assets/mascot-cheering.png" };
  function emptyState(opts) {
    return '<div class="empty-state' + (opts.compact ? " compact" : "") + '"><img src="' + MASCOT[opts.mascot] + '" alt="">' +
      '<div class="es-title">' + opts.title + "</div>" + (opts.desc ? '<div class="es-desc">' + opts.desc + "</div>" : "") +
      (opts.action ? '<button class="btn btn-secondary btn-sm" data-action="' + opts.action.id + '">' + (opts.action.icon ? ICONS[opts.action.icon](14) : "") + opts.action.label + "</button>" : "") + "</div>";
  }

  // ---------- Prototype state switcher ----------
  function renderProtoBar(opts) {
    const bar = document.createElement("div");
    bar.className = "proto-bar";
    bar.innerHTML = '<span class="proto-label">' + (opts.label || "States") + "</span>" +
      opts.states.map((s) => '<button data-state="' + s.id + '" class="' + (s.id === opts.current ? "active" : "") + '">' + s.label + "</button>").join("") +
      (opts.links ? '<span class="divider"></span>' + opts.links.map((l) => '<a href="' + l.href + '">' + l.label + "</a>").join("") : "");
    document.body.appendChild(bar);
    bar.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      bar.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      opts.onChange(b.dataset.state);
    }));
    return bar;
  }

  function stateFromHash(states, fallback) {
    const h = location.hash.replace("#", "");
    return states.some((s) => s.id === h) ? h : fallback;
  }

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const withArticle = (name) => (/^[aeiou]/i.test(name) ? "an " : "a ") + name;

  return {
    SUBJECTS, WRITING, STUDENTS, SKILLS, SUMMARY, SUMMARY_EMPTY, TOTAL_SKILLS, BM_NOTE, ICONS, MASCOT,
    subject, student, skill, fmtAvg, subjectStats, bins, badgeKind, sortStudents, withArticle,
    renderChrome, renderStudentTable, renderLegend, renderHistogram, emptyState, renderProtoBar, stateFromHash, esc,
  };
})();
