import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";
import { Subject } from "@/types/syllabus";

interface SubjectCardProps {
  subject: Subject;
  type: "syllabus" | "notes" | "pyqs";
}

export default function SubjectCard({
  subject,
  type,
}: SubjectCardProps) {
  const title =
    type === "syllabus"
      ? "View Syllabus"
      : type === "notes"
      ? "View Notes"
      : "View PYQs";

  return (
    <Link
      href={`/${type}/${subject.code}`}
      className="group block rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="rounded-xl bg-blue-600/15 p-3">
            <FileText className="h-6 w-6 text-blue-400" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {subject.name}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              {subject.code}
            </p>
          </div>
        </div>

        <ChevronRight className="h-5 w-5 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-blue-400" />
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <span className="text-sm text-blue-400 font-medium">
          {title}
        </span>
      </div>
    </Link>
  );
}