import './Skills.css'

const skillGroups = [
  {
    label: 'Cloud & Integration',
    skills: ['Azure Logic Apps', 'Azure API Management (APIM)', 'Azure Service Bus', 'Azure Data Factory (ADF)', 'Azure Storage Accounts', 'Azure Application Gateway'],
  },
  {
    label: 'AI & Automation',
    skills: ['Azure OpenAI', 'Azure AI Foundry', 'Prompt Engineering', 'Agentic AI', 'RAG', 'IBM ICA 2.0', 'Bob AI Agent Platform'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'TypeScript', 'REST APIs', 'Microservices', 'JWT Authentication', 'RBAC'],
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'Redux', 'JavaScript'],
  },
  {
    label: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    label: 'DevOps & Monitoring',
    skills: ['Git', 'GitHub', 'Terraform', 'Azure Application Insights', 'Azure Log Analytics'],
  },
]

const certifications = [
  { name: 'Microsoft Certified: Azure Developer Associate (AZ-204)', issuer: 'Microsoft', highlight: true },
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
  { name: 'Claude Certified Developer – Foundations', issuer: 'Anthropic' },
  { name: 'IBM Generative & Agentic AI Foundation', issuer: 'IBM' },
  { name: 'Google Cloud Skill Badge – Create Your First Gemini Enterprise Application', issuer: 'Google' },
  { name: 'IBM Watson X Challenge 2026 & Bobathon 2026 Participant', issuer: 'IBM', note: 'Built AI solutions using Azure OpenAI, Microsoft Foundry, and Agentic AI frameworks' },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <span className="skill-group-label">{group.label}</span>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-heading section-heading--spaced">Certifications</h2>

        <div className="cert-list">
          {certifications.map((cert, i) => (
            <div className="cert-item" key={i}>
              <div className="cert-left">
                <span className={`cert-name${cert.highlight ? ' cert-name--highlight' : ''}`}>{cert.name}</span>
                {cert.note && <span className="cert-note">{cert.note}</span>}
              </div>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>

        {/* Education */}
        <h2 className="section-heading section-heading--spaced">Education</h2>
        <div className="cert-item">
          <div className="cert-left">
            <span className="cert-name">Geetanjali Institute of Technical Studies</span>
            <span className="cert-note">Bachelor of Technology · CGPA: 8.5</span>
          </div>
          <span className="cert-issuer">2018 – 2022</span>
        </div>
      </div>
    </section>
  )
}
