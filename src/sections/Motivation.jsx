import { useState } from 'react'
import { Sparkles, PlayCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import LessonSidebar from '../components/LessonSidebar'
import IframeModal from '../components/IframeModal'

// ── Replace this URL with the real Motivation activity link ──────────────────
const MOTIVATION_URL = 'https://view.genially.com/6aff2a689342f1780dd1317c'

export default function Motivation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        <LessonSidebar />

        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-3xl">

            {/* Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-amber-500">
                <Sparkles size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Motivation
                </span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">
                What's the Connection?
              </h1>
              <p className="mt-4 leading-7 text-slate-500">
                Before diving into the lessons, warm up with this quick activity.
                Look at the groups of objects and figure out what connects them.
                Click the button below to begin.
              </p>
            </div>

            {/* Launch card */}
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-amber-200 bg-amber-50 px-8 py-16 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
                <Sparkles size={36} className="text-amber-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-amber-800">Motivation Activity</h2>
                <p className="mt-2 max-w-sm text-sm text-amber-700">
                  An interactive warm-up activity to get you thinking about groups and categories — the foundation of sets.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-600 active:scale-95"
              >
                <PlayCircle size={20} />
                Launch Activity
              </button>
            </div>

          </div>
        </main>
      </div>

      <IframeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        url={MOTIVATION_URL}
        title="Motivation Activity"
      />
    </div>
  )
}
