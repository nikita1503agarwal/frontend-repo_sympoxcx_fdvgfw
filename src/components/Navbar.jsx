import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun, Rocket, Bot, BookOpen, HelpCircle, LineChart, Workflow, Users, Target, Quote, PhoneCall } from 'lucide-react'

function DarkModeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
  }, [])
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])
  return (
    <button onClick={() => setDark(v => !v)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-sm hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

const links = [
  { to: '/', label: 'Home', icon: Rocket },
  { to: '/dashboards', label: 'Dashboards', icon: LineChart },
  { to: '/workflows', label: 'Workflows', icon: Workflow },
  { to: '/who', label: "Who It's For", icon: Users },
  { to: '/why', label: 'Why It Matters', icon: Target },
  { to: '/impact', label: 'Impact', icon: Target },
  { to: '/training', label: 'Training', icon: BookOpen },
  { to: '/knowledge', label: 'Knowledge Base', icon: HelpCircle },
  { to: '/chatbot', label: 'Chatbot', icon: Bot },
  { to: '/quotes', label: 'Quotes', icon: Quote },
  { to: '/contact', label: 'Contact', icon: PhoneCall },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 shadow-lg" />
          <span>SentientIQ</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm ${isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10" onClick={() => setOpen(o => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `px-3 py-2 rounded-md text-sm text-center ${isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
