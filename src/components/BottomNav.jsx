import { NavLink, useLocation } from 'react-router-dom'
import { Home, Zap, BarChart2, User } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/',          icon: Home,     label: 'Home'      },
  { to: '/day/12',    icon: Zap,      label: 'Challenge' },
  { to: '/dashboard', icon: BarChart2, label: 'Progress'  },
  { to: '/profile',   icon: User,     label: 'Profile'   },
]

export default function BottomNav() {
  const { pathname } = useLocation()

  // Helper: figure out which nav item is "active"
  function isActive(to) {
    if (to === '/') return pathname === '/'
    if (to === '/day/12') return pathname.startsWith('/day/')
    if (to === '/dashboard') return pathname === '/dashboard'
    return pathname === to
  }

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map(({ to, icon: Icon, label }) => {
        const active = isActive(to)
        return (
          <NavLink
            key={to}
            to={to}
            className={`bottom-nav-item ${active ? 'active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="bottom-nav-icon">
              <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
              {active && <span className="bottom-nav-dot" />}
            </span>
            <span className="bottom-nav-label">{label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
