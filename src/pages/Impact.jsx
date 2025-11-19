import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Impact on Client Interaction',
    items: [
      'Faster responses',
      'Better resolutions',
      'Real-time sentiment tracking',
      'Zero lost issues',
      'Higher NPS & retention',
    ],
  },
  {
    title: 'Impact on Staff',
    items: [
      'Transparent performance scoring',
      'Fair training',
      'Instant coaching',
      'Confidence + reduced stress',
    ],
  },
  {
    title: 'Impact on Leadership',
    items: [
      'Clear visibility',
      'Data-driven decisions',
      'Early risk detection',
      'Lower operational cost',
    ],
  },
]

export default function Impact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">Impact</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                {s.items.map(it => <li key={it}>{it}</li>)}
              </ul>
              <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-blue-600/30 via-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-white/60">
                Rising pillar 3D animation placeholder
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
