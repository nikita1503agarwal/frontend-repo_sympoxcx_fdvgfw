import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 600)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact / Demo</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input required placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 ring-blue-500" />
          <input type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 ring-blue-500" />
          <textarea required placeholder="Tell us about your use case" rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 ring-blue-500" />
          <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 font-semibold shadow-lg">Request a Demo</button>
        </form>
        {status && <p className="mt-4 text-white/80">{status}</p>}
      </div>
    </div>
  )
}
