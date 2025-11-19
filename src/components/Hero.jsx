import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Ralph Tigere</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
            Software engineer crafting delightful web apps with React, TypeScript, Node.js, and cloud-native architectures.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/20 transition">Get in touch</a>
          </div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900"/>
    </section>
  )
}
