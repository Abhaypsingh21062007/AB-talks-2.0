import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, GitBranch, Link2, Zap, Shield, TrendingUp,
  Users, CheckCircle2, ChevronRight, Code2, BarChart3,
  Layers, Cpu, Database, MessageCircle, Camera, PlayCircle
} from 'lucide-react'
import { TRACKS, JOURNEY_TIMELINE, TESTIMONIALS } from '../data'

const AVATARS = [
  { initials: 'AM', color: '#6366f1' },
  { initials: 'PS', color: '#10b981' },
  { initials: 'RV', color: '#f59e0b' },
  { initials: 'KR', color: '#8b5cf6' },
  { initials: 'SP', color: '#ec4899' },
]

const TRACK_ICONS = {
  frontend: Code2,
  fullstack: Layers,
  aiml: Cpu,
  backend: Database,
  datascience: BarChart3,
}

export default function Landing() {
  useEffect(() => {
    document.title = 'ABTalks — 60-Day Build Challenge for College Students'
  }, [])

  return (
    <div className="landing-page">
      {/* ── NAV ───────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-mark">AB</span>
            ABTalks
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/dashboard" className="nav-cta">
              Join Free
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="landing-hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-tag anim-fade-up">
            <span className="hero-tag-dot" />
            Built for ambitious college students
          </div>

          <h1 className="hero-headline anim-fade-up delay-1">
            60 days.<br />
            60 <span className="accent">builds.</span><br />
            One stronger you.
          </h1>

          <p className="hero-sub-hook anim-fade-up delay-2">
            Stop watching tutorials. Start shipping.
          </p>

          <p className="hero-desc anim-fade-up delay-3">
            ABTalks is a 60-day build challenge for college students.
            Pick a track, ship something every day, and turn your
            learning into public proof.
          </p>

          <div className="hero-cta-group anim-fade-up delay-4">
            <Link to="/dashboard" className="btn btn-primary">
              Start the 60-Day Challenge
              <ArrowRight size={16} />
            </Link>
            <a href="#how-it-works" className="btn btn-ghost">
              See how it works
            </a>
          </div>

          <div className="hero-social-proof anim-fade-up delay-5">
            <div className="hero-avatars">
              {AVATARS.map((a) => (
                <div
                  key={a.initials}
                  className="avatar"
                  style={{ background: a.color }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <p className="hero-proof-text">
              <strong>Join students building in public —</strong><br />
              one commit, one post, every day.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ───────────────────────────── */}
      <section className="landing-section">
        <div className="section-eyebrow">Why ABTalks</div>
        <h2 className="section-title">
          The fastest path from<br />
          learner to builder.
        </h2>

        <div className="value-grid">
          {[
            {
              num: '01',
              cls: 'value-icon-1',
              Icon: Zap,
              title: 'Build Daily',
              desc: 'Turn coding into an unbreakable habit. 60 days of momentum.',
            },
            {
              num: '02',
              cls: 'value-icon-2',
              Icon: GitBranch,
              title: 'Ship in Public',
              desc: 'Document progress through GitHub commits and LinkedIn posts.',
            },
            {
              num: '03',
              cls: 'value-icon-3',
              Icon: TrendingUp,
              title: 'Build Portfolio',
              desc: '60 days of proof beats 60 days of certificates.',
            },
            {
              num: '04',
              cls: 'value-icon-4',
              Icon: Shield,
              title: 'Get Noticed',
              desc: 'A visible body of work is your competitive edge with recruiters.',
            },
          ].map((card, i) => (
            <div key={card.num} className={`value-card anim-fade-up delay-${i + 1}`}>
              <div className="value-num">{card.num}</div>
              <div className={`value-icon ${card.cls}`}>
                <card.Icon size={18} />
              </div>
              <div className="value-card-title">{card.title}</div>
              <div className="value-card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────── */}
      <section className="landing-section" id="how-it-works">
        <div className="section-eyebrow">The Process</div>
        <h2 className="section-title">Simple by design.</h2>

        <div className="steps-list">
          {[
            {
              n: '01',
              title: 'Pick a Track',
              desc: 'Choose your focus — Frontend, Full Stack, AI/ML, Backend, or Data Science. One track, 60 challenges, zero overwhelm.',
            },
            {
              n: '02',
              title: 'Build Every Day',
              desc: 'Each day you get a focused challenge brief. Build it, commit it, and document your thinking. Small builds compound into large portfolios.',
            },
            {
              n: '03',
              title: 'Submit Proof',
              desc: 'Paste your GitHub repo link and your LinkedIn post URL. That\'s it. Your public proof of work is recorded forever.',
            },
          ].map((s, i) => (
            <div key={s.n} className={`step-item anim-fade-up delay-${i + 1}`}>
              <div className="step-num">{s.n}</div>
              <div className="step-content">
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRACKS ────────────────────────────────── */}
      <section className="landing-section">
        <div className="section-eyebrow">Challenge Tracks</div>
        <h2 className="section-title">Choose your path.</h2>

        <div className="tracks-list">
          {TRACKS.map((track, i) => {
            const Icon = TRACK_ICONS[track.id]
            return (
              <Link
                key={track.id}
                to="/dashboard"
                className={`track-card anim-fade-up delay-${Math.min(i + 1, 6)}`}
              >
                <div
                  className="track-icon"
                  style={{ background: track.bg, color: track.color }}
                >
                  {Icon ? <Icon size={22} /> : <span>{track.icon}</span>}
                </div>
                <div className="track-info">
                  <div className="track-name">{track.name}</div>
                  <div className="track-desc">{track.desc}</div>
                </div>
                <div className="track-meta">
                  <span className="badge badge-muted">{track.difficulty}</span>
                  <span className="track-students">
                    <Users size={10} style={{ display: 'inline', marginRight: 3 }} />
                    {track.students}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  style={{ color: 'var(--text-faint)', flexShrink: 0 }}
                />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── PROOF OF WORK EXPLAINER ───────────────── */}
      <section className="landing-section">
        <div className="section-eyebrow">Daily Proof</div>
        <h2 className="section-title">Every day, two links.</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {[
            {
              Icon: GitBranch,
              color: '#f1f5f9',
              bg: 'rgba(241,245,249,0.07)',
              label: 'GitHub Commit',
              desc: 'A link to your commit or repository showing what you built. Your code history becomes your portfolio.',
            },
            {
              Icon: Link2,
              color: '#60a5fa',
              bg: 'rgba(14,102,194,0.1)',
              label: 'LinkedIn Post',
              desc: 'A public post sharing what you learned and shipped. Your consistency becomes visible to the world.',
            },
          ].map((item) => (
            <div key={item.label} className="card" style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  flexShrink: 0,
                }}
              >
                <item.Icon size={22} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.01em' }}>
                  {item.label}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="card anim-fade-up"
          style={{
            marginTop: 'var(--space-5)',
            background: 'var(--success-dim)',
            borderColor: 'rgba(16,185,129,0.2)',
            display: 'flex',
            gap: 'var(--space-3)',
            alignItems: 'flex-start',
          }}
        >
          <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--success)' }}>Why it matters:</strong>{' '}
            Recruiter visits to LinkedIn profiles spike when students post daily build updates.
            Public proof compounds over 60 days into a portfolio that speaks for itself.
          </p>
        </div>
      </section>

      {/* ── 60-DAY JOURNEY TIMELINE ───────────────── */}
      <section className="journey-section">
        <div className="section-eyebrow">The Journey</div>
        <h2 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
          Small builds become<br />
          big portfolios.
        </h2>

        <div className="journey-timeline">
          {JOURNEY_TIMELINE.map((item, i) => (
            <div key={item.day} className={`journey-item anim-fade-up delay-${Math.min(i + 1, 6)}`}>
              <div
                className="journey-node"
                style={{ borderColor: item.color, color: item.color }}
              >
                <span className="journey-node-day">DAY</span>
                <span className="journey-node-num">{item.day}</span>
              </div>
              <div className="journey-content">
                <div className="journey-phase" style={{ color: item.color }}>
                  {item.phase}
                </div>
                <div className="journey-title">{item.title}</div>
                <div className="journey-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 'var(--space-6)',
            padding: 'var(--space-4) var(--space-5)',
            background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(99,102,241,0.05) 100%)',
            border: '1px solid rgba(16,185,129,0.15)',
            borderRadius: 'var(--radius-lg)',
            fontSize: 13,
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}
        >
          Every challenge is designed to match where you are in the journey — starting with small, confidence-building builds and gradually moving to full projects you can deploy and share.
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section className="testimonials-section">
        <div className="section-eyebrow">Community</div>
        <h2 className="section-title" style={{ marginBottom: 'var(--space-6)' }}>
          What builders say.
        </h2>

        <div className="testimonials-list">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className={`testimonial-card anim-fade-up delay-${i + 1}`}>
              <span className="testimonial-quote-mark">"</span>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-meta">{t.college} · {t.track}</div>
                </div>
                <div className="testimonial-day-badge">Day {t.day} ✓</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mock-disclaimer">
          ✦ These are fictional demo testimonials illustrating the ABTalks experience.
        </p>
      </section>

      {/* ── FINAL CTA ─────────────────────────────── */}
      <section className="final-cta-section">
        <div className="final-cta-card">
          <div className="final-cta-glow" />

          <h2 className="final-cta-title">
            Your next 60 days<br />
            can look very{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0df286, #0ea5e9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>different.</span>
          </h2>

          <p className="final-cta-sub">
            60 days from now you'll either have 60 builds as proof — or you'll wish you'd started today. The only variable is whether you show up.
          </p>

          <Link
            to="/dashboard"
            className="btn btn-primary"
            style={{ justifyContent: 'center', minWidth: 200 }}
          >
            Start Building
            <ArrowRight size={16} />
          </Link>

          <p className="final-cta-tagline">
            No perfection required. Just show up and ship.
          </p>
        </div>
      </section>

      {/* ── FULL FOOTER ───────────────────────────── */}
      <footer>
        <div className="site-footer">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-mark">AB</span>
                ABTalks
              </div>
              <p className="footer-tagline">
                A 60-day build challenge for ambitious Indian college students.
                Ship every day. Become undeniable.
              </p>
            </div>

            {/* Nav links */}
            <nav className="footer-nav">
              <div className="footer-nav-title">Navigate</div>
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/dashboard" className="footer-nav-link">Dashboard</Link>
              <Link to="/day/12" className="footer-nav-link">Challenge</Link>
            </nav>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2024 ABTalks · Built for builders.</span>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Twitter / X">
                <MessageCircle size={14} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Camera size={14} />
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <PlayCircle size={14} />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <GitBranch size={14} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
