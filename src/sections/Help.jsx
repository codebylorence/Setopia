import { useState } from 'react'
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  RefreshCw,
  Sparkles,
  Trophy,
} from 'lucide-react'
import Navbar from '../components/Navbar'

// ── Accordion component ───────────────────────────────────────────────────────
function Accordion({ question, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-slate-800">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">
          {children}
        </div>
      )}
    </div>
  )
}

// ── Step card ─────────────────────────────────────────────────────────────────
function Step({ icon: Icon, number, title, description }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
        <Icon size={20} className="text-indigo-600" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Step {number}
        </p>
        <h3 className="mt-1 font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Help() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <main className="mx-auto max-w-4xl px-5 py-12 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-indigo-600">
            <CircleHelp size={19} />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Help & Support
            </span>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">How Can We Help You?</h1>
        </div>


        {/* ── Section 3 : Troubleshooting ── */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-2">
            <AlertCircle size={20} className="text-red-500" />
            <h2 className="text-xl font-bold">Troubleshooting</h2>
          </div>

          <div className="flex flex-col gap-3">
            <Accordion question="My progress disappeared after refreshing the page.">
              Progress is stored in your browser's local storage. It can be lost if you:
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>Cleared your browser history or site data</li>
                <li>Opened the site in a private / incognito window</li>
                <li>Switched to a different browser or device</li>
              </ul>
              To avoid this, always use the same browser and do not clear site data while studying.
            </Accordion>

            <Accordion question="I completed the diagnostic test but Lesson 1 is still locked.">
              Make sure you clicked <strong>Submit Diagnostic Test</strong> and saw the page redirect
              to Lesson 1. If the button was greyed out, check that:
              <ul className="mt-2 list-disc pl-5">
                <li>You filled in your Full Name and Grade &amp; Section</li>
                <li>You answered all 10 questions (including Part II)</li>
              </ul>
              If the problem persists, try refreshing the page and submitting again.
            </Accordion>

            <Accordion question="The Submit button in the diagnostic test is not clickable.">
              The Submit button is disabled until all three conditions are met:
              <ol className="mt-2 list-decimal pl-5">
                <li>Full Name field is filled in</li>
                <li>Grade and Section field is filled in</li>
                <li>All 10 questions have a selected answer</li>
              </ol>
              Scroll through the test to make sure no question was skipped.
            </Accordion>

            <Accordion question="I answered the independent practice correctly but the next lesson is still locked.">
              After submitting a correct answer you should see a green confirmation message and a
              <strong> Next Lesson</strong> button. If the next lesson still appears locked, try
              clicking the sidebar link for that lesson. If it remains locked, refresh the page —
              your progress is saved and the lesson should unlock on reload.
            </Accordion>

            <Accordion question="The Motivation is not accepting my answer.">
              Type your answer in the text box and click <strong>Submit</strong> or press
              <strong> Enter</strong>. Answers are case-insensitive and punctuation is ignored, so
              "fruits", "Fruits", and "FRUITS" are all accepted. If you are unsure, use the
              <strong> Reveal Answer</strong> button to see the correct answer.
            </Accordion>

            <Accordion question="The page looks broken or styles are missing.">
              Try a hard refresh:
              <ul className="mt-2 list-disc pl-5">
                <li>Windows / Linux: <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs">Ctrl + Shift + R</kbd></li>
                <li>Mac: <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs">Cmd + Shift + R</kbd></li>
              </ul>
              If the issue continues, try opening the site in a different browser.
            </Accordion>

            <Accordion question="My answers were not saved to the teacher's record.">
              Answers are submitted automatically when you complete the diagnostic test. This
              requires an internet connection at the time of submission. If you were offline,
              your local progress is still saved — but contact your teacher to let them know
              so they can manually record your result.
            </Accordion>
          </div>
        </section>

        {/* ── Section 4 : FAQ ── */}
        <section className="mb-14">
          <h2 className="mb-6 text-xl font-bold">Frequently Asked Questions</h2>

          <div className="flex flex-col gap-3">
            <Accordion question="Do I need to create an account to use this website?">
              No. The website does not require registration or login. You can start learning immediately.
            </Accordion>

            <Accordion question="Can I retake the diagnostic test?">
              Once the diagnostic test is submitted your progress is saved and the test cannot be
              retaken from the same browser. Contact your teacher if you need to reset your progress.
            </Accordion>

            <Accordion question="Can I skip lessons?">
              Lessons unlock in order. You must complete the independent practice of each lesson
              correctly before the next one becomes available. This ensures you build on each concept
              before moving forward.
            </Accordion>

            <Accordion question="Does the website work on mobile?">
              Yes. The website is fully responsive and works on phones and tablets. For the best
              experience, use a modern browser such as Chrome, Firefox, Safari, or Edge.
            </Accordion>

            <Accordion question="Where is my progress stored?">
              Progress is stored in your browser's local storage — no account or server is needed.
              It is device-specific, so switching browsers or devices will start fresh progress.
            </Accordion>
          </div>
        </section>

        {/* ── Contact banner ── */}
        <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
              <RefreshCw size={20} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-indigo-800">Still need help?</h3>
              <p className="mt-1 text-sm leading-7 text-indigo-700">
                If your issue is not listed here, please contact your teacher directly.
                Describe the problem and which page or step you were on when it occurred.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 LearnSpace. All rights reserved.
      </footer>
    </div>
  )
}
