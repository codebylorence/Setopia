import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BookMarked, ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'

const sections = [
  { id: 'content-standard',     label: 'Content Standard' },
  { id: 'performance-standard', label: 'Performance Standard' },
  { id: 'melcs',                label: 'Most Essential Learning Competencies (MELCs)' },
  { id: 'deped-competencies',   label: 'DepEd Learning Competencies' },
]

const colorMap = {
  'content-standard':     { badge: 'bg-indigo-600 text-white',  active: 'bg-indigo-100 text-indigo-700',   accent: 'text-indigo-600',  border: 'border-indigo-200',  bg: 'bg-indigo-50'  },
  'performance-standard': { badge: 'bg-emerald-600 text-white', active: 'bg-emerald-100 text-emerald-700', accent: 'text-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50' },
  'melcs':                { badge: 'bg-amber-500 text-white',   active: 'bg-amber-100 text-amber-700',     accent: 'text-amber-600',   border: 'border-amber-200',   bg: 'bg-amber-50'   },
  'deped-competencies':   { badge: 'bg-rose-600 text-white',    active: 'bg-rose-100 text-rose-700',       accent: 'text-rose-600',    border: 'border-rose-200',    bg: 'bg-rose-50'    },
}

export default function LearningCompetencies() {
  const [activeId, setActiveId]       = useState('content-standard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location                      = useLocation()

  // Scroll to hash when arriving from an external link (e.g. LessonSidebar)
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      // Small delay so the page renders before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.hash])

  // Highlight sidebar link matching the section in view
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveId(closest.id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <div className="flex flex-col lg:flex-row">

        {/* ── Mobile toggle ── */}
        <div className="border-b border-slate-200 bg-white p-4 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-expanded={sidebarOpen}
            className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-3 text-sm font-semibold"
          >
            Browse Sections
            <ChevronDown size={20} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* ── Sidebar ── */}
        <aside
          className={`
            ${sidebarOpen ? 'block' : 'hidden'}
            w-full border-b border-slate-200 bg-slate-50
            lg:sticky lg:top-20 lg:block
            lg:h-[calc(100vh-5rem)] lg:w-80 lg:shrink-0
            lg:overflow-y-auto lg:border-b-0 lg:border-r
          `}
        >
          <div className="p-6">

            {/* Sidebar header card */}
            <div className="mb-6 overflow-hidden rounded-2xl bg-indigo-600 p-5 text-white">
              <div className="mb-3 flex items-center gap-2 opacity-80">
                <BookMarked size={15} />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Competency Areas
                </span>
              </div>
              <h2 className="text-lg font-bold leading-snug">Learning Competencies</h2>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { label: 'Subject',     value: 'Mathematics' },
                  { label: 'Grade Level', value: 'Grade 7' },
                  { label: 'Topic',       value: 'Sets and Venn Diagrams' },
                  { label: 'Quarter',     value: 'Second Quarter' },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-white/10 px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <nav aria-label="Competency section navigation">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sections
              </h3>
              <ul className="flex flex-col gap-2">
                {sections.map(({ id, label }, index) => {
                  const isActive = id === activeId
                  const c = colorMap[id]
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                          isActive ? c.active : 'text-slate-600 hover:bg-slate-200/60'
                        }`}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                          isActive ? c.badge : 'bg-slate-200 text-slate-500'
                        }`}>
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-5">{label}</p>
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

          </div>
        </aside>

        {/* ── Main content (all sections on one page) ── */}
        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl space-y-16">

            {/* ── Content Standard ── */}
            <section id="content-standard" className="scroll-mt-24">
              <SectionHeader id="content-standard" title="Content Standard" index={0} />
              <div className={`mt-6 rounded-2xl border ${colorMap['content-standard'].border} ${colorMap['content-standard'].bg} p-8`}>
                <p className="text-lg leading-8 text-slate-700">
                  The learners demonstrate knowledge and understanding of sets and subsets, and the
                  union and intersection of sets and Venn diagrams.
                </p>
              </div>
            </section>

            {/* ── Performance Standard ── */}
            <section id="performance-standard" className="scroll-mt-24">
              <SectionHeader id="performance-standard" title="Performance Standard" index={1} />
              <div className={`mt-6 rounded-2xl border ${colorMap['performance-standard'].border} ${colorMap['performance-standard'].bg} p-8`}>
                <p className="text-lg leading-8 text-slate-700">
                  The learners describe sets and their subsets, and the union and intersection of
                  sets. They illustrate sets and subsets, and the union and intersection of sets,
                  using Venn diagrams.
                </p>
              </div>
            </section>

            {/* ── MELCs ── */}
            <section id="melcs" className="scroll-mt-24">
              <SectionHeader id="melcs" title="Most Essential Learning Competencies (MELCs)" index={2} />
              <p className="mt-6 leading-7 text-slate-600">
                The following are the relevant Grade 7 MELCs from the earlier K–12 MELC framework:
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {[
                  'Illustrates the union and intersection of sets and the difference of two sets.',
                  'Uses Venn diagrams to represent sets, subsets, and set operations.',
                  'Solves problems involving sets.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${colorMap['melcs'].badge}`}>
                      {i + 1}
                    </span>
                    <p className="mt-1 leading-7 text-slate-700">{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── DepEd Learning Competencies ── */}
            <section id="deped-competencies" className="scroll-mt-24">
              <SectionHeader id="deped-competencies" title="DepEd Learning Competencies" index={3} />
              <p className="mt-6 leading-7 text-slate-600">
                These are the specific competencies reflected in the revised Grade 7 Mathematics
                Budget of Work:
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={colorMap['deped-competencies'].badge}>
                      <th className="px-6 py-4 text-left font-semibold">Lesson</th>
                      <th className="px-6 py-4 text-left font-semibold">Corresponding Competency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { lesson: 'Well-Defined Sets',             competency: 'Define sets and identify elements belonging to a given set.' },
                      { lesson: 'Describing Sets',               competency: 'Describe a set using correct mathematical language and notation.' },
                      { lesson: 'Finite and Infinite Sets',       competency: 'Differentiate between finite and infinite sets.' },
                      { lesson: 'Basic Set Notations',            competency: 'Recognize and use basic set notations.' },
                      { lesson: 'Classifying Sets',               competency: 'Define cardinality and classify sets as singleton, equal, or equivalent.' },
                      { lesson: 'Subsets and Proper Subsets',     competency: 'Identify subsets and proper subsets of a set.' },
                      { lesson: 'Basic Set Operations',           competency: 'Perform union, intersection, and complement.' },
                      { lesson: 'Difference of Two Sets',         competency: 'Find the difference between two sets.' },
                      { lesson: 'Understanding Venn Diagrams',    competency: 'Illustrate sets, subsets, unions, and intersections through Venn diagrams.' },
                      { lesson: 'Problem Solving Involving Sets', competency: 'Apply set concepts and Venn diagrams to solve problems involving sets.' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <td className="w-48 px-6 py-4 align-top font-medium text-slate-800">{row.lesson}</td>
                        <td className="px-6 py-4 leading-7 text-slate-600">{row.competency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </main>

      </div>
    </div>
  )
}

function SectionHeader({ id, title, index }) {
  const c = colorMap[id]
  return (
    <div className="flex items-center gap-4">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${c.badge}`}>
        {index + 1}
      </span>
      <h2 className={`text-2xl font-bold ${c.accent}`}>{title}</h2>
    </div>
  )
}
