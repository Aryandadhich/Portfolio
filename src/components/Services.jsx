import './Services.css'

const services = [
  {
    icon: '☁️',
    title: 'Azure Integration & Cloud Solutions',
    desc: 'End-to-end Azure integration using Logic Apps, APIM, Service Bus, and ADF. Custom workflow automation and API gateway setup.',
    features: ['Logic Apps / APIM setup', 'Service Bus & Event-driven flows', 'ADF pipeline design', 'API gateway configuration', 'Production support & RCA'],
    accent: '#6366f1',
  },
  {
    icon: '🌐',
    title: 'Full Stack Web Development',
    desc: 'Complete web applications with React.js frontend and Node.js/Express backend with MongoDB or MySQL.',
    features: ['React.js SPA / Dashboard', 'REST API development', 'JWT + RBAC authentication', 'MongoDB / MySQL integration', 'Cloud deployment'],
    accent: '#10b981',
  },
  {
    icon: '🤖',
    title: 'AI & Agentic Solutions',
    desc: 'Intelligent AI-powered applications using Azure OpenAI, RAG pipelines, and agentic workflows with HITL approval.',
    features: ['Azure OpenAI integration', 'RAG pipeline setup', 'Agentic AI workflows', 'Prompt engineering', 'AI observability'],
    accent: '#a855f7',
    popular: true,
  },
  {
    icon: '🔗',
    title: 'API Development & Microservices',
    desc: 'Scalable, secure REST APIs and microservices with auth, rate-limiting, logging, and Swagger docs.',
    features: ['REST API design', 'Microservices architecture', 'Swagger / OpenAPI docs', 'JWT + RBAC security', 'TypeScript + Node.js'],
    accent: '#f59e0b',
  },
  {
    icon: '📊',
    title: 'DevOps & Infrastructure',
    desc: 'Infrastructure-as-code with Terraform, CI/CD pipelines, and Azure monitoring with App Insights.',
    features: ['Terraform IaC', 'Azure / GitHub Actions CI/CD', 'Application Insights setup', 'Docker containerization', 'Log Analytics dashboards'],
    accent: '#06b6d4',
  },
  {
    icon: '💡',
    title: 'Technical Consultation',
    desc: 'Architecture reviews, Azure solution design, code reviews, and hands-on guidance for your team.',
    features: ['Architecture design review', 'Azure solution consulting', 'Code review & best practices', 'Tech stack selection', 'Interview prep mentorship'],
    accent: '#ef4444',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">For Hire</p>
          <h2 className="section-title">Freelance <span>Services</span></h2>
          <p className="section-subtitle">Available for freelance projects — let's build something impactful together</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card card${s.popular ? ' service-popular' : ''}`} key={i}>
              {s.popular && <div className="popular-ribbon">Most Requested</div>}
              <div className="service-icon-wrap" style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}25` }}>
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}>
                    <span className="check" style={{ color: s.accent }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline service-btn">
                Get a Quote
              </a>
            </div>
          ))}
        </div>
        <div className="services-note">
          <div className="services-note-text">
            <span className="note-icon">💬</span>
            <p>All prices are starting estimates. Final quote depends on project scope and complexity. Response within 24 hours.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Discuss Your Project →</a>
        </div>
      </div>
    </section>
  )
}
