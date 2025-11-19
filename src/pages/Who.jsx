const roles = [
  { title: 'CEOs & Founders', value: 'Strategic clarity, margin protection, growth insights' },
  { title: 'COOs', value: 'Operational visibility and process automation' },
  { title: 'Heads of Customer Service', value: 'Sentiment oversight and QA automation' },
  { title: 'Heads of Sales', value: 'Churn risk and opportunity signals' },
  { title: 'Support Managers', value: 'Coaching, consistency, and SLA tracking' },
  { title: 'Operations Teams', value: 'Workflow orchestration and load balancing' },
  { title: 'Training & L&D', value: 'Targeted training plans and knowledge gaps' },
  { title: 'Customer Success Teams', value: 'Retention levers and client health' },
]

export default function Who() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Who It's For</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div key={r.title} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
              <div className="h-24 mb-4 rounded-xl bg-gradient-to-br from-blue-600/30 via-cyan-400/20 to-violet-500/20 border border-white/10" />
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="text-white/75 mt-1 text-sm">{r.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
