import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Lightbulb,
  Rocket,
  Target,
  Trophy,
} from 'lucide-react'

import Navbar from '../components/Navbar'

const learningSteps = [
  {
    number: '01',
    icon: Rocket,
    title: 'Get Started',
    description:
      'Read the introduction to understand the purpose and scope of this learning material.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Review Key Terms',
    description:
      'Visit Terms and Definitions to familiarize yourself with important mathematical words and symbols.',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Take the Diagnostic Test',
    description:
      'Answer the diagnostic test to assess your prior knowledge before starting the lessons.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Study and Practice',
    description:
      'Go through each lesson, review the examples, and complete the independent practice to unlock the next one.',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Complete the Final Quiz',
    description:
      'After finishing all ten lessons, take the final quiz to assess your overall understanding.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <main>

        {/* Hero */}
        <section className="bg-linear-to-b from-indigo-50 to-white px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              <BookOpen size={16} />
              Grade 7 Mathematics Learning Module
            </span>

            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Sets and
              <span className="text-indigo-600"> Venn Diagrams</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Learn to describe, classify, and operate on sets — then
              visualize relationships using Venn diagrams.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/lessons"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-500">
              {['10 Lessons', 'Guided Examples', 'Learning Activities', 'No Registration'].map(
                (feature) => (
                  <span key={feature} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    {feature}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Student Info */}
        <section className="bg-indigo-600 px-6 py-10">
          <div className="mx-auto max-w-7xl">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Student's Name", value: 'REGONDOLA, JHEANNE ALTHEA MAE G.' },
                { label: 'Year and Section', value: 'BSED MATHEMATICS 3-1' },
                { label: 'School Year', value: '2026 – 2027' },
                { label: 'Instructor', value: 'AILA JOY COLLANTES' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-sm"
                >
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-200">
                    {label}
                  </dt>
                  <dd className="text-base font-bold leading-snug text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                About the Module
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                What This Module Is About
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">

              <article className="rounded-2xl border border-slate-200 p-8 transition hover:border-indigo-200 hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                  <Target size={24} strokeWidth={1.8} className="text-indigo-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold">Purpose</h3>
                <p className="leading-7 text-slate-600">
                  This material provides clear, step-by-step lessons on sets and Venn diagrams
                  to help students identify, describe, classify, and operate on sets — and apply
                  them to real-life situations.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-8 transition hover:border-indigo-200 hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                  <Lightbulb size={24} strokeWidth={1.8} className="text-indigo-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold">Why It Matters</h3>
                <p className="leading-7 text-slate-600">
                  Sets teach us how to organize and compare information — a skill used in
                  everyday life and as a foundation for more advanced mathematics like logic,
                  algebra, and statistics.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-8 transition hover:border-indigo-200 hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                  <BookOpen size={24} strokeWidth={1.8} className="text-indigo-600" />
                </div>
                <h3 className="mb-3 text-lg font-bold">What You Will Learn</h3>
                <p className="leading-7 text-slate-600">
                  Topics include well-defined sets, set notation, finite and infinite sets,
                  subsets, union, intersection, difference, and solving problems using
                  Venn diagrams.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="scroll-mt-24 bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Getting Started
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                How to Use This Website
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
                Follow these steps to complete your learning journey.
              </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-5">
              {learningSteps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.number}
                    className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-sm sm:flex-row sm:items-start"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                      <Icon size={24} strokeWidth={1.8} className="text-indigo-600" />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                        Step {step.number}
                      </span>
                      <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mx-auto mt-8 flex max-w-4xl items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-indigo-600" />
              <p className="text-sm leading-7 text-indigo-800">
                <span className="font-bold">Reminder: </span>
                You must answer each independent practice correctly to unlock the next lesson.
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
