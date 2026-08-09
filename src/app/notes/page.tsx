import SemesterBlock from "@/components/SemesterBlock";
import { semesters } from "@/data/syllabus";
import NotesGrid from "./components/NotesGrid";


export default function NotesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400">
            MSBTE K Scheme
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Diploma AIML Notes
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Browse semester-wise notes for all Artificial Intelligence &
            Machine Learning subjects.
          </p>
        </div>

        <NotesGrid />
      </section>
    </main>
  );
}