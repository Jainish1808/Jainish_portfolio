import React from 'react';
import StickyProfile from '../components/StickyProfile';
import { BlogCard, ContactForm, Footer, PageTitle, SectionTitle } from '../components/Cards';
import { blogPosts } from '../data/cms.jsx';
import './InnerPage.css';

export default function Blog() {
  return (
    <div className="page-wrapper">
      <div className="outer">
        <div className="container">
          <div className="left-col hide-on-mobile">
            <StickyProfile />
          </div>
          <div className="right-col">
            <PageTitle>
              EDUCATION
              <br />
              <span className="title-dark">AND CERTIFICATES</span>
            </PageTitle>
            <div className="blog-list" style={{ marginTop: 20 }}>
              {blogPosts.map((b) => (
                <BlogCard key={b.id} {...b} />
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
