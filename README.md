# ◈ THE OPERATOR MIRROR
### Psychographic Diagnostic Assessment — Deployment Guide

---

## What This Is
A 90-question, 18-dimension identity diagnostic built as a pure frontend web app.
No database, no server, no framework. Deploy in under 10 minutes.

---

## File Structure
```
operator-mirror/
├── index.html          — Main app shell
├── netlify.toml        — Netlify config
├── css/
│   └── style.css       — All styling
└── js/
    ├── questions.js    — All 90 questions + 4 options each
    ├── scoring.js      — Scoring engine + report generator
    ├── quiz.js         — Quiz controller + report renderer
    └── email.js        — EmailJS integration
```

---

## Step 1: Deploy to Netlify (5 minutes)

### Option A — Drag and Drop (Fastest)
1. Go to [netlify.com](https://netlify.com) and log in (or create a free account)
2. Go to **Sites** → **Add new site** → **Deploy manually**
3. Drag your entire `operator-mirror` folder into the upload box
4. Done. Netlify gives you a URL like `operator-mirror.netlify.app`

### Option B — GitHub (Recommended for updates)
1. Create a GitHub repo and push this folder to it
2. In Netlify: **Add new site** → **Import from Git** → Connect your repo
3. Build settings: leave all blank (static site)
4. Deploy. Every `git push` auto-deploys.

---

## Step 2: Set Up Email (EmailJS — Free Tier)

This sends the report to each respondent's email AND a copy to you (lead capture).

### A. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up free (200 emails/month on free tier)

### B. Connect Email Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** (or Outlook, etc.)
3. Authorize. Note your **Service ID** (looks like `service_xxxxxxx`)

### C. Create Email Template
1. Dashboard → **Email Templates** → **Create New Template**
2. Use these variables in your template:

```
TO: {{to_email}}
Subject: Your Operator Mirror Report — {{tier_name}}

Hi {{to_name}},

Your Operator Mirror diagnostic is complete.

OVERALL SCORE: {{overall_score}}/100
IDENTITY TIER: {{tier_name}}

{{tier_desc}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FULL REPORT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{report_body}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return in 30 days. Track the behavior. The score will follow.

— The Operator Mirror
```

3. Note your **Template ID** (looks like `template_xxxxxxx`)

### D. Get Your Public Key
1. Dashboard → **Account** → **General**
2. Copy your **Public Key**

### E. Update `js/email.js`
```javascript
const EMAILJS_CONFIG = {
  publicKey:   'your_actual_public_key',
  serviceId:   'service_xxxxxxx',
  templateId:  'template_xxxxxxx',
  adminEmail:  'your@email.com'    // You get a copy of every submission
};
```

---

## Step 3: Custom Domain (Optional)
In Netlify: **Site settings** → **Domain management** → **Add custom domain**
Connect any domain you own (e.g., `operatormirror.com` or a subdomain of your existing site).

---

## Customization

### Change the App Name/Branding
Edit `index.html` — search for "THE OPERATOR MIRROR" and replace with your brand.

### Add/Edit Questions
In `js/questions.js`, each question follows this format:
```javascript
{
  cat: 0,           // Category index (0-17)
  q: "Question text here?",
  opts: [
    "Best answer (scores 10)",
    "Good answer (scores 7)",
    "Average answer (scores 4)",
    "Low-alignment answer (scores 1)"
  ]
}
```

### Change Scoring Logic
In `js/scoring.js`:
- `OPTION_SCORES` — change the weight per answer position
- `TIERS` — adjust tier thresholds and descriptions
- `CAT_INSIGHTS` — change the per-category diagnostic text

### Change Colors/Fonts
In `css/style.css`, edit the `:root` variables at the top:
```css
:root {
  --gold:       #c9a84c;   /* Primary accent */
  --black:      #0a0a08;   /* Background */
  --cream:      #f0e8d0;   /* Text */
}
```

---

## Scaling Up (When You're Ready)

When you exceed EmailJS free tier (200/month):
- **Resend.com** — 3,000 emails/month free, simple API
- **SendGrid** — 100/day free
- Both require a simple Netlify serverless function (I can build this for you)

When you want to store all responses:
- Add **Airtable** or **Supabase** as a backend
- Netlify Functions can POST results to either with ~30 lines of code

---

## Metrics to Track
- Completion rate (start → finish)
- Average score by age/gender
- Most common gap categories (tells you what content to create)
- Email open rate on the report

---

Built for the African operator. Deployed globally.
◈ THE OPERATOR MIRROR
