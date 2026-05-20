import { useState } from 'react'
import rfLogo from '../assets/rf-logo.svg'
import eventIcon from '../assets/event-icon.png'
import searchIcon from '../assets/icons/search.svg'

const subNav = [
  'Attendees',
  'Attendee types',
  'Packages',
  'Reg codes',
  'Discounts',
]

const primaryNav = [
  { label: 'Guide', key: 'guide' },
  { label: 'Attendees', key: 'attendees', active: true, children: subNav },
  { label: 'Content', key: 'content' },
  { label: 'Exhibitors', key: 'exhibitors' },
]

export default function Sidebar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <aside
      className={`sidebar${navOpen ? ' sidebar--open' : ''}`}
      aria-label="Event navigation"
    >
      <div className="rail">
        <div className="rail__logo" aria-hidden="true">
          <img src={rfLogo} alt="" />
        </div>
        <button
          type="button"
          className="rail__menu-toggle"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          aria-controls="sidebar-mobile-panel"
          onClick={() => setNavOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            width="20"
            height="20"
            fill="none"
          >
            {navOpen ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
        <div className="rail__org" aria-hidden="true">
          <img src={eventIcon} alt="" className="rail__org-img" />
        </div>
        <div className="rail__user">
          <span
            className="rail__avatar"
            aria-label="Signed-in user FL"
            role="img"
          >
            FL
          </span>
        </div>
      </div>

      <div id="sidebar-mobile-panel" className="sidebar-panel">
        <div className="sidebar-panel__event-title">RainFocus Summit</div>
        <div className="sidebar-panel__event-meta">
          <span>Lehi, UT</span>
          <span className="dot" aria-hidden="true" />
          <span>December 15th</span>
        </div>

        <div className="sidebar-panel__search-wrap">
          <label className="sidebar-panel__search">
            <img
              src={searchIcon}
              alt=""
              aria-hidden="true"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              defaultValue=""
            />
          </label>
        </div>

        <nav className="sidebar-panel__nav" aria-label="Main">
          <ul className="mega-nav" role="list">
            {primaryNav.map((item) => (
              <li key={item.key}>
                <button
                  type="button"
                  className={`nav-item${item.active ? ' nav-item--active' : ''}`}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="nav-item__icon" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
                {item.active && item.children && (
                  <ul className="nav-sub-list" role="list">
                    {item.children.map((child) => (
                      <li key={child} className="nav-sub-item">
                        <button
                          type="button"
                          onClick={() => setNavOpen(false)}
                        >
                          {child}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
