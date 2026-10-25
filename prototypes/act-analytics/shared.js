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
  // Phosphor icons exported from the Figma design system (16px grid, filled with currentColor)
  const psvg = (inner, size) =>
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + (size || 16) + '" height="' + (size || 16) + '" viewBox="0 0 16 16" fill="none" aria-hidden="true">' + inner + "</svg>";
  const P = {
    bookOpen: '<path fill="currentColor" d="M14.5 3H10C9.61189 3 9.2291 3.09036 8.88197 3.26393C8.53483 3.4375 8.23287 3.68951 8 4C7.76713 3.68951 7.46517 3.4375 7.11803 3.26393C6.7709 3.09036 6.38811 3 6 3H1.5C1.36739 3 1.24021 3.05268 1.14645 3.14645C1.05268 3.24021 1 3.36739 1 3.5V12.5C1 12.6326 1.05268 12.7598 1.14645 12.8536C1.24021 12.9473 1.36739 13 1.5 13H6C6.39782 13 6.77936 13.158 7.06066 13.4393C7.34196 13.7206 7.5 14.1022 7.5 14.5C7.5 14.6326 7.55268 14.7598 7.64645 14.8536C7.74021 14.9473 7.86739 15 8 15C8.13261 15 8.25979 14.9473 8.35355 14.8536C8.44732 14.7598 8.5 14.6326 8.5 14.5C8.5 14.1022 8.65804 13.7206 8.93934 13.4393C9.22064 13.158 9.60218 13 10 13H14.5C14.6326 13 14.7598 12.9473 14.8536 12.8536C14.9473 12.7598 15 12.6326 15 12.5V3.5C15 3.36739 14.9473 3.24021 14.8536 3.14645C14.7598 3.05268 14.6326 3 14.5 3ZM6 12H2V4H6C6.39782 4 6.77936 4.15804 7.06066 4.43934C7.34196 4.72064 7.5 5.10218 7.5 5.5V12.5C7.06766 12.1747 6.54106 11.9991 6 12ZM14 12H10C9.45893 11.9991 8.93234 12.1747 8.5 12.5V5.5C8.5 5.10218 8.65804 4.72064 8.93934 4.43934C9.22064 4.15804 9.60218 4 10 4H14V12Z"/>',
    mathOperations: '<path fill="currentColor" d="M7 4.5C7 4.63261 6.94732 4.75979 6.85355 4.85355C6.75979 4.94732 6.63261 5 6.5 5H2.5C2.36739 5 2.24021 4.94732 2.14645 4.85355C2.05268 4.75979 2 4.63261 2 4.5C2 4.36739 2.05268 4.24021 2.14645 4.14645C2.24021 4.05268 2.36739 4 2.5 4H6.5C6.63261 4 6.75979 4.05268 6.85355 4.14645C6.94732 4.24021 7 4.36739 7 4.5ZM6.5 11H5V9.5C5 9.36739 4.94732 9.24021 4.85355 9.14645C4.75979 9.05268 4.63261 9 4.5 9C4.36739 9 4.24021 9.05268 4.14645 9.14645C4.05268 9.24021 4 9.36739 4 9.5V11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H4V13.5C4 13.6326 4.05268 13.7598 4.14645 13.8536C4.24021 13.9473 4.36739 14 4.5 14C4.63261 14 4.75979 13.9473 4.85355 13.8536C4.94732 13.7598 5 13.6326 5 13.5V12H6.5C6.63261 12 6.75979 11.9473 6.85355 11.8536C6.94732 11.7598 7 11.6326 7 11.5C7 11.3674 6.94732 11.2402 6.85355 11.1464C6.75979 11.0527 6.63261 11 6.5 11ZM9.5 11H13.5C13.6326 11 13.7598 10.9473 13.8536 10.8536C13.9473 10.7598 14 10.6326 14 10.5C14 10.3674 13.9473 10.2402 13.8536 10.1464C13.7598 10.0527 13.6326 10 13.5 10H9.5C9.36739 10 9.24021 10.0527 9.14645 10.1464C9.05268 10.2402 9 10.3674 9 10.5C9 10.6326 9.05268 10.7598 9.14645 10.8536C9.24021 10.9473 9.36739 11 9.5 11ZM13.5 12H9.5C9.36739 12 9.24021 12.0527 9.14645 12.1464C9.05268 12.2402 9 12.3674 9 12.5C9 12.6326 9.05268 12.7598 9.14645 12.8536C9.24021 12.9473 9.36739 13 9.5 13H13.5C13.6326 13 13.7598 12.9473 13.8536 12.8536C13.9473 12.7598 14 12.6326 14 12.5C14 12.3674 13.9473 12.2402 13.8536 12.1464C13.7598 12.0527 13.6326 12 13.5 12ZM9.64625 6.35375C9.69269 6.40024 9.74783 6.43712 9.80853 6.46228C9.86923 6.48744 9.93429 6.50039 10 6.50039C10.0657 6.50039 10.1308 6.48744 10.1915 6.46228C10.2522 6.43712 10.3073 6.40024 10.3538 6.35375L11.5 5.20687L12.6462 6.35375C12.6927 6.40021 12.7479 6.43706 12.8086 6.4622C12.8692 6.48734 12.9343 6.50028 13 6.50028C13.0657 6.50028 13.1308 6.48734 13.1914 6.4622C13.2521 6.43706 13.3073 6.40021 13.3538 6.35375C13.4002 6.3073 13.4371 6.25214 13.4622 6.19145C13.4873 6.13075 13.5003 6.0657 13.5003 6C13.5003 5.9343 13.4873 5.86925 13.4622 5.80855C13.4371 5.74786 13.4002 5.6927 13.3538 5.64625L12.2069 4.5L13.3538 3.35375C13.4476 3.25993 13.5003 3.13268 13.5003 3C13.5003 2.86732 13.4476 2.74007 13.3538 2.64625C13.2599 2.55243 13.1327 2.49972 13 2.49972C12.8673 2.49972 12.7401 2.55243 12.6462 2.64625L11.5 3.79312L10.3538 2.64625C10.2599 2.55243 10.1327 2.49972 10 2.49972C9.86732 2.49972 9.74007 2.55243 9.64625 2.64625C9.55243 2.74007 9.49972 2.86732 9.49972 3C9.49972 3.13268 9.55243 3.25993 9.64625 3.35375L10.7931 4.5L9.64625 5.64625C9.59976 5.69269 9.56288 5.74783 9.53772 5.80853C9.51256 5.86923 9.49961 5.93429 9.49961 6C9.49961 6.06571 9.51256 6.13077 9.53772 6.19147C9.56288 6.25217 9.59976 6.30731 9.64625 6.35375Z"/>',
    books: '<path fill="currentColor" d="M14.4781 12.1594L12.4038 2.29688C12.3769 2.1679 12.3249 2.0455 12.2506 1.9367C12.1763 1.8279 12.0813 1.73485 11.9709 1.66289C11.8606 1.59094 11.7371 1.54149 11.6076 1.5174C11.4781 1.49331 11.3451 1.49504 11.2163 1.5225L8.29062 2.15125C8.03184 2.20791 7.8059 2.36446 7.66194 2.58684C7.51798 2.80922 7.46764 3.07945 7.52187 3.33875L9.59625 13.2013C9.64248 13.4263 9.76477 13.6285 9.94255 13.774C10.1203 13.9194 10.3428 13.9992 10.5725 14C10.6435 13.9999 10.7143 13.9924 10.7837 13.9775L13.7094 13.3488C13.9685 13.292 14.1946 13.1351 14.3386 12.9123C14.4826 12.6896 14.5327 12.4189 14.4781 12.1594ZM8.5 3.13438C8.5 3.13063 8.5 3.12875 8.5 3.12875L11.425 2.50375L11.6331 3.49563L8.70813 4.125L8.5 3.13438ZM8.91375 5.10125L11.84 4.47312L12.0487 5.46688L9.125 6.09562L8.91375 5.10125ZM9.32875 7.07437L12.255 6.44562L13.0863 10.3981L10.16 11.0269L9.32875 7.07437ZM13.5 12.3713L10.575 12.9963L10.3669 12.0044L13.2919 11.375L13.5 12.3656C13.5 12.3694 13.5 12.3713 13.5 12.3713ZM6.5 2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H6.5C6.76522 14 7.01957 13.8946 7.20711 13.7071C7.39464 13.5196 7.5 13.2652 7.5 13V3C7.5 2.73478 7.39464 2.48043 7.20711 2.29289C7.01957 2.10536 6.76522 2 6.5 2ZM3.5 3H6.5V4H3.5V3ZM3.5 5H6.5V11H3.5V5ZM6.5 13H3.5V12H6.5V13Z"/>',
    flask: '<path fill="currentColor" d="M13.8556 12.4856L10 6.0575V2.5H10.5C10.6326 2.5 10.7598 2.44732 10.8536 2.35355C10.9473 2.25979 11 2.13261 11 2C11 1.86739 10.9473 1.74021 10.8536 1.64645C10.7598 1.55268 10.6326 1.5 10.5 1.5H5.5C5.36739 1.5 5.24021 1.55268 5.14645 1.64645C5.05268 1.74021 5 1.86739 5 2C5 2.13261 5.05268 2.25979 5.14645 2.35355C5.24021 2.44732 5.36739 2.5 5.5 2.5H6V6.0575L2.14438 12.4856C2.05344 12.6372 2.00432 12.8102 2.00202 12.987C1.99973 13.1638 2.04433 13.338 2.1313 13.4919C2.21826 13.6458 2.34447 13.7739 2.49708 13.8632C2.64968 13.9525 2.82321 13.9997 3 14H13C13.1769 14 13.3507 13.953 13.5036 13.8639C13.6564 13.7748 13.7829 13.6467 13.8701 13.4927C13.9573 13.3388 14.0021 13.1644 13.9999 12.9875C13.9976 12.8105 13.9485 12.6374 13.8575 12.4856H13.8556ZM6.92875 6.45312C6.97551 6.37561 7.00015 6.28678 7 6.19625V2.5H9V6.19625C8.99985 6.28678 9.02449 6.37561 9.07125 6.45312L11.46 10.4375C10.71 10.5856 9.64313 10.5231 8.22563 9.80562C7.23125 9.3025 6.285 9.03562 5.39937 9.005L6.92875 6.45312ZM3 13L4.78375 10.0262C5.67438 9.9175 6.67812 10.1419 7.7725 10.6962C8.96 11.2969 9.96 11.5013 10.7725 11.5013C11.1857 11.5031 11.5971 11.4463 11.9944 11.3325L13 13H3Z"/>',
    dot: '<path d="M8.06667 8.73333C8.43486 8.73333 8.73333 8.43486 8.73333 8.06667C8.73333 7.69848 8.43486 7.4 8.06667 7.4C7.69848 7.4 7.4 7.69848 7.4 8.06667C7.4 8.43486 7.69848 8.73333 8.06667 8.73333Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>',
  };
  const ICONS = {
    book: (s) => psvg(P.bookOpen, s),
    calc: (s) => psvg(P.mathOperations, s),
    reading: (s) => psvg(P.books, s),
    flask: (s) => psvg(P.flask, s),
    dot: (s) => psvg(P.dot, s),
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
    const subjCol = opts.subjectColWidth ? '<col style="width:' + opts.subjectColWidth + 'px">' : '<col class="col-subject">';
    let html = '<div class="table-wrap' + (opts.flat ? " flat" : "") + '"><table class="students"><colgroup>' + (opts.subjectColWidth ? "<col>" : '<col class="col-student">') + subjCol.repeat(5) + "</colgroup><thead><tr>";
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
      else if (w === "pending") wcell = '<span class="pill pending">Pending</span>';
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
      '<div class="legend' + (opts && opts.className ? " " + opts.className : "") + '">' +
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
