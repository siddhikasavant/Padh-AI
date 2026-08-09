import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { semesters } from "@/data/syllabus";

interface Props {
  params: Promise<{
    code: string;
  }>;
}

export default async function SubjectPage({ params }: Props) {
  const { code } = await params;

  const subject = semesters
    .flatMap((semester) => semester.subjects)
    .find((subject) => subject.code === code);

  if (!subject) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/syllabus"
          className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
          <p className="text-sm font-medium text-blue-400">
            {subject.code}
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {subject.name}
          </h1>

          <p className="mt-3 text-zinc-400">
            Official MSBTE K Scheme syllabus.
          </p>

          <a
            href={subject.syllabusPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            <ExternalLink className="h-5 w-5" />
            Open Syllabus PDF
          </a>
        </div>
      </div>
    </main>
  );
}