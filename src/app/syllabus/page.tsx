import SemesterBlock from "@/components/SemesterBlock";
import { semesters } from "@/data/syllabus";

export default function SyllabusPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            MSBTE K Scheme
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Syllabus
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Browse the official syllabus for Diploma in Artificial Intelligence
            & Machine Learning.
          </p>
        </div>

        {/* Semesters */}
        <div className="space-y-16">
          {semesters.map((semester) => (
            <SemesterBlock
              key={semester.semester}
              semester={semester}
              type="syllabus"
            />
          ))}
        </div>
      </section>
    </main>
  );
}