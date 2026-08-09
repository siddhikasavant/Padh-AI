import { notFound } from "next/navigation";
import { FileText } from "lucide-react";
import { semesters } from "@/data/syllabus";
import SubjectHeader from "@/components/SubjectHeader";

interface Props {
  params: {
    code: string;
  };
}

export default function NotesPage({ params }: Props) {
  const subject = semesters
    .flatMap((semester) => semester.subjects)
    .find((subject) => subject.code === params.code);

  if (!subject) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SubjectHeader
          title={subject.name}
          code={subject.code}
          description="Theory Notes"
          backHref="/notes"
        />

        <div className="mt-10 grid gap-4">
          {subject.notes.length > 0 ? (
            subject.notes.map((note) => (
              <a
                key={note.id}
                href={note.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-blue-500/40 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-400" />

                  <span>Notes {note.id}</span>
                </div>

                <span className="text-sm text-blue-400">
                  Open
                </span>
              </a>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-zinc-400">
              No notes available yet.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}