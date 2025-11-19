import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="backdrop-blur-[2px]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
              Unified AI-Powered Client Sentiment, Performance & Automation
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
              Consolidate interactions, automate insights, elevate agent performance, and give leaders realtime visibility across the entire customer journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#architecture" className="inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 font-semibold px-4 py-2 transition">
                Explore Architecture
              </a>
              <a href="#kpis" className="inline-flex items-center rounded-lg bg-slate-900/70 hover:bg-slate-900 text-white font-semibold px-4 py-2 ring-1 ring-white/20 transition">
                KPIs & ROI
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
    </section>
  )
}

export default Hero
