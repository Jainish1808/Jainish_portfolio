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
  const [state, setState] = React.useState({ name: '', email: '', focus: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${state.name || 'visitor'}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nEmail: ${state.email}\nFocus: ${state.focus || 'Not specified'}\n\nMessage:\n${state.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setState({ name: '', email: '', focus: '', message: '' });
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
          />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Your@email.com"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          />
        </div>
      </div>
      <div className="form-field">
        <label className="form-label">Area of interest</label>
        <select
          className="form-input form-select"
          value={state.focus}
          onChange={(e) => setState((s) => ({ ...s, focus: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="AI product collaboration">AI product collaboration</option>
          <option value="RAG or agent architecture">RAG or agent architecture</option>
          <option value="Model fine-tuning">Model fine-tuning</option>
          <option value="Internship or full-time opportunity">Internship or full-time opportunity</option>
        </select>
      </div>
      <div className="form-field">
        <label className="form-label">Message</label>
        <textarea
          className="form-input form-textarea"
          placeholder="Message"
          rows={5}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
        />
      </div>
      <button className="form-btn" type="submit">
        Send Message
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
