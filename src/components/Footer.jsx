import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">AD</span>
              <div>
                <span className="footer-logo-name">Aryan Dadheech</span>
                <span className="footer-logo-sub">Azure · Full Stack · AI</span>
              </div>
            </div>
            <p className="footer-tagline">
              AZ-204 Certified Azure Integration Engineer & Full Stack Developer.<br />
              Building scalable cloud solutions and open for freelance work.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul>
              {['About', 'Skills', 'Experience', 'Projects', 'Services', 'Certifications', 'Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul>
              {['Azure Integration', 'Full Stack Dev', 'AI Solutions', 'API Development', 'DevOps / IaC', 'Consultation'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul>
              <li><a href="mailto:aryandadheech069@gmail.com">Email</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="tel:+918094335624">+91 80943 35624</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>Aryan Dadheech</strong>. All rights reserved.</p>
          <p className="footer-made">Built with React · Hosted free on Vercel · AZ-204 Certified</p>
        </div>
      </div>
    </footer>
  )
}
