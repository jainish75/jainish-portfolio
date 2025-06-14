
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const cl = document.documentElement.classList;
    dark ? cl.add("dark") : cl.remove("dark");
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#1a222b]/90 shadow backdrop-blur transition-all">
      <div className="container flex items-center justify-between py-3 px-2 md:px-0">
        <a href="#home" className="flex items-center font-heading text-xl font-bold tracking-tight text-primary-dark dark:text-primary-foreground">
          <span className="mr-2 rounded-full bg-primary p-2 text-white">JS</span>
          Jainish Satani
        </a>
        <div className="hidden md:flex gap-6 font-medium text-base">
          {sections.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="text-muted hover:text-primary-dark dark:hover:text-accent transition-colors px-2 py-1 rounded"
            >
              {sec.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded transition bg-gold-light text-gold hover:bg-gold"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle Dark Mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark shadow-card transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
