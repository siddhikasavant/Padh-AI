import SubjectCard from "@/components/SubjectCard";
import { Semester } from "@/types/syllabus";

interface SemesterBlockProps {
  semester: Semester;
  type: "syllabus" | "notes" | "pyqs";
}

export default function SemesterBlock({
  semester,
  type,
}: SemesterBlockProps) {
  if (semester.subjects.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">
          {semester.title}
        </h2>

        <p className="mt-2 text-zinc-400">
          {semester.subjects.length} Subjects
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {semester.subjects.map((subject) => (
          <SubjectCard
            key={subject.code}
            subject={subject}
            type={type}
          />
        ))}
      </div>
    </section>
  );
}