import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  User, Flame, BarChart2, ChevronRight, GitBranch, Link2,
  PenLine, CheckCircle2, AlertCircle
} from 'lucide-react'
import { STUDENT, STATS, ACHIEVEMENTS, TRACKS } from '../data'

const TRACK_ICONS = { frontend: '🎨', fullstack: '⚡', aiml: '🤖', backend: '🔧', datascience: '📊' }

// Simulate "new user" by default; toggle to see filled profile
export default function Profile() {
  const [isSetup, setIsSetup] = useState(false)

  // Form state for empty profile
  const [form, setForm] = useState({ name: '', college: '', github: '', linkedin: '' })
  const [selectedTrack, setSelectedTrack] = useState('')
  const [formSaved, setFormSaved] = useState(false)

  function handleFormChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSaveProfile(e) {
    e.preventDefault()
    if (!form.name.trim() || !selectedTrack) return
    setFormSaved(true)
    setIsSetup(true)
  }

  return (
    <div style={{ minHeight: '100dvh' }}>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-tag">&lt;</span>
            <span className="nav-logo-text">AB</span>
            <span className="nav-logo-tag">/&gt;</span>
            <span className="nav-logo-brand">Talks</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>Profile</span>
            {/* Demo toggle */}
            <button
              onClick={() => setIsSetup(p => !p)}
              className="btn btn-ghost btn-sm"
              style={{ padding: '4px 10px', fontSize: 11 }}
            >
              {isSetup ? 'View empty state' : 'View filled profile'}
            </button>
          </div>
        </div>
      </nav>

      <div className="page-container" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-16)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

        {isSetup ? (
          /* ── FILLED PROFILE ─────────────────────────── */
          <>
            {/* Avatar + name */}
            <div style={{ textAlign: 'center', padding: 'var(--space-6) 0 var(--space-2)' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 900, color: 'white',
                margin: '0 auto var(--space-4)',
                boxShadow: '0 0 30px rgba(99,102,241,0.3)',
              }}>
                {STUDENT.initials}
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                {STUDENT.name}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{STUDENT.college}</div>
              <div style={{ marginTop: 'var(--space-3)', display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <span className="badge badge-primary">{STUDENT.track}</span>
                <span className="badge badge-warning">🔥 {STUDENT.streak} day streak</span>
              </div>
            </div>

            {/* Info rows */}
            <div className="card" style={{ padding: 'var(--space-5)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)', letterSpacing: '-0.01em' }}>
                Your info
              </div>
              {[
                { label: 'College',  value: STUDENT.college },
                { label: 'Track',    value: STUDENT.track   },
                { label: 'Day',      value: `Day ${STUDENT.shipped} of 60` },
                { label: 'GitHub',   value: 'github.com/arjunmehta' },
                { label: 'LinkedIn', value: 'linkedin.com/in/arjunmehta' },
              ].map(row => (
                <div key={row.label} className="info-row">
                  <span className="info-row-label">{row.label}</span>
                  <span className="info-row-value">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Microcopy */}
            <div className="microcopy-bar">
              <strong>12 days down.</strong> Keep going.
            </div>

            {/* Stats */}
            <div className="stats-grid-4">
              {[
                { value: STATS.daysCompleted,    label: 'Days\ncompleted',   color: 'var(--primary)'  },
                { value: STATS.currentStreak,    label: 'Current\nstreak',   color: 'var(--warning)'  },
                { value: STATS.projectsShipped,  label: 'Projects\nshipped', color: 'var(--success)'  },
                { value: STATS.proofSubmissions, label: 'Proof\nposts',      color: '#0ea5e9'          },
              ].map(s => (
                <div key={s.label} className="stat-card" style={{ textAlign: 'center' }}>
                  <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                  <div className="stat-label" style={{ whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <div className="section-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Achievements</div>
              <div className="achievements-grid">
                {ACHIEVEMENTS.map(a => (
                  <div key={a.id} className={`achievement-card ${a.unlocked ? 'unlocked' : 'locked'}`}>
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

            {/* Quick nav */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { to: '/dashboard', label: 'View Dashboard',    icon: BarChart2 },
                { to: '/day/12',    label: "Today's Challenge", icon: Flame      },
              ].map(({ to, label, icon: Icon }) => (
                <Link key={to} to={to} className="upcoming-card">
                  <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--primary-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>
                  <ChevronRight size={16} style={{ color: 'var(--text-faint)' }} />
                </Link>
              ))}
            </div>
          </>
        ) : (
          /* ── EMPTY PROFILE — SETUP FORM ─────────────── */
          <>
            {/* Empty avatar */}
            <div style={{ textAlign: 'center', padding: 'var(--space-6) 0 var(--space-2)' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '2px dashed var(--border-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto var(--space-4)',
                color: 'var(--text-faint)',
              }}>
                <User size={32} />
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                Complete your profile
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.6 }}>
                Set up your profile to start the 60-day challenge.
              </div>
            </div>

            {/* Microcopy */}
            <div className="microcopy-bar">
              Every streak starts with one commit. Let's set you up.
            </div>

            {/* Setup form */}
            <div className="profile-setup-card">
              <div className="profile-setup-header">
                <div className="profile-setup-title">
                  <PenLine size={14} style={{ display: 'inline', marginRight: 6, color: 'var(--primary)' }} />
                  Your details
                </div>
                <div className="profile-setup-sub">Takes less than a minute</div>
              </div>

              {formSaved ? (
                <div style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 'var(--space-3)' }}>✓</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--success)', marginBottom: 8 }}>Profile saved</div>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    Toggle "View filled profile" above to see how it looks.
                  </p>
                </div>
              ) : (
                <form className="profile-setup-body" onSubmit={handleSaveProfile}>
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-name">Full Name</label>
                    <input
                      id="profile-name"
                      name="name"
                      className="form-input"
                      type="text"
                      placeholder="Arjun Mehta"
                      value={form.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  {/* College */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-college">College</label>
                    <input
                      id="profile-college"
                      name="college"
                      className="form-input"
                      type="text"
                      placeholder="NIT Trichy, BITS Pilani, IIT Delhi…"
                      value={form.college}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* Track */}
                  <div className="form-group">
                    <label className="form-label">Track</label>
                    <div className="track-select-grid">
                      {TRACKS.map(t => (
                        <div
                          key={t.id}
                          className={`track-select-option ${selectedTrack === t.id ? 'selected' : ''}`}
                          onClick={() => setSelectedTrack(t.id)}
                          role="radio"
                          aria-checked={selectedTrack === t.id}
                          tabIndex={0}
                          onKeyDown={e => e.key === ' ' && setSelectedTrack(t.id)}
                        >
                          <span style={{ marginRight: 4 }}>{TRACK_ICONS[t.id]}</span>
                          {t.name.replace(' Development', '').replace('Data Science', 'Data Sci.')}
                        </div>
                      ))}
                    </div>
                    {!selectedTrack && (
                      <span style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 4, display: 'block' }}>
                        Required — choose one
                      </span>
                    )}
                  </div>

                  {/* GitHub */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-github">
                      <GitBranch size={12} style={{ display: 'inline', marginRight: 6 }} />
                      GitHub username
                    </label>
                    <input
                      id="profile-github"
                      name="github"
                      className="form-input"
                      type="text"
                      placeholder="github.com/username"
                      value={form.github}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-linkedin">
                      <Link2 size={12} style={{ display: 'inline', marginRight: 6 }} />
                      LinkedIn profile
                    </label>
                    <input
                      id="profile-linkedin"
                      name="linkedin"
                      className="form-input"
                      type="text"
                      placeholder="linkedin.com/in/username"
                      value={form.linkedin}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* Validation hint */}
                  {(!form.name.trim() || !selectedTrack) && (
                    <div className="incomplete-submission-banner">
                      <AlertCircle size={15} className="incomplete-banner-icon" />
                      <div className="incomplete-banner-text">
                        <div className="incomplete-banner-title">Complete your profile</div>
                        <div className="incomplete-banner-desc">
                          {!form.name.trim() && 'Name is required. '}
                          {!selectedTrack && 'Choose a track to continue.'}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ justifyContent: 'center' }}
                    disabled={!form.name.trim() || !selectedTrack}
                  >
                    <CheckCircle2 size={15} />
                    Save Profile
                  </button>
                </form>
              )}
            </div>

            {/* Sign in nudge */}
            <div style={{
              padding: 'var(--space-4)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 12,
              color: 'var(--text-faint)',
              lineHeight: 1.6,
              textAlign: 'center',
            }}>
              This is a frontend-only demo. In the full product, your profile would sync across devices.
            </div>
          </>
        )}
      </div>
    </div>
  )
}
