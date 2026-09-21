import './GitHub.css'

const repos = [
  {
    name: 'real-estate-fullstack',
    description: 'Full-stack real estate platform with real-time chat via Socket.io, JWT auth, and Dockerized backend.',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 0,
    forks: 0,
    link: 'https://github.com/Aryandadhich/real-estate-fullstack',
  },
  {
    name: 'enterprise-ai-ticket-intelligence',
    description: 'AI-powered ticket resolution platform using Azure OpenAI, RAG, Agentic AI, and HITL approval workflows.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 0,
    forks: 0,
    link: 'https://github.com/Aryandadhich/enterprise-ai-ticket-intelligence',
  },
  {
    name: 'kcw-ip-whitelisting-automation',
    description: 'Azure Logic App automation for KCW IP whitelisting, reducing manual effort and improving ops efficiency.',
    language: 'JSON',
    languageColor: '#888',
    stars: 0,
    forks: 0,
    link: 'https://github.com/Aryandadhich',
  },
]

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function ForkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/>
      <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/>
    </svg>
  )
}

export default function GitHub() {
  return (
    <section className="github-section" id="github">
      <div className="container">
        <div className="github-header">
          <h2 className="section-heading">GitHub</h2>
          <a
            href="https://github.com/Aryandadhich"
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
          >
            View profile →
          </a>
        </div>

        <div className="repo-list">
          {repos.map((repo, i) => (
            <a href={repo.link} target="_blank" rel="noreferrer" className="repo-item" key={i}>
              <div className="repo-top">
                <div className="repo-name-wrap">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="repo-icon">
                    <path d="M3 3h18v18H3zM3 9h18M9 21V9"/>
                  </svg>
                  <span className="repo-name">{repo.name}</span>
                </div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="repo-ext-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </div>
              <p className="repo-desc">{repo.description}</p>
              <div className="repo-meta">
                <span className="repo-lang">
                  <span className="repo-lang-dot" style={{ background: repo.languageColor }} />
                  {repo.language}
                </span>
                <span className="repo-stat">
                  <StarIcon /> {repo.stars}
                </span>
                <span className="repo-stat">
                  <ForkIcon /> {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
