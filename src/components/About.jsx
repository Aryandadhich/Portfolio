import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-subtitle">A builder at heart — turning complex cloud challenges into clean, scalable solutions.</p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>Aryan Dadheech</strong>, an <strong>AZ-204 Certified Azure Integration & Full Stack Developer</strong> with 3+ years of experience building cloud-based applications and enterprise integration solutions on Microsoft Azure.
            </p>
            <p>
              Experienced in <strong>Azure Logic Apps</strong>, <strong>API Management (APIM)</strong>, <strong>Service Bus</strong>, <strong>Storage Accounts</strong>, and <strong>Azure Data Factory (ADF)</strong> — developing secure, scalable integrations for enterprise workloads.
            </p>
            <p>
              On the backend: <strong>Node.js, Express.js, TypeScript</strong>, REST APIs, and microservices with JWT auth and RBAC. On the frontend: <strong>React.js</strong> and Redux. Strong focus on event-driven architectures, workflow automation, and production reliability.
            </p>
            <div className="about-contact-row">
              <a href="mailto:aryandadheech069@gmail.com" className="about-contact-item">
                📧 aryandadheech069@gmail.com
              </a>
              <a href="tel:+918094335624" className="about-contact-item">
                📞 +91 80943 35624
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="about-contact-item">
                💼 LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="about-contact-item">
                🐙 GitHub
              </a>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">🎓</span>
              <div>
                <h4>Education</h4>
                <p>B.Tech — Geetanjali Institute of Technical Studies</p>
                <p className="muted">2018–2022 · CGPA: 8.5</p>
              </div>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">📍</span>
              <div>
                <h4>Currently At</h4>
                <p>IBM India Pvt. Ltd. — Azure Integration Engineer</p>
                <p className="muted">Dec 2025 – Present · Gurugram, Haryana</p>
              </div>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🏆</span>
              <div>
                <h4>Top Certification</h4>
                <p>Microsoft Certified: Azure Developer Associate (AZ-204)</p>
                <p className="muted">Microsoft · Verified</p>
              </div>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🤖</span>
              <div>
                <h4>Current Focus</h4>
                <p>Agentic AI · Azure OpenAI · IBM ICA 2.0</p>
                <p className="muted">RAG · Prompt Engineering · Bob Agent Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
