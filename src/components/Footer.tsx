export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {year} Elijah Flythe. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:emflythe@aggies.ncat.edu"
            className="flex min-h-11 items-center hover:text-accent"
          >
            Email
          </a>
          <a
            href="https://github.com/elijahflythe03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/emflythe03/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
