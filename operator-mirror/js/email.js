// ============================================
// THE OPERATOR MIRROR — EMAIL INTEGRATION
// Using EmailJS (free tier, no backend needed)
// ============================================

// ─────────────────────────────────────────────
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail recommended)
// 3. Create an Email Template using the variables below
// 4. Replace the three placeholder values below with your actual IDs
// ─────────────────────────────────────────────

const EMAILJS_CONFIG = {
  publicKey:   'YOUR_PUBLIC_KEY',       // From EmailJS Account → General → Public Key
  serviceId:   'YOUR_SERVICE_ID',       // From EmailJS → Email Services
  templateId:  'YOUR_TEMPLATE_ID',      // From EmailJS → Email Templates
  adminEmail:  'YOUR_EMAIL@gmail.com'   // Your email — receives every lead
};

// Initialize EmailJS
(function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }
})();

// Build a readable plain-text report for email
function buildEmailBody(data) {
  const { name, age, gender, overallScore, tier, normalizedScores, gaps, protocol, date } = data;

  const categoryLines = normalizedScores.map((score, i) =>
    `${String(i + 1).padStart(2, '0')}. ${CATEGORIES[i]}: ${score}/100`
  ).join('\n');

  const gapLines = gaps.map(g =>
    `• ${CATEGORIES[g.idx]}: ${g.score}/100`
  ).join('\n');

  const protocolLines = protocol.map((p, i) =>
    `${i + 1}. [${p.horizon.toUpperCase()}] ${p.title}\n   ${p.text}`
  ).join('\n\n');

  return `
THE OPERATOR MIRROR — DIAGNOSTIC REPORT
Generated: ${date}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAME: ${name} | AGE: ${age} | GENDER: ${gender}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERALL ALIGNMENT SCORE: ${overallScore}/100
IDENTITY TIER: ${tier.name}

${tier.desc}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
18-DIMENSION BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${categoryLines}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITICAL GAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${gapLines}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TREATMENT PROTOCOL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${protocolLines}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return in 30 days. Track the behavior. The score will follow.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE OPERATOR MIRROR — Psychographic Diagnostic
  `.trim();
}

async function sendReportEmail(data) {
  if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
    console.log('📧 EmailJS not configured. Report generated locally only.');
    console.log('Report data:', data);
    return;
  }

  if (typeof emailjs === 'undefined') {
    console.warn('EmailJS SDK not loaded.');
    return;
  }

  const emailBody = buildEmailBody(data);

  const templateParams = {
    to_name:       data.name,
    to_email:      data.email,
    from_name:     'The Operator Mirror',
    overall_score: data.overallScore,
    tier_name:     data.tier.name,
    tier_desc:     data.tier.desc,
    report_body:   emailBody,
    report_date:   data.date,
    // Admin copy fields
    admin_email:   EMAILJS_CONFIG.adminEmail,
    respondent:    `${data.name} (${data.age}, ${data.gender}) — ${data.email} — Score: ${data.overallScore}/100`
  };

  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
    console.log('✅ Report sent to', data.email);
  } catch (err) {
    console.error('Email send failed:', err);
    // Silent fail — user still sees their report on screen
  }
}
