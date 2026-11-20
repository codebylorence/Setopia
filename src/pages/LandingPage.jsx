import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
        style={{
          background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #f0f9ff 100%)',
        }}
      >
        {/* Dot grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Blurred blob — top left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-300 opacity-30 blur-3xl"
        />

        {/* Blurred blob — bottom right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-300 opacity-30 blur-3xl"
        />

        {/* Blurred blob — center right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-200 opacity-40 blur-3xl"
        />

        {/* Floating math symbols */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[18%] select-none text-5xl font-bold text-indigo-200 opacity-60"
        >
          ∪
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[10%] top-[22%] select-none text-5xl font-bold text-sky-200 opacity-60"
        >
          ∩
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[20%] left-[12%] select-none text-4xl font-bold text-violet-200 opacity-60"
        >
          ∅
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[22%] right-[8%] select-none text-4xl font-bold text-indigo-200 opacity-60"
        >
          ⊆
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[20%] top-[55%] select-none text-3xl font-bold text-sky-300 opacity-50"
        >
          ∈
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[22%] top-[60%] select-none text-3xl font-bold text-violet-300 opacity-50"
        >
          ∉
        </span>

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[5%] top-[40%] h-16 w-16 rounded-full border-2 border-indigo-200 opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[45%] h-10 w-10 rounded-full border-2 border-sky-300 opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[30%] right-[18%] h-24 w-24 rounded-full border border-violet-200 opacity-40"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-xs font-semibold tracking-widest text-indigo-700 shadow-sm backdrop-blur-sm">
            WELCOME TO SETOPIA
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Learning Made Simple,
            <span className="text-indigo-600"> Fun, and Interactive.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            Explore interactive lessons, practice your skills, and learn
            at your own pace through guided activities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/home"
              className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-indigo-300"
            >
              Learn Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
