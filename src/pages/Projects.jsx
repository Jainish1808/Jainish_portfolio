import React from 'react';
import StickyProfile from '../components/StickyProfile';
import { ProjectCard, ContactForm, Footer, PageTitle, SectionTitle } from '../components/Cards';
import { projects } from '../data/cms.jsx';
import './InnerPage.css';

export default function Projects() {
  return (
    <div className="page-wrapper">
      <div className="outer">
        <div className="container">
          <div className="left-col">
            <StickyProfile />
          </div>
          <div className="right-col">
            <PageTitle>
              AI AND SOFTWARE
              <br />
              <span className="title-dark">PROJECTS</span>
            </PageTitle>
            <div style={{ marginTop: 20 }}>
              {projects.map((p) => (
                <ProjectCard key={p.id} {...p} />
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
