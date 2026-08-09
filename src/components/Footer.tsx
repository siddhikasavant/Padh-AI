export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} Padh AI. All rights reserved.
    </footer>
  );
}