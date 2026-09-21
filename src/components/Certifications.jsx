import './Certifications.css'

const certs = [
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    code: 'AZ-204',
    issuer: 'Microsoft',
    color: '#6366f1',
    highlight: true,
    icon: '🥇',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    color: '#4f8ef7',
    icon: '🏅',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    code: 'AI-900',
    issuer: 'Microsoft',
    color: '#06b6d4',
    icon: '🧠',
  },
  {
    title: 'Anthropic Claude Developer Certification',
    code: 'Foundations',
    issuer: 'Anthropic',
    color: '#f59e0b',
    icon: '🤖',
  },
  {
    title: 'IBM Generative & Agentic AI Foundation',
    code: 'IBM',
    issuer: 'IBM',
    color: '#a855f7',
    icon: '💡',
  },
  {
    title: 'Google Cloud Skill Badge',
    code: 'Gemini Enterprise',
    issuer: 'Google Cloud',
    color: '#10b981',
    icon: '☁️',
    note: 'Create Your First Gemini Enterprise Application',
  },
  {
    title: 'IBM Watson X Challenge 2026',
    code: 'Bobathon 2026',
    issuer: 'IBM',
    color: '#ef4444',
    icon: '🚀',
    note: 'Building AI-powered solutions using Azure OpenAI, Microsoft Foundry, and Agentic AI frameworks.',
  },
]

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">What I've Earned</p>
          <h2 className="section-title">Certifications & <span>Achievements</span></h2>
          <p className="section-subtitle">Verified credentials that back my expertise</p>
        </div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className={`cert-card card${c.highlight ? ' cert-highlight' : ''}`} key={i}>
              <div className="cert-icon-wrap" style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}>
                <span className="cert-icon">{c.icon}</span>
              </div>
              <div className="cert-body">
                <div className="cert-header-row">
                  <h3 className="cert-title">{c.title}</h3>
                  <span className="cert-code" style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}10` }}>
                    {c.code}
                  </span>
                </div>
                <p className="cert-issuer">{c.issuer}</p>
                {c.note && <p className="cert-note">{c.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
