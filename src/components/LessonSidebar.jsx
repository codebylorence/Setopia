
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookHeart,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  LockKeyhole,
  Sparkles,
  Target,
  Trophy,
  UnlockKeyhole,
} from 'lucide-react'

export const lessons = [
  { id: 1, title: 'Well Defined Sets' },
  { id: 2, title: 'Describing Sets' },
  { id: 3, title: 'Finite and Infinite Sets' },
  { id: 4, title: 'Basic Set Notations' },
  { id: 5, title: 'Classifying Sets' },
  { id: 6, title: 'Subsets and Proper Subsets' },
  { id: 7, title: 'Basic Set Operations' },
  { id: 8, title: 'Difference of Two Sets' },
  { id: 9, title: 'Understanding the Venn Diagram' },
  { id: 10, title: 'Problem Solving Involving Sets' },
]

const STORAGE_KEY = 'learnspace-progress-v1'

function readProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return {
        diagnosticCompleted: parsed.diagnosticCompleted ?? false,
        unlockedLesson: parsed.unlockedLesson ?? 0,
        completedLessons: parsed.completedLessons ?? [],
        reflectionCompleted: parsed.reflectionCompleted ?? false,
      }
    }
  } catch {}
  return { diagnosticCompleted: false, unlockedLesson: 0, completedLessons: [], reflectionCompleted: false }
}

export default function LessonSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const { diagnosticCompleted, unlockedLesson, completedLessons, reflectionCompleted } = readProgress()
  const allLessonsCompleted = completedLessons.length >= lessons.length

  return (
    <>
      {/* Mobile Toggle */}
      <div className="border-b border-slate-200 bg-white p-4 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="lesson-sidebar"
          className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-3 text-sm font-semibold"
        >
          Browse Lessons

          <ChevronDown
            size={20}
            className={`transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        id="lesson-sidebar"
        className={`
          ${isOpen ? 'block' : 'hidden'}
          w-full border-b border-slate-200 bg-slate-50
          lg:sticky lg:top-20 lg:block
          lg:h-[calc(100vh-5rem)] lg:w-80 lg:shrink-0
          lg:overflow-y-auto lg:border-b-0 lg:border-r
        `}
      >
        <div className="p-6">

          {/* Sidebar Header */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2 text-indigo-600">
              <BookOpen size={19} />

              <span className="text-xs font-semibold uppercase tracking-widest">
                Learning Module
              </span>
            </div>

            <h2 className="text-2xl font-bold">
              Sets and Venn Diagrams
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              {unlockedLesson} of {lessons.length} lessons unlocked
            </p>

            {/* Progress Bar */}
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all"
                style={{
                  width: `${(unlockedLesson / lessons.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Motivation */}
          <NavLink
            to="/motivation"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `mb-3 flex items-center gap-3 rounded-xl border p-4 transition ${
                isActive
                  ? 'border-amber-300 bg-amber-50 text-amber-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Sparkles
                  size={22}
                  className={`shrink-0 ${isActive ? 'text-amber-500' : 'text-amber-400'}`}
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold">Motivation</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Stay inspired to learn
                  </p>
                </div>
              </>
            )}
          </NavLink>

          {/* Diagnostic Test */}
          <NavLink
            to="/lessons"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `mb-6 flex items-center gap-3 rounded-xl border p-4 transition ${
                isActive
                  ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <ClipboardList
                  size={22}
                  className={`shrink-0 ${isActive ? 'text-indigo-600' : 'text-indigo-600'}`}
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold">Diagnostic Test</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {diagnosticCompleted ? 'Completed' : 'Required before lessons'}
                  </p>
                </div>

                {diagnosticCompleted && (
                  <CheckCircle2 size={19} className="text-green-600" />
                )}
              </>
            )}
          </NavLink>

          {/* Lesson Links */}
          <nav aria-label="Lesson navigation">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Course Lessons
            </h3>

            <ul className="flex flex-col gap-2">
              {/* Objective */}
              <li>
                <NavLink
                  to="/objective"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                      isActive
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-slate-600 hover:bg-slate-200/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          isActive
                            ? 'bg-emerald-600 text-white'
                            : 'bg-emerald-50 text-emerald-600'
                        }`}
                      >
                        <Target size={16} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs opacity-70">Overview</p>
                        <p className="mt-0.5 text-sm font-medium leading-5">
                          Objectives
                        </p>
                      </div>

                      {isActive && (
                        <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>

              {lessons.map((lesson) => {
                const isLocked =
                  !diagnosticCompleted ||
                  lesson.id > unlockedLesson

                return (
                  <li key={lesson.id}>
                    {isLocked ? (
                      // Locked Lesson
                      <div
                        aria-disabled="true"
                        className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-3 text-slate-400"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold">
                          {lesson.id}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs">
                            Lesson {lesson.id}
                          </p>

                          <p className="mt-0.5 text-sm font-medium leading-5">
                            {lesson.title}
                          </p>
                        </div>

                        <LockKeyhole size={16} className="shrink-0" />
                      </div>

                    ) : (

                      // Unlocked Lesson
                      <NavLink
                        to={`/lessons/${lesson.id}`}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                            isActive
                              ? 'bg-indigo-100 text-indigo-700'
                              : 'text-slate-600 hover:bg-slate-200/60'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                                isActive
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-indigo-50 text-indigo-600'
                              }`}
                            >
                              {lesson.id}
                            </span>

                            <div className="min-w-0 flex-1">
                              <p className="text-xs opacity-70">
                                Lesson {lesson.id}
                              </p>

                              <p className="mt-0.5 text-sm font-medium leading-5">
                                {lesson.title}
                              </p>
                            </div>

                            <UnlockKeyhole
                              size={16}
                              className="shrink-0 text-indigo-600"
                            />
                          </>
                        )}
                      </NavLink>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Reflection */}
            <div className="mt-4">
              {allLessonsCompleted ? (
                <NavLink
                  to="/reflection"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl border-2 px-3 py-3 transition ${
                      isActive
                        ? 'border-pink-400 bg-pink-50 text-pink-700'
                        : 'border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isActive ? 'bg-pink-500 text-white' : 'bg-pink-200 text-pink-700'}`}>
                        <BookHeart size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs opacity-70">Activity</p>
                        <p className="mt-0.5 text-sm font-semibold leading-5">Reflection</p>
                      </div>
                      {reflectionCompleted && <CheckCircle2 size={16} className="shrink-0 text-pink-500" />}
                      {isActive && !reflectionCompleted && <CheckCircle2 size={16} className="shrink-0 text-pink-400" />}
                    </>
                  )}
                </NavLink>
              ) : (
                <div
                  aria-disabled="true"
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl border-2 border-slate-200 px-3 py-3 text-slate-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200">
                    <BookHeart size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs">Activity</p>
                    <p className="mt-0.5 text-sm font-medium leading-5">Reflection</p>
                  </div>
                  <LockKeyhole size={16} className="shrink-0" />
                </div>
              )}
            </div>

            {/* Final Quiz */}
            <div className="mt-4">
              {reflectionCompleted ? (
                <NavLink
                  to="/final-quiz"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl border-2 px-3 py-3 transition ${
                      isActive
                        ? 'border-yellow-400 bg-yellow-50 text-yellow-700'
                        : 'border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isActive ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-yellow-700'}`}>
                        <Trophy size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs opacity-70">Post-Assessment</p>
                        <p className="mt-0.5 text-sm font-semibold leading-5">Final Quiz</p>
                      </div>
                      {isActive && <CheckCircle2 size={16} className="shrink-0 text-yellow-600" />}
                    </>
                  )}
                </NavLink>
              ) : (
                <div
                  aria-disabled="true"
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl border-2 border-slate-200 px-3 py-3 text-slate-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200">
                    <Trophy size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs">Post-Assessment</p>
                    <p className="mt-0.5 text-sm font-medium leading-5">Final Quiz</p>
                  </div>
                  <LockKeyhole size={16} className="shrink-0" />
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}
