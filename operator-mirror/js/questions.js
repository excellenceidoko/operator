// ============================================
// THE OPERATOR MIRROR — QUESTION BANK
// 90 Questions × 18 Categories × 4 Options
// Scoring: A=10, B=7, C=4, D=1
// ============================================

const CATEGORIES = [
  "Body & Physical Sovereignty",
  "Money Decision Logic",
  "Opportunity Recognition",
  "Risk & Control",
  "Time & Priority Structure",
  "Self-Perception & Identity",
  "Attitude Toward the Opposite Sex",
  "Family Dynamics & Generational Architecture",
  "Work-Life Harmony & Seasonal Thinking",
  "Pleasure, Reward & Delayed Gratification",
  "People Management & Talent Architecture",
  "Leadership & Influence Architecture",
  "Competitive Intelligence & Market Reading",
  "Spiritual & Philosophical Framework",
  "Communication, Negotiation & Persuasion",
  "Failure, Resilience & Loss Architecture",
  "Learning & Knowledge Systems",
  "Legacy & Generational Thinking"
];

const QUESTIONS = [

  // ── CATEGORY 1: BODY & PHYSICAL SOVEREIGNTY ──
  {
    cat: 0,
    q: "You consistently sleep less than 6 hours because of 'how much you have to do.' How do you view this?",
    opts: [
      "It's a temporary season — but I track the cognitive cost and force recovery periods.",
      "It's not ideal, but the grind demands it. I'll sleep when I've made it.",
      "I don't really think about it. I just push through.",
      "I'm used to it. My body has adjusted."
    ]
  },
  {
    cat: 0,
    q: "If your physical energy directly determined your annual revenue, which describes your current body management?",
    opts: [
      "I treat my body like a primary asset — sleep, nutrition, and exercise are non-negotiable.",
      "I try, but life gets in the way. I'm inconsistent.",
      "I exercise sometimes and eat whatever is available.",
      "I haven't connected my physical state to my performance output."
    ]
  },
  {
    cat: 0,
    q: "You have a critical meeting or decision at 3pm. You had poor sleep and skipped lunch. What do you do?",
    opts: [
      "I reschedule or delay the decision. Impaired judgment is a liability I can't afford.",
      "I push through — this is what separates serious operators from amateurs.",
      "I drink coffee and hope for the best.",
      "I just show up. It will probably be fine."
    ]
  },
  {
    cat: 0,
    q: "Which statement best reflects your relationship with vices (alcohol, junk food, tobacco, late-night scrolling)?",
    opts: [
      "I'm deliberate about them. I enjoy some, but I've quantified what they cost me operationally.",
      "I know they slow me down, but I haven't built a system to address them yet.",
      "I don't really think of them as vices — they're just how I decompress.",
      "I indulge freely. You only live once."
    ]
  },
  {
    cat: 0,
    q: "A man who controls markets must first control himself. How would you rate your current self-mastery over your physical habits?",
    opts: [
      "High — I have clear systems and I enforce them even under pressure.",
      "Moderate — I know what I should do and follow through about half the time.",
      "Low — I know the theory but my execution is inconsistent at best.",
      "I haven't really thought about physical habits as part of my success architecture."
    ]
  },

  // ── CATEGORY 2: MONEY DECISION LOGIC ──
  {
    cat: 1,
    q: "You receive ₦500,000 unexpectedly. What is your first instinct in the next 72 hours?",
    opts: [
      "Allocate immediately: a portion to a productive asset, a portion to a business experiment, a portion to a buffer.",
      "Save most of it and figure out the best use over time.",
      "Clear a pressing obligation or debt, then save the rest.",
      "Celebrate. Spend some. Deal with the rest later."
    ]
  },
  {
    cat: 1,
    q: "A business promises ₦5M in 6 months requiring full effort. Another guarantees ₦1M in 30 days with low effort. Which do you choose?",
    opts: [
      "Depends entirely on scalability — I'm thinking about what each path positions me for at month 7.",
      "₦5M in 6 months. I always choose the bigger prize if I believe the opportunity.",
      "₦1M in 30 days. Certain money now beats uncertain money later.",
      "I'd probably take the easier option. Less stress, guaranteed income."
    ]
  },
  {
    cat: 1,
    q: "Which statement best reflects how you think about money?",
    opts: [
      "Money is oxygen for the mission — not the destination, but what keeps the engine running.",
      "Money is freedom. The more I have, the more choices I have.",
      "Money is security. My goal is to have enough to feel safe.",
      "Money is a reward — evidence that I've worked hard."
    ]
  },
  {
    cat: 1,
    q: "Review your last 5 significant purchases. How would you honestly classify most of them?",
    opts: [
      "Assets or direct investments in my capability and positioning.",
      "A mix — some necessary, some were probably social signaling.",
      "Mostly necessities, with some indulgences I don't regret.",
      "I'm not sure — I don't track spending with that level of analysis."
    ]
  },
  {
    cat: 1,
    q: "What is your current philosophy on using debt as a tool?",
    opts: [
      "I use good debt strategically when the asset or return significantly outweighs the cost.",
      "I avoid debt where possible, but I understand it can be useful in the right context.",
      "I fear debt and try to stay debt-free at all times.",
      "Debt is just part of life — I use it when I need things I can't yet afford."
    ]
  },

  // ── CATEGORY 3: OPPORTUNITY RECOGNITION ──
  {
    cat: 2,
    q: "You walk through a busy but chaotic Alaba market or Balogun. What is your honest response?",
    opts: [
      "I immediately start reading inefficiencies — logistics, pricing arbitrage, information gaps, digitization opportunities.",
      "I see a busy place. I'd probably notice one or two business ideas if I thought hard about it.",
      "It's overwhelming. I focus on what I came for.",
      "I see hustle and chaos. Not my environment."
    ]
  },
  {
    cat: 2,
    q: "You meet someone with 50,000 Instagram followers, no monetization, and confused content. What do you see?",
    opts: [
      "An undervalued distribution asset. I'm thinking about three monetization paths before the conversation ends.",
      "A person with potential who just needs the right advice.",
      "Someone popular online who hasn't figured out the business side yet.",
      "Nothing particularly useful. Followers aren't money."
    ]
  },
  {
    cat: 2,
    q: "What is the most undervalued asset in your current environment — and what prevents you from monetizing it?",
    opts: [
      "I've identified it and I'm actively working on converting it. The gap is execution speed.",
      "I can identify it but haven't built the system to monetize it yet.",
      "I think about it sometimes but I'm not sure how to approach it.",
      "I haven't really analyzed my immediate environment for hidden value."
    ]
  },
  {
    cat: 2,
    q: "A struggling business owner tells you his sales are down. What is your FIRST analysis instinct?",
    opts: [
      "Offer-Market fit, distribution channels, and whether the problem is acquisition or retention.",
      "I'd ask about his pricing and marketing strategy.",
      "I'd suggest he work harder on promoting the business.",
      "I'd feel sympathetic and tell him to keep going."
    ]
  },
  {
    cat: 2,
    q: "In the last 3 months, an opportunity passed through your hands that you didn't act on. What was the real reason?",
    opts: [
      "I made a conscious decision it didn't fit my current positioning or resource capacity.",
      "I wanted to but lacked a key resource — capital, a partner, or a specific skill.",
      "I overthought it until the window closed.",
      "Fear of failure or looking foolish held me back."
    ]
  },

  // ── CATEGORY 4: RISK & CONTROL ──
  {
    cat: 3,
    q: "How do you distinguish between reckless risk and calculated asymmetric risk in your decision-making?",
    opts: [
      "Reckless risk is ego-driven with no defined downside. Asymmetric risk has a small defined loss with outsized upside. I actively hunt the latter.",
      "I understand the distinction intellectually but I struggle to apply it consistently.",
      "I generally just avoid risk. Both feel dangerous to me.",
      "I don't really distinguish between them. Risk is risk."
    ]
  },
  {
    cat: 3,
    q: "There is a risk you KNOW you should take but have been avoiding. Which best describes why?",
    opts: [
      "I've mapped the downside clearly. I'm building toward it strategically — timing matters.",
      "The fear is real. I'm working on my risk tolerance.",
      "I'm waiting for the right conditions. It's not the right moment yet.",
      "Honestly, I'm afraid of failing in front of people who know me."
    ]
  },
  {
    cat: 3,
    q: "Would you rather own 100% of a ₦10M business or 15% of a ₦500M business?",
    opts: [
      "15% of ₦500M, always. I think in portfolio and positioning, not ownership purity.",
      "Depends on control, exit rights, and what the 85% holder can do without me.",
      "100% of ₦10M. I want full control of what I've built.",
      "100% of ₦10M. I don't trust partners."
    ]
  },
  {
    cat: 3,
    q: "How concentrated is your current income and asset risk?",
    opts: [
      "I'm actively diversifying — multiple streams, multiple markets, multiple asset classes.",
      "Mostly one stream, but I'm building toward diversification.",
      "One primary income source. I haven't thought seriously about diversification yet.",
      "All concentrated. I'm focused on making one thing work first."
    ]
  },
  {
    cat: 3,
    q: "At what point does caution become cowardice in your decision-making — and have you crossed that line recently?",
    opts: [
      "Caution becomes cowardice when the evidence supports action but I'm waiting for certainty that will never come. Yes, I've caught myself there.",
      "I think I'm generally appropriately cautious, not cowardly.",
      "I'm not sure where the line is. Both feel like prudence to me.",
      "I don't think I've been cowardly. I just wait until I'm ready."
    ]
  },

  // ── CATEGORY 5: TIME & PRIORITY STRUCTURE ──
  {
    cat: 4,
    q: "What percentage of your last 7 days genuinely moved you toward your 5-year target?",
    opts: [
      "60–80%. Most of my time is deliberately allocated. I track it.",
      "30–50%. I have good days and drift days.",
      "Less than 30%. Too much maintenance, reaction, and distraction.",
      "I haven't mapped my 5-year target clearly enough to measure against it."
    ]
  },
  {
    cat: 4,
    q: "What is the single highest-leverage activity available to you right now that you consistently deprioritize?",
    opts: [
      "I know exactly what it is and I protect time for it. It's the first thing I do.",
      "I know what it is but it keeps getting pushed by urgent but less important tasks.",
      "I think I know, but I'm not fully certain it's the highest leverage thing.",
      "I haven't identified it clearly yet."
    ]
  },
  {
    cat: 4,
    q: "If your income for the next 90 days depended entirely on output — no salary, no retainer — how would your daily structure change?",
    opts: [
      "Honestly, not much. My current structure is already output-focused.",
      "Significantly. I'd eliminate most meetings, cut social time, and focus only on revenue-generating activities.",
      "Dramatically. I'd be lost. I'm not currently structured for pure output.",
      "I'd be paralyzed. I rely on showing up more than on clear productive output."
    ]
  },
  {
    cat: 4,
    q: "What recurring obligation in your life is consuming time disproportionate to its value?",
    opts: [
      "I've identified it and I'm actively exiting or delegating it.",
      "I know what it is but exiting it has social or relational costs I haven't resolved.",
      "I haven't formally identified it, but I feel the drag.",
      "I think everything I do is necessary."
    ]
  },
  {
    cat: 4,
    q: "Which best describes your ideal high-output day versus your actual yesterday?",
    opts: [
      "They're about 70% aligned. I have a clear operating rhythm I protect.",
      "There's a gap, but I have a system I'm refining.",
      "My ideal day looks nothing like my actual days. I haven't bridged the gap.",
      "I don't have a clear picture of what my ideal high-output day looks like."
    ]
  },

  // ── CATEGORY 6: SELF-PERCEPTION & IDENTITY ──
  {
    cat: 5,
    q: "If a neutral observer watched your daily behavior for 30 days, what would they conclude you truly value?",
    opts: [
      "They'd conclude I value building, learning, and strategic positioning — consistently.",
      "They'd see someone who values growth but gets pulled by comfort and distraction.",
      "They'd probably see more entertainment, socializing, and reaction than I'd want them to.",
      "I'd rather not answer this honestly."
    ]
  },
  {
    cat: 5,
    q: "What is the narrative you tell yourself about why you haven't reached your target yet?",
    opts: [
      "I'm in a specific phase. The gaps are X and Y, and here's my plan to close them.",
      "Circumstances have slowed me down, but I'm on the right path.",
      "I haven't had the right breaks yet. Luck is a factor.",
      "I'm working hard. It just takes time."
    ]
  },
  {
    cat: 5,
    q: "What does your wealthier, more advanced self do on a Tuesday at 11am that you currently don't?",
    opts: [
      "I can describe it precisely — and I'm deliberately building toward that reality.",
      "I have a vague picture but haven't defined it operationally.",
      "I imagine it sometimes but it feels distant enough that I don't plan toward it.",
      "I haven't thought about it concretely."
    ]
  },
  {
    cat: 5,
    q: "What identity from your past are you still performing that no longer serves your future?",
    opts: [
      "I know exactly which one — I'm actively shedding it. It creates friction but I'm disciplined.",
      "I think I'm holding onto a version of humility or smallness that people in my background expect.",
      "I'm performing toughness or indifference that prevents me from building genuine partnerships.",
      "I haven't diagnosed this clearly enough to answer."
    ]
  },
  {
    cat: 5,
    q: "If you were already certain of your success — not hopeful, but certain — what would you do differently in the next 30 days?",
    opts: [
      "I've asked myself this and I've already started doing those things. Certainty is a choice.",
      "I'd take bigger bets. I'd be less hesitant in conversations and decisions.",
      "I'd probably spend more, relax more, and worry less.",
      "I'm not sure. I haven't thought about what certainty would change."
    ]
  },

  // ── CATEGORY 7: ATTITUDE TOWARD THE OPPOSITE SEX ──
  {
    cat: 6,
    q: "How do your romantic pursuits or current relationship affect your strategic clarity and execution bandwidth?",
    opts: [
      "I've structured this consciously. Emotional stability is a performance input, not a distraction.",
      "There's some drag. I'm working on the boundaries.",
      "It's a significant source of emotional consumption that affects my focus.",
      "I don't separate it. Life is life."
    ]
  },
  {
    cat: 6,
    q: "What qualities do you most actively seek or prioritize in a romantic partner?",
    opts: [
      "Stability, ambition alignment, and emotional intelligence. I need a partner who adds to the architecture.",
      "Loyalty, physical attraction, and shared values.",
      "Someone who makes me feel good and who I enjoy being with.",
      "I haven't thought about it strategically — I follow what feels right."
    ]
  },
  {
    cat: 6,
    q: "Have you ever made a significant financial or professional decision primarily to impress or attract someone?",
    opts: [
      "I've been tempted but I've built enough self-awareness to catch and override that drive.",
      "Once or twice. I recognized it eventually and learned from it.",
      "More times than I'd like to admit. It's a pattern I'm aware of.",
      "Yes, often. I see nothing wrong with that as motivation."
    ]
  },
  {
    cat: 6,
    q: "How do you manage the boundary between emotional intimacy and operational focus?",
    opts: [
      "I protect my prime operational hours. Intimacy and relationship investment happen in dedicated space.",
      "I try to, but the boundary breaks down when emotions run high.",
      "I don't really manage it. It flows freely and sometimes affects my work.",
      "I haven't thought about managing this as a boundary."
    ]
  },
  {
    cat: 6,
    q: "A man running 5 businesses across 3 African countries — what does he require from a romantic partner that you currently don't attract or cultivate?",
    opts: [
      "I know exactly the profile and I'm both building toward it and becoming the man who attracts it.",
      "I have a sense of it but I haven't articulated it clearly or acted on it.",
      "I hadn't thought about romantic relationships in that strategic a frame.",
      "I don't want to apply strategy to romance. That feels transactional."
    ]
  },

  // ── CATEGORY 8: FAMILY DYNAMICS & GENERATIONAL ARCHITECTURE ──
  {
    cat: 7,
    q: "How do you currently handle financial requests from family members?",
    opts: [
      "I have a clear, sustainable system — a fixed allocation I can give without compromising my capital.",
      "I try to set limits but I cave when emotions or guilt are applied.",
      "I give what I can when asked. It's my duty.",
      "It's chaotic. I feel pulled between family obligation and my own goals constantly."
    ]
  },
  {
    cat: 7,
    q: "What is the difference between providing for your family and building with your family — and which are you doing?",
    opts: [
      "Building with — I'm actively involving key family members in knowledge, systems, and positioning.",
      "Mostly providing, but I want to shift toward building. I haven't built the framework yet.",
      "Providing for. That's what's needed right now.",
      "I haven't distinguished between the two before."
    ]
  },
  {
    cat: 7,
    q: "What limiting belief about money, ambition, or success did your family environment install in you — and how actively are you dismantling it?",
    opts: [
      "I've identified it precisely. I have a deliberate practice for rewiring it.",
      "I'm aware of it but the deactivation is incomplete. It shows up under stress.",
      "I have a vague sense of it but haven't done deep work on it.",
      "I don't think my family installed limiting beliefs — or if they did, they haven't affected me."
    ]
  },
  {
    cat: 7,
    q: "What is your generational plan — beyond money transfer?",
    opts: [
      "I'm building systems, frameworks, and thinking patterns to transfer — not just money.",
      "I think about wealth transfer but mostly in financial terms.",
      "I haven't thought that concretely about generational planning.",
      "I'm focused on the present. Generational thinking feels premature."
    ]
  },
  {
    cat: 7,
    q: "Where does family loyalty currently create a ceiling on your ambition — and how do you navigate it?",
    opts: [
      "I've identified it and set boundaries with clarity and compassion. Love doesn't require self-sabotage.",
      "It creates pull and I'm still negotiating the balance.",
      "I feel it but I don't know how to address it without causing conflict.",
      "I don't see family loyalty as a ceiling. They support me."
    ]
  },

  // ── CATEGORY 9: WORK-LIFE HARMONY & SEASONAL THINKING ──
  {
    cat: 8,
    q: "You've been in a 3-month intense work season. How do you currently know it's time to pull back and recover?",
    opts: [
      "I have defined markers — decision quality, irritability, creative flatness. I act on them before breakdown.",
      "My body tells me eventually. I listen, but sometimes later than I should.",
      "I wait until I physically can't sustain the pace anymore.",
      "I don't really pull back. I just keep going until the season ends on its own."
    ]
  },
  {
    cat: 8,
    q: "What in your personal life consistently bleeds into your work performance in ways you haven't fully addressed?",
    opts: [
      "I've identified it and I have an active strategy for containment.",
      "I know what it is. I'm managing it imperfectly.",
      "Something bleeds in, but I haven't cleanly identified what it is.",
      "I don't think my personal life affects my professional output significantly."
    ]
  },
  {
    cat: 8,
    q: "How do you currently define rest — and is your rest actually restorative?",
    opts: [
      "Rest is deliberate recovery that restores cognitive and emotional capacity. I design it intentionally.",
      "Rest is stopping work. I'm not sure it's always restorative but it feels necessary.",
      "Rest is entertainment — TV, social media, outings. It helps me forget work.",
      "I don't rest much. I feel guilty when I'm not productive."
    ]
  },
  {
    cat: 8,
    q: "What season are you in right now — and is it the right season for what you're doing?",
    opts: [
      "I know my season precisely. My resource allocation and energy match it.",
      "I think I know, but I'm not executing with the clarity my season demands.",
      "I feel like I'm always in the same season. Nothing changes.",
      "I haven't thought about my life in terms of seasons."
    ]
  },
  {
    cat: 8,
    q: "If you designed a sustainable 10-year operating rhythm for yourself, which best describes where you are now?",
    opts: [
      "I have one. It needs refining but the architecture exists.",
      "I don't have one yet, but I know I need to build it.",
      "I operate reactively. Each year looks different depending on circumstances.",
      "10-year rhythm feels too abstract. I'm focused on making this year work."
    ]
  },

  // ── CATEGORY 10: PLEASURE, REWARD & DELAYED GRATIFICATION ──
  {
    cat: 9,
    q: "Where does instant gratification show up most consistently in your daily behavior?",
    opts: [
      "I've mapped my gratification leaks precisely and I have systems to interrupt them.",
      "Social media and entertainment. I know it, I'm working on it.",
      "Food, spending, or social activities — when I'm stressed or bored.",
      "I don't think I have a significant instant gratification problem."
    ]
  },
  {
    cat: 9,
    q: "How do you currently reward yourself for progress — and does that reward reinforce or undermine your target identity?",
    opts: [
      "My rewards are deliberate and identity-consistent — experiences, learning, or strategic indulgences.",
      "I reward myself, but sometimes it reverses progress — I break diet, spend money I should reinvest.",
      "I rarely reward myself. I move directly to the next target.",
      "I don't have a structured reward system. I just do things when I feel like it."
    ]
  },
  {
    cat: 9,
    q: "What pleasures are you currently using as escape rather than as earned celebration?",
    opts: [
      "I've confronted this honestly. I know the difference and I enforce the boundary.",
      "Social media and comfort food are my escapes. I'm not fully proud of it.",
      "Nightlife, alcohol, or entertainment that I use to avoid facing hard things.",
      "I don't see my pleasures as escapes. Everyone needs to decompress."
    ]
  },
  {
    cat: 9,
    q: "Describe your relationship with delayed gratification — where is it strongest and weakest?",
    opts: [
      "Strong in business and finance. Weaker in social and romantic behavior. I'm working on the gap.",
      "I'm good at it when the end goal is very clear. It breaks down under uncertainty.",
      "I struggle with it consistently. The present always seems more urgent than the future.",
      "I'm not sure I've tested my limits on delayed gratification."
    ]
  },
  {
    cat: 9,
    q: "What would you give up for 18 months if you knew it would result in financial and operational freedom?",
    opts: [
      "I've already done this calculation and I'm executing it now.",
      "I know what I'd give up. I just haven't fully committed yet.",
      "I'd give up things, but the social cost feels too high right now.",
      "Nothing significant. I need balance. Life is too short for extreme sacrifice."
    ]
  },

  // ── CATEGORY 11: PEOPLE MANAGEMENT & TALENT ARCHITECTURE ──
  {
    cat: 10,
    q: "The last person you relied on who disappointed you — where was the real failure?",
    opts: [
      "My selection process, briefing, or accountability system. People reflect the systems they operate in.",
      "A mix — they had genuine flaws and my process was imperfect.",
      "Mostly them. I chose them reasonably, they let me down.",
      "Them entirely. I did everything right."
    ]
  },
  {
    cat: 10,
    q: "How do you identify talent before someone has proven themselves?",
    opts: [
      "I look for intellectual honesty, initiative evidence, and how they ask questions — not credentials.",
      "I look at their track record, references, and how they carry themselves.",
      "It's mostly instinct and first impressions.",
      "I wait to see their work. I don't trust upfront assessment."
    ]
  },
  {
    cat: 10,
    q: "How do you currently approach delegation?",
    opts: [
      "I delegate with clear context, defined outcomes, and a feedback loop. I'm building systems, not creating dependency.",
      "I try to delegate but often take work back because it's faster to do it myself.",
      "I delegate tasks, not authority. I maintain tight control over everything significant.",
      "I struggle to delegate. It's hard to trust people with important things."
    ]
  },
  {
    cat: 10,
    q: "There is a person in your current network whose potential you are not leveraging. What stops you?",
    opts: [
      "I've identified them. I'm building the relationship and context to engage them properly.",
      "I'm not sure how to approach the partnership conversation.",
      "I'm afraid they'll say no or won't see the value.",
      "I don't think of relationships as assets to leverage."
    ]
  },
  {
    cat: 10,
    q: "If 5 people who've worked with or for you described you to a stranger, what would they say?",
    opts: [
      "Clear, demanding, fair, visionary, and someone who develops you if you meet the standard.",
      "Smart and driven, but sometimes hard to reach or inconsistent in communication.",
      "Hard-working and well-intentioned, but chaotic in process.",
      "I'm not confident about what they'd say. I haven't cultivated that feedback loop."
    ]
  },

  // ── CATEGORY 12: LEADERSHIP & INFLUENCE ARCHITECTURE ──
  {
    cat: 11,
    q: "What is the difference between managing and leading people — and which are you currently doing more?",
    opts: [
      "Managing is controlling behavior. Leading is shaping context and identity. I'm building leaders, not managing tasks.",
      "I understand the difference. I'm somewhere between the two — improving toward leadership.",
      "I mostly manage. I'm not sure I've developed the leadership instinct yet.",
      "I don't think much about the distinction. I just try to get things done with people."
    ]
  },
  {
    cat: 11,
    q: "What specific behaviors make the most influential person you know personally so effective?",
    opts: [
      "I've reverse-engineered them precisely. I'm deliberately adopting the transferable ones.",
      "I've noticed what they do but haven't systematized adopting it.",
      "I admire them but haven't analyzed the mechanics of their influence.",
      "I haven't identified a truly influential person in my personal network."
    ]
  },
  {
    cat: 11,
    q: "Have you ever lost the trust of someone important to your mission — and what did you learn?",
    opts: [
      "Yes. It was a painful lesson in consistency, communication, and expectation-setting. I've made structural changes.",
      "Yes. I think about it. I'm not sure I've fully resolved what changed as a result.",
      "I don't think I've lost significant trust. Or if I have, I'm not aware of it.",
      "Trust breakdowns are unavoidable. I don't dwell on them."
    ]
  },
  {
    cat: 11,
    q: "What is your current leadership brand in your industry or community?",
    opts: [
      "I've engineered it deliberately — I know what I want to be known for and I act consistently with it.",
      "I have a reputation, but it's emerged organically rather than by design.",
      "I don't think I have enough presence yet to have a leadership brand.",
      "I haven't thought about building a leadership brand intentionally."
    ]
  },
  {
    cat: 11,
    q: "If you needed 10,000 loyal followers in 60 days, which approach would you take?",
    opts: [
      "Deploy a specific value-content system targeting a painful, specific problem — create a movement, not just content.",
      "Post consistently, engage authentically, and invest in distribution through partnerships.",
      "Run ads and create viral content and hope something catches.",
      "I wouldn't know where to start. I don't think that way."
    ]
  },

  // ── CATEGORY 13: COMPETITIVE INTELLIGENCE & MARKET READING ──
  {
    cat: 12,
    q: "Who are your top 3 market equivalents — the people operating at your target level — and what are they doing that you aren't?",
    opts: [
      "I track them. I know their moves, their positioning, and the specific gaps I can exploit.",
      "I know of them but don't study them systematically.",
      "I have a general sense but I avoid comparing myself too closely.",
      "I don't really think about competitors or equivalents."
    ]
  },
  {
    cat: 12,
    q: "How do you currently gather market intelligence — about trends, competitors, and opportunity?",
    opts: [
      "I have a proactive, systematic approach — specific sources, networks, and frameworks I review regularly.",
      "I consume content and talk to people in my industry. It's somewhat systematic.",
      "I stay generally informed but it's mostly passive and opportunistic.",
      "I don't have a structured approach to market intelligence."
    ]
  },
  {
    cat: 12,
    q: "What major shift is happening in the Nigerian or African market right now that most people in your circle haven't noticed?",
    opts: [
      "I can name it precisely and I'm already positioning for it.",
      "I have a sense of something shifting but I haven't defined it clearly enough to act on.",
      "I follow the news but nothing stands out as a major undernoticed shift.",
      "I'm focused on what's in front of me. Macro trends feel abstract."
    ]
  },
  {
    cat: 12,
    q: "Have you ever moved too early or too late on a market opportunity — and what did you learn about your timing instincts?",
    opts: [
      "Both — and the lessons are embedded in how I now assess opportunity-timing windows.",
      "Too late, mostly. I see opportunities after they peak. I'm working on my early-recognition speed.",
      "Too early — I act before validation and lose time and money.",
      "I haven't been in many market-timing situations to learn from yet."
    ]
  },
  {
    cat: 12,
    q: "What industry in Africa do you believe is 3–5 years from major disruption — and what position would you want?",
    opts: [
      "I've identified it. My current moves are positioning me for that moment.",
      "I have a strong intuition about it but haven't translated it into positioning.",
      "I can name an industry but I'm not sure how to position for disruption.",
      "I haven't done this type of forward-looking market analysis."
    ]
  },

  // ── CATEGORY 14: SPIRITUAL & PHILOSOPHICAL FRAMEWORK ──
  {
    cat: 13,
    q: "What is the deeper purpose behind what you are building — beyond money and status?",
    opts: [
      "I know it precisely. It's the non-negotiable frame that keeps me consistent when circumstances are hard.",
      "I have a sense of it. It shows up most clearly when I'm tested.",
      "I think about it sometimes but I haven't articulated it clearly.",
      "I'm focused on building first. Purpose will become clear once I've made it."
    ]
  },
  {
    cat: 13,
    q: "How do you process moral conflict when ambition and ethics appear to collide?",
    opts: [
      "I have a clear hierarchy of values. I've defined in advance what I won't trade for outcomes.",
      "I navigate it case by case. I try to do the right thing but the calculus isn't always clear.",
      "Ambition usually wins. I reconcile it afterwards.",
      "I avoid the conflict by not thinking about it too deeply."
    ]
  },
  {
    cat: 13,
    q: "What is your relationship with uncertainty — can you operate at peak capacity under it?",
    opts: [
      "Uncertainty is the operating environment for anyone building anything real. I've made peace with it.",
      "I function under uncertainty but it costs me energy. I'm building tolerance.",
      "Uncertainty is genuinely uncomfortable for me. It affects my clarity and decision-making.",
      "I try to eliminate uncertainty before I move. Unclear conditions make me freeze."
    ]
  },
  {
    cat: 13,
    q: "What philosophical or spiritual principle most governs your decisions when logic alone is insufficient?",
    opts: [
      "I have one that's been tested and refined through real experience. I can articulate it clearly.",
      "I have guiding principles but they're not fully systematized.",
      "Prayer, intuition, or faith guides me in those moments.",
      "I rely on advice from people I trust when logic fails."
    ]
  },
  {
    cat: 13,
    q: "Do you believe you deserve what you are chasing — and where does that belief come from?",
    opts: [
      "Yes, without hesitation. Deserving is built through consistent right action, not inherited.",
      "Mostly yes, but there's a small voice that questions whether I'm enough.",
      "Sometimes. It depends on how I've been performing recently.",
      "Honestly, I struggle with the feeling that I deserve big things."
    ]
  },

  // ── CATEGORY 15: COMMUNICATION, NEGOTIATION & PERSUASION ──
  {
    cat: 14,
    q: "In your last significant negotiation, which best describes your approach?",
    opts: [
      "I entered with a clear BATNA, knew the other party's pressure points, and positioned from a place of genuine alternatives.",
      "I prepared reasonably and did okay, but I probably left value on the table.",
      "I went in hoping to find common ground. I'm not systematic about negotiation.",
      "I find negotiation uncomfortable. I tend to accept terms rather than push back."
    ]
  },
  {
    cat: 14,
    q: "How do you communicate your value to someone who doesn't know you?",
    opts: [
      "Through a specific, repeatable proof-of-concept: a result, a reference, or a demonstration that speaks before I do.",
      "I tell my story and let my work speak. It works, but it could be sharper.",
      "I rely on credentials, titles, or social proof that others have given me.",
      "I'm not confident at communicating my value to strangers. I prefer warm introductions."
    ]
  },
  {
    cat: 14,
    q: "What is your biggest weakness in high-stakes communication — and what are you doing about it?",
    opts: [
      "I know it precisely. I'm in an active development plan to address it.",
      "I think it's over-explaining or under-asserting. I'm aware but haven't fixed it.",
      "I tend to say yes when I should negotiate or say no. I'm working on it.",
      "I haven't diagnosed my communication weakness clearly enough to address it."
    ]
  },
  {
    cat: 14,
    q: "When you need to persuade someone who is resistant, what is your default approach?",
    opts: [
      "I understand their resistance first — what they're protecting — then address that, not my original argument.",
      "I restate my case more clearly and back it with evidence.",
      "I try different angles until something lands.",
      "I push harder or give up. I don't enjoy persuasion battles."
    ]
  },
  {
    cat: 14,
    q: "How do you listen in high-stakes conversations?",
    opts: [
      "I listen to understand their model, their constraints, and where leverage exists — not to reply.",
      "I listen well but sometimes drift to planning my response before they finish.",
      "I'm a decent listener but I've been told I can come across as already having made up my mind.",
      "I listen to respond. I find silence in conversations uncomfortable."
    ]
  },

  // ── CATEGORY 16: FAILURE, RESILIENCE & LOSS ARCHITECTURE ──
  {
    cat: 15,
    q: "Your most significant failure to date — what did it permanently change in you?",
    opts: [
      "It recalibrated a core belief or process. I can name exactly what's different because of it.",
      "It made me more cautious in specific areas, though I'm not sure I've extracted the full lesson.",
      "It was painful. I recovered, but I try not to revisit it.",
      "I haven't experienced a failure significant enough to permanently change me, or I'm still recovering."
    ]
  },
  {
    cat: 15,
    q: "How long does it currently take you to recover from a significant setback?",
    opts: [
      "I have a defined recovery protocol. I allow the emotion, then I extract the data, then I re-engage.",
      "Faster than before, but still longer than I'd like. Days to weeks depending on scale.",
      "Weeks to months. Major setbacks significantly affect my trajectory.",
      "I'm not sure. I think I absorb setbacks quietly rather than processing them cleanly."
    ]
  },
  {
    cat: 15,
    q: "You were betrayed by someone you trusted in business or in life. How did you respond?",
    opts: [
      "I processed the anger, extracted the system failure that allowed it, and rebuilt my trust architecture.",
      "I handled it. It hurt. It made me more selective, maybe over-selective.",
      "It damaged me in ways I'm still dealing with. Trust is hard for me now.",
      "I haven't experienced significant betrayal — or I've avoided situations where it could happen."
    ]
  },
  {
    cat: 15,
    q: "What is your relationship with the fear of public failure — being seen failing by people who know you?",
    opts: [
      "I've largely neutralized it. Public failure is data, not identity. I've decided this deliberately.",
      "It's still there. It doesn't stop me, but it slows me down in moments.",
      "It's a significant constraint. I protect my reputation more than I probably should.",
      "It's one of my biggest fears. It keeps me from taking certain risks."
    ]
  },
  {
    cat: 15,
    q: "What is the correct amount of time to mourn a significant loss — financial, relational, or professional — before returning to execution?",
    opts: [
      "Enough time to process honestly, extract the lesson, and re-engage with clarity. For me that's usually measured in days, not months.",
      "There's no formula. You know when you're ready.",
      "As long as it takes. Forcing recovery is counterproductive.",
      "I try to get back immediately. Dwelling is weakness."
    ]
  },

  // ── CATEGORY 17: LEARNING & KNOWLEDGE SYSTEMS ──
  {
    cat: 16,
    q: "How do you currently learn — and is your system intentional or mostly opportunistic?",
    opts: [
      "Highly intentional. I have specific domains I'm developing, curated sources, and a system for converting learning to action.",
      "Semi-intentional. I read and consume widely, but the application is inconsistent.",
      "Mostly opportunistic. I learn when something interests me or a problem forces it.",
      "I don't have a learning system. I rely on experience and advice."
    ]
  },
  {
    cat: 16,
    q: "What is the most important thing you've learned in the last 90 days — and what has it specifically changed about what you DO?",
    opts: [
      "I can name it and the exact behavioral change it produced.",
      "I've learned things, but I'm honest that most of it hasn't changed my behavior yet.",
      "I've consumed a lot of content, but specific learnings are hard to isolate.",
      "I'm not sure I've had a significant learning event in the last 90 days."
    ]
  },
  {
    cat: 16,
    q: "What single skill, acquired in the next 12 months, would have the highest leverage on your earning capacity?",
    opts: [
      "I know precisely what it is and I have a development plan for it.",
      "I have a strong sense of it but I haven't started systematically building it.",
      "I have a few candidates but I'm not sure which has the highest leverage.",
      "I haven't thought about skill acquisition in this strategic a way."
    ]
  },
  {
    cat: 16,
    q: "How do you filter information — in a world of infinite content, what governs what you consume?",
    opts: [
      "I have a clear filter: does it advance a current strategic priority or does it go to a parking lot for later?",
      "I try to be selective but I'm probably consuming more than I should.",
      "I follow what interests me. My consumption is interest-led.",
      "I consume broadly. It's all useful eventually."
    ]
  },
  {
    cat: 16,
    q: "The 3 people — living, dead, or through their work — who most shaped how you think. Do you know who they are?",
    opts: [
      "Yes. I can name them and articulate exactly what I took from each one's framework.",
      "I have a sense of who they are, but I haven't extracted their specific frameworks deliberately.",
      "I've been influenced by many people but haven't traced the specific roots.",
      "I haven't done this type of reflection on my intellectual influences."
    ]
  },

  // ── CATEGORY 18: LEGACY & GENERATIONAL THINKING ──
  {
    cat: 17,
    q: "What do you want to be TRUE about your name — while you're still alive and watching?",
    opts: [
      "I know exactly. And it's the north star that governs my decisions when nothing else is clear.",
      "I have a general sense of it. It influences me, but it's not fully formed.",
      "I think about legacy mostly in terms of what I'll leave behind after I'm gone.",
      "I'm focused on building right now. Legacy thinking feels premature."
    ]
  },
  {
    cat: 17,
    q: "If your business empire outlived you by 100 years, what would it stand for — and are you building it with that in mind?",
    opts: [
      "Yes. Every major decision is filtered through the question of institutional durability.",
      "I think about it, but my daily decisions aren't consistently filtered through it.",
      "I haven't built anything yet that I'd describe as an empire. That lens feels premature.",
      "I haven't thought about the 100-year version of what I'm building."
    ]
  },
  {
    cat: 17,
    q: "What is the most important thing you want to transfer to the next generation — not money, but thinking or systems?",
    opts: [
      "I can name it precisely — and I'm already acting on transferring it through how I show up.",
      "I know what it is but I haven't built the mechanism for transferring it yet.",
      "I think about it but it's vague. Mostly 'I want them to be better than I was'.",
      "I haven't thought about non-financial generational transfer."
    ]
  },
  {
    cat: 17,
    q: "Who are the young people in your orbit right now — and are you investing in their development intentionally?",
    opts: [
      "Yes. I've identified people whose trajectory I want to influence and I'm deliberate about it.",
      "There are people around me but I haven't been intentional about investing in them.",
      "I give advice when asked. I don't seek out mentoring relationships proactively.",
      "I'm still figuring out my own path. I don't feel ready to invest in others."
    ]
  },
  {
    cat: 17,
    q: "What would have to be true about your life for you to feel, at the end, that it was well-built — not just successful?",
    opts: [
      "I know the answer. It's not primarily about money — it's about what I built, who I shaped, and what outlasted me.",
      "I have a sense of it. It's still forming.",
      "Success and being well-built feel like the same thing to me.",
      "I haven't gone deep enough on this question to have a real answer."
    ]
  }

];
