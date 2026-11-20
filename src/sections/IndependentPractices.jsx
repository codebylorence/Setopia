import Navbar from '../components/Navbar'
import ActivitySidebar from '../components/ActivitySidebar'
import { ClipboardList } from 'lucide-react'

const partI = [
  {
    number: 1,
    question: 'Which of the following is a well-defined set?',
    choices: [
      'A. The collection of beautiful flowers',
      'B. The collections of months of the year',
      'C. The collection of delicious food',
      'D. The collection of natural numbers',
    ],
  },
  {
    number: 2,
    question: 'Which of the following is NOT a well-defined set?',
    choices: [
      'A. {Monday, Tuesday, Wednesday, Sunday}',
      'B. {Blue, Red, Green, Orange, Yellow}',
      'C. {1, 2, 3, 4, 5, 6, 7, 8, 9, …}',
      'D. {Canada, Germany, Thailand, India}',
    ],
  },
  {
    number: 3,
    question: 'Which is the Roster Form of the set of even numbers less than 20?',
    choices: [
      'A. {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}',
      'B. A = {x | x is an even number from 1 to 20}',
      'C. {2, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20}',
      'D. A is the set of even numbers from 1 to 20',
    ],
  },
  {
    number: 4,
    question: 'Which of the following is an Infinite Set?',
    choices: [
      'A. The set of letters in an alphabet',
      'B. The set of planets in the solar system',
      'C. The set of colors in rainbow',
      'D. The set of counting numbers',
    ],
  },
  {
    number: 5,
    question: 'What is the symbol of "is an element of"?',
    choices: ['A. ⊆', 'B. ∈', 'C. ∅', 'D. ∪'],
  },
]

const partIContext = 'Given A = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and B = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}'

const partIOpen = [
  { number: 6, question: 'What is A ∪ B?' },
  { number: 7, question: 'What is A ∩ B?' },
  { number: 8, question: 'What is B − A?' },
]

const partII = [
  { number: 1,  question: 'Write the set of colors of the rainbow using the Roster method.' },
  { number: 2,  question: 'What type of set is this: { }' },
  { number: 3,  question: 'How many elements does set T have: T = {Elise, Katie, Grace, Anya}' },
  { number: 4,  question: 'Is the set Finite or Infinite: x = {Sunday, Monday, Tuesday, …}' },
  { number: 5,  question: 'What type of set is this: A = {1, 2, 3, 4, 5} and B = {6, 7, 8, 9, 10, 15}' },
  { number: 6,  question: 'Write the set of first 10 natural numbers using the Descriptive method.' },
  { number: 7,  question: 'What type of set is this: P = {Girl}' },
  { number: 8,  question: 'Write the set of vowels in the English alphabet using the Set-Builder method.' },
  { number: 9,  question: 'What type of set is this: C = {Red, Blue, Green} and D = {Blue, Green, Red}' },
  { number: 10, question: 'Is the set Finite or Infinite: Z = {1, 2, 3, 4, 5, 6, 7, 8, …}' },
]

export default function IndependentPractices() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <ActivitySidebar />
        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-indigo-600">
                <ClipboardList size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">Learning Activities</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">LET'S THINK!</h1>
            </div>

            {/* Part I */}
            <section className="mb-12">
              <h2 className="mb-6 text-lg font-bold text-indigo-700">Part I: Multiple Choice</h2>
              <div className="flex flex-col gap-6">
                {partI.map((item) => (
                  <div key={item.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="mb-4 font-semibold">
                      <span className="mr-2 text-indigo-600">{item.number}.</span>
                      {item.question}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {item.choices.map((c, i) => (
                        <li key={i} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Nos. 6–8 context */}
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                  <p className="text-sm font-semibold text-indigo-700">For nos. 6 – 8:</p>
                  <p className="mt-1 text-sm text-indigo-800">{partIContext}</p>
                </div>

                {partIOpen.map((item) => (
                  <div key={item.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="font-semibold">
                      <span className="mr-2 text-indigo-600">{item.number}.</span>
                      {item.question}
                    </p>
                    <div className="mt-4 h-10 rounded-xl border border-dashed border-slate-300 bg-white" />
                  </div>
                ))}
              </div>
            </section>

            {/* Part II */}
            <section>
              <h2 className="mb-6 text-lg font-bold text-indigo-700">Part II: Short Answer</h2>
              <div className="flex flex-col gap-4">
                {partII.map((item) => (
                  <div key={item.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="font-semibold">
                      <span className="mr-2 text-indigo-600">{item.number}.</span>
                      {item.question}
                    </p>
                    <div className="mt-4 h-10 rounded-xl border border-dashed border-slate-300 bg-white" />
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  )
}
