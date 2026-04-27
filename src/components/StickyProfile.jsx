import React from 'react';
import './StickyProfile.css';
import { profile } from '../data/cms.jsx';
import profilePhoto from '../assets/profile-photo.png';
import TiltedCard from './TiltedCard';

const socialLinks = [
  {
    name: 'GitHub',
    href: profile.social.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3-.4 6.8-1.6 6.8-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 15 3.13a13.38 13.38 0 0 0-6 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.8 3.78c0 5.42 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 20c-3 1-3-1.5-4-2" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: profile.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: profile.social.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
].filter(({ href }) => Boolean(href));

export default function StickyProfile({ image }) {
  return (
    <div className="sticky-profile">
      <div className="profile-image-wrap">
        {image || profilePhoto ? (
          <TiltedCard
            imageSrc={image || profilePhoto}
            altText={profile.shortName || 'Profile'}
            captionText={profile.shortName || profile.name}
            containerHeight="var(--image-height)"
            containerWidth="var(--image-width)"
            imageHeight="var(--image-height)"
            imageWidth="var(--image-width)"
            rotateAmplitude={8}
            scaleOnHover={1.03}
            showTooltip={true}
          />
        ) : (
          <div className="profile-image-placeholder" aria-label="Profile image placeholder" />
        )}
      </div>

      <div className="profile-body">
        <div className="profile-copy">
          <h2 className="profile-name">{profile.shortName || profile.name}</h2>
          <p className="profile-role">{profile.title}</p>
          <p className="profile-desc">{profile.bio}</p>
          <div className="profile-meta" aria-label="Contact details">
            <p>{profile.location}</p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
          </div>
          <p className="profile-availability">{profile.availability}</p>
        </div>
        <div className="social-icons">
          {socialLinks.map(({ name, href, icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="social-icon">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
