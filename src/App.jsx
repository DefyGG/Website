import { useState } from 'react';
import VectorField from './VectorField';
import Hero from './sections/Hero';
import About from './sections/About';
import LabMembers from './sections/LabMembers';
import Publications from './sections/Publications';
import News from './sections/News';
import Software from './sections/Software';
import Contact from './sections/Contact';

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'lab', label: 'Laboratory' },
  { id: 'publications', label: 'Publications' },
  { id: 'software', label: 'Software' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
];

function NavTab({ label, active, onClick }) {
  return (
    <button
      className={`nav-tab${active ? ' active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [renderKey, setRenderKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleTabClick(id) {
    if (id !== activeTab) {
      setActiveTab(id);
      setRenderKey(k => k + 1);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function renderSection() {
    switch (activeTab) {
      case 'about': return <About key={renderKey} />;
      case 'lab': return <LabMembers key={renderKey} />;
      case 'publications': return <Publications key={renderKey} />;
      case 'software': return <Software key={renderKey} />;
      case 'news': return <News key={renderKey} />;
      case 'contact': return <Contact key={renderKey} />;
      default: return <About key={renderKey} />;
    }
  }

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      background: '#ffffff',
    }}>
      {/* Vector field background */}
      <VectorField />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1120,
        margin: '0 auto',
        padding: '0 3rem',
      }} className="page-shell">

        {/* Header */}
        <header style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingTop: '1.7rem',
          paddingBottom: '1.2rem',
          borderBottom: '1px solid rgba(17, 17, 17, 0.08)',
          marginTop: '1rem',
          marginBottom: '1.5rem',
          paddingLeft: '1.4rem',
          paddingRight: '1.4rem',
          background: 'transparent',
        }} className="site-header">
          {/* Wordmark */}
          <div
            className="header-wordmark"
            style={{ cursor: 'pointer', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}
            onClick={() => handleTabClick('about')}
          >
            <span style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '0.95rem',
              letterSpacing: '0.05em',
              color: '#111',
              fontWeight: 'normal',
            }}>
              CIS MolecularCA Lab
            </span>
            <span style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '0.74rem',
              color: '#aaa',
              letterSpacing: '0.04em',
            }}>
              Johns Hopkins University
            </span>
          </div>

          {/* Navigation */}
          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(open => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav${mobileMenuOpen ? ' open' : ''}`} style={{
            display: 'flex',
            gap: '2.8rem',
            alignItems: 'baseline',
            flexShrink: 0,
          }}>
            {TABS.map(tab => (
              <NavTab
                key={tab.id}
                label={tab.label}
                active={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              />
            ))}
          </nav>
        </header>

        {/* Hero Section */}
        {activeTab === 'about' && <Hero />}

        {/* Page content */}
        <main>
          {renderSection()}
        </main>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid rgba(17, 17, 17, 0.08)',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          padding: '1.2rem 1.4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          background: 'transparent',
        }}>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.78rem',
            color: '#bbb',
            margin: 0,
            letterSpacing: '0.03em',
          }}>
            Computational Anatomy Laboratory · Kavli Neuroscience Discovery Institute · Johns Hopkins University
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.78rem',
            color: '#bbb',
            margin: 0,
            letterSpacing: '0.03em',
          }}>
            Department of Biomedical Engineering
          </p>
        </footer>
      </div>
    </div>
  );
}
