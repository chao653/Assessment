/* Survey · Student Instructions — prototype runtime
   One script drives all three layout proposals (B / C / D). The page sets
   <body data-version="b|c|d">; the hash selects the screen:
     #intro/empty | #intro/text | #intro/long | #section/1..4 | #end
*/
(function () {
  'use strict';

  var VERSION = document.body.dataset.version || 'b';
  var app = document.getElementById('app');

  /* ------------------------------------------------------------------ */
  /* Content (copied from the Figma frames)                              */
  /* ------------------------------------------------------------------ */

  var SURVEY = {
    course: 'ECON 101  \u00b7  Prof. Johnson',
    title: 'Midterm Course Feedback',
    subtitle: 'Your teacher would like to hear from you. Your feedback helps shape this course.',
    questions: 8,
    dates: 'Mar 8 \u2013 Mar 15, 2026',
    ctaHint: 'Surveys are not graded \u2014 you can skip any question and still submit.',
    notes: [
      {
        icon: 'shield',
        title: 'This survey is anonymous',
        body: 'Your teacher will see class-level results, not your individual response. You can answer honestly without worrying about your identity.'
      },
      {
        icon: 'bell',
        title: 'You can skip questions',
        body: 'Surveys are not graded. You can skip any question you do not want to answer and still submit.'
      }
    ]
  };

  function p(html) { return { type: 'p', html: html }; }
  function heading(text) { return { type: 'p', html: '<strong>' + text + '</strong>' }; }
  function ul(items) { return { type: 'ul', items: items }; }
  function ol(items) { return { type: 'ol', items: items }; }
  function img(name, w, h, tone) { return { type: 'img', name: name, w: w, h: h, tone: tone || '' }; }

  var EMAIL = '<a href="mailto:prof.johnson@university.edu">prof.johnson@university.edu</a>';

  var INTRO_CONTENT = {
    text: [
      p('Hi everyone! This survey helps me understand how the first half of ECON 101 has gone for you. <strong>Please read the notes below before you begin.</strong>'),
      ul([
        'Answer based on your own experience in this course \u2014 there are no right or wrong answers.',
        'The survey takes about 10 minutes. You can leave and come back at any time before Mar 15.',
        'If a question does not apply to you, skip it.'
      ]),
      p('Questions about the survey? Email me at ' + EMAIL + ' or check the course syllabus.')
    ],
    long: [
      p('Hi everyone! This survey helps me understand how the first half of ECON 101 has gone for you. Your answers directly shape how I run the second half of the semester, so please take a few minutes to answer thoughtfully. <strong>Please read the notes below before you begin.</strong>'),
      heading('How to answer'),
      ul([
        'Answer based on your own experience in this course \u2014 there are no right or wrong answers, and I am not looking for any particular response.',
        'The survey takes about 10 minutes. You can leave and come back at any time before Mar 15; your progress is saved automatically.',
        'If a question does not apply to you, skip it. Skipped questions do not affect anything.',
        'Rating scales run from Strongly Disagree (1) to Strongly Agree (7). Neutral (4) is a valid answer when you genuinely have no opinion.'
      ]),
      img('course-timeline.png', 1200, 675),
      p('The timeline above shows the topics we covered between Week 1 and Week 7. When a question asks about \u201clectures\u201d or \u201creadings\u201d, think about this whole period rather than only the most recent week.'),
      p('A few questions ask you to compare this course with other courses you are taking this semester. If ECON 101 is your only course, answer those based on your experience here alone.'),
      heading('What happens with your answers'),
      ol([
        'Responses are anonymous. I only see class-level summaries, never individual answers.',
        'I will share a short summary of the results in class during Week 9.',
        'Any changes I make based on your feedback will be posted on the course page.'
      ]),
      img('reading-list.png', 1600, 1200),
      p('Optional: the reading list above is the material referenced in Section 3. You do not need to have finished every reading to answer \u2014 rate what you have used so far.'),
      img('office-hours.jpg', 900, 1200),
      p('If you run into a technical problem while filling in the survey (for example, a page that will not load), close the tab and reopen the survey from your dashboard \u2014 your saved answers will still be there.'),
      p('Questions about the survey? Email me at ' + EMAIL + ' or drop by office hours (Tue &amp; Thu, 2\u20134 pm, Room 204). Thank you for your feedback!')
    ]
  };

  var SECTIONS = [
    {
      n: 1,
      title: 'Course Satisfaction',
      count: '8 questions in this section',
      blocks: [
        p('Please focus on the <strong>first half of the semester</strong> only.'),
        ul([
          'Skip anything that does not apply to your section',
          'Be as <em>specific</em> as you can',
          'Use examples when helpful'
        ]),
        p('Need context? Review the <a href="#" data-noop>course syllabus</a> before you continue.')
      ]
    },
    {
      n: 2,
      title: 'Teaching &amp; Materials',
      count: '3 questions in this section',
      blocks: [
        p('Use this rubric when you rate the course materials:'),
        img('materials-rubric.png', 1200, 675, 'purple'),
        p('Then answer the questions that follow.')
      ]
    },
    {
      n: 3,
      title: 'Workload &amp; Assessment',
      count: '4 questions in this section',
      blocks: [
        p('Think about the assignments and exams from the first half of the term. Skip anything that does not apply to your section.')
      ]
    },
    {
      n: 4,
      title: 'Open Feedback',
      count: '2 questions in this section',
      blocks: [
        p('<strong>Before you start this section</strong>, read the notes below carefully.'),
        p('We want honest feedback about pacing, workload, and clarity from the first half of the term. If a question does not apply to your lab or discussion section, leave it blank and move on.'),
        ol([
          'Think about lectures, readings, and assignments together.',
          'Call out what helped you learn, not only what felt difficult.',
          'Keep comments constructive so your teacher can act on them.'
        ]),
        p('Examples of useful comments: \u201cThe weekly problem sets built on each other,\u201d or \u201cThe regression unit moved too quickly without a worked example.\u201d Avoid naming classmates.'),
        p('When you are ready, continue to the questions. You can still skip any item later.')
      ]
    }
  ];

  /* ------------------------------------------------------------------ */
  /* Building blocks                                                     */
  /* ------------------------------------------------------------------ */

  function icon(name, size) {
    size = size || 16;
    return '<img class="icon" src="assets/' + name + '.svg" width="' + size + '" height="' + size + '" alt="">';
  }

  function renderBlock(b) {
    if (b.type === 'p') return '<p>' + b.html + '</p>';
    if (b.type === 'ul') {
      return '<ul>' + b.items.map(function (t) {
        return '<li><span class="marker">\u2022</span><span class="li-text">' + t + '</span></li>';
      }).join('') + '</ul>';
    }
    if (b.type === 'ol') {
      return '<ol>' + b.items.map(function (t, i) {
        return '<li><span class="marker">' + (i + 1) + '.</span><span class="li-text">' + t + '</span></li>';
      }).join('') + '</ol>';
    }
    if (b.type === 'img') {
      var ratio = b.w + ' / ' + b.h;
      var style = 'aspect-ratio:' + ratio + ';width:calc(var(--img-max-h) * ' + b.w + ' / ' + b.h + ')';
      return '<figure class="rt-img' + (b.tone ? ' ' + b.tone : '') + '" style="' + style + '">' +
        icon(b.tone === 'purple' ? 'image-purple' : 'image', 24) +
        '<figcaption class="cap">' + b.name + '  \u00b7  ' + b.w + ' \u00d7 ' + b.h + '</figcaption></figure>';
    }
    return '';
  }

  function richText(blocks) {
    return '<div class="richtext">' + blocks.map(renderBlock).join('') + '</div>';
  }

  function crumb(text) {
    return '<div class="crumb"><span class="dot"></span><span>' + text + '</span></div>';
  }

  function titleBlock(title, sub, extraCls) {
    return '<div class="title-block' + (extraCls ? ' ' + extraCls : '') + '"><h1>' + title + '</h1><p class="subtitle">' + sub + '</p></div>';
  }

  function keyFacts() {
    return '<div class="facts"><div class="facts-q"><span class="facts-n">' + SURVEY.questions +
      '</span><span class="facts-l">questions</span></div><p class="facts-a">Available ' + SURVEY.dates + '</p></div>';
  }

  function startButton(extraCls) {
    return '<button type="button" class="btn-primary' + (extraCls ? ' ' + extraCls : '') + '" data-go="section/1">' +
      icon('rocket') + '<span>Start Survey</span></button>';
  }

  function continueButton(target, extraCls) {
    return '<button type="button" class="btn-primary' + (extraCls ? ' ' + extraCls : '') + '" data-go="' + target + '">' +
      '<span>Continue</span>' + icon('chevron-right') + '</button>';
  }

  function instructions(blocks) {
    return '<section class="instructions"><div class="ins-head"><span class="ins-badge">' + icon('file-text') +
      '</span><span>Instructions</span></div>' + richText(blocks) + '</section>';
  }

  function notes() {
    return '<section class="notes">' + SURVEY.notes.map(function (n) {
      return '<div class="note"><div class="note-head">' + icon(n.icon) + '<span>' + n.title +
        '</span></div><p class="note-body">' + n.body + '</p></div>';
    }).join('') + '</section>';
  }

  function stepper(active) {
    return '<div class="stepper" role="list" aria-label="Survey sections">' + SECTIONS.map(function (s) {
      var state = s.n < active ? ' done' : s.n === active ? ' active' : '';
      return '<div class="step' + state + '" role="listitem"' + (s.n === active ? ' aria-current="step"' : '') + '>' +
        (s.n > 1 ? '<span class="step-line"></span>' : '') +
        '<span class="step-dot">' + s.n + '<span class="step-label">Section ' + s.n + '</span></span></div>';
    }).join('') + '</div>';
  }

  function twoColumns(summary, details) {
    var cols = summary + '<div class="vdivider"></div>' + details;
    return VERSION === 'd'
      ? '<main class="content"><div class="card">' + cols + '</div></main>'
      : '<main class="content"><div class="two-col">' + cols + '</div></main>';
  }

  /* ------------------------------------------------------------------ */
  /* Screens                                                             */
  /* ------------------------------------------------------------------ */

  function introEmpty() {
    return '<main class="content content-empty"><div class="empty-card">' +
      '<div class="empty-head">' + crumb(SURVEY.course) + titleBlock(SURVEY.title, SURVEY.subtitle, 'title-block-sm') + '</div>' +
      '<div class="facts-card">' +
        '<div class="facts-row"><span class="facts-k">' + icon('square-check') + '<span>Questions</span></span><span class="facts-v">' + SURVEY.questions + '</span></div>' +
        '<div class="facts-line"></div>' +
        '<div class="facts-row"><span class="facts-k">' + icon('bell') + '<span>Available</span></span><span class="facts-v">' + SURVEY.dates + '</span></div>' +
      '</div>' +
      '<div class="note-cards">' + SURVEY.notes.map(function (n) {
        return '<div class="note-card"><div class="note-head">' + icon(n.icon) + '<span>' + n.title +
          '</span></div><p class="note-body">' + n.body + '</p></div>';
      }).join('') + '</div>' +
      startButton('btn-wide') +
    '</div></main>';
  }

  function introFilled(blocks) {
    if (VERSION === 'c') {
      return '<main class="content"><div class="column">' +
        crumb(SURVEY.course) + titleBlock(SURVEY.title, SURVEY.subtitle) + keyFacts() +
        '<hr class="hdivider">' + instructions(blocks) + '<hr class="hdivider">' + notes() +
      '</div></main>' + startButton('floating-cta');
    }
    var summary = '<aside class="summary">' + crumb(SURVEY.course) + titleBlock(SURVEY.title, SURVEY.subtitle) + keyFacts() +
      '<div class="cta">' + startButton() + '<p class="cta-hint">' + SURVEY.ctaHint + '</p></div></aside>';
    var details = '<div class="details">' + instructions(blocks) + '<hr class="hdivider">' + notes() + '</div>';
    return twoColumns(summary, details);
  }

  function sectionIntro(s) {
    var next = s.n < SECTIONS.length ? 'section/' + (s.n + 1) : 'end';
    if (VERSION === 'c') {
      return '<main class="content"><div class="column">' +
        crumb(SURVEY.title) + titleBlock(s.title, s.count) +
        '<div class="stepper-wrap">' + stepper(s.n) + '</div>' +
        '<hr class="hdivider">' + instructions(s.blocks) +
      '</div></main>' + continueButton(next, 'floating-cta');
    }
    var summary = '<aside class="summary">' + crumb(SURVEY.title) + titleBlock(s.title, s.count) + stepper(s.n) +
      '<div class="cta">' + continueButton(next) + '</div></aside>';
    var details = '<div class="details">' + instructions(s.blocks) + '</div>';
    return twoColumns(summary, details);
  }

  function endScreen() {
    return '<main class="content"><div class="end-card">' +
      '<h1>End of prototype</h1>' +
      '<p>In the product, \u201cContinue\u201d opens the questions of each section. Questions are out of scope for this prototype, so the flow stops here.</p>' +
      '<div class="end-actions"><button type="button" class="btn-primary" data-go="intro">' + icon('rocket') + '<span>Back to intro</span></button></div>' +
    '</div></main>';
  }

  /* ------------------------------------------------------------------ */
  /* Router                                                              */
  /* ------------------------------------------------------------------ */

  var state = { content: 'text' };

  function parseHash() {
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/');
    var screen = parts[0];
    var arg = parts[1];
    if (screen === 'section') {
      var n = parseInt(arg, 10);
      if (!(n >= 1 && n <= SECTIONS.length)) n = 1;
      return { screen: 'section', n: n };
    }
    if (screen === 'end') return { screen: 'end' };
    var content = (arg === 'empty' || arg === 'text' || arg === 'long') ? arg : state.content;
    return { screen: 'intro', content: content };
  }

  function go(target) {
    if (target === 'intro') target = 'intro/' + state.content;
    var next = '#' + target;
    if (location.hash === next) render();
    else location.hash = next;
  }

  function render() {
    var route = parseHash();
    var html;
    if (route.screen === 'intro') {
      state.content = route.content;
      html = route.content === 'empty' ? introEmpty() : introFilled(INTRO_CONTENT[route.content]);
      document.body.dataset.screen = route.content === 'empty' ? 'empty' : 'intro';
      document.title = 'Survey Intro \u00b7 Ver. ' + VERSION.toUpperCase() + ' \u00b7 ' + route.content;
    } else if (route.screen === 'section') {
      var s = SECTIONS[route.n - 1];
      html = sectionIntro(s);
      document.body.dataset.screen = 'section';
      document.title = 'Section ' + s.n + ' Intro \u00b7 Ver. ' + VERSION.toUpperCase();
    } else {
      html = endScreen();
      document.body.dataset.screen = 'end';
      document.title = 'End \u00b7 Ver. ' + VERSION.toUpperCase();
    }
    app.innerHTML = html;
    window.scrollTo(0, 0);
    updatePanel(route);
  }

  /* ------------------------------------------------------------------ */
  /* Prototype switcher panel                                            */
  /* ------------------------------------------------------------------ */

  var PANEL_KEY = 'survey-proto-panel-open';
  var panel, toggle;

  function seg(items, attr, current) {
    return '<div class="pp-seg">' + items.map(function (it) {
      var on = it.value === current ? ' is-on' : '';
      if (attr === 'href') return '<a class="' + on.trim() + '" href="' + it.href + '">' + it.label + '</a>';
      return '<button type="button" class="' + on.trim() + '" ' + attr + '="' + it.value + '">' + it.label + '</button>';
    }).join('') + '</div>';
  }

  function setPanelOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) localStorage.setItem(PANEL_KEY, '1');
    else localStorage.removeItem(PANEL_KEY);
  }

  function buildPanel() {
    panel = document.createElement('div');
    panel.className = 'proto-panel';
    panel.setAttribute('aria-label', 'Prototype controls');
    document.body.appendChild(panel);

    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'proto-toggle';
    toggle.setAttribute('aria-controls', 'proto-panel');
    panel.id = 'proto-panel';
    var slot = document.getElementById('proto-slot') || document.body;
    slot.appendChild(toggle);

    toggle.addEventListener('click', function () {
      setPanelOpen(panel.hidden);
    });

    panel.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t) return;
      if (t.classList.contains('pp-hide')) {
        setPanelOpen(false);
      } else if (t.dataset.content) {
        go('intro/' + t.dataset.content);
      } else if (t.dataset.go) {
        go(t.dataset.go);
      }
    });

    setPanelOpen(localStorage.getItem(PANEL_KEY) === '1');
  }

  function updatePanel(route) {
    var detail = route.screen === 'intro'
      ? 'Intro \u00b7 ' + route.content
      : route.screen === 'section' ? 'Section ' + route.n : 'End';
    toggle.innerHTML = '<span>Prototype</span><span class="toggle-detail">\u00b7 Ver. ' + VERSION.toUpperCase() +
      ' \u00b7 ' + detail + '</span><span class="chev" aria-hidden="true">\u25be</span>';

    var hash = location.hash || '#intro/' + state.content;
    var versions = ['b', 'c', 'd'].map(function (v) {
      return { value: v, label: 'Ver. ' + v.toUpperCase(), href: v + '.html' + hash };
    });
    var contents = [
      { value: 'empty', label: 'Empty' },
      { value: 'text', label: 'Text' },
      { value: 'long', label: 'Long' }
    ];
    var screens = [{ value: 'intro', label: 'Intro' }].concat(SECTIONS.map(function (s) {
      return { value: 'section/' + s.n, label: 'S' + s.n };
    }));
    var currentScreen = route.screen === 'intro' ? 'intro' : route.screen === 'section' ? 'section/' + route.n : '';
    panel.innerHTML =
      '<div class="pp-head"><span>Prototype controls</span><button type="button" class="pp-hide" aria-label="Close controls">\u00d7</button></div>' +
      '<div class="pp-row"><span class="pp-label">Layout</span>' + seg(versions, 'href', VERSION) + '</div>' +
      '<div class="pp-row"><span class="pp-label">Intro</span>' + seg(contents, 'data-content', route.screen === 'intro' ? route.content : state.content) + '</div>' +
      '<div class="pp-row"><span class="pp-label">Screen</span>' + seg(screens, 'data-go', currentScreen) + '</div>' +
      '<a class="pp-index" href="index.html">\u2190 All proposals</a>';
  }

  /* ------------------------------------------------------------------ */
  /* Wire up                                                             */
  /* ------------------------------------------------------------------ */

  app.addEventListener('click', function (e) {
    var noop = e.target.closest('a[data-noop]');
    if (noop) { e.preventDefault(); return; }
    var btn = e.target.closest('[data-go]');
    if (btn) go(btn.dataset.go);
  });

  window.addEventListener('hashchange', render);

  buildPanel();
  render();
})();
