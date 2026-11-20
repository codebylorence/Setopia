import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, Zap } from 'lucide-react'

const links = [
  { path: '/independent-practices', label: "LET'S THINK!",         color: 'text-indigo-600',  bg: 'bg-indigo-50',  active: 'bg-indigo-100 text-indigo-700',   badge: 'bg-indigo-600 text-white'  },
  { path: '/real-life-scenarios',   label: 'CHALLENGE YOUR MIND!', color: 'text-emerald-600', bg: 'bg-emerald-50', active: 'bg-emerald-100 text-emerald-700', badge: 'bg-emerald-600 text-white' },
  { path: '/hots-questions',        label: 'MATH DETECTIVE',       color: 'text-rose-600',    bg: 'bg-rose-50',    active: 'bg-rose-100 text-rose-700',       badge: 'bg-rose-600 text-white'    },
  { path: '/create-your-own-set',   label: 'CREATE YOUR OWN SET!', color: 'text-violet-600',  bg: 'bg-violet-50',  active: 'bg-violet-100 text-violet-700',   badge: 'bg-violet-600 text-white'  },
]

export default function ActivitySidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle */}
      <div className="border-b border-slate-200 bg-white p-4 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-3 text-sm font-semibold"
        >
          Browse Activities
          <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <aside
        className={`
          ${isOpen ? 'block' : 'hidden'}
          w-full border-b border-slate-200 bg-slate-50
          lg:sticky lg:top-20 lg:block
          lg:h-[calc(100vh-5rem)] lg:w-80 lg:shrink-0
          lg:overflow-y-auto lg:border-b-0 lg:border-r
        `}
      >
        <div className="p-6">

          {/* Header */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2 text-indigo-600">
              <Zap size={19} />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Learning Activities
              </span>
            </div>
            <h2 className="text-2xl font-bold">Activities</h2>
            <p className="mt-3 text-sm text-slate-500">
              Select an activity to explore its content.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Activity navigation">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Sections
            </h3>
            <ul className="flex flex-col gap-2">
              {links.map(({ path, label, icon: Icon, color, bg, active, badge }, index) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                        isActive ? active : 'text-slate-600 hover:bg-slate-200/60'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${isActive ? badge : `${bg} ${color}`}`}>
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-5">{label}</p>
                        </div>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </aside>
    </>
  )
}
