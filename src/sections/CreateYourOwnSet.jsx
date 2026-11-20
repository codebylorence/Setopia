import Navbar from '../components/Navbar'
import ActivitySidebar from '../components/ActivitySidebar'
import { Pencil } from 'lucide-react'

const tasks = [
  {
    number: 1,
    label: 'Well-Defined Set',
    instruction: 'Think of one collection from your surroundings that is well-defined. Write it in roster form and explain why it is well-defined.',
    color: 'indigo',
  },
  {
    number: 2,
    label: 'Not Well-Defined Collection',
    instruction: 'Think of one collection from your surroundings that is NOT well-defined. Write it and explain why it cannot be clearly determined.',
    color: 'rose',
  },
  {
    number: 3,
    label: 'Turn It Into a Well-Defined Set',
    instruction: 'Take your not well-defined collection from #2 and add a clear condition to make it well-defined. Rewrite it in proper set notation and explain what condition you added.',
    color: 'emerald',
  },
]

const colorMap = {
  indigo:  { badge: 'bg-indigo-600 text-white',  border: 'border-indigo-200',  bg: 'bg-indigo-50',  label: 'text-indigo-700'  },
  rose:    { badge: 'bg-rose-600 text-white',    border: 'border-rose-200',    bg: 'bg-rose-50',    label: 'text-rose-700'    },
  emerald: { badge: 'bg-emerald-600 text-white', border: 'border-emerald-200', bg: 'bg-emerald-50', label: 'text-emerald-700' },
}

export default function CreateYourOwnSet() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <ActivitySidebar />
        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-violet-600">
                <Pencil size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">Learning Activities</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Create Your Own Sets!</h1>
              <p className="mt-4 leading-7 text-slate-500">
                Think of three collections from your surroundings and complete the tasks below.
                Explain all your answers.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {tasks.map((task) => {
                const c = colorMap[task.color]
                return (
                  <div key={task.number} className={`rounded-2xl border ${c.border} ${c.bg} p-6 md:p-8`}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${c.badge}`}>
                        {task.number}
                      </span>
                      <h2 className={`text-base font-bold ${c.label}`}>{task.label}</h2>
                    </div>
                    <p className="mb-5 text-sm leading-7 text-slate-700">{task.instruction}</p>
                    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-4 min-h-20">
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
