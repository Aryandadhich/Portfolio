import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        {/* Profile header */}
        <div className="hero-profile">
          <div className="hero-avatar">
            {/* Pixel-art style avatar placeholder */}
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="72" rx="36" fill="#e9c630"/>
              {/* Body */}
              <rect x="20" y="44" width="32" height="20" fill="#c97c3a"/>
              {/* Head */}
              <rect x="24" y="18" width="24" height="26" rx="4" fill="#c97c3a"/>
              {/* Hair */}
              <rect x="22" y="14" width="28" height="10" rx="4" fill="#4a2c0a"/>
              <rect x="22" y="18" width="6" height="8" fill="#4a2c0a"/>
              {/* Eyes */}
              <rect x="28" y="27" width="4" height="4" rx="1" fill="#2a1a0a"/>
              <rect x="40" y="27" width="4" height="4" rx="1" fill="#2a1a0a"/>
              {/* Beard */}
              <rect x="26" y="36" width="20" height="8" rx="3" fill="#4a2c0a"/>
              {/* Headphones */}
              <rect x="18" y="22" width="6" height="10" rx="3" fill="#333"/>
              <rect x="48" y="22" width="6" height="10" rx="3" fill="#333"/>
              <rect x="20" y="18" width="32" height="6" rx="3" fill="#555" stroke="#333" strokeWidth="1"/>
            </svg>
          </div>
          <div className="hero-info">
            <h1 className="hero-name">Aryan Dadheech</h1>
            <p className="hero-meta">
              Engineer · Azure &amp; AI
              <span className="hero-email-wrap">
                · aryandadheech069@gmail.com
                <button
                  className="copy-btn"
                  onClick={() => navigator.clipboard?.writeText('aryandadheech069@gmail.com')}
                  title="Copy email"
                  aria-label="Copy email"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </span>
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="hero-bio">
          AZ-204 Certified Azure Integration &amp; Full Stack Developer with 3+ years of experience building cloud-based applications and enterprise integrations on Microsoft Azure.
        </p>

        {/* Social icons */}
        <div className="hero-socials">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/aryan-dadhich07/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="4"/>
              <path d="M7 10v7"/>
              <circle cx="7" cy="7" r="1.2"/>
              <path d="M11 17v-4a3 3 0 0 1 6 0v4"/>
              <path d="M11 10v7"/>
            </svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/Aryandadhich" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:aryandadheech069@gmail.com" className="social-icon" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="16" rx="3"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
          </a>
          {/* Phone */}
          <a href="tel:+918094335624" className="social-icon" aria-label="Phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12 19.79 19.79 0 0 1 1.76 3.37 2 2 0 0 1 3.74 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69A16 16 0 0 0 15.11 15.91l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
