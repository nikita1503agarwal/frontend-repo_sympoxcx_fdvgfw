import { motion } from 'framer-motion'

const flows = [
  { a: 'Sentiment detection', b: 'Escalation' },
  { a: 'Issue classification', b: 'Agent assignment' },
  { a: 'Negative interaction', b: 'Training task' },
  { a: 'FAQ detection', b: 'Auto documentation' },
  { a: 'Underperformance', b: 'Coaching recommendations' },
  { a: 'High-risk customer', b: 'Leadership alert' },
]

export default function Workflows() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Key Workflows</h1>
        <p className="text-white/70 mb-10">Animated flowcharts that move upon scroll.</p>
        <div className="space-y-4">
          {flows.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i * 0.05 }} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10">
              <div className="text-white/90 text-lg">{f.a}</div>
              <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 animate-pulse" />
              <div className="text-white font-semibold">{f.b}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
