import { Link } from 'react-router-dom'
import { Target, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import LessonSidebar from '../components/LessonSidebar'

const STORAGE_KEY = 'learnspace-progress-v1'

function isDiagnosticDone() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved).diagnosticCompleted === true
  } catch {}
  return false
}

const objectives = [
  'Define and describe well-defined sets and identify their elements using appropriate mathematical language and notation.',
  'Differentiate finite and infinite sets, and classify sets according to their characteristics.',
  'Identify subsets and proper subsets and recognize the relationships between different sets.',
  'Perform basic set operations, including union, intersection, and difference of two sets.',
  'Illustrate sets, subsets, and set operations using appropriate Venn diagrams.',
  'Solve problems involving sets and Venn diagrams by applying appropriate mathematical concepts and strategies.',
]

export default function Objective() {
  const diagnosticDone = isDiagnosticDone()
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        <LessonSidebar />

        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* Page Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-emerald-600">
                <Target size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Learning Objectives
                </span>
              </div>

              <h1 className="text-3xl font-bold md:text-4xl">
                Objectives
              </h1>

              <p className="mt-4 leading-7 text-slate-500">
                At the end of the lesson, the Grade 7 learners should be able to:
              </p>
            </div>

            {/* Objectives List */}
            <ol className="flex flex-col gap-4">
              {objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="mt-1 leading-7 text-slate-700">
                    {objective}
                  </p>
                </li>
              ))}
            </ol>

            {/* CTA — only shown after diagnostic is done */}
            {diagnosticDone && (
              <div className="mt-10 flex justify-end">
                <Link
                  to="/lessons/1"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
                >
                  Start Lesson 1
                  <ArrowRight size={18} />
                </Link>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}
