import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About", to: "/#about" },
  { id: "experience", label: "Experience", to: "/experience" },
  { id: "projects", label: "Work", to: "/#projects" },
  { id: "skills", label: "Skills", to: "/#skills" },
  { id: "contact", label: "Contact", to: "/#contact" },
];

export function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrollActive, setScrollActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setScrollActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const active = isHome ? scrollActive : pathname === "/experience" ? "experience" : "";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-mono text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
        >
          athul<span className="text-[var(--color-accent)]">nair</span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                to={l.to}
                className={`font-mono text-sm transition-colors ${
                  active === l.id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block py-2 font-mono text-sm ${
                  active === l.id ? "text-[var(--color-accent)]" : "text-[var(--color-text-dim)]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
