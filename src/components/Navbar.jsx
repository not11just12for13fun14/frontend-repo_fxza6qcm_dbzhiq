import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-sm text-slate-200/90 hover:text-white transition-colors";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "bg-slate-900/80 backdrop-blur border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="font-semibold text-white tracking-tight">Dev Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md border border-white/10 transition-colors"><Mail size={16}/> Hire me</a>
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-slate-900/90 border-t border-white/10">
          <a href="#projects" className={linkClass} onClick={() => setOpen(false)}>Projects</a>
          <a href="#about" className={linkClass} onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className={linkClass} onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
