import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    // Stagger animation for title and subtitle
    if (titleRef.current) {
      titleRef.current.style.animation = 'titleScale 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.animation = 'slideInRight 0.8s ease-out 0.25s forwards';
    }
    if (underlineRef.current) {
      underlineRef.current.style.animation = 'underlineExpand 0.7s ease-out 0.5s forwards';
    }
  }, []);

  return (
    <section className="hero-section" style={{
      position: 'relative',
      zIndex: 1,
      minHeight: '50vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '6rem',
      paddingBottom: '3rem',
    }}>
      <div
        ref={titleRef}
        style={{
          opacity: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1 className="hero-title" style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '4.5rem',
          fontWeight: 'normal',
          letterSpacing: '0.01em',
          lineHeight: 1.2,
          margin: 0,
          marginBottom: '0.8rem',
          color: '#111',
          textAlign: 'center',
        }}>
          The Computational Anatomy Laboratory
        </h1>
      </div>

      <div
        ref={subtitleRef}
        style={{
          opacity: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p className="hero-subtitle" style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '1.52rem',
          letterSpacing: '0.04em',
          color: '#555',
          margin: 0,
          fontWeight: 'normal',
          textAlign: 'center',
        }}>
          Center for Imaging Science
        </p>
      </div>

      {/* Decorative underline */}
      <div
        ref={underlineRef}
        style={{
          marginTop: '2rem',
          width: '60px',
          height: '2px',
          background: '#35E1EA',
          opacity: 0,
          boxShadow: '0 0 12px rgba(53, 225, 234, 0.6)',
        }}
      />
    </section>
  );
}
