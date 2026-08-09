import Link from "next/link";
import {
  ArrowUpRight,
  MessageSquareHeart,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute left-0 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />
    </div>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-28 text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-md">
          <MessageSquareHeart className="h-4 w-4" />
          Contact & Feedback
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          We'd Love Your{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Feedback
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
          Padh AI is built by a student, for students.
          Every suggestion, bug report, feature request, or missing resource
          helps make the platform better for everyone.
        </p>

        {/* Feedback Card */}
        <div className="group mt-16 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-[0_0_60px_rgba(139,92,246,0.45)]">
            <MessageSquareHeart className="h-10 w-10 text-white" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Help Shape Padh AI
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400 leading-8">
            Whether you've discovered a bug, want to request notes,
            have an idea for a new feature, or simply wish to share
            your experience—we genuinely appreciate every response.
          </p>

          <Link
            href="https://forms.gle/HUssCBTDC2ALAL9r8"
            target="_blank"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]"
          >
            Give Feedback
            <ArrowUpRight className="h-5 w-5" />
          </Link>

        </div>
      </section>
            {/* Connect Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Connect With Me
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Prefer reaching out directly? Feel free to connect through any of
            the platforms below.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* Email */}
          <Link
            href="mailto:siddhikasavant00@gmail.com"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(139,92,246,0.18)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500">
              <Mail className="h-8 w-8 text-white" />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Email
            </h3>

            <p className="mt-3 text-gray-400">
              Send me an email anytime.
            </p>

            <p className="mt-5 break-all font-medium text-violet-300">
              siddhikasavant00@gmail.com
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-white">
              Send Email
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/siddhika-savant-b262352a9"
            target="_blank"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <FaLinkedin className="h-8 w-8 text-white" />

            </div>

            <h3 className="mt-7 text-2xl font-bold">
              LinkedIn
            </h3>

            <p className="mt-3 text-gray-400">
              Let's connect professionally.
            </p>

            <p className="mt-5 font-medium text-cyan-300">
              Siddhika Savant
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-white">
              Connect
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/siddhikasavant"
            target="_blank"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(217,70,239,0.18)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600">
              <FaGithub className="h-8 w-8 text-white" />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              GitHub
            </h3>

            <p className="mt-3 text-gray-400">
              Explore the projects I'm building.
            </p>

            <p className="mt-5 font-medium text-fuchsia-300">
              @siddhikasavant
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-white">
              Visit Profile
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>

        </div>
      </section>
            {/* Closing Section */}
      <section className="border-t border-white/10 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Thank You for Being Part of{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Padh AI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Every suggestion, bug report, and kind message helps improve
            Padh AI for thousands of diploma students. Thank you for taking
            the time to make this platform better.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <Link
              href="https://forms.gle/HUssCBTDC2ALAL9r8"
              target="_blank"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]"
            >
              Give Feedback
            </Link>

            <Link
              href="mailto:siddhikasavant00@gmail.com"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10"
            >
              Email Me
            </Link>

          </div>

          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <p className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Padh AI.
          </p>

        </div>

      </section>

    </main>
  );
}