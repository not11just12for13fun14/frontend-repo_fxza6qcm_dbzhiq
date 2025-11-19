import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSocket-powered chat with rooms, typing indicators, and presence.',
    tags: ['React', 'Node', 'WebSocket'],
    link: '#',
    repo: '#'
  },
  {
    title: 'AI Image Generator',
    desc: 'Text-to-image UI with queueing, gallery, and prompt presets.',
    tags: ['Next.js', 'Tailwind', 'Stable Diffusion'],
    link: '#',
    repo: '#'
  },
  {
    title: 'SaaS Billing Starter',
    desc: 'Subscriptions, teams, webhooks, and usage-based billing.',
    tags: ['React', 'Stripe', 'Prisma'],
    link: '#',
    repo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="text-slate-300/80 mt-2">A selection of things I've built recently.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-slate-300/80 text-sm mt-1">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200/80">
                    <a href={p.repo} className="hover:text-white" aria-label="Repo"><Github size={18}/></a>
                    <a href={p.link} className="hover:text-white" aria-label="Live"><ExternalLink size={18}/></a>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-[1] bg-[radial-gradient(600px_200px_at_10%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(600px_200px_at_90%_30%,rgba(99,102,241,0.08),transparent)]" />
    </section>
  )
}
