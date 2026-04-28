import React from 'react';
import './Cards.css';
import { profile } from '../data/cms.jsx';
import RainDots from './RainDots';

export function ArrowButton({ bg, color, onClick }) {
  return (
    <button className="arrow-btn" style={{ background: bg, color }} onClick={onClick}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}

export function ProjectCard({ name, tag, stack, color = '#2a2a2a', image }) {
  return (
    <div className="project-card" style={{ marginBottom: 20 }}>
      <div className="project-thumb" style={{ background: color }}>
        {image ? <img src={image} alt={name} /> : <div className="project-thumb-placeholder" aria-label="Project image placeholder" />}
      </div>
      <div className="project-info">
        <div className="project-copy">
          <div className="project-name">{name}</div>
          <div className="project-tag">{tag}</div>
          {stack ? <div className="project-stack">{stack}</div> : null}
        </div>
        <span className="project-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function JobCard({ role, company, date, location, desc, highlighted, highlights = [] }) {
  return (
    <div className={`job-card ${highlighted ? 'job-card--highlighted' : ''}`}>
      <div className="job-header">
        <div className="job-headline">
          <span className="job-role">{role}</span>
          <span className="job-company">{company}</span>
        </div>
        <span className="job-arrow-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
      <div className="job-date">{date}</div>
      {location ? <div className="job-location">{location}</div> : null}
      <div className="job-desc">{desc}</div>
      {highlights.length > 0 ? (
        <ul className="job-highlights">
          {highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ToolCard({ name, category, icon }) {
  return (
    <div className="tool-card">
      <div className="tool-icon">
        <img src={icon} alt={name} />
      </div>
      <div className="tool-info">
        <div className="tool-name">{name}</div>
        <div className="tool-cat">{category}</div>
      </div>
    </div>
  );
}

export function BlogCard({ title, desc, date, readTime, thumbColor = '#2a2a2a' }) {
  return (
    <div className="blog-card">
      <div className="blog-content">
        <div className="blog-title">{title}</div>
        <div className="blog-desc">{desc}</div>
        <div className="blog-meta">
          <span>{date}</span>
          {readTime && <span>{readTime}</span>}
        </div>
        <span className="blog-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const formData = {
      name: state.name,
      email: state.email,
      subject: state.subject,
      message: state.message,
      to: import.meta.env.VITE_SMTP_USER,
      smtp_host: import.meta.env.VITE_SMTP_HOST,
      smtp_port: import.meta.env.VITE_SMTP_PORT,
      smtp_user: import.meta.env.VITE_SMTP_USER,
      smtp_pass: import.meta.env.VITE_SMTP_PASS,
    };

    try {
      // Using mailto as fallback since direct SMTP from browser is not secure
      const mailtoLink = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setStatus({ type: 'success', message: 'Opening your email client...' });
      setState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="your@email.com"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            required
          />
        </div>
      </div>
      <div className="form-field">
        <label className="form-label">Subject</label>
        <input
          className="form-input"
          type="text"
          placeholder="Subject"
          value={state.subject}
          onChange={(e) => setState((s) => ({ ...s, subject: e.target.value }))}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label">Message</label>
        <textarea
          className="form-input form-textarea"
          placeholder="Your message..."
          rows={5}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          required
        />
      </div>
      {status.message && (
        <div className={`form-status form-status--${status.type}`}>
          {status.message}
        </div>
      )}
      <button className="form-btn" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <RainDots />
      <img
        src="https://framerusercontent.com/images/y02PDRmBGKW8YNzEEPkEe10yopc.png?scale-down-to=2048&width=4096&height=1705"
        alt="Footer"
        className="footer-image"
      />
    </footer>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function PageTitle({ children }) {
  return <h1 className="page-title">{children}</h1>;
}
