import Navbar from '../components/Navbar'
import ActivitySidebar from '../components/ActivitySidebar'
import { Brain } from 'lucide-react'

const questions = [
  {
    number: 1,
    question: 'A class has 40 students. Twenty-five like Mathematics, 20 like Science, and 10 like both. Is it possible for 5 students to like neither subject? Explain your answer.',
  },
  {
    number: 2,
    question: 'Two classes have the same number of students who like Mathematics and Science. However, one class has more students who like both subjects. How will this affect the number of students who like at least one subject? Explain your answer.',
  },
  {
    number: 3,
    question: 'Why is it necessary to subtract the number of students who like both subjects when finding the union of two sets? What might happen if we do not subtract the overlapping group?',
  },
  {
    number: 4,
    question: 'A teacher wants to organize students into groups based on their interests. How can Venn diagrams help the teacher avoid counting students more than once?',
  },
  {
    number: 5,
    question: 'In a class of 30 students, 18 like reading books, 15 like watching movies, and 8 enjoy both activities. How many students enjoy neither activity? Show how you arrived at your answer.',
  },
]

export default function HOTSQuestions() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <ActivitySidebar />
        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">

            {/* Header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-rose-600">
                <Brain size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">Learning Activities</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">MATH DETECTIVE</h1>
              <p className="mt-4 leading-7 text-slate-500">
                Read each problem carefully. Show your complete solution and explain your reasoning.
              </p>
            </div>

            <ol className="flex flex-col gap-6">
              {questions.map((item) => (
                <li key={item.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <p className="leading-7 text-slate-800">{item.question}</p>
                      <div className="mt-4 h-24 rounded-xl border border-dashed border-slate-300 bg-white" />
                    </div>
                  </div>
                </li>
              ))}
            </ol>

          </div>
        </main>
      </div>
    </div>
  )
}
