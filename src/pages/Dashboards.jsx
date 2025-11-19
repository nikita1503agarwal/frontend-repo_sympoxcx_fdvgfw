import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Leadership Dashboard',
    items: [
      'Client sentiment trends',
      'Escalation heatmaps',
      'Department performance',
      'SLA tracking',
      'Risk & churn alerts',
    ],
  },
  {
    title: 'Management Dashboard',
    items: [
      'Agent performance scoring',
      'Training needs',
      'Repeated client issues',
      'Team sentiment comparisons',
    ],
  },
  {
    title: 'Staff Dashboard',
    items: [
      'Personal performance score',
      'Response improvement suggestions',
      'Personal training plan',
      'Instant feedback',
    ],
  },
]

export default function Dashboards() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Platform Dashboards</h1>
        <p className="text-white/70 mb-10">High-performance 3D visualizations animate into view as you scroll.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-2xl p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                {c.items.map(it => <li key={it}>{it}</li>)}
              </ul>
              <div className="mt-6 h-40 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center text-white/50 text-sm">
                3D chart placeholder
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
