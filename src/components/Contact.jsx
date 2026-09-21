import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Replace with your actual EmailJS credentials (free at emailjs.com)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', budget: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '', budget: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <p className="section-subtitle">Have a project in mind? I respond within 24 hours.</p>
        </div>

        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info">
            <p className="contact-intro">
              Whether you need Azure integration, a full-stack web app, an AI-powered solution, or just want to say hi — my inbox is always open.
            </p>
            <div className="contact-items">
              <a href="mailto:aryandadheech069@gmail.com" className="contact-item">
                <span className="contact-item-icon">📧</span>
                <div>
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">aryandadheech069@gmail.com</span>
                </div>
              </a>
              <a href="tel:+918094335624" className="contact-item">
                <span className="contact-item-icon">📞</span>
                <div>
                  <span className="contact-item-label">Phone / WhatsApp</span>
                  <span className="contact-item-value">+91 80943 35624</span>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">💼</span>
                <div>
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">Connect with me</span>
                </div>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">🐙</span>
                <div>
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">View my code</span>
                </div>
              </a>
            </div>
            <div className="availability-badge">
              <span className="avail-dot" />
              Available for freelance &amp; consulting
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input id="name" name="name" type="text" required placeholder="John Doe" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input id="subject" name="subject" type="text" required placeholder="Azure Integration Project" value={form.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget (Optional)</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="Under ₹15,000">Under ₹15,000</option>
                    <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
                    <option value="₹30,000 – ₹60,000">₹30,000 – ₹60,000</option>
                    <option value="₹60,000+">₹60,000+</option>
                    <option value="Let's discuss">Let's discuss</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? '⏳ Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <p className="form-msg success">✅ Message sent! I'll get back to you within 24 hours.</p>
              )}
              {status === 'error' && (
                <p className="form-msg error">❌ Something went wrong. Email me directly at aryandadheech069@gmail.com</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
