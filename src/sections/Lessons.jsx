import { useEffect, useState } from 'react'
import { Navigate, Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Eye,
  EyeOff,
  LockKeyhole,
  Lightbulb,
  AlertCircle,
  Trophy,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import LessonSidebar, { lessons } from '../components/LessonSidebar'

// ── Lesson images ─────────────────────────────────────────────────────────────
// Visual learning slides per lesson
const lessonImages = {
  1: [
    new URL('../assets/lessons/lesson1.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson1.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson1.3.jpg', import.meta.url).href,
  ],
  2: [
    new URL('../assets/lessons/lesson2.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson2.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson2.3.jpg', import.meta.url).href,
  ],
  3: [
    new URL('../assets/lessons/lesson3.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson3.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson3.3.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson3.4.jpg', import.meta.url).href,
  ],
  4: [
    new URL('../assets/lessons/lesson4.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson4.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson4.3.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson4.4.jpg', import.meta.url).href,
  ],
  5: [
    new URL('../assets/lessons/lesson5.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson5.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson5.3.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson5.4.jpg', import.meta.url).href,
  ],
  6: [
    new URL('../assets/lessons/lesson6.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson6.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson6.3.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson6.4.jpg', import.meta.url).href,
  ],
  7: [
    new URL('../assets/lessons/lesson7.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson7.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson7.3.jpg', import.meta.url).href,
  ],
  8: [
    new URL('../assets/lessons/lesson8.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson8.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson8.3.jpg', import.meta.url).href,
  ],
  9: [
    new URL('../assets/lessons/lesson9.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson9.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson9.3.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson9.4.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson9.5.jpg', import.meta.url).href,
  ],
  10: [
    new URL('../assets/lessons/lesson10.1.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson10.2.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson10.3.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson10.4.jpg', import.meta.url).href,
    new URL('../assets/lessons/lesson10.5.jpg', import.meta.url).href,
  ],
}

// Practice images per lesson (some lessons have 2 images)
const practiceImages = {
  1:  [new URL('../assets/practice/lesson1.practice.jpg',   import.meta.url).href],
  2:  [new URL('../assets/practice/lesson2.practice.jpg',   import.meta.url).href],
  3:  [new URL('../assets/practice/lesson3.practice.jpg',   import.meta.url).href],
  4:  [new URL('../assets/practice/lesson4.practice.jpg',   import.meta.url).href],
  5:  [new URL('../assets/practice/lesson5.practice.jpg',   import.meta.url).href],
  6:  [new URL('../assets/practice/lesson6.practice.jpg',   import.meta.url).href],
  7:  [new URL('../assets/practice/lesson7.practice.jpg',   import.meta.url).href],
  8:  [new URL('../assets/practice/lesson8.practice.jpg',   import.meta.url).href],
  9:  [
    new URL('../assets/practice/lesson9.practice.1.jpg', import.meta.url).href,
    new URL('../assets/practice/lesson9.practice.2.jpg', import.meta.url).href,
  ],
  10: [],
}

// ── Diagnostic test questions ─────────────────────────────────────────────────
const diagnosticQuestions = [
  {
    question: 'Which of the following is a group of objects that belong to the same category?',
    options: ['Apple, Banana, Mango', 'Apple, chair, pencil', 'Dog, table, orange', 'Book, shoe, bicycle'],
    answer: 0,
  },
  {
    question: 'Which group contains only even numbers?',
    options: ['{1, 3, 5, 7}', '{2, 4, 6, 8}', '{1, 2, 4, 6}', '{3, 5, 6, 9}'],
    answer: 1,
  },
  {
    question: 'How many elements are there in the group {red, blue, green, yellow}?',
    options: ['2', '3', '4', '5'],
    answer: 2,
  },
  {
    question: 'Which group is clearly defined?',
    options: ['Beautiful flowers', 'Interesting books', 'Tall students', 'Days of the week'],
    answer: 3,
  },
  {
    question: 'Which of the following is NOT a number?',
    options: ['5', '10', '15', 'Pencil'],
    answer: 3,
  },
  {
    question: 'Given the group A = {2, 4, 6, 8}, which number does NOT belong to A?',
    options: ['2', '4', '5', '8'],
    answer: 2,
  },
  {
    question: 'Given A = {a, e, i, o, u}, is the letter "e" a member of set A?',
    options: ['Yes', 'No', 'Maybe', 'Cannot be determined'],
    answer: 0,
  },
  {
    question: 'What type of set is {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?',
    options: ['Finite', 'Infinite'],
    answer: 0,
    type: 'finite-infinite',
  },
  {
    question: 'What type of set is {2, 4, 6, 8, 10}?',
    options: ['Finite', 'Infinite'],
    answer: 0,
    type: 'finite-infinite',
  },
  {
    question: 'What type of set is the set of all counting numbers {1, 2, 3, 4, 5, ...}?',
    options: ['Finite', 'Infinite'],
    answer: 1,
    type: 'finite-infinite',
  },
]

// ── Guided practice questions ─────────────────────────────────────────────────
// Single-part lessons use `answers: []`.
// Multi-part lessons use `parts: [{ label, answers[] }]` — every part must be
// correct before the lesson is marked complete.
const practiceQuestions = {
  1: {
    question: 'B = The colors of the rainbow. Write set B in roster form.',
    answers: [
      '{red, orange, yellow, green, blue, indigo, violet}',
      '{red, orange, yellow, green, blue, indigo, violet,}',
      'b = {red, orange, yellow, green, blue, indigo, violet}',
    ],
  },
  2: {
    question: 'Let A = the set of odd numbers from 1 to 10. Write set A in all three forms.',
    parts: [
      {
        label: 'Descriptive Form',
        answers: [
          'a is the set of odd numbers from 1 to 10',
          'the set of odd numbers from 1 to 10',
          'a is the set of all odd numbers from 1 to 10',
        ],
      },
      {
        label: 'Roster Form',
        answers: [
          '{1, 3, 5, 7, 9}',
          'a = {1, 3, 5, 7, 9}',
          '{1,3,5,7,9}',
        ],
      },
      {
        label: 'Set-Builder Form',
        answers: [
          '{x | x is an odd number from 1 to 10}',
          'a = {x | x is an odd number from 1 to 10}',
          '{x | x is a odd number from 1 to 10}',
          'a = {x | x is a odd number from 1 to 10}',
          '{x l x is an odd number from 1 to 10}',
          '{x l x is a odd number from 1 to 10}',
        ],
      },
    ],
  },
  3: {
    question: 'Classify each set as Finite or Infinite.\n1. {1, 2, 3, 4, 5}\n2. {x | x is a counting number}\n3. {a, e, i, o, u}\n4. {x | x is an even number}',
    parts: [
      { label: 'Set 1', answers: ['finite'] },
      { label: 'Set 2', answers: ['infinite'] },
      { label: 'Set 3', answers: ['finite'] },
      { label: 'Set 4', answers: ['infinite'] },
    ],
  },
  4: {
    question: 'Write True or False for each statement.\n1. 5 ∈ {1, 3, 5, 7}\n2. a ∈ {b, c, d}\n3. {2} ⊆ {1, 2, 3}\n4. ∅ ⊆ {1, 2, 3}',
    parts: [
      { label: 'Statement 1', answers: ['true'] },
      { label: 'Statement 2', answers: ['false'] },
      { label: 'Statement 3', answers: ['true'] },
      { label: 'Statement 4', answers: ['true'] },
    ],
  },
  5: {
    question: 'Identify the type of each set pair.\n1. A = {1}  \n2. A = {1, 2} and B = {3, 4}\n3. A = {1, 2, 3} and B = {a, b, c}\n4. A = {1, 2, 3} and B = {2, 3, 4}',
    parts: [
      { label: 'Set 1', answers: ['singleton set', 'singleton', 'unit set'] },
      { label: 'Set 2', answers: ['disjoint sets', 'disjoint'] },
      { label: 'Set 3', answers: ['equivalent sets', 'equivalent'] },
      { label: 'Set 4', answers: ['overlapping sets', 'overlapping'] },
    ],
  },
  6: {
    question: 'Write True or False for each statement.\n1. {1, 2} ⊆ {1, 2, 3}\n2. {1, 2, 3} ⊆ {1, 2}\n3. ∅ ⊆ {a, b, c}\n4. {x} ⊆ {x, y, z}',
    parts: [
      { label: 'Statement 1', answers: ['true'] },
      { label: 'Statement 2', answers: ['false'] },
      { label: 'Statement 3', answers: ['true'] },
      { label: 'Statement 4', answers: ['true'] },
    ],
  },
  7: {
    question: 'Given A = {2, 4, 6, 8, 10} and B = {4, 6, 8}. Find each of the following.',
    parts: [
      {
        label: 'A ∪ B',
        answers: [
          '{2, 4, 6, 8, 10}',
          'a ∪ b = {2, 4, 6, 8, 10}',
          '{2,4,6,8,10}',
        ],
      },
      {
        label: 'A ∩ B',
        answers: [
          '{4, 6, 8}',
          'a ∩ b = {4, 6, 8}',
          '{4,6,8}',
        ],
      },
    ],
  },
  8: {
    question: 'Given A = {a, b, c, d} and B = {c, d, e, f}. Find each of the following.',
    parts: [
      {
        label: 'A − B',
        answers: [
          '{a, b}',
          'a − b = {a, b}',
          'a - b = {a, b}',
          '{a,b}',
        ],
      },
      {
        label: 'B − A',
        answers: [
          '{e, f}',
          'b − a = {e, f}',
          'b - a = {e, f}',
          '{e,f}',
        ],
      },
    ],
  },
  9: {
    question: 'The universal set U = {1, 2, 3, 4, 5, 6, 7, 8}. Use the Venn diagram to identify each region.',
    parts: [
      { label: 'A ∩ B (elements in both A and B)', answers: ['{1, 2}', '{1,2}', '1, 2'] },
      { label: 'A only (in A but not B)',           answers: ['{3, 4}', '{3,4}', '3, 4'] },
      { label: 'B only (in B but not A)',           answers: ['{5, 6}', '{5,6}', '5, 6'] },
      { label: 'Outside both A and B',              answers: ['{7, 8}', '{7,8}', '7, 8'] },
    ],
  },
  10: null,
}

// ── Storage ───────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'learnspace-progress-v1'

const defaultProgress = {
  diagnosticCompleted: false,
  diagnosticScore: 0,
  diagnosticAnswers: [],
  studentName: '',
  studentSection: '',
  unlockedLesson: 0,
  completedLessons: [],
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress
  } catch {
    return defaultProgress
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Lessons() {
  const { lessonId } = useParams()
  const navigate = useNavigate()

  const [progress, setProgress] = useState(loadProgress)
  const [studentName, setStudentName] = useState('')
  const [studentSection, setStudentSection] = useState('')
  const [answers, setAnswers] = useState(Array(diagnosticQuestions.length).fill(null))
  const [practiceAnswer, setPracticeAnswer] = useState('')
  const [practiceAnswers, setPracticeAnswers] = useState([])   // multi-part
  const [practiceStatus, setPracticeStatus] = useState(null)
  const [partStatuses, setPartStatuses] = useState([])         // per-part feedback
  const [revealAnswers, setRevealAnswers] = useState(false)

  const currentLesson = lessons.find((l) => l.id === Number(lessonId))
  const currentPractice = practiceQuestions[Number(lessonId)]
  const currentImages = lessonImages[Number(lessonId)] ?? []
  const currentPracticeImages = practiceImages[Number(lessonId)] ?? []

  const isLocked = !progress.diagnosticCompleted || Number(lessonId) > progress.unlockedLesson
  const isCompleted = progress.completedLessons.includes(Number(lessonId))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    setPracticeAnswer('')
    setPracticeAnswers([])
    setPracticeStatus(null)
    setPartStatuses([])
    setRevealAnswers(false)
  }, [lessonId])

  // ── Diagnostic submit ──
  const handleDiagnosticSubmit = async (e) => {
    e.preventDefault()
    if (!studentName.trim() || !studentSection.trim()) return
    if (answers.some((a) => a === null)) return

    const score = answers.reduce(
      (total, answer, index) => total + (answer === diagnosticQuestions[index].answer ? 1 : 0),
      0
    )

    setProgress((prev) => ({
      ...prev,
      diagnosticCompleted: true,
      diagnosticScore: score,
      diagnosticAnswers: answers,
      studentName: studentName.trim(),
      studentSection: studentSection.trim(),
      unlockedLesson: Math.max(prev.unlockedLesson, 1),
    }))

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL
    const secret = import.meta.env.VITE_GOOGLE_SCRIPT_SECRET
    if (scriptUrl && secret) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            studentName: studentName.trim(),
            studentSection: studentSection.trim(),
            answers,
            score,
            total: diagnosticQuestions.length,
            secret,
          }),
          redirect: 'follow',
        })
      } catch (err) {
        console.warn('Could not send to Google Sheets:', err.message)
      }
    }

    navigate('/objective', { replace: true })
  }

  // ── Practice submit ──
  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, ' ').trim().replace(/\s*,\s*/g, ', ')

  const markComplete = () => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, currentLesson.id])],
      unlockedLesson: Math.max(prev.unlockedLesson, Math.min(currentLesson.id + 1, lessons.length)),
    }))
  }

  // Single-part submit
  const handlePracticeSubmit = () => {
    if (!practiceAnswer.trim() || !currentPractice) return
    const typed = normalize(practiceAnswer)
    const isCorrect = currentPractice.answers.some((a) => normalize(a) === typed)
    if (isCorrect) {
      setPracticeStatus('correct')
      markComplete()
    } else {
      setPracticeStatus('incorrect')
    }
  }

  // Multi-part submit
  const handleMultiPartSubmit = () => {
    if (!currentPractice?.parts) return
    const statuses = currentPractice.parts.map((part, i) => {
      const typed = normalize(practiceAnswers[i] ?? '')
      return part.answers.some((a) => normalize(a) === typed) ? 'correct' : 'incorrect'
    })
    setPartStatuses(statuses)
    if (statuses.every((s) => s === 'correct')) {
      setPracticeStatus('correct')
      markComplete()
    } else {
      setPracticeStatus('incorrect')
    }
  }

  if (!currentLesson) return <Navigate to="/lessons/1" replace />

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        <LessonSidebar />

        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* ── Diagnostic Test ── */}
            {!progress.diagnosticCompleted ? (
              <div>
                <div className="mb-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                    Pre-Assessment
                  </span>
                  <h1 className="mt-3 text-3xl font-bold md:text-4xl">Diagnostic Test</h1>
                  <p className="mt-4 leading-7 text-slate-600">
                    Before starting your lessons about sets and Venn diagrams, complete this
                    diagnostic assessment to evaluate your prior knowledge.
                  </p>
                </div>

                <div className="mb-8 flex items-start gap-4 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
                  <Lightbulb className="mt-1 shrink-0 text-indigo-600" size={23} />
                  <div>
                    <h2 className="font-semibold text-indigo-800">Test Instructions</h2>
                    <p className="mt-2 text-sm leading-7 text-indigo-700">
                      Read each question carefully and select the best answer. Answer all questions
                      before submitting. Your score will not prevent you from accessing Lesson 1.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleDiagnosticSubmit}>
                  {/* Student info */}
                  <section className="mb-8 rounded-2xl border border-slate-200 p-6 md:p-8">
                    <h2 className="mb-6 text-xl font-bold">Student Information</h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="studentName" className="mb-2 block text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="studentName"
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="studentSection" className="mb-2 block text-sm font-medium">
                          Grade and Section
                        </label>
                        <input
                          id="studentSection"
                          type="text"
                          required
                          value={studentSection}
                          onChange={(e) => setStudentSection(e.target.value)}
                          placeholder="Enter grade and section"
                          className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Questions */}
                  <div className="space-y-6">
                    {diagnosticQuestions.map((item, questionIndex) => (
                      <div key={questionIndex}>
                        {questionIndex === 7 && (
                          <div className="mb-6 flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                              Part II — Finite or Infinite
                            </span>
                            <div className="h-px flex-1 bg-slate-200" />
                          </div>
                        )}

                        <fieldset className="rounded-2xl border border-slate-200 p-6 md:p-8">
                          <legend className="sr-only">Question {questionIndex + 1}</legend>
                          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                            Question {questionIndex + 1}
                          </span>
                          <h3 className="mt-3 text-lg font-semibold">{item.question}</h3>

                          {item.type === 'finite-infinite' ? (
                            <div className="mt-6 flex gap-3">
                              {item.options.map((option, optionIndex) => {
                                const isSelected = answers[questionIndex] === optionIndex
                                const isFiniteOpt = optionIndex === 0
                                return (
                                  <label
                                    key={optionIndex}
                                    className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 py-4 font-semibold transition ${
                                      isSelected
                                        ? isFiniteOpt
                                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                          : 'border-violet-500 bg-violet-50 text-violet-700'
                                        : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name={`diagnostic-${questionIndex}`}
                                      checked={isSelected}
                                      onChange={() => {
                                        const updated = [...answers]
                                        updated[questionIndex] = optionIndex
                                        setAnswers(updated)
                                      }}
                                      className="sr-only"
                                    />
                                    <span
                                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                                        isSelected
                                          ? isFiniteOpt
                                            ? 'border-indigo-500 bg-indigo-500'
                                            : 'border-violet-500 bg-violet-500'
                                          : 'border-slate-300'
                                      }`}
                                    >
                                      {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                                    </span>
                                    {option}
                                  </label>
                                )
                              })}
                            </div>
                          ) : (
                            <div className="mt-6 space-y-3">
                              {item.options.map((option, optionIndex) => (
                                <label
                                  key={optionIndex}
                                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                                    answers[questionIndex] === optionIndex
                                      ? 'border-indigo-500 bg-indigo-50'
                                      : 'border-slate-200 hover:bg-slate-50'
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name={`diagnostic-${questionIndex}`}
                                    checked={answers[questionIndex] === optionIndex}
                                    onChange={() => {
                                      const updated = [...answers]
                                      updated[questionIndex] = optionIndex
                                      setAnswers(updated)
                                    }}
                                    className="accent-indigo-600"
                                  />
                                  <span className="flex items-center gap-2 text-sm text-slate-700">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                                      {String.fromCharCode(65 + optionIndex)}
                                    </span>
                                    {option}
                                  </span>
                                </label>
                              ))}
                            </div>
                          )}
                        </fieldset>
                      </div>
                    ))}
                  </div>

                  {/* Submit bar */}
                  <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500">
                      {answers.filter((a) => a !== null).length} of {diagnosticQuestions.length} answered
                    </p>
                    <button
                      type="submit"
                      disabled={
                        !studentName.trim() ||
                        !studentSection.trim() ||
                        answers.some((a) => a === null)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Submit Diagnostic Test
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </div>

            ) : isLocked ? (

              /* ── Locked lesson ── */
              <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100">
                  <LockKeyhole size={36} className="text-slate-500" />
                </div>
                <h1 className="text-3xl font-bold">Lesson {currentLesson.id} is Locked</h1>
                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  Complete the guided practice of the previous lesson to unlock this one.
                </p>
                <Link
                  to={`/lessons/${progress.unlockedLesson}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Go to Available Lesson
                  <ArrowRight size={18} />
                </Link>
              </div>

            ) : (

              /* ── Unlocked lesson ── */
              <div>
                {/* Header */}
                <div className="mb-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                      Lesson {currentLesson.id} of {lessons.length}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      <CheckCircle2 size={14} />
                      Unlocked
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold md:text-4xl">{currentLesson.title}</h1>
                  <p className="mt-4 leading-7 text-slate-500">
                    Study the visual lesson slides, then complete the guided practice to unlock the next lesson.
                  </p>
                </div>

                {/* Visual Learning */}
                <section className="mb-8">
                  <div className="mb-5 flex items-center gap-3">
                    <BookOpen size={24} className="text-indigo-600" />
                    <h2 className="text-xl font-bold">Visual Learning</h2>
                  </div>

                  <div className="flex flex-col gap-4">
                    {currentImages.map((src, i) => (
                      <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                        <img
                          src={src}
                          alt={`${currentLesson.title} — slide ${i + 1}`}
                          className="w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Guided Practice — only shown when the lesson has practice questions */}
                {currentPractice ? (
                <section className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 md:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <ClipboardList size={24} className="text-indigo-600" />
                    <h2 className="text-xl font-bold">Guided Practice</h2>
                  </div>

                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    Answer the question correctly to complete this lesson and unlock the next one.
                  </p>

                  {/* Practice reference images */}
                  {currentPracticeImages.length > 0 && (
                    <div className="mb-6 flex flex-col gap-4">
                      {currentPracticeImages.map((src, i) => (
                        <div key={i} className="overflow-hidden rounded-xl border border-indigo-100 shadow-sm">
                          <img
                            src={src}
                            alt={`Practice reference ${i + 1}`}
                            className="w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <h3 className="mb-5 font-semibold">{currentPractice.question}</h3>

                  {/* ── Multi-part inputs ── */}
                  {currentPractice.parts ? (
                    <div className="flex flex-col gap-4">
                      {currentPractice.parts.map((part, i) => (
                        <div key={i}>
                          <label className="mb-1.5 block text-xs font-semibold text-indigo-600">
                            {part.label}
                          </label>
                          <input
                            type="text"
                            value={practiceAnswers[i] ?? ''}
                            onChange={(e) => {
                              const updated = [...practiceAnswers]
                              updated[i] = e.target.value
                              setPracticeAnswers(updated)
                              setPartStatuses([])
                              setPracticeStatus(null)
                            }}
                            disabled={isCompleted}
                            placeholder={`Answer for ${part.label}…`}
                            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                              partStatuses[i] === 'correct'
                                ? 'border-green-400 bg-green-50 focus:ring-green-100'
                                : partStatuses[i] === 'incorrect'
                                ? 'border-red-400 bg-red-50 focus:ring-red-100'
                                : 'border-slate-200 focus:border-indigo-400 focus:ring-indigo-100'
                            }`}
                          />
                          {partStatuses[i] === 'incorrect' && (
                            <p className="mt-1 text-xs text-red-600">Incorrect — review and try again.</p>
                          )}
                          {partStatuses[i] === 'correct' && (
                            <p className="mt-1 text-xs text-green-600">Correct!</p>
                          )}
                        </div>
                      ))}

                      {!isCompleted && (
                        <div className="mt-2 flex justify-end">
                          <button
                            type="button"
                            onClick={handleMultiPartSubmit}
                            disabled={currentPractice.parts.some((_, i) => !(practiceAnswers[i] ?? '').trim())}
                            className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Submit All Answers
                          </button>
                        </div>
                      )}
                    </div>

                  ) : (
                    /* ── Single input ── */
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        type="text"
                        value={practiceAnswer}
                        onChange={(e) => {
                          setPracticeAnswer(e.target.value)
                          setPracticeStatus(null)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && practiceAnswer.trim() && !isCompleted)
                            handlePracticeSubmit()
                        }}
                        disabled={isCompleted}
                        placeholder="Type your answer here…"
                        className={`flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                          practiceStatus === 'correct'
                            ? 'border-green-400 bg-green-50 focus:ring-green-100'
                            : practiceStatus === 'incorrect'
                            ? 'border-red-400 bg-red-50 focus:ring-red-100'
                            : 'border-slate-200 focus:border-indigo-400 focus:ring-indigo-100'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={handlePracticeSubmit}
                        disabled={!practiceAnswer.trim() || isCompleted}
                        className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Submit Answer
                      </button>
                    </div>
                  )}

                  {practiceStatus === 'incorrect' && (
                    <div
                      role="alert"
                      className="mt-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                    >
                      <AlertCircle size={20} />
                      Incorrect answer. Review the lesson and try again.
                    </div>
                  )}

                  {/* ── Reveal Answer ── */}
                  {!isCompleted && (
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => setRevealAnswers((v) => !v)}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                      >
                        {revealAnswers ? <><EyeOff size={14} /> Hide Answer</> : <><Eye size={14} /> Reveal Answer</>}
                      </button>

                      {revealAnswers && (
                        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                            Correct Answer{currentPractice.parts ? 's' : ''}
                          </p>
                          {currentPractice.parts ? (
                            <ul className="flex flex-col gap-1.5">
                              {currentPractice.parts.map((part, i) => (
                                <li key={i} className="text-sm text-slate-700">
                                  <span className="font-semibold text-amber-700">{part.label}:</span>{' '}
                                  {part.answers[0]}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-slate-700">{currentPractice.answers[0]}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {(practiceStatus === 'correct' || isCompleted) && (
                    <div
                      role="status"
                      className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700"
                    >
                      <CheckCircle2 size={20} />
                      {currentLesson.id === lessons.length
                        ? 'Congratulations! You completed all ten lessons.'
                        : 'Correct! You have unlocked the next lesson.'}
                    </div>
                  )}

                  {isCompleted && currentLesson.id < lessons.length && (
                    <div className="mt-6">
                      <Link
                        to={`/lessons/${currentLesson.id + 1}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
                      >
                        Next Lesson
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  )}
                </section>
                ) : (
                /* ── Lesson 10: no guided practice — "Finish Lesson" button ── */
                <section className="rounded-2xl border border-green-100 bg-green-50/40 p-6 md:p-8 text-center">
                  <CheckCircle2 size={36} className="mx-auto mb-4 text-green-500" />
                  <h2 className="text-xl font-bold text-green-800">You've reached the end of this lesson!</h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Click below to mark this lesson complete and unlock the Reflection activity.
                  </p>
                  {!isCompleted ? (
                    <button
                      type="button"
                      onClick={markComplete}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                      Finish Lesson
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-green-300 bg-green-100 px-6 py-3 text-sm font-semibold text-green-700">
                      <CheckCircle2 size={18} />
                      Lesson Completed
                    </div>
                  )}
                </section>
                )}

                {/* Course completion */}
                {currentLesson.id === lessons.length && isCompleted && (
                  <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                    <Trophy size={40} className="mx-auto mb-4 text-green-600" />
                    <h2 className="text-2xl font-bold">All Lessons Completed!</h2>
                    <p className="mt-3 text-slate-600">
                      You have finished all ten lessons on Sets and Venn Diagrams.
                    </p>
                    <Link
                      to="/reflection"
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
                    >
                      Go to Reflection
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
