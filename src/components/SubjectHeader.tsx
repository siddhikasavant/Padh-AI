import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SubjectHeaderProps {
  title: string;
  code: string;
  description: string;
  backHref: string;
}

export default function SubjectHeader({
  title,
  code,
  description,
  backHref,
}: SubjectHeaderProps) {
  return (
    <>
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
        <p className="text-sm font-medium text-blue-400">
          {code}
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-3 text-zinc-400">
          {description}
        </p>
      </div>
    </>
  );
}