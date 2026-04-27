import React from 'react';
import { NavLink } from 'react-router-dom';
import GlassSurface from './GlassSurface';
import './Navbar.css';

const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  edit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
};

const navItems = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/projects', icon: 'folder', label: 'Projects' },
  { to: '/experience', icon: 'briefcase', label: 'Experience' },
  { to: '/tools', icon: 'tool', label: 'Tools' },
  { to: '/blog', icon: 'edit', label: 'Education' },
];

export default function Navbar() {
  return (
    <div className="navbar-shell">
      <GlassSurface
        width="fit-content"
        height="auto"
        borderRadius={18}
        borderWidth={0.09}
        brightness={56}
        opacity={0.92}
        blur={10}
        displace={0.45}
        backgroundOpacity={0.07}
        saturation={1.35}
        distortionScale={-170}
        redOffset={0}
        greenOffset={8}
        blueOffset={16}
        mixBlendMode="screen"
        className="navbar-glass"
      >
        <nav className="navbar" aria-label="Primary">
          {navItems.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-icon ${isActive ? 'active' : ''}`}
            >
              {icons[icon]}
              <span className="nav-tooltip">{label}</span>
            </NavLink>
          ))}
        </nav>
      </GlassSurface>
    </div>
  );
}
