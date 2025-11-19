import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
        <p className="text-slate-300/80 mt-2">Have an idea or opportunity? Let's talk.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email address" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project" rows="5" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <button type="submit" className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition">
            <Send size={18}/> Send Message
          </button>
          {status && <p className="text-slate-200/90">{status}</p>}
        </form>
      </div>
    </section>
  )
}
