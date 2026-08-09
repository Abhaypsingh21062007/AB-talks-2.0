import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, GitBranch, Link2, CheckCircle2, ExternalLink,
  BookOpen, Clock, Zap, ChevronRight, CheckCheck, AlertCircle,
  Sparkles, ShieldCheck, Lock
} from 'lucide-react'
import { STUDENT, getDayStatus, DAY_12_CHALLENGE, PEER_SUBMISSIONS } from '../data'

// Generic challenge data for days other than 12
function getChallengeForDay(day) {
  const challenges = {
    1:  { title: 'Build a Personal Portfolio Page',    subtitle: 'Create a clean one-page site that showcases who you are and what you can build.',        difficulty: 'Beginner',     tags: ['HTML', 'CSS'],                  time: '1–2 hrs'  },
    2:  { title: 'Responsive Navigation Bar',          subtitle: 'Build a sticky nav with a mobile hamburger menu that actually works.',                    difficulty: 'Beginner',     tags: ['CSS', 'Flexbox'],               time: '1–2 hrs'  },
    3:  { title: 'CSS Card Component Library',         subtitle: 'Design a set of reusable cards: profile, product, stat, and blog cards.',                difficulty: 'Beginner',     tags: ['CSS', 'Design'],                time: '1–2 hrs'  },
    4:  { title: 'Dark / Light Mode Toggle',           subtitle: 'Implement a theme switcher that persists across page reloads using localStorage.',        difficulty: 'Beginner',     tags: ['JS', 'CSS Variables'],          time: '1.5–2 hrs'},
    5:  { title: 'Animated Hero Section',              subtitle: 'Create an eye-catching above-the-fold section with smooth entrance animations.',          difficulty: 'Beginner',     tags: ['CSS', 'Animations'],            time: '2 hrs'    },
    6:  { title: 'Build a Todo App (no framework)',    subtitle: 'CRUD, local storage, and drag-to-reorder — all in Vanilla JS.',                         difficulty: 'Beginner',     tags: ['Vanilla JS', 'DOM'],            time: '2–3 hrs'  },
    7:  { title: 'Local Storage Integration',          subtitle: 'Build a mini note-taking app that saves and retrieves data without a backend.',           difficulty: 'Intermediate', tags: ['JS', 'Web APIs'],               time: '2 hrs'    },
    8:  { title: 'Fetch API + JSON Rendering',         subtitle: 'Pull live data from a public API and render it beautifully in the browser.',             difficulty: 'Intermediate', tags: ['JS', 'Fetch', 'APIs'],          time: '2–3 hrs'  },
    9:  { title: 'Debounce a Search Input',            subtitle: 'Build a performant search that delays API calls until the user stops typing.',            difficulty: 'Intermediate', tags: ['JS', 'Performance'],            time: '1.5 hrs'  },
    10: { title: 'Build an Infinite Scroll Feed',      subtitle: 'Use Intersection Observer to load more content as the user scrolls down.',               difficulty: 'Intermediate', tags: ['JS', 'Intersection Observer'], time: '2–3 hrs'  },
    11: { title: 'Drag and Drop Kanban Board',         subtitle: 'Build a Trello-style board using the HTML Drag and Drop API.',                          difficulty: 'Intermediate', tags: ['JS', 'Drag API'],               time: '3 hrs'    },
  }
  return challenges[day] || {
    title: `Day ${day} Challenge`,
    subtitle: 'A focused build challenge designed to strengthen your skills and grow your portfolio.',
    difficulty: 'Intermediate',
    tags: ['JavaScript', 'Web APIs'],
    time: '2–3 hrs',
  }
}

const DAY_12_FULL = {
  title: 'Build a Responsive Pricing Page',
  subtitle: 'Create a modern pricing section that clearly communicates plans, features, and value.',
  difficulty: 'Intermediate',
  track: 'Frontend Development',
  time: '60–90 min',
  tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
  mission: [
    '3 pricing tiers (Free, Pro, Enterprise)',
    'Responsive mobile layout — cards stack on small screens',
    'Clear CTA buttons per tier with distinct visual hierarchy',
    'Feature comparison list with ✓ / ✗ indicators',
    'Highlighted "recommended" plan with a visual emphasis',
    'Accessible semantic HTML — proper heading structure',
  ],
  criteria: [
    'Works correctly on mobile (390px width)',
    'Has at least 3 pricing cards with different tiers',
    'Uses responsive CSS (flexbox or grid)',
    'Each card has a clear, tappable CTA button',
    'The page is deployed (Netlify / Vercel / GitHub Pages)',
    'Repository has a clean README with a live link',
  ],
  bonus: [
    'Add a monthly / yearly toggle that updates prices',
    'Add subtle hover animations on the pricing cards',
    'Implement a dark mode variant of the pricing section',
    'Add a FAQ accordion below the pricing cards',
  ],
  resources: DAY_12_CHALLENGE.resources,
}

export default function DayDetail() {
  const { dayNumber } = useParams()
  const navigate = useNavigate()
  const day = parseInt(dayNumber, 10)

  // GitHub proof state
  const [githubUrl, setGithubUrl]         = useState('')
  const [githubVerified, setGithubVerified] = useState(false)
  const [githubError, setGithubError]       = useState('')

  // LinkedIn proof state
  const [linkedinUrl, setLinkedinUrl]         = useState('')
  const [linkedinVerified, setLinkedinVerified] = useState(false)
  const [linkedinError, setLinkedinError]       = useState('')

  // Overall submitted
  const [submitted, setSubmitted] = useState(false)

  // Interactive criteria checklist
  const criteriaItems = day === 12 ? DAY_12_FULL.criteria : [
    'Works correctly on mobile (390px width)',
    'Core feature is fully implemented and working',
    'Code is committed to a public GitHub repository',
    'A LinkedIn post documents what you built and learned',
    'You can explain your implementation to someone else',
    'Repository has at least a one-paragraph README',
  ]
  const [checked, setChecked] = useState(() => new Array(criteriaItems.length).fill(false))

  const status   = getDayStatus(day)
  const isActive = status === 'active'
  const isDone   = status === 'done'
  const isLocked = status === 'locked'

  const challenge = day === 12 ? DAY_12_FULL : getChallengeForDay(day)
  const progressPct = Math.round((day / 60) * 100)
  const checkedCount = checked.filter(Boolean).length
  const bothVerified = githubVerified && linkedinVerified

  useEffect(() => {
    document.title = `ABTalks — Day ${day}: ${challenge.title}`
  }, [day, challenge.title])

  function toggleCriteria(i) {
    setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  function handleGithubVerify() {
    if (!githubUrl.trim()) { setGithubError('Paste your GitHub repository or commit URL'); return }
    if (!githubUrl.startsWith('http')) { setGithubError('URL must start with https://'); return }
    setGithubError('')
    setGithubVerified(true)
  }

  function handleLinkedinVerify() {
    if (!linkedinUrl.trim()) { setLinkedinError('Paste your LinkedIn post URL'); return }
    if (!linkedinUrl.startsWith('http')) { setLinkedinError('URL must start with https://'); return }
    setLinkedinError('')
    setLinkedinVerified(true)
  }

  function handleFinalSubmit() {
    if (!bothVerified) return
    setSubmitted(true)
  }

  const showContent = isActive || isDone
  const showPeers   = day === 12 || isDone

  return (
    <div className="day-page">

      {/* ── NAV ───────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-mark">AB</span>
            ABTalks
          </Link>
          <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {STUDENT.trackShort} Track
          </span>
        </div>
      </nav>

      {/* ── DAY INTRO HERO ────────────────────────── */}
      <div className="day-intro-hero">
        {/* Back button */}
        <button className="day-intro-back" onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={15} />
          Back to Dashboard
        </button>

        {/* Eyebrow + progress bar */}
        <div className="day-intro-eyebrow">
          Day {day} of 60
          <div className="day-intro-progress">
            <div className="day-intro-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <span style={{ fontSize: 10, color: 'var(--primary)', fontWeight: 700, letterSpacing: 0 }}>
            {progressPct}%
          </span>
        </div>

        {/* Status badge row */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
          <span className={`badge ${isActive ? 'badge-warning' : isDone ? 'badge-success' : 'badge-muted'}`}>
            {isActive ? '🔥 Active — Today' : isDone ? '✓ Shipped' : `🔒 Locked`}
          </span>
          {isActive && (
            <span className="badge badge-muted">
              <Clock size={9} /> {challenge.time}
            </span>
          )}
        </div>

        {/* Big title */}
        <h1 className="day-intro-title">{challenge.title}</h1>

        {/* Subtitle */}
        <p className="day-intro-subtitle">
          {challenge.subtitle || (day === 12 ? DAY_12_FULL.subtitle : '')}
        </p>

        {/* Meta chips */}
        <div className="day-intro-meta">
          {(day === 12 ? [DAY_12_FULL.track] : []).map(t => (
            <span key={t} className="badge badge-primary">{t}</span>
          ))}
          <span className="badge badge-muted">
            <Clock size={9} /> {challenge.time}
          </span>
          <span className="badge badge-muted">
            <Zap size={9} /> {challenge.difficulty}
          </span>
          {challenge.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>
      </div>

      {/* ── PAGE CONTENT ──────────────────────────── */}
      <div className="day-content">

        {/* Day nav pills */}
        <div className="day-nav-wrapper">
          <div style={{ display: 'flex', gap: 'var(--space-2)', overflowX: 'auto', paddingBottom: 2, WebkitOverflowScrolling: 'touch' }}>
            {[day - 2, day - 1, day, day + 1, day + 2]
              .filter(d => d >= 1 && d <= 60)
              .map(d => (
                <Link
                  key={d}
                  to={`/day/${d}`}
                  className={`btn btn-sm ${d === day ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ flexShrink: 0 }}
                >
                  Day {d}
                </Link>
              ))}
          </div>
        </div>

        {/* ── LOCKED ─────────────────────────────── */}
        {isLocked && (
          <div style={{
            padding: 'var(--space-8) var(--space-5)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
          }}>
            <Lock size={40} style={{ color: 'var(--text-faint)', margin: '0 auto var(--space-4)' }} />
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 'var(--space-2)', letterSpacing: '-0.02em' }}>
              Not Unlocked Yet
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-5)', maxWidth: 300, margin: '0 auto var(--space-5)' }}>
              Day {day} unlocks when you reach it. Complete all previous days first — that's the whole point.
            </p>
            <Link to="/dashboard" className="btn btn-ghost btn-sm">
              ← Back to Dashboard
            </Link>
          </div>
        )}

        {/* ── ACTIVE / DONE CONTENT ──────────────── */}
        {showContent && (
          <>
            {/* ── TODAY'S MISSION ──────────────────── */}
            <div className="mission-section-wrapper">
              <div className="section-eyebrow">Today's Mission</div>
              <div className="challenge-prompt" style={{ marginTop: 'var(--space-3)' }}>
                <div className="challenge-prompt-header">Build this today →</div>
                <div className="challenge-prompt-body">
                  <p>
                    {day === 12
                      ? 'Build a responsive pricing page with multiple tiers, clear CTAs, and accessible markup. This is the kind of UI that shows up in every real product — nail it once and you understand layout, hierarchy, and conversion design.'
                      : `Today's challenge is focused and clear. Build ${challenge.title.toLowerCase()} from scratch — no shortcuts, no copy-paste. Document your approach on LinkedIn and push your code to a public GitHub repo.`}
                  </p>
                </div>
              </div>

              {/* Mission items */}
              <div className="mission-list" style={{ marginTop: 'var(--space-4)' }}>
                {(day === 12 ? DAY_12_FULL.mission : [
                  'Core functionality working end-to-end',
                  'Mobile-first responsive layout',
                  'Clean, readable, commented code',
                  'Meaningful commit message on GitHub',
                  'A LinkedIn post explaining what you built',
                ]).map((item, i) => (
                  <div key={i} className="mission-item">
                    <CheckCircle2 size={15} className="mission-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {challenge.tags?.map(tag => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>

            {/* Day 1 first-commit banner */}
            {day === 1 && (
              <div className="first-day-wrapper">
                <div className="first-day-banner">
                  <div className="first-day-title">Today is Day 1.</div>
                  <p className="first-day-desc">
                    Every streak starts with one commit. Don't overthink it — just build something and push it.
                  </p>
                  <div className="microcopy-bar" style={{ textAlign: 'left', fontStyle: 'normal' }}>
                    Your GitHub is about to become your proof of work.
                  </div>
                </div>
              </div>
            )}

            {/* ── SUCCESS CRITERIA ─────────────────── */}
            <div className="criteria-section-wrapper">
              <div className="section-eyebrow">Success Criteria</div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                Tap each item as you complete it. Your build should check all six.
              </p>

              <div className="criteria-list">
                {criteriaItems.map((item, i) => (
                  <div
                    key={i}
                    className={`criteria-item ${checked[i] ? 'checked' : ''}`}
                    onClick={() => toggleCriteria(i)}
                    role="checkbox"
                    aria-checked={checked[i]}
                    tabIndex={0}
                    onKeyDown={e => e.key === ' ' && toggleCriteria(i)}
                  >
                    <div className="criteria-box">
                      {checked[i] && <CheckCheck size={12} />}
                    </div>
                    <span className="criteria-text">{item}</span>
                  </div>
                ))}
              </div>

              {/* Criteria progress */}
              <div className="criteria-progress-row">
                <div className="progress-bar-track" style={{ flex: 1, marginRight: 'var(--space-3)' }}>
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${(checkedCount / criteriaItems.length) * 100}%` }}
                  />
                </div>
                <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)', flexShrink: 0 }}>
                  {checkedCount}/{criteriaItems.length}
                  {checkedCount === criteriaItems.length && ' ✓'}
                </span>
              </div>
            </div>

            {/* ── RESOURCES (Day 12) ───────────────── */}
            {day === 12 && (
              <div className="resources-section-wrapper">
                <div className="section-eyebrow">Resources</div>
                <div className="resource-list">
                  {DAY_12_FULL.resources.map(res => (
                    <a
                      key={res.title}
                      href={res.url}
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="resource-link-icon"><BookOpen size={15} /></div>
                      <div className="resource-link-text">
                        <div className="resource-link-title">{res.title}</div>
                        <div className="resource-link-host">{res.host}</div>
                      </div>
                      <ExternalLink size={13} style={{ color: 'var(--text-faint)', flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* ── BONUS CHALLENGE ──────────────────── */}
            <div className="bonus-section-wrapper">
              <div className="bonus-card">
                <div className="bonus-header">
                  <div className="bonus-icon">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="bonus-title">Want to push further?</div>
                    <div className="bonus-subtitle">Optional — only if you've nailed the core build</div>
                  </div>
                </div>
                <div className="bonus-list">
                  {(day === 12 ? DAY_12_FULL.bonus : [
                    'Add a polished loading skeleton state',
                    'Write a unit test for the core logic',
                    'Deploy it and share the live URL in your post',
                    'Record a 60-second Loom walkthrough',
                  ]).map((item, i) => (
                    <div key={i} className="bonus-item">
                      <span className="bonus-plus">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="submission-section-wrapper">
              {/* Motivational microcopy — before submission */}
              {!submitted && !isDone && (
                <div className="microcopy-bar" style={{ marginBottom: 'var(--space-4)' }}>
                  Don't aim for perfect. <strong>Aim for shipped.</strong> Both links below seal the day.
                </div>
              )}

              {/* Incomplete submission warning — one verified, other not */}
              {(githubVerified && !linkedinVerified && !submitted && !isDone) && (
                <div className="incomplete-submission-banner" style={{ marginBottom: 'var(--space-4)' }}>
                  <AlertCircle size={16} className="incomplete-banner-icon" />
                  <div className="incomplete-banner-text">
                    <div className="incomplete-banner-title">Incomplete submission</div>
                    <div className="incomplete-banner-desc">
                      GitHub — Submitted&nbsp;&nbsp;·&nbsp;&nbsp;<span style={{ color: 'var(--danger)', fontWeight: 700 }}>LinkedIn — Missing</span>. Verify your LinkedIn post to complete the day.
                    </div>
                  </div>
                </div>
              )}

              {(!githubVerified && linkedinVerified && !submitted && !isDone) && (
                <div className="incomplete-submission-banner" style={{ marginBottom: 'var(--space-4)' }}>
                  <AlertCircle size={16} className="incomplete-banner-icon" />
                  <div className="incomplete-banner-text">
                    <div className="incomplete-banner-title">Incomplete submission</div>
                    <div className="incomplete-banner-desc">
                      <span style={{ color: 'var(--danger)', fontWeight: 700 }}>GitHub — Missing</span>&nbsp;&nbsp;·&nbsp;&nbsp;LinkedIn — Submitted. Verify your GitHub commit to complete the day.
                    </div>
                  </div>
                </div>
              )}

            {/* ── SUBMISSION SECTION ───────────────── */}
            {!submitted && !isDone ? (
              <div>
                {/* Header */}
                <div className="proof-section-header">
                  <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
                    <ShieldCheck size={11} style={{ display: 'inline', marginRight: 6 }} />
                    Submit Your Proof
                  </div>
                  <div className="proof-section-title">Your streak is built on proof, not promises.</div>
                  <p className="proof-section-desc">
                    "Paste your GitHub link and your LinkedIn post URL below. Both are required — your daily build only counts when it's public."
                  </p>
                </div>

                {/* GitHub proof card */}
                <div className={`proof-card ${githubVerified ? 'verified' : ''}`} style={{ marginBottom: 'var(--space-4)' }}>
                  <div className="proof-card-header">
                    <div className="proof-card-icon proof-card-icon-github">
                      <GitBranch size={18} />
                    </div>
                    <div className="proof-card-title">GitHub Proof</div>
                    {githubVerified && (
                      <span className="badge badge-success">
                        <CheckCircle2 size={10} /> Verified
                      </span>
                    )}
                  </div>
                  <div className="proof-card-body">
                    {githubVerified ? (
                      <div className="proof-verified-badge">
                        <CheckCircle2 size={18} />
                        ✓ GitHub proof verified — commit recorded
                      </div>
                    ) : (
                      <>
                        <div className="form-group">
                          <label className="form-label" htmlFor="github-proof-url">
                            GitHub repository or commit URL
                          </label>
                          <input
                            id="github-proof-url"
                            className="form-input"
                            type="url"
                            placeholder="https://github.com/username/project"
                            value={githubUrl}
                            onChange={e => { setGithubUrl(e.target.value); setGithubError('') }}
                          />
                          {githubError && (
                            <span style={{ fontSize: 12, color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4 }}>
                              <AlertCircle size={12} /> {githubError}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          style={{ justifyContent: 'center' }}
                          onClick={handleGithubVerify}
                        >
                          <GitBranch size={15} />
                          Verify GitHub
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* LinkedIn proof card */}
                <div className={`proof-card ${linkedinVerified ? 'verified' : ''}`} style={{ marginBottom: 'var(--space-4)' }}>
                  <div className="proof-card-header">
                    <div className="proof-card-icon proof-card-icon-linkedin">
                      <Link2 size={18} />
                    </div>
                    <div className="proof-card-title">LinkedIn Proof</div>
                    {linkedinVerified && (
                      <span className="badge badge-success">
                        <CheckCircle2 size={10} /> Added
                      </span>
                    )}
                  </div>
                  <div className="proof-card-body">
                    {linkedinVerified ? (
                      <div className="proof-verified-badge">
                        <CheckCircle2 size={18} />
                        ✓ LinkedIn proof added — post recorded
                      </div>
                    ) : (
                      <>
                        <div className="form-group">
                          <label className="form-label" htmlFor="linkedin-proof-url">
                            LinkedIn post URL
                          </label>
                          <input
                            id="linkedin-proof-url"
                            className="form-input"
                            type="url"
                            placeholder="https://linkedin.com/posts/..."
                            value={linkedinUrl}
                            onChange={e => { setLinkedinUrl(e.target.value); setLinkedinError('') }}
                          />
                          {linkedinError && (
                            <span style={{ fontSize: 12, color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: 4 }}>
                              <AlertCircle size={12} /> {linkedinError}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          style={{ justifyContent: 'center' }}
                          onClick={handleLinkedinVerify}
                        >
                          <Link2 size={15} />
                          Verify LinkedIn
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Final ship button */}
                <div className="day-submit-all">
                  <div className="day-submit-status">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className={`day-submit-status-dot ${bothVerified ? 'ready' : 'pending'}`} />
                      <span>
                        {bothVerified
                          ? 'Both proofs verified — ready to ship'
                          : `${githubVerified ? 1 : 0} of 2 proofs verified`}
                      </span>
                    </div>
                    <span className="mono">Day {day} / 60</span>
                  </div>

                  <button
                    type="button"
                    className={`btn ${bothVerified ? 'btn-success' : 'btn-ghost'} btn-full`}
                    style={{ justifyContent: 'center', opacity: bothVerified ? 1 : 0.5 }}
                    onClick={handleFinalSubmit}
                    disabled={!bothVerified}
                  >
                    <CheckCircle2 size={16} />
                    Ship Day {day} — Mark Complete
                  </button>

                  <p style={{ fontSize: 11, color: 'var(--text-faint)', textAlign: 'center', lineHeight: 1.6 }}>
                    Verify both links above first. Your proof is public and permanent.
                  </p>
                </div>
              </div>
            ) : (
              /* ── SUBMISSION COMPLETE STATE ── */
              <div className="submission-complete-card">
                {/* Header */}
                <div className="submission-complete-header">
                  <span className="submission-complete-emoji">🎉</span>
                  <div className="submission-complete-title">
                    Day {day} complete
                  </div>
                  <p className="submission-complete-sub">
                    {submitted
                      ? `Streak extended to ${STUDENT.streak + 1} days. Your GitHub is becoming your proof of work.`
                      : `You already shipped Day ${day}. Your proof of work is live and permanent.`}
                  </p>
                </div>

                {/* Proof receipt */}
                <div className="proof-receipt">
                  <div className="proof-receipt-title">Proof submitted</div>

                  <div className="proof-receipt-row submitted">
                    <div className="proof-receipt-icon github">
                      <GitBranch size={15} />
                    </div>
                    <span className="proof-receipt-label">GitHub</span>
                    <span className="proof-receipt-status submitted">
                      <CheckCircle2 size={13} /> Submitted
                    </span>
                  </div>

                  <div className="proof-receipt-row submitted">
                    <div className="proof-receipt-icon linkedin">
                      <Link2 size={15} />
                    </div>
                    <span className="proof-receipt-label">LinkedIn</span>
                    <span className="proof-receipt-status submitted">
                      <CheckCircle2 size={13} /> Submitted
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="proof-receipt-footer">
                  <Link
                    to="/dashboard"
                    className="btn btn-success"
                    style={{ justifyContent: 'center' }}
                  >
                    Continue to Day {day + 1}
                    <ChevronRight size={15} />
                  </Link>
                  <Link
                    to="/dashboard"
                    className="btn btn-ghost btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    Back to Dashboard
                  </Link>
                  <p className="microcopy-bar">
                    <strong>{day} days down.</strong> Don't aim for perfect. Aim for shipped.
                  </p>
                </div>
              </div>
            )}
            </div>
          </>
        )}

        {/* ── COMMUNITY SUBMISSIONS ─────────────── */}
        {showPeers && (
          <div className="community-section-wrapper">
            <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
              Community Submissions
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {PEER_SUBMISSIONS.map(peer => (
                <div key={peer.id} className="peer-submission">
                  <div className="peer-avatar" style={{ background: peer.color }}>
                    {peer.initials}
                  </div>
                  <div className="peer-body">
                    <div className="peer-name">{peer.name}</div>
                    <div className="peer-college">{peer.college}</div>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-2)' }}>
                      "{peer.note}"
                    </p>
                    <div className="peer-links">
                      <a href={peer.github} className="activity-link activity-link-github" target="_blank" rel="noopener noreferrer">
                        <GitBranch size={11} /> View Code
                      </a>
                      <a href={peer.linkedin} className="activity-link activity-link-linkedin" target="_blank" rel="noopener noreferrer">
                        <Link2 size={11} /> LinkedIn Post
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── BOTTOM DAY NAV ────────────────────── */}
        <div className="day-bottom-nav-wrapper">
          <div style={{ display: 'flex', gap: 'var(--space-3)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border)' }}>
            {day > 1 && (
              <Link to={`/day/${day - 1}`} className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                ← Day {day - 1}
              </Link>
            )}
            <Link to="/dashboard" className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
              Dashboard
            </Link>
            {day < 60 && (
              <Link to={`/day/${day + 1}`} className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                Day {day + 1} →
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
