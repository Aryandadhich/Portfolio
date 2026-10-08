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
              I'm <strong>Aryan Dadheech</strong>, an <strong>AZ-204 &amp; DP-700 Certified Azure Integration &amp; Data Engineer</strong> with 3.5+ years of experience designing and supporting cloud-based integration and data solutions on Microsoft Azure.
            </p>
            <p>
              Hands-on experience with <strong>Azure Logic Apps</strong>, <strong>API Management (APIM)</strong>, <strong>Azure Service Bus</strong>, <strong>Azure Data Factory (ADF)</strong>, <strong>Azure Storage Accounts</strong>, and <strong>ADLS Gen2</strong> — delivering secure, scalable, and reliable enterprise integrations and data workflows.
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
