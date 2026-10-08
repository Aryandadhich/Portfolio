import { useState } from 'react'
import './Experience.css'

const experiences = [
  {
    company: 'IBM India Pvt. Ltd.',
    link: 'https://www.ibm.com',
    client: 'KGS Distribution',
    role: 'Azure Integration Engineer',
    period: 'Dec 2025 – Present',
    location: 'Gurugram, Haryana',
    current: true,
    project: 'AIS — Azure-based platform for enterprise integrations and workflow automation.',
    bullets: [
      'Developed and supported enterprise integration solutions using Azure Logic Apps, Azure API Management (APIM), Azure Service Bus, and Azure Storage Accounts.',
      'Designed and supported Azure data integration solutions using Azure Data Factory (ADF), ADLS Gen2, Azure SQL Database, and SQL for enterprise data ingestion and processing.',
      'Built reusable, parameterized, and metadata-driven ADF pipelines for file, API, and database-based data ingestion workflows.',
      'Implemented incremental data loading, dynamic parameterization, and configuration-driven processing to improve pipeline performance and scalability.',
      'Designed and implemented Logic App workflows to automate business processes and enable seamless system integrations.',
      'Built and deployed KCW IP Whitelisting Automation, reducing manual effort and improving operational efficiency.',
      'Integrated REST APIs and Service Bus messaging to facilitate reliable communication between enterprise applications.',
      'Contributed to the migration of Azure Application Gateway from V1 to V2, improving platform scalability and security.',
      'Investigated and resolved production issues across Logic Apps, APIM, Service Bus, and ADF integrations by performing root cause analysis and implementing preventive improvements.',
      'Supported deployment validation, release activities, and onboarding of new integrations across Azure environments.',
      'Supported and monitored Azure Data Factory (ADF) pipelines, ensuring reliable data ingestion, workflow execution, monitoring, and error handling.',
    ],
    tags: ['Azure Logic Apps', 'APIM', 'Service Bus', 'ADF', 'ADLS Gen2', 'Azure SQL', 'REST APIs', 'Azure Storage'],
  },
  {
    company: 'Capgemini Technology Services India Ltd.',
    link: 'https://www.capgemini.com',
    client: 'P&G Manufacturing',
    role: 'Associate II',
    period: 'Dec 2022 – Nov 2025',
    location: 'Mumbai, Maharashtra',
    project: 'UI development and production execution workflows in a Manufacturing Execution System (MES).',
    bullets: [
      'Designed a maintenance window control page in React.js to restrict plant-level operations during Hypercare.',
      'Integrated with backend APIs to dynamically fetch and apply site rules for execution logic.',
      'Implemented role-based access, Redux state management, and form validations for plant operators.',
      'Collaborated with backend and DevOps teams to ensure smooth integration with existing MES architecture.',
    ],
    impact: 'Enhanced control and traceability of production downtime across 5+ manufacturing sites & 18% reduction in unplanned downtime.',
    tags: ['React.js', 'Redux', 'Node.js', 'REST APIs', 'MES'],
  },
  {
    company: 'Capgemini – Internal Project (PRISM)',
    link: null,
    client: '',
    role: 'Associate I',
    period: 'Dec 2022 – 2023',
    location: '',
    project: 'Internal platform for managing digital assets, authentication, and reporting modules.',
    bullets: [
      'Built secure, modular REST APIs using Node.js, Express.js, and TypeScript, implementing JWT authentication and RBAC.',
      'Integrated MongoDB for dynamic data storage and query performance tuning.',
      'Worked with Azure App Service and Azure Blob Storage to support cloud-hosted application deployments and file management.',
      'Developed production-grade features including file uploads, logging, exception handling, and access control.',
      'Led key modules that improved developer productivity and reduced deployment time by ~30%.',
    ],
    tags: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'JWT', 'Azure Blob Storage'],
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState({})

  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <section className="experience" id="work">
      <div className="container">
        <h2 className="section-heading">Experience</h2>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div className="exp-item" key={i}>
              {/* Header row */}
              <div className="exp-header-row">
                <div className="exp-left">
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noreferrer" className="exp-company">
                      {exp.company}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="exp-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  ) : (
                    <span className="exp-company exp-company--plain">{exp.company}</span>
                  )}
                  {exp.client && <span className="exp-client">Client: {exp.client}</span>}
                  <span className="exp-role">{exp.role}</span>
                </div>
                <div className="exp-right">
                  {exp.current && (
                    <span className="badge-live">
                      <span className="badge-live-dot" />
                      Working
                    </span>
                  )}
                  <div className="exp-meta-col">
                    <span className="exp-period">{exp.period}</span>
                    {exp.location && <span className="exp-location">{exp.location}</span>}
                  </div>
                </div>
              </div>

              {/* Expandable detail */}
              {expanded[i] && (
                <div className="exp-detail">
                  <p className="exp-project"><span className="exp-project-label">Project</span> {exp.project}</p>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  {exp.impact && (
                    <p className="exp-impact">↑ {exp.impact}</p>
                  )}
                  <div className="exp-tags">
                    {exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              )}

              {/* Toggle */}
              <button className="exp-toggle" onClick={() => toggle(i)}>
                {expanded[i] ? 'Show less ↑' : 'Show details ↓'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
