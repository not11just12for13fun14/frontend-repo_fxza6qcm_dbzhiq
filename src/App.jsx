import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="py-10 text-center text-slate-400/80 border-t border-white/10">
        <p>© {new Date().getFullYear()} Ralph Tigere — Built with love and caffeine.</p>
      </footer>
    </div>
  )
}

export default App
