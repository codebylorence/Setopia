import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Trophy, PlayCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import LessonSidebar from '../components/LessonSidebar'
import IframeModal from '../components/IframeModal'

// ── Replace this URL with the real Final Quiz link ───────────────────────────
const FINAL_QUIZ_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe7VmI7SoBfbcxx1m0rjIar9cgVMoWDSbHafjrGxS8k2deXYw/alreadyresponded'

const STORAGE_KEY = 'learnspace-progress-v1'

function isReflectionDone() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved).reflectionCompleted === true
  } catch {}
  return false
}

export default function FinalQuiz() {
  const [open, setOpen] = useState(false)

  if (!isReflectionDone()) {
    return <Navigate to="/reflection" replace />
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        <LessonSidebar />

        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-yellow-500">
                <Trophy size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Post-Assessment
                </span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Final Quiz</h1>
              <p className="mt-4 leading-7 text-slate-500">
                You've completed all lessons and the reflection activity. You're ready for the
                Final Quiz. Click the button below to begin.
              </p>
            </div>

            {/* Launch card */}
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-yellow-200 bg-yellow-50 px-8 py-16 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                <Trophy size={36} className="text-yellow-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-yellow-800">Final Quiz</h2>
                <p className="mt-2 max-w-sm text-sm text-yellow-700">
                  This post-assessment covers everything you've learned about sets and Venn diagrams
                  across all ten lessons. Answer carefully and do your best!
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-yellow-600 active:scale-95"
              >
                <PlayCircle size={20} />
                Start Final Quiz
              </button>
            </div>

          </div>
        </main>
      </div>

      <IframeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        url={FINAL_QUIZ_URL}
        title="Final Quiz — Sets and Venn Diagrams"
      />
    </div>
  )
}
