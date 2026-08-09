import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

        {/* Hero */}
        <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">

            <h1 className="mt-5 text-5xl font-extrabold tracking-tight">
              Padh{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="mt-2 text-lg text-zinc-400">
              Learn Smarter. Search Less.
            </p>
          </div>

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            Built for MSBTE Diploma AI & ML Students
          </span>

          <h2 className="mt-10 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              To Ace Your Diploma.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Access semester-wise syllabus, premium notes, previous year
            question papers, and curated study resources—all in one
            place. Designed exclusively for MSBTE Diploma AI & ML
            students.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/syllabus"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold transition duration-300 hover:scale-105"
            >
              🚀 Explore Syllabus
            </Link>

            <Link
              href="/notes"
              className="rounded-xl border border-zinc-700 bg-zinc-900/40 px-8 py-3 font-semibold transition duration-300 hover:border-blue-500 hover:bg-zinc-900"
            >
              📚 Browse Notes
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-4 text-4xl">📘</div>

              <h3 className="text-2xl font-bold">
                Complete Syllabus
              </h3>

              <p className="mt-3 text-zinc-400">
                Updated MSBTE K Scheme syllabus organised semester-wise
                for quick reference.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-4 text-4xl">📝</div>

              <h3 className="text-2xl font-bold">
                Quality Notes
              </h3>

              <p className="mt-3 text-zinc-400">
                Well-organised notes prepared to help you understand
                concepts faster.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-4 text-4xl">📄</div>

              <h3 className="text-2xl font-bold">
                Previous Year Papers
              </h3>

              <p className="mt-3 text-zinc-400">
                Practice with previous year question papers and prepare
                smarter.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12 text-center backdrop-blur">
            <h2 className="text-4xl font-bold">
              Start Learning Today
            </h2>

            <p className="mt-4 text-zinc-400">
              Join hundreds of Diploma AI & ML students using Padh AI
              to study smarter.
            </p>

            <Link
              href="/notes"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold transition hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}