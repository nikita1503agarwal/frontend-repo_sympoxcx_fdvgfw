import Hero from './components/Hero'
import Section, { KPICards } from './components/Sections'
import FeatureGrid from './components/FeatureGrid'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />

      <Section
        id="executive-summary"
        title="Executive Summary"
        items={[
          'Implement a unified AI system for client sentiment, performance intelligence, and automation across the customer journey.'
        ]}
      />

      <FeatureGrid />

      <Section
        id="sentiment"
        title="Multi-Channel Sentiment Intelligence"
        items={[
          { heading: 'Per-interaction insights', points: [
            'Sentiment scoring & emotional indicators',
            'Topic modelling & pain point extraction',
            'Intent classification & churn-risk flags',
            'Embedded summaries & workflow recommendations'
          ]}
        ]}
      />

      <Section
        id="agent-performance"
        title="Agent Performance Intelligence"
        items={[
          { heading: 'Performance & coaching', points: [
            'Agent scoring framework',
            'Tone, clarity, empathy analysis',
            'Multi-tag classification & compliance',
            'Coaching suggestions & training assignments',
            'Department segmentation'
          ]}
        ]}
      />

      <Section
        id="knowledge"
        title="Knowledge Infrastructure"
        items={[
          { heading: 'Knowledge & automation', points: [
            'Dynamic FAQ detection',
            'AI-suggested articles and guides',
            'Internal SOP ingestion & external knowledge creation',
            'Intelligent search + chatbot integration'
          ]}
        ]}
      />

      <Section
        id="chatbots"
        title="AI Chatbots"
        items={[
          { heading: 'RAG-powered automation', points: [
            'Retrieval-augmented across knowledge sources',
            'Customer support deflection & internal support',
            'Real-time coaching & suggestions',
            'Escalation logic based on sentiment'
          ]}
        ]}
      />

      <Section
        id="dashboards"
        title="Leadership Dashboards"
        items={[
          { heading: 'Visibility & forecasting', points: [
            'Customer Journey Health Score',
            'Agent Performance Heatmaps & Department Trends',
            'Escalation & SLA tracking',
            'Process bottlenecks & predictive churn'
          ]}
        ]}
      />

      <Section
        id="phases"
        title="Implementation Phases"
        items={[
          { heading: 'Phased rollout', points: [
            'Phase 1: Discovery & Architecture',
            'Phase 2: Data Ingestion Pipelines',
            'Phase 3: AI Processing Models',
            'Phase 4: Knowledge Base Automation',
            'Phase 5: Dashboards & Reporting',
            'Phase 6: AI Chatbots & Automations',
            'Phase 7: Testing, QA & Rollout'
          ]}
        ]}
      />

      <KPICards
        items={[
          'Reduction in negative sentiment',
          'Faster issue resolution',
          'Lower support costs',
          'Higher customer satisfaction',
          'Improved agent performance',
          'Increased retention & revenue protection'
        ]}
      />

      <Section
        id="risks"
        title="Risks & Mitigation"
        items={[
          { heading: 'Mitigation strategy', points: [
            'Data quality: enforced validation rules',
            'API failure: fallback pipelines',
            'User adoption: training & onboarding',
            'Security: strict permissioning & encryption'
          ]}
        ]}
      />

      <Section
        id="roi"
        title="ROI Justification"
        items={[
          'Replaces manual QA, fragmented reporting, multiple coaching tools, inefficient workflows, and slow decision-making — delivering significant savings and a better experience for customers and staff.'
        ]}
      />

      <Section
        id="enhancements"
        title="Recommended Enhancements"
        items={[
          { heading: 'Next-level capabilities', points: [
            'Real-time call coaching',
            'Customer journey forecasting',
            'Retrieval-based executive briefings',
            'Competitor sentiment tracking'
          ]}
        ]}
      />

      <footer className="py-10 border-t border-white/10 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-6 text-white/70 text-sm flex flex-wrap gap-4 items-center justify-between">
          <p>AI-Automation Consultant Proposal</p>
          <a href="/test" className="underline hover:text-white">Backend & Database Test</a>
        </div>
      </footer>
    </div>
  )
}

export default App
