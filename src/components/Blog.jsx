import './Blog.css'

const posts = [
  {
    title: 'How I Built an Enterprise AI Ticket Intelligence System',
    excerpt: 'A deep dive into using Azure OpenAI, RAG, and Agentic AI to automate IT incident resolution.',
    date: 'Jan 2025',
    slug: '#',
  },
  {
    title: 'Azure Logic Apps vs Azure Functions: When to Use Which',
    excerpt: 'A practical guide to choosing the right Azure integration tool for your enterprise workflow.',
    date: 'Nov 2024',
    slug: '#',
  },
  {
    title: 'Securing REST APIs with JWT and RBAC in Node.js',
    excerpt: 'A walkthrough of building secure, role-based authentication from scratch with Express and TypeScript.',
    date: 'Sep 2024',
    slug: '#',
  },
]

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-heading">Blog</h2>

        <div className="blog-list">
          {posts.map((post, i) => (
            <a href={post.slug} className="blog-item" key={i}>
              <div className="blog-item-left">
                <span className="blog-title">{post.title}</span>
                <span className="blog-excerpt">{post.excerpt}</span>
              </div>
              <div className="blog-item-right">
                <span className="blog-readmore">Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
