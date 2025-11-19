import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 text-white/70 text-sm flex flex-wrap gap-4 items-center justify-between">
        <p>SentientIQ — AI Client Sentiment & Performance Intelligence Platform</p>
        <a href="/test" className="underline hover:text-white">Backend & Database Test</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
