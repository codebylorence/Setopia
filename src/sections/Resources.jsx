import { ExternalLink, BookOpen, FileText, Sparkles, GraduationCap, BookHeart, Trophy, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'

const resources = [
  {
    number: 1,
    title: 'Learning Competencies',
    description: 'DepEd Grade 7 Mathematics curriculum guide. Refer to Second Term, Week 5–6 (Pages 4–5 of 9).',
    url: 'https://www.deped.gov.ph/wp-content/uploads/5-G7-Mathematics.pdf',
    tag: 'PDF · DepEd',
    icon: FileText,
    color: 'indigo',
  },
  {
    number: 2,
    title: 'Terms and Definitions',
    description: 'A reference on Venn diagrams covering key terms and definitions used in this module.',
    url: 'https://statisticsfundamentals.com/statistics-and-probability/venn-diagrams/',
    tag: 'Web · Statistics Fundamentals',
    icon: BookOpen,
    color: 'indigo',
  },
  {
    number: 3,
    title: 'Motivation',
    description: 'An interactive warm-up activity to get you thinking about groups and categories.',
    url: 'https://view.genially.com/6aff2a689342f1780dd1317c',
    tag: 'Genially · Interactive',
    icon: Sparkles,
    color: 'amber',
  },
  {
    number: 4,
    title: 'Lessons',
    description: 'DepEd ADM Module 2 for Grade 7 Mathematics — Sets and Venn Diagrams.',
    url: 'https://depedtambayan.net/wp-content/uploads/2021/10/MATH7-ADM-MODULE-2.pdf',
    tag: 'PDF · DepEd Tambayan',
    icon: GraduationCap,
    color: 'emerald',
  },
  {
    number: 5,
    title: 'Reflection',
    description: 'Complete your learning reflection activity on Google Classroom before taking the Final Quiz.',
    url: 'https://classroom.google.com/c/OTAwNTEwODQwMTE5',
    tag: 'Google Classroom',
    icon: BookHeart,
    color: 'pink',
  },
  {
    number: 6,
    title: 'Final Quiz',
    description: 'Post-assessment covering all ten lessons on Sets and Venn Diagrams.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe7VmI7SoBfbcxx1m0rjIar9cgVMoWDSbHafjrGxS8k2deXYw/alreadyresponded',
    tag: 'Google Forms',
    icon: Trophy,
    color: 'yellow',
  },
]

const colorMap = {
  indigo:  { badge: 'bg-indigo-100 text-indigo-700',   icon: 'bg-indigo-100 text-indigo-600',   border: 'hover:border-indigo-300',  btn: 'bg-indigo-600 hover:bg-indigo-700'  },
  slate:   { badge: 'bg-slate-100 text-slate-500',     icon: 'bg-slate-100 text-slate-500',     border: '',                         btn: ''                                   },
  amber:   { badge: 'bg-amber-100 text-amber-700',     icon: 'bg-amber-100 text-amber-600',     border: 'hover:border-amber-300',   btn: 'bg-amber-500 hover:bg-amber-600'    },
  emerald: { badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-100 text-emerald-600', border: 'hover:border-emerald-300', btn: 'bg-emerald-600 hover:bg-emerald-700'},
  pink:    { badge: 'bg-pink-100 text-pink-700',       icon: 'bg-pink-100 text-pink-600',       border: 'hover:border-pink-300',    btn: 'bg-pink-500 hover:bg-pink-600'      },
  yellow:  { badge: 'bg-yellow-100 text-yellow-700',   icon: 'bg-yellow-100 text-yellow-600',   border: 'hover:border-yellow-300',  btn: 'bg-yellow-500 hover:bg-yellow-600'  },
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Page header */}
      <section className="bg-indigo-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Resources
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Learning Resources
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            All the materials, tools, and links you need to complete this module on
            Sets and Venn Diagrams.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => {
              const Icon   = r.icon
              const c      = colorMap[r.color]
              const isLive = !!r.url

              return (
                <div
                  key={r.number}
                  className={`flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${isLive ? c.border : ''}`}
                >
                  {/* Top row */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.icon}`}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}>
                      {r.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h2 className="text-lg font-bold">{r.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{r.description}</p>
                  </div>

                  {/* Action */}
                  <div className="mt-6">
                    {isLive ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition ${c.btn}`}
                      >
                        <ExternalLink size={15} />
                        Open Resource
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-400">
                        <Clock size={15} />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
