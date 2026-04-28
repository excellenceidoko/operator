// ============================================
// THE OPERATOR MIRROR — SCORING ENGINE
// ============================================

// Option scores: A=10, B=7, C=4, D=1
const OPTION_SCORES = [10, 7, 4, 1];

// Score bar colors based on score
function getScoreColor(score) {
  if (score >= 80) return '#c9a84c';       // Gold — operator aligned
  if (score >= 60) return '#8a9e6b';       // Green — developing
  if (score >= 40) return '#c49a3a';       // Amber — needs work
  return '#8b4040';                         // Red — critical gap
}

// Tier definitions
const TIERS = [
  {
    min: 85, max: 100,
    name: "The Architect",
    desc: "Your thinking patterns are already aligned with a high-leverage, multi-market operator. The gap between your identity and your outcomes is closing. The primary work now is execution at scale and eliminating the last pockets of inconsistency."
  },
  {
    min: 70, max: 84,
    name: "The Operator in Formation",
    desc: "You think well and you know it. The architecture exists — but there are structural cracks that compound under pressure. Your biggest threat is not external. It's the gap between what you know and what you consistently do."
  },
  {
    min: 55, max: 69,
    name: "The Aware Builder",
    desc: "You're conscious of the gap and you're moving. But awareness without system is just sophisticated suffering. You need to convert your self-knowledge into operational architecture — specific rules, rituals, and constraints that make the right behavior your default."
  },
  {
    min: 40, max: 54,
    name: "The Emerging Operator",
    desc: "You're at the beginning of a serious recalibration. The patterns are mixed — bright thinking in some areas, significant blind spots in others. This is not a failure. This is the map. The work starts with the categories where your score is lowest."
  },
  {
    min: 0, max: 39,
    name: "The Unexamined Operator",
    desc: "Your current operating system was built by default — by environment, circumstance, and inherited beliefs. It is not serving your ambition. The good news: you now have the diagnostic. This report is the starting point. Everything changes from here — if you act."
  }
];

// Category-specific insights based on score ranges
const CAT_INSIGHTS = {
  0: { // Body
    high: "You treat your body as a capital asset. This is rare. Most operators discover this too late, after burnout has already taxed their decision quality.",
    mid: "You understand the principle but application is inconsistent. Start with one non-negotiable: sleep or exercise, whichever you can protect more reliably.",
    low: "Your body is being run on debt. The cognitive tax is invisible until it compounds into a crisis. This is your most urgent recalibration."
  },
  1: { // Money
    high: "Your money logic is operator-grade. You see money as a tool and deploy it accordingly. The next level is compounding this discipline across more asset classes.",
    mid: "You think about money well in theory. The gap is between your stated philosophy and your actual allocation behavior.",
    low: "Your relationship with money is still emotional, not strategic. This is the root system. Until it's recalibrated, everything built on top of it is unstable."
  },
  2: { // Opportunity
    high: "You read environments like markets. This pattern recognition is one of the most compoundable cognitive skills available — keep training it.",
    mid: "You see opportunities but the conversion rate from recognition to action is too low. The bottleneck is usually decisiveness, not awareness.",
    low: "Opportunity is everywhere in your environment — but your filter is set too narrow or too passive. Train yourself to ask 'what's the business model here?' in every situation."
  },
  3: { // Risk
    high: "You've mastered the asymmetric risk equation. Most people can't hold calculated risk without flinching. You can. This is a significant competitive advantage.",
    mid: "You understand risk intellectually but emotional responses still override your framework under pressure. The work is building behavioral risk tolerance through progressive exposure.",
    low: "Your risk architecture is either too conservative or undifferentiated — you treat all risk the same. Begin distinguishing between ego-protection and capital-protection."
  },
  4: { // Time
    high: "Your time architecture is a weapon. You know that time sovereignty is the foundation of all other leverage. Protect it at increasing cost.",
    mid: "You have the right instincts about time but execution is leaking. Build a weekly review practice to close the gap between your ideal structure and your actual one.",
    low: "Your time is currently managed by other people's urgencies. Until you restructure this, you are renting your own capacity to others at a discount."
  },
  5: { // Identity
    high: "Your self-perception is accurate and forward-facing. You're not waiting to feel ready — you're acting from the identity you're becoming. This is the engine of self-fulfilling momentum.",
    mid: "You know who you're becoming but there's a performance layer still up — an identity from your past that you're still running for an audience that no longer needs to be impressed.",
    low: "There is significant distance between what you say you value and what your behavior reveals. This is not a character flaw — it's a targeting problem. Your internal image needs recalibration."
  },
  6: { // Opposite Sex
    high: "You've integrated romantic life into your operating architecture rather than letting it run as an unmanaged variable. This is mature and rare.",
    mid: "There's still some porosity between your emotional life and your operational performance. This isn't about coldness — it's about building cleaner containers for each.",
    low: "Romantic energy is currently running as an unmanaged variable in your system. It's consuming bandwidth you need elsewhere. This requires honest architecture, not suppression."
  },
  7: { // Family
    high: "You've built clear, compassionate architecture around family obligations. You love them and you protect your mission. This balance is hard and you're holding it.",
    mid: "You're navigating a real tension without a clean system. Guilt and love are both expensive cognitive loads when they don't have structure. Build the policy so you don't renegotiate every case.",
    low: "Family dynamics are currently creating a ceiling on your ambition without either party being fully aware of it. Naming this clearly is the first and most important step."
  },
  8: { // Work-Life
    high: "You operate in seasons consciously. This is sophisticated — most operators don't find this clarity until they've burned out twice.",
    mid: "You understand seasons in principle but you're either always in 'on' mode or always in reaction mode. Define your current season explicitly and resource it accordingly.",
    low: "Your work and personal life are blurring in ways that degrade both. The solution is not balance — it's better containers and clearer transitions between modes."
  },
  9: { // Pleasure
    high: "You've domesticated pleasure — you enjoy it without letting it govern you. This is a high-leverage personality trait that compounds over decades.",
    mid: "You can delay gratification when the goal is crystal clear. The breakdown happens under uncertainty. Work on building discipline that functions independent of certainty.",
    low: "Instant gratification is currently taxing your capital — time, money, and focus. The pattern is unconscious until named. Name it. Build one friction point between the impulse and the action."
  },
  10: { // People
    high: "You've developed a genuine talent architecture. You see people as systems to design around, not just personalities to manage. This scales.",
    mid: "You delegate in theory but reclaim in practice. The bottleneck is trust architecture — which is a system problem, not a people problem. Build better context and handoff protocols.",
    low: "You're operating primarily as an individual rather than as a team builder. At some revenue and complexity level, this becomes the binding constraint. Start small: delegate one thing this week that makes you uncomfortable."
  },
  11: { // Leadership
    high: "You're building leaders, not just managing output. This is the multiplier that separates operators who plateau from those who build institutions.",
    mid: "Your leadership instincts are there but your brand is emergent rather than engineered. Define what you want to be known for and begin acting consistently with it.",
    low: "You're managing more than leading. The shift requires giving people context — the why — before the what. Start there. One conversation at a time."
  },
  12: { // Competitive Intelligence
    high: "You read markets the way a chess player reads the board — several moves ahead. This is one of the rarest and most valuable cognitive skills in business.",
    mid: "You have market awareness but it's passive. Build a weekly intelligence practice: one hour, specific sources, one forward-looking question. The habit compounds.",
    low: "You're operating without a clear picture of the competitive landscape or where the market is moving. This means you're always reacting. Build the intelligence habit before you need it urgently."
  },
  13: { // Philosophy
    high: "You have a fully operationalized inner framework. This is what keeps high performers consistent when conditions are adverse. It's rare and invaluable.",
    mid: "Your philosophical framework is forming. It shows up most clearly under pressure. Keep stress-testing it — that's how it becomes reliable architecture.",
    low: "Without a clear inner framework, your decisions are governed by mood, social pressure, and circumstance. The work here is not religious or academic — it's practical. Define your 3 non-negotiable principles."
  },
  14: { // Communication
    high: "You communicate strategically. You know what you want from every significant conversation before you enter it. This is a compoundable asset.",
    mid: "You communicate well but you're leaving value on the table — in negotiations, in persuasion, in listening. Invest in one specific communication skill this quarter.",
    low: "Communication is currently your ceiling. Revenue, partnerships, leadership — all of it flows through your ability to convey value and build trust through words. This is where to invest first."
  },
  15: { // Failure
    high: "You've built a resilience architecture from genuine experience. Failure is data for you, not identity. This is one of the most durable competitive advantages available.",
    mid: "You recover, but the process is not clean or fast. Build an explicit post-mortem protocol: what happened, what's the system fix, what's the first action. Do this within 72 hours of every significant setback.",
    low: "Failure is still identity-threatening for you. Until that changes, you'll unconsciously avoid the risks necessary for growth. The reframe: failure is the tuition fee for market knowledge that no course can provide."
  },
  16: { // Learning
    high: "Your learning system is a genuine asset. You convert knowledge into behavior change — which puts you in the top 5% of all learners. Most consume. You metabolize.",
    mid: "You learn broadly but apply narrowly. Begin rating every book, course, or piece of content by one metric: what will I do differently tomorrow? If the answer is nothing, deprioritize it.",
    low: "Your learning is passive and opportunistic. This means you're reactive to what the environment presents rather than building deliberately toward a target skill. Choose one high-leverage skill and build a 90-day development plan."
  },
  17: { // Legacy
    high: "You're building with the end in mind — not abstractly, but operationally. This long-time horizon gives your decisions a gravity that short-term thinkers can't access.",
    mid: "Legacy thinking is in your peripheral vision. Bring it to the center: write a one-page answer to 'What do I want to be true about my name?' and use it as a filter for your next major decision.",
    low: "You're building without a north star. Everything you build is technically on purpose, but without a legacy frame, you're optimizing for the wrong things. The clarity this question provides is worth more than any tactic."
  }
};

function generateReport(answers, userData) {
  const { name, age, gender, email } = userData;

  // Calculate category scores
  const catScores = new Array(18).fill(0);
  const catCounts = new Array(18).fill(0);

  answers.forEach((answerIdx, qIdx) => {
    const cat = QUESTIONS[qIdx].cat;
    catScores[cat] += OPTION_SCORES[answerIdx];
    catCounts[cat]++;
  });

  // Normalize to 0-100
  const normalizedScores = catScores.map((total, i) => {
    const maxPossible = catCounts[i] * 10;
    return Math.round((total / maxPossible) * 100);
  });

  const overallScore = Math.round(normalizedScores.reduce((a, b) => a + b, 0) / 18);

  // Find tier
  const tier = TIERS.find(t => overallScore >= t.min && overallScore <= t.max) || TIERS[TIERS.length - 1];

  // Find top 3 strengths and top 3 gaps
  const sortedByScore = normalizedScores
    .map((score, i) => ({ score, idx: i }))
    .sort((a, b) => b.score - a.score);

  const strengths = sortedByScore.slice(0, 3);
  const gaps = sortedByScore.slice(-3).reverse();

  // Build identity rules based on gap areas
  const allRules = [
    "I allocate before I spend.",
    "I treat my body like a business asset.",
    "I move on asymmetric risk before certainty arrives.",
    "I protect my prime hours from other people's urgencies.",
    "I build systems, not dependencies.",
    "I audit my relationships for strategic alignment.",
    "I lead with context, not just instructions.",
    "I extract the lesson before I exit the failure.",
    "I make my next decision from my target identity, not my current circumstances.",
    "I read markets, not just the news.",
    "I define my season before I allocate my energy.",
    "I delay gratification proportional to the size of the target.",
    "I know what I'm building for — and it is bigger than money.",
    "I communicate to create understanding, not to perform intelligence.",
    "My family receives my provision — not my strategy.",
    "I convert learning into behavior or it doesn't count.",
    "I attract my future by building it in the present.",
    "I engineer my reputation deliberately."
  ];

  // Select most relevant rules (top gaps + 3 random strengths reinforcement)
  const gapRules = gaps.map(g => allRules[g.idx]);
  const strengthRules = strengths.slice(0, 2).map(s => allRules[s.idx]);
  const selectedRules = [...new Set([...gapRules, ...strengthRules, allRules[0], allRules[8]])].slice(0, 8);

  // Build treatment protocol
  const protocol = buildProtocol(gaps, normalizedScores);

  return {
    name, age, gender, email,
    overallScore,
    tier,
    normalizedScores,
    strengths,
    gaps,
    selectedRules,
    protocol,
    date: new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })
  };
}

function buildProtocol(gaps, scores) {
  const protocols = [
    {
      // Body
      horizon: "This Week",
      title: "Physical Performance Audit",
      text: "Track your sleep, meals, and energy for 7 days. Identify your single biggest physical performance leak. Build one non-negotiable: protect 7 hours of sleep or 30 minutes of daily movement. Your decision quality depends on it."
    },
    {
      // Money
      horizon: "This Month",
      title: "Capital Allocation Overhaul",
      text: "Audit your last 30 days of spending. Classify each significant expenditure as: asset, liability, capability investment, or signaling. Redesign your allocation: a defined percentage to assets before anything else leaves your account."
    },
    {
      // Opportunity
      horizon: "This Week",
      title: "Opportunity Recognition Practice",
      text: "For the next 7 days, spend 10 minutes after every market interaction identifying one business opportunity. Write it down. This is a muscle. Train it until pattern recognition becomes automatic."
    },
    {
      // Risk
      horizon: "This Month",
      title: "Asymmetric Risk Activation",
      text: "Identify the one risk you've been avoiding that has outsized upside and a defined, survivable downside. Map the worst-case scenario in writing. If you can survive it, the calculus is already telling you to move."
    },
    {
      // Time
      horizon: "This Week",
      title: "Time Architecture Redesign",
      text: "Block your highest-leverage 2 hours as protected time — no meetings, no messages, no exceptions. This is your output block. Do this every day for 21 days. Your income is proportional to what happens in that block."
    },
    {
      // Identity
      horizon: "This Month",
      title: "Target Identity Protocol",
      text: "Write a one-page description of your target identity in present tense — what he does on a Tuesday, how he makes decisions, what he refuses, what he protects. Read it every morning for 30 days. Identity follows repetition."
    },
    {
      // Opposite Sex
      horizon: "This Quarter",
      title: "Relationship Architecture Review",
      text: "Map honestly how your romantic life currently affects your operational performance. Build two clear boundaries: protected work hours and an investment-grade partner criteria list. Attraction follows who you become."
    },
    {
      // Family
      horizon: "This Month",
      title: "Family Financial Policy",
      text: "Create a fixed family allocation — a specific amount you give monthly without negotiation or guilt. Communicate it once, clearly. Everything above that is a business decision, not an emotional one."
    },
    {
      // Work-Life
      horizon: "This Week",
      title: "Season Diagnosis & Resource Match",
      text: "Name your current season explicitly: is this a building season, a harvesting season, or a recovery season? Audit whether your current energy allocation matches the season. Misaligned seasons produce burnout."
    },
    {
      // Pleasure
      horizon: "This Month",
      title: "Gratification Audit & Reset",
      text: "Identify your top 3 instant gratification patterns. For each one, build a single friction point: delete the app, change the route, add a waiting period. You don't need willpower — you need better architecture."
    },
    {
      // People
      horizon: "This Quarter",
      title: "Talent & Delegation Architecture",
      text: "List everything you do that someone else could do at 80% of your quality. Pick one and delegate it this week with a written brief. Build the trust muscle through progressive, structured delegation."
    },
    {
      // Leadership
      horizon: "This Quarter",
      title: "Leadership Brand Engineering",
      text: "Define in one sentence what you want to be known for in your industry. Then audit your last 30 days of public behavior — content, conversations, decisions. Do they build that brand? Adjust and repeat."
    },
    {
      // Competitive
      horizon: "This Month",
      title: "Market Intelligence System",
      text: "Build a weekly 1-hour market intelligence practice. Three sources. One forward-looking question per week: 'What will be true in 3 years that isn't true today?' Write your answers. Review them quarterly."
    },
    {
      // Philosophy
      horizon: "This Month",
      title: "Core Principles Definition",
      text: "Write your 3 non-negotiable operating principles — values you will not trade for money, approval, or convenience. These are not aspirational. They are tested. If you haven't been tested on a principle, it doesn't count yet."
    },
    {
      // Communication
      horizon: "This Quarter",
      title: "Communication Skill Investment",
      text: "Identify your single biggest communication bottleneck — negotiation, persuasion, or listening. Invest 30 minutes a day for 90 days in deliberate practice. One book, one exercise, one real application per week."
    },
    {
      // Failure
      horizon: "This Week",
      title: "Post-Mortem Protocol Installation",
      text: "For every significant setback going forward: within 72 hours, write a 3-part post-mortem: What happened, what system failed, what is the one structural change. File it. Review it at month-end. Failure is the curriculum."
    },
    {
      // Learning
      horizon: "This Month",
      title: "Learning-to-Execution Pipeline",
      text: "For every book, course, or content piece consumed this month, extract one specific behavior change. No change = don't count the learning. You are not building a library. You are building a better operator."
    },
    {
      // Legacy
      horizon: "This Quarter",
      title: "North Star Document",
      text: "Write a one-page answer to: 'What do I want to be true about my name while I'm still alive?' Use it as a filter for your next 3 major decisions. When in doubt, ask: does this build the name I'm engineering?"
    }
  ];

  return gaps.map(g => protocols[g.idx]);
}
