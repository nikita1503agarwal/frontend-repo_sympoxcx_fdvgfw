import { motion } from 'framer-motion'

export default function Chatbot() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Intelligent Chatbot</h1>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Trained on all client interactions</li>
          <li>Trained on internal + external knowledge bases</li>
          <li>Real-time sentiment awareness</li>
          <li>Auto-escalation logic</li>
          <li>Internal agent assistant + external support agent</li>
        </ul>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 h-80 rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-violet-500 shadow-[0_0_80px_-10px_rgba(59,130,246,0.6)]" />
      </div>
    </div>
  )
}
