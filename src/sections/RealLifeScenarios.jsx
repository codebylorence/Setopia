import Navbar from '../components/Navbar'
import ActivitySidebar from '../components/ActivitySidebar'
import { Globe } from 'lucide-react'

export default function RealLifeScenarios() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <ActivitySidebar />
        <main className="min-w-0 flex-1 px-5 py-10 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-emerald-600">
                <Globe size={19} />
                <span className="text-sm font-semibold uppercase tracking-widest">Learning Activities</span>
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">CHALLENGE YOUR MIND!</h1>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-20 text-center">
              <p className="text-lg font-semibold text-slate-400">Content coming soon</p>
              <p className="mt-2 text-sm text-slate-400">This section is being prepared.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
