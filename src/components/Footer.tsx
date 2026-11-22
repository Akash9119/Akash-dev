export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-3 border-t pb-10 pt-7 font-mono text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Akash Vasava · built with React + Vite</span>
      <a href="https://nexaak.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">nexaak.in</a>
    </footer>
  );
}
