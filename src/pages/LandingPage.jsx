import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen text-slate-800">
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
        style={{
          background: 'linear-gradient(160deg, #dde4f5 0%, #e8eaf6 30%, #d6eaf8 60%, #e0f2f1 100%)',
        }}
      >
        {/* Dot grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-300 opacity-25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[-8%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-teal-300 opacity-20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute left-[30%] top-[10%] h-[300px] w-[400px] rounded-full bg-indigo-200 opacity-30 blur-3xl" />

        {/* Floating math symbols */}
        <span aria-hidden="true" className="pointer-events-none absolute left-[7%] top-[18%] select-none text-5xl font-bold text-indigo-300 opacity-50">∪</span>
        <span aria-hidden="true" className="pointer-events-none absolute right-[9%] top-[20%] select-none text-5xl font-bold text-sky-300 opacity-50">∩</span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-[22%] left-[10%] select-none text-4xl font-bold text-violet-300 opacity-50">∅</span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-[20%] right-[8%] select-none text-4xl font-bold text-indigo-300 opacity-50">⊆</span>
        <span aria-hidden="true" className="pointer-events-none absolute left-[18%] top-[58%] select-none text-3xl font-bold text-sky-400 opacity-40">∈</span>
        <span aria-hidden="true" className="pointer-events-none absolute right-[20%] top-[62%] select-none text-3xl font-bold text-violet-400 opacity-40">∉</span>

        {/* Decorative circles */}
        <div aria-hidden="true" className="pointer-events-none absolute left-[4%] top-[42%] h-16 w-16 rounded-full border-2 border-indigo-300 opacity-40" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-[46%] h-10 w-10 rounded-full border-2 border-sky-300 opacity-40" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-[28%] right-[16%] h-20 w-20 rounded-full border border-violet-300 opacity-30" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">

          {/* Badge */}
          <span className="inline-block rounded-full border border-indigo-200 bg-white/60 px-5 py-1.5 text-xs font-semibold tracking-widest text-indigo-700 shadow-sm backdrop-blur-sm">
            WELCOME TO SETOPIA
          </span>

          {/* Headline */}
          <h1 className="mt-8 font-serif text-5xl font-bold leading-tight tracking-tight text-slate-800 md:text-7xl">
            Ready to Explore,<br />Discover &amp; Learn?
          </h1>

          {/* Sub */}
          <p className="mx-auto mt-6 max-w-md text-base leading-8 text-slate-600">
            Explore interactive lessons, practice your skills, and learn at your own
            pace through guided activities.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              to="/home"
              className="inline-block rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:bg-indigo-700"
            >
              Learn Now →
            </Link>
          </div>

          {/* Tagline */}
          <p className="mt-12 text-base font-bold text-slate-700">Ready. Set. Go!</p>
        </div>
      </section>
    </div>
  )
}
