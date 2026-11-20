import Navbar from '../components/Navbar'
import ActivitySidebar from '../components/ActivitySidebar'
import { Globe } from 'lucide-react'

const scenarios = [
  {
    id: 1,
    title: 'Scenario 1: Favorite Snacks',
    context: 'A school conducted a survey among 50 students about their favorite snacks.',
    bullets: [
      '30 students like pretzels',
      '25 students like breadsticks',
      '15 students like both',
    ],
    questions: [
      'How many students like pretzels and breadsticks?',
      'How many students like only pretzels?',
      'How many students like neither snack?',
    ],
    color: 'emerald',
  },
  {
    id: 2,
    title: 'Scenario 2: School Clubs',
    context: 'A school has 70 students who joined different clubs.',
    bullets: [
      '35 students joined the Science club.',
      '30 students joined the Math club.',
      '12 students joined both clubs.',
    ],
    questions: [
      'How many students joined Science and Math clubs?',
      'How many students joined only the Math club?',
      'How many students joined neither club?',
    ],
    color: 'blue',
  },
]

const colorMap = {
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-600 text-white', bullet: 'text-emerald-600', num: 'text-emerald-700' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    badge: 'bg-blue-600 text-white',    bullet: 'text-blue-600',    num: 'text-blue-700'    },
}

export default function RealLifeScenarios() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <ActivitySidebar />
        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-emerald-600">
                <Globe size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">Learning Activities</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">CHALLENGE YOUR MIND!</h1>
            </div>

            <div className="flex flex-col gap-10">
              {scenarios.map((s) => {
                const c = colorMap[s.color]
                return (
                  <section key={s.id} className={`rounded-2xl border ${c.border} ${c.bg} p-6 md:p-8`}>
                    <h2 className="mb-4 text-lg font-bold">{s.title}</h2>
                    <p className="mb-3 text-sm leading-7 text-slate-700">{s.context}</p>
                    <ul className="mb-6 flex flex-col gap-1.5">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.badge}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mb-4 text-sm font-semibold text-slate-600">Questions:</p>
                    <ol className="flex flex-col gap-4">
                      {s.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${c.badge}`}>
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-800">{q}</p>
                            <div className="mt-2 h-10 rounded-xl border border-dashed border-slate-300 bg-white" />
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                )
              })}
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
