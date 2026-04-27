import React from 'react';
import StickyProfile from '../components/StickyProfile';
import { JobCard, ContactForm, Footer, PageTitle, SectionTitle } from '../components/Cards';
import { jobs } from '../data/cms.jsx';
import './InnerPage.css';

export default function Experience() {
  return (
    <div className="page-wrapper">
      <div className="outer">
        <div className="container">
          <div className="left-col">
            <StickyProfile />
          </div>
          <div className="right-col">
            <PageTitle>
              WORK
              <br />
              <span className="title-dark">EXPERIENCE</span>
            </PageTitle>
            <div style={{ marginTop: 20 }}>
              {jobs.map((j) => (
                <JobCard key={j.id} {...j} />
              ))}
            </div>
            <section className="section">
              <SectionTitle>
                LET'S BUILD
                <br />
                <span className="title-dark">SOMETHING IMPACTFUL</span>
              </SectionTitle>
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
