// ============================================
// THE OPERATOR MIRROR — QUIZ CONTROLLER
// ============================================

let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let reportData = null;

function startQuiz() {
  showScreen('screen-quiz');
  renderQuestion(0);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).style.display = 'flex';
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function renderQuestion(idx) {
  currentQ = idx;
  const q = QUESTIONS[idx];
  const total = QUESTIONS.length;
  const letters = ['A', 'B', 'C', 'D'];

  // Header info
  document.getElementById('q-counter').textContent = `${idx + 1} / ${total}`;
  document.getElementById('category-label').textContent = CATEGORIES[q.cat];
  document.getElementById('category-chip').textContent =
    `${String(q.cat + 1).padStart(2, '0')} — ${CATEGORIES[q.cat].toUpperCase()}`;

  // Progress bar
  const pct = ((idx) / total) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  // Question text
  document.getElementById('question-text').textContent = q.q;

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[idx] === i ? ' selected' : '');
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt}</span>`;
    btn.onclick = () => selectOption(i);
    grid.appendChild(btn);
  });

  // Nav buttons
  document.getElementById('btn-back').disabled = idx === 0;
  updateNextBtn();
}

function selectOption(optIdx) {
  answers[currentQ] = optIdx;

  // Update UI
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optIdx);
  });

  updateNextBtn();

  // Auto-advance after brief delay on desktop
  setTimeout(() => {
    if (currentQ < QUESTIONS.length - 1) {
      nextQuestion();
    } else {
      goToCapture();
    }
  }, 420);
}

function updateNextBtn() {
  const btn = document.getElementById('btn-next');
  const answered = answers[currentQ] !== null;
  btn.disabled = !answered;

  const isLast = currentQ === QUESTIONS.length - 1;
  btn.textContent = isLast ? 'Finish →' : 'Next →';
}

function nextQuestion() {
  if (answers[currentQ] === null) return;
  if (currentQ < QUESTIONS.length - 1) {
    renderQuestion(currentQ + 1);
  } else {
    goToCapture();
  }
}

function prevQuestion() {
  if (currentQ > 0) renderQuestion(currentQ - 1);
}

function goToCapture() {
  showScreen('screen-capture');
}

function generateReport() {
  const name = document.getElementById('f-name').value.trim();
  const age = document.getElementById('f-age').value.trim();
  const gender = document.getElementById('f-gender').value;
  const email = document.getElementById('f-email').value.trim();

  if (!name || !age || !gender || !email) {
    alert('Please fill in all fields to receive your report.');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  const unanswered = answers.findIndex(a => a === null);
  if (unanswered !== -1) {
    alert(`Question ${unanswered + 1} was not answered. Please complete the assessment.`);
    showScreen('screen-quiz');
    renderQuestion(unanswered);
    return;
  }

  document.getElementById('sending-overlay').classList.remove('hidden');

  const userData = { name, age, gender, email };
  reportData = generateReport(answers, userData);

  setTimeout(() => {
    document.getElementById('sending-overlay').classList.add('hidden');
    renderReportScreen(reportData);
    // Send email in background
    if (typeof sendReportEmail === 'function') {
      sendReportEmail(reportData);
    }
  }, 2200);
}

function renderReportScreen(data) {
  showScreen('screen-report');

  document.getElementById('report-meta').textContent =
    `${data.name} · ${data.age} yrs · ${data.gender} · ${data.date}`;

  const body = document.getElementById('report-body');
  body.innerHTML = buildReportHTML(data);
}

function buildReportHTML(data) {
  const { name, overallScore, tier, normalizedScores, strengths, gaps, selectedRules, protocol } = data;
  const letters = ['A', 'B', 'C', 'D'];

  // Category score cards
  const catCards = normalizedScores.map((score, i) => {
    const color = getScoreColor(score);
    const insightKey = score >= 70 ? 'high' : score >= 45 ? 'mid' : 'low';
    return `
      <div class="cat-card">
        <div class="cat-name">${String(i + 1).padStart(2, '0')} · ${CATEGORIES[i]}</div>
        <div class="cat-bar-wrap">
          <div class="cat-bar-fill" style="width:${score}%; background:${color};"></div>
        </div>
        <div class="cat-score-num" style="color:${color};">${score}<span style="font-size:1rem;color:var(--cream-dim);">/100</span></div>
      </div>
    `;
  }).join('');

  // Strengths
  const strengthItems = strengths.map(s => {
    const insight = CAT_INSIGHTS[s.idx];
    return `
      <div class="insight-item">
        <div class="insight-icon">◆</div>
        <div class="insight-content">
          <div class="insight-title">${CATEGORIES[s.idx]} · ${s.score}/100</div>
          <div class="insight-text">${insight ? insight.high : 'This dimension reflects strong operator alignment.'}</div>
        </div>
      </div>
    `;
  }).join('');

  // Gaps
  const gapItems = gaps.map(g => {
    const insightKey = g.score >= 45 ? 'mid' : 'low';
    const insight = CAT_INSIGHTS[g.idx];
    return `
      <div class="insight-item" style="border-left: 3px solid #8b4040;">
        <div class="insight-icon">▲</div>
        <div class="insight-content">
          <div class="insight-title" style="color:#c07070;">${CATEGORIES[g.idx]} · ${g.score}/100</div>
          <div class="insight-text">${insight ? insight[insightKey] : 'This is a critical gap in your operator architecture.'}</div>
        </div>
      </div>
    `;
  }).join('');

  // Protocol
  const protocolItems = protocol.map((p, i) => `
    <div class="protocol-item">
      <div class="protocol-num">0${i + 1}</div>
      <div class="protocol-content">
        <div class="protocol-horizon">${p.horizon}</div>
        <div class="protocol-title">${p.title}</div>
        <div class="protocol-text">${p.text}</div>
      </div>
    </div>
  `).join('');

  // Identity rules
  const rulesHTML = selectedRules.map(r => `
    <div class="rule-card">
      <div class="rule-mark">◈</div>
      <div class="rule-text">${r}</div>
    </div>
  `).join('');

  return `
    <div class="report-name-block">
      <div class="report-greeting">OPERATOR MIRROR DIAGNOSTIC REPORT</div>
      <h2 class="report-name">${name}</h2>
    </div>

    <div class="score-hero">
      <div class="score-big">
        <div class="score-number">${overallScore}</div>
        <div class="score-label">Overall Alignment Score</div>
      </div>
      <div class="score-tier">
        <div class="tier-name">${tier.name}</div>
        <div class="tier-desc">${tier.desc}</div>
      </div>
    </div>

    <div class="section-block">
      <div class="section-title">18-Dimension Breakdown</div>
      <div class="cat-grid">${catCards}</div>
    </div>

    <div class="section-block">
      <div class="section-title">Identity Strengths — Your Highest-Aligned Dimensions</div>
      <div class="insight-list">${strengthItems}</div>
    </div>

    <div class="section-block">
      <div class="section-title">Critical Gaps — Where Your Current Self Diverges Most</div>
      <div class="insight-list">${gapItems}</div>
    </div>

    <div class="section-block">
      <div class="section-title">Treatment Protocol — Precision Interventions</div>
      <div class="protocol-list">${protocolItems}</div>
    </div>

    <div class="section-block">
      <div class="section-title">Your Operator Identity Rules</div>
      <div class="rules-grid">${rulesHTML}</div>
    </div>

    <div class="section-block" style="padding: 2rem; background: rgba(201,168,76,0.04); border: 1px solid rgba(201,168,76,0.15); text-align:center;">
      <div class="section-title" style="text-align:center; border:none; margin-bottom: 0.75rem;">Accountability Checkpoint</div>
      <p style="font-size:0.9rem; color:var(--cream-dim); line-height:1.8; max-width:600px; margin: 0 auto;">
        Return to this assessment in <strong style="color:var(--gold);">30 days.</strong> After executing your treatment protocol, your scores in <em>${gaps.map(g => CATEGORIES[g.idx]).join(', ')}</em> should shift measurably. Identity change is visible in behavior before it is visible in outcomes. Track the behavior.
      </p>
    </div>
  `;
}

function resetQuiz() {
  currentQ = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  reportData = null;
  document.getElementById('f-name').value = '';
  document.getElementById('f-age').value = '';
  document.getElementById('f-gender').value = '';
  document.getElementById('f-email').value = '';
  showScreen('screen-intro');
}
