import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { BookHeart, ArrowRight, CheckCircle2, LockKeyhole, PlayCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import LessonSidebar, { lessons } from '../components/LessonSidebar'
import IframeModal from '../components/IframeModal'

// ── Replace this URL with the real Reflection form/activity link ─────────────
const REFLECTION_URL = 'https://classroom.google.com/c/OTAwNTEwODQwMTE5/p/OTAwNTEwOTMxMDY3/details'

const STORAGE_KEY = 'learnspace-progress-v1'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return {
        diagnosticCompleted: parsed.diagnosticCompleted ?? false,
        completedLessons:    parsed.completedLessons    ?? [],
        reflectionCompleted: parsed.reflectionCompleted ?? false,
      }
    }
  } catch {}
  return { diagnosticCompleted: false, completedLessons: [], reflectionCompleted: false }
}

function markReflectionDone() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    const existing = saved ? JSON.parse(saved) : {}
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...existing, reflectionCompleted: true }))
  } catch {}
}

export default function Reflection() {
  const navigate = useNavigate()
  const progress = loadProgress()

  const allLessonsCompleted = progress.completedLessons.length >= lessons.length

  const [open, setOpen]           = useState(false)
  const [submitted, setSubmitted] = useState(progress.reflectionCompleted)

  if (!progress.diagnosticCompleted) {
    return <Navigate to="/lessons/1" replace />
  }

  const handleDone = () => {
    markReflectionDone()
    setSubmitted(true)
    setOpen(false)
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
              <div className="mb-3 flex items-center gap-2 text-pink-500">
                <BookHeart size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Reflection
                </span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">Learning Reflection</h1>
              <p className="mt-4 leading-7 text-slate-500">
                Before taking the Final Quiz, take a moment to reflect on what you have learned.
                Complete the reflection activity below. Submitting it will unlock the Final Quiz.
              </p>
            </div>

            {/* ── Locked ── */}
            {!allLessonsCompleted && !submitted && (
              <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-20 text-center">
                <LockKeyhole size={40} className="mb-4 text-slate-400" />
                <h2 className="text-xl font-bold text-slate-600">Reflection is Locked</h2>
                <p className="mt-2 max-w-sm text-sm text-slate-500">
                  Complete all 10 lessons first to unlock this activity.
                </p>
              </div>
            )}

            {/* ── Already submitted ── */}
            {submitted && (
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-green-200 bg-green-50 py-16 text-center">
                <CheckCircle2 size={48} className="mb-4 text-green-500" />
                <h2 className="text-xl font-bold text-green-700">Reflection Completed!</h2>
                <p className="mt-2 max-w-sm text-sm text-green-600">
                  Great job reflecting on your learning. The Final Quiz is now unlocked.
                </p>
                <button
                  onClick={() => navigate('/final-quiz')}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-7 py-3 font-semibold text-white transition hover:bg-yellow-600"
                >
                  Go to Final Quiz
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* ── Unlocked, not yet submitted ── */}
            {allLessonsCompleted && !submitted && (
              <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-pink-200 bg-pink-50 px-8 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
                  <BookHeart size={36} className="text-pink-500" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-pink-800">Reflection Activity</h2>
                  <p className="mt-2 max-w-sm text-sm text-pink-700">
                    Answer a few short reflection prompts about your learning journey. Once you finish and submit the form, click <span className="font-semibold">Mark as Done</span> to unlock the Final Quiz.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-pink-600 active:scale-95"
                >
                  <PlayCircle size={20} />
                  Open Reflection Form
                </button>

                {/* Mark as done — appears after they open the modal at least once */}
                <button
                  type="button"
                  onClick={handleDone}
                  className="inline-flex items-center gap-2 rounded-xl border border-pink-300 bg-white px-6 py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
                >
                  <CheckCircle2 size={16} />
                  I'm done — Mark as Complete
                </button>
              </div>
            )}

          </div>
        </main>
      </div>

      <IframeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        url={REFLECTION_URL}
        title="Learning Reflection"
      />
    </div>
  )
}
