import { motion } from 'framer-motion'

const quotes = [
  'Every customer interaction is a data point — we make it actionable.',
  'Sentiment is the new KPI.',
  "Companies don’t fail from lack of data; they fail from lack of understanding.",
  'Your agents deserve better tools. Your customers demand it.',
]

export default function Quotes() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        {quotes.map((q, i) => (
          <motion.blockquote key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-3xl md:text-4xl font-semibold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400">
            “{q}”
          </motion.blockquote>
        ))}
      </div>
    </div>
  )
}
