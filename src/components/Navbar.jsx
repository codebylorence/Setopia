
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'TermsDefinitions', path: '/terms' },
    { name: 'Lessons', path: '/lessons' },
    { name: 'Resources', path: '/resources' },
    { name: 'Help', path: '/help' },
  ]

  const isActiveLink = (path) => {
    if (path === '/lessons') {
      return (
        location.pathname === '/lessons' ||
        location.pathname.startsWith('/lessons/')
      )
    }

    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/home"
          onClick={() => setIsOpen(false)}
          className="shrink-0 text-2xl font-bold tracking-tight text-indigo-600"
        >
          Setopia<span className="text-slate-800">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path !== '/lessons'}
              className={`text-sm font-medium transition-colors ${
                isActiveLink(link.path)
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path !== '/lessons'}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActiveLink(link.path)
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
