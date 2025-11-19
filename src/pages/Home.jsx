import Hero from '../components/Hero'
import Section, { KPICards } from '../components/Sections'
import FeatureGrid from '../components/FeatureGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Section
        id="hook"
        title="Most companies are blind"
        items={[
          'Customers complain across email, calls, social, and chat — but the business only hears a fraction of it.'
        ]}
      />
      <Section
        id="value-prop"
        title="Unified AI Platform"
        items={[
          'Unify every client interaction, evaluate every agent, and give leadership a real-time pulse of the business.'
        ]}
      />
      <FeatureGrid />
      <Section
        id="why"
        title="Why It Matters"
        items={[
          { heading: 'Operate with clarity', points: [
            'Break down sentiment silos',
            'See issues before they escalate',
            'Coach consistently with data'
          ]}
        ]}
      />
      <KPICards
        items={[
          'Higher retention and NPS',
          'Faster resolution time',
          'Lower support costs',
          'Improved agent performance'
        ]}
      />
    </div>
  )
}
