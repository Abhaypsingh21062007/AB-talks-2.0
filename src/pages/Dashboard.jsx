import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Flame, GitBranch, Link2, ChevronRight, ArrowRight,
  TrendingUp, Bell, CheckCircle2, Clock, Users,
  Moon, Target, BookOpen, Zap, Trophy, AlertTriangle, RotateCcw
} from 'lucide-react'
import {
  STUDENT, getDayStatus, ACTIVITY_FEED, DAY_12_CHALLENGE,
  WEEK_DAYS, MILESTONES, STATS, ACHIEVEMENTS, TOMORROW_CHALLENGE, TONIGHTS_FOCUS
} from '../data'

// Derive hour for greeting
const HOUR = new Date().getHours()
const GREETING = HOUR < 12 ? 'Good morning' : HOUR < 17 ? 'Good afternoon' : 'Good evening'

// Demo: set to 'missed' to preview the missed-day state, 'first' for day-1, or 'normal'
const DEMO_STATE = 'normal'


export default function Dashboard() {
  const navigate = useNavigate()
  const [githubUrl, setGithubUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'ABTalks Dashboard'
  }, [])

  const progressPct = Math.round((STUDENT.shipped / STUDENT.total) * 100)

  function handleQuickSubmit(e) {
    e.preventDefault()
    if (!githubUrl.trim() || !linkedinUrl.trim()) return
    setSubmitted(true)
  }

  return (
    <div className="dashboard-page">
      {/* ── NAV ─────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-tag">&lt;</span>
            <span className="nav-logo-text">AB</span>
            <span className="nav-logo-tag">/&gt;</span>
            <span className="nav-logo-brand">Talks</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Bell size={18} style={{ color: 'var(--text-muted)' }} />
            <div
              className="profile-avatar"
              style={{ width: 32, height: 32, fontSize: 12, cursor: 'pointer' }}
            >
              {STUDENT.initials}
            </div>
          </div>
        </div>
      </nav>

      {/* ── GREETING BANNER ─────────────────────── */}
      <div className="dash-greeting-banner">
        <div className="dash-greeting">
          {GREETING}, {STUDENT.name.split(' ')[0]} 👋
        </div>
        <div className="dash-day-label">
          {DEMO_STATE === 'first'
            ? 'Day 1 of 60 · Your journey starts now'
            : `Day ${STUDENT.shipped} of 60 · ${STUDENT.track}`}
        </div>
      </div>

      {/* ── EDGE CASE BANNERS ──────────────── */}
      {DEMO_STATE === 'missed' && (
        <div className="page-container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 0 }}>
          <div className="missed-day-banner">
            <div className="missed-day-header">
              <div className="missed-day-icon">
                <AlertTriangle size={18} />
              </div>
              <div>
                <div className="missed-day-title">Your streak ended at 14 days.</div>
                <div className="missed-day-subtitle">Yesterday was missed</div>
              </div>
            </div>
            <p className="missed-day-desc">
              Streaks break. That's part of it. What matters is whether you restart today
              or let a single missed day become two, then ten.
            </p>
            <div className="missed-day-quote">
              "Don't restart the challenge. Restart today."
            </div>
            <Link to="/day/12" className="btn btn-primary btn-sm" style={{ justifyContent: 'center' }}>
              <RotateCcw size={14} />
              Start today's build
            </Link>
          </div>
        </div>
      )}

      {DEMO_STATE === 'first' && (
        <div className="page-container" style={{ paddingTop: 'var(--space-4)', paddingBottom: 0 }}>
          <div className="first-day-banner">
            <div className="first-day-title">Today is Day 1.</div>
            <p className="first-day-desc">
              Every streak starts with one commit. Don't overthink it —
              pick your track, read the brief, and ship something.
            </p>
            <Link to="/day/1" className="btn btn-primary btn-sm" style={{ justifyContent: 'center' }}>
              <Zap size={14} />
              Start Day 1
            </Link>
          </div>
        </div>
      )}

      {/* ── HERO / STATS ────────────────────────── */}
      <div className="dashboard-hero" style={{ marginTop: 'var(--space-4)' }}>
        {/* Profile row */}
        <div className="profile-row">
          <div className="profile-left">
            <div className="profile-avatar">{STUDENT.initials}</div>
            <div>
              <div className="profile-name">{STUDENT.name}</div>
              <div className="profile-track">
                <span className="mono" style={{ fontSize: 11, color: 'var(--primary)' }}>
                  {STUDENT.trackShort}
                </span>
                <span style={{ color: 'var(--text-faint)', margin: '0 4px' }}>·</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{STUDENT.college}</span>
              </div>
            </div>
          </div>

          {/* Streak badge */}
          <div className="streak-badge">
            <Flame size={16} style={{ color: 'var(--warning)' }} />
            <div>
              <div className="streak-num">{STUDENT.streak}</div>
              <div className="streak-label">day streak</div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-value">{STUDENT.shipped}</div>
            <div className="stat-label">Shipped</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{STUDENT.total - STUDENT.shipped}</div>
            <div className="stat-label">Remaining</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{progressPct}%</div>
            <div className="stat-label">Complete</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 'var(--space-4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              60-Day Progress
            </span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              {STUDENT.shipped}/{STUDENT.total}
            </span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────── */}
      <div
        className="page-container"
        style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-16)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
      >

        {/* Motivational microcopy at top of main content */}
        <div className="microcopy-bar">
          <strong>12 days down.</strong> Keep going. Your GitHub is becoming your proof of work.
        </div>

        {/* ── TONIGHT'S FOCUS ─────────────────────── */}
        <div className="focus-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
            <Moon size={11} style={{ display: 'inline', marginRight: 4 }} />
            // tonight's focus
          </div>
          <div className="focus-card">
            <div className="focus-card-header">
              <div className="focus-card-title">
                <Target size={15} style={{ color: 'var(--primary)' }} />
                You only need {TONIGHTS_FOCUS.totalMin} minutes tonight.
              </div>
              <span className="focus-total-time">{TONIGHTS_FOCUS.totalMin} min</span>
            </div>
            <div className="focus-steps">
              {TONIGHTS_FOCUS.steps.map((step, i) => (
                <div key={step.label} className="focus-step">
                  <span className="focus-step-time">{step.min}m</span>
                  <div className="focus-step-divider" />
                  <span className="focus-step-label">{step.label}</span>
                  <span className="focus-step-desc">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TODAY'S CHALLENGE ───────────────────── */}
        <div className="build-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>// active challenge</div>
          <div className="today-card">
            {/* Header */}
            <div className="today-card-header">
              <div className="today-day-label">
                <span className="today-pulse" />
                Day 12 of 60
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <span className="badge badge-warning">Active</span>
                <span className="badge badge-muted">
                  <Clock size={10} />
                  {DAY_12_CHALLENGE.estimatedTime}
                </span>
              </div>
            </div>

            <div className="today-card-body">
              <div className="today-challenge-title">{DAY_12_CHALLENGE.title}</div>

              {/* Meta row */}
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
                <span className="chip">
                  <BookOpen size={10} /> {DAY_12_CHALLENGE.track}
                </span>
                <span className="chip">
                  <Clock size={10} /> {DAY_12_CHALLENGE.estimatedTime}
                </span>
                <span className="chip">
                  <Zap size={10} /> {DAY_12_CHALLENGE.difficulty}
                </span>
              </div>

              <p className="today-challenge-desc">
                Build a fully accessible custom dropdown component — keyboard nav, click-outside detection, and clean animation. Ship something you'd be proud to show a recruiter.
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-5)' }}>
                {DAY_12_CHALLENGE.tags.map(tag => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                <Link to="/day/12" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                  Open Today's Challenge
                  <ArrowRight size={14} />
                </Link>
                <Link to="/day/12" className="btn btn-ghost btn-sm">
                  Submit
                </Link>
              </div>

              {/* Quick submit inline form */}
              {!submitted ? (
                <form onSubmit={handleQuickSubmit}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                    Quick Submit
                  </div>
                  <div className="today-quick-submit">
                    <div className="quick-input-row">
                      <GitBranch size={16} style={{ color: 'var(--text-muted)', alignSelf: 'center', flexShrink: 0 }} />
                      <input
                        className="form-input"
                        type="url"
                        placeholder="github.com/you/day-12"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                      />
                    </div>
                    <div className="quick-input-row">
                      <Link2 size={16} style={{ color: '#60a5fa', alignSelf: 'center', flexShrink: 0 }} />
                      <input
                        className="form-input"
                        type="url"
                        placeholder="linkedin.com/posts/your-day-12"
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <CheckCircle2 size={16} />
                      Mark Day 12 as Shipped
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--success-dim)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 'var(--radius-md)' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--success)' }}>Day 12 Shipped! 🎉</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Streak extended to {STUDENT.streak + 1} days</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── STREAK HERO ─────────────────────────── */}
        <div className="streak-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
            <Flame size={11} style={{ display: 'inline', marginRight: 4, color: 'var(--warning)' }} />
            // streak index
          </div>
          <div className="card">
            {/* Big streak number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 'var(--radius-lg)',
                background: 'var(--warning-dim)',
                border: '2px solid rgba(245,158,11,0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: 'var(--warning)', letterSpacing: '-0.05em', lineHeight: 1 }}>
                  {STUDENT.streak}
                </span>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--warning)', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>days</span>
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  🔥 {STUDENT.streak} day streak
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  One more day to keep it alive. You're on a roll.
                </p>
              </div>
            </div>

            {/* 7-day grid */}
            <div className="streak-week">
              <div className="streak-week-header">
                <div className="streak-week-title">
                  Last 7 Days
                </div>
                <span className="streak-week-count">7/7 ✓</span>
              </div>
              <div className="streak-week-dots">
                {WEEK_DAYS.map((d, i) => (
                  <div key={i} className="streak-dot-wrapper">
                    <span className="streak-dot-label">{d.label}</span>
                    <div className={`streak-dot ${d.done ? 'streak-done' : ''}`}>
                      {d.done ? '✓' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CHALLENGE PROGRESS ──────────────────── */}
        <div className="progress-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>// milestone pipeline</div>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.05em', lineHeight: 1 }}>
                  {STUDENT.shipped}<span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-muted)' }}> / 60</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>days completed</div>
              </div>
              <span className="badge badge-primary">{progressPct}% done</span>
            </div>

            {/* Milestone bar */}
            <div className="milestone-bar-container">
              <div className="milestone-bar-track">
                <div className="milestone-bar-fill" style={{ width: `${progressPct}%` }} />
              </div>
              <div className="milestone-markers">
                {MILESTONES.map((m) => (
                  <div key={m.day} className="milestone-marker">
                    <div className={`milestone-dot ${m.unlocked ? 'unlocked' : ''}`} />
                    <span className={`milestone-label ${m.unlocked ? 'unlocked' : ''}`}>
                      {m.label}{m.unlocked ? ' ✓' : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── OVERALL STATS ───────────────────────── */}
        <div className="stats-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>// telemetry</div>
          <div className="stats-grid-4">
            {[
              { value: STATS.daysCompleted,    label: 'Days\ncompleted',   color: 'var(--primary)' },
              { value: STATS.currentStreak,    label: 'Current\nstreak',   color: 'var(--warning)' },
              { value: STATS.projectsShipped,  label: 'Projects\nshipped', color: 'var(--success)' },
              { value: STATS.proofSubmissions, label: 'Proof\nsubmissions',color: '#0ea5e9' },
            ].map((s) => (
              <div key={s.label} className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                <div className="stat-label" style={{ whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STANDING ────────────────────────────── */}
        <div className="standing-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>// standing percentile</div>
          <div className="standing-card">
            <div>
              <div className="standing-pct">68%</div>
            </div>
            <div style={{ flex: 1 }}>
              <p className="standing-text" style={{ marginBottom: 'var(--space-2)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>You're ahead of 68%</strong> of active challengers.
              </p>
              <div className="standing-bar-outer">
                <div className="standing-bar-fill" />
              </div>
              <p style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 6 }}>
                Keep going — consistency is the only metric that matters.
              </p>
            </div>
          </div>
        </div>

        {/* ── ACHIEVEMENTS ────────────────────────── */}
        <div className="achievements-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>
            <Trophy size={11} style={{ display: 'inline', marginRight: 4 }} />
            // unlocked badges
          </div>
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.id}
                className={`achievement-card ${a.unlocked ? 'unlocked' : 'locked'}`}
              >
                <div className="achievement-icon">{a.icon}</div>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.desc}</div>
                <div className={`achievement-status ${a.unlocked ? 'unlocked' : 'locked'}`}>
                  {a.unlocked ? '✓ Unlocked' : '🔒 Locked'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 60-Day Grid ─────────────────────────── */}
        <div className="grid-section-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <div className="section-eyebrow" style={{ marginBottom: 0 }}>// 60-day grid</div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Tap a day to view</span>
          </div>

          <div className="card" style={{ padding: 'var(--space-4)' }}>
            {/* Grid legend */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
              {[
                { color: 'var(--success)', label: 'Shipped' },
                { color: 'var(--warning)', label: 'Today' },
                { color: 'var(--bg-surface)', label: 'Upcoming', border: '1px solid var(--border)' },
              ].map((l) => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: l.color, border: l.border || 'none', flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{l.label}</span>
                </div>
              ))}
            </div>

            <div className="day-grid">
              {Array.from({ length: 60 }, (_, i) => {
                const day = i + 1
                const status = getDayStatus(day)
                return (
                  <div
                    key={day}
                    className={`day-cell ${status}`}
                    onClick={() => navigate(`/day/${day}`)}
                    title={`Day ${day}`}
                  />
                )
              })}
            </div>

            <div style={{ marginTop: 'var(--space-4)', textAlign: 'center' }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                {STUDENT.shipped} shipped · {STUDENT.total - STUDENT.shipped} remaining
              </span>
            </div>
          </div>
        </div>

        {/* ── TRACK OVERVIEW ──────────────────────── */}
        <div className="track-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>// track configuration</div>
          <div className="card" style={{ borderColor: 'rgba(99,102,241,0.2)', background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, transparent 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--primary-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                <TrendingUp size={22} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{STUDENT.track}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Day 12 of 60 · On track</div>
              </div>
              <Link to="/day/12" style={{ color: 'var(--primary)', flexShrink: 0 }}>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── UPCOMING ─────────────────────────────── */}
        <div className="upcoming-section-wrapper">
          <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>// queued next</div>
          <Link to={`/day/${TOMORROW_CHALLENGE.day}`} className="upcoming-card">
            <div className="upcoming-day-badge">
              <div className="upcoming-day-num">{TOMORROW_CHALLENGE.day}</div>
              <div className="upcoming-day-word">Day</div>
            </div>
            <div className="upcoming-body">
              <div className="upcoming-label">Tomorrow · Day {TOMORROW_CHALLENGE.day}</div>
              <div className="upcoming-title">{TOMORROW_CHALLENGE.title}</div>
              <div className="upcoming-meta">
                {TOMORROW_CHALLENGE.track} · {TOMORROW_CHALLENGE.estimatedTime}
              </div>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-faint)', flexShrink: 0 }} />
          </Link>
          <p style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 'var(--space-2)', paddingLeft: 4 }}>
            {TOMORROW_CHALLENGE.desc}
          </p>
        </div>

        {/* ── ACTIVITY FEED ───────────────────────── */}
        <div className="activity-section-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
            <div className="section-eyebrow" style={{ marginBottom: 0 }}>
              <Users size={12} style={{ display: 'inline', marginRight: 6 }} />
              // peer stream
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Live</span>
          </div>

          <div className="activity-feed">
            {ACTIVITY_FEED.map((item) => (
              <div key={item.id} className="activity-item">
                <div
                  className="activity-avatar"
                  style={{ background: item.color }}
                >
                  {item.initials}
                </div>
                <div className="activity-body">
                  <div className="activity-header">
                    <span className="activity-name">{item.name}</span>
                    <span className="activity-time">{item.time}</span>
                  </div>
                  <div className="activity-college">
                    {item.college} · {item.track} · Day {item.day}
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 'var(--space-2)' }}>
                    "{item.note}"
                  </p>
                  <div className="activity-links">
                    <a href={item.github} className="activity-link activity-link-github" target="_blank" rel="noopener noreferrer">
                      <GitBranch size={11} /> GitHub
                    </a>
                    <a href={item.linkedin} className="activity-link activity-link-linkedin" target="_blank" rel="noopener noreferrer">
                      <Link2 size={11} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
