import { Code2, Cpu, Rocket } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Vite'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'Postgres'] },
  { icon: Rocket, title: 'DevOps', items: ['Docker', 'CI/CD', 'Cloud', 'Monitoring'] },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="text-slate-300/80 mt-4">I'm a software developer who loves building polished, scalable products and delightful user experiences. I bridge design, engineering, and product to ship fast.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-white font-medium"><Icon size={18} /> {title}</div>
                <ul className="mt-3 space-y-1">
                  {items.map(it => <li key={it} className="text-sm text-slate-300/85">{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  )
}
