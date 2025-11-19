function FeatureGrid() {
  const features = [
    {
      title: 'Multi-Channel Ingestion',
      points: ['Calls, meetings, social, email, chat', 'Unifies fragmented touchpoints'],
    },
    {
      title: 'NLP Processing',
      points: ['Sentiment, topics, intent', 'Embedded summaries & recommendations'],
    },
    {
      title: 'Agent Performance',
      points: ['Scoring, QA, coaching', 'Compliance monitoring'],
    },
    {
      title: 'Knowledge Infrastructure',
      points: ['Dynamic FAQ detection', 'Internal SOP + external KB'],
    },
    {
      title: 'Automation Layer',
      points: ['Alerts, workflows, escalation', 'Deflection & real-time coaching'],
    },
    {
      title: 'Leadership Dashboards',
      points: ['Journey health, heatmaps, churn', 'SLA tracking & bottlenecks'],
    },
  ]

  return (
    <section id="architecture" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">High-Level Architecture</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 text-white/90">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <ul className="mt-3 list-disc list-inside space-y-1">
                {f.points.map((p, idx) => (
                  <li key={idx} className="text-white/80">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
