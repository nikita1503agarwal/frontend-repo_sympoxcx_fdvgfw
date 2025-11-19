import { motion } from 'framer-motion'

const points = [
  'Companies operate blind',
  'Customer sentiment is siloed',
  'Leadership sees issues too late',
  'Staff receive inconsistent coaching',
  'Clients churn silently before anyone knows',
]

export default function Why() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Why It Matters</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3">
            {points.map((p, i) => (
              <motion.li key={p} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="p-4 rounded-xl bg-slate-900/60 border border-white/10">{p}</motion.li>
            ))}
          </ul>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="h-80 rounded-2xl bg-gradient-to-br from-blue-600/30 via-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
            3D puzzle reassembly placeholder
          </motion.div>
        </div>
      </div>
    </div>
  )
}
