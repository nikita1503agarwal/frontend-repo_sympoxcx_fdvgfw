function Section({ id, title, items }) {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((text, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 text-white/90">
              {typeof text === 'string' ? (
                <p className="leading-relaxed">{text}</p>
              ) : (
                <div>
                  <p className="leading-relaxed font-medium">{text.heading}</p>
                  {text.points && (
                    <ul className="mt-3 list-disc list-inside space-y-1 text-white/80">
                      {text.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function KPICards({ items }) {
  return (
    <section id="kpis" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:3xl font-bold text-white mb-6">KPIs for Success</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((kpi, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 text-white">
              <p className="text-lg font-semibold">{kpi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section
