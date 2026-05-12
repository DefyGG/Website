import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let animationProgress = 0;
    const animationDuration = 2000; // 2 seconds
    let startTime = null;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      animationProgress = Math.min(elapsed / animationDuration, 1);

      // Clear canvas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Draw diffeomorphic grid transformation
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 1;
      const gridSpacing = 40;
      const warpAmount = animationProgress * 30;

      // Draw grid with diffeomorphic distortion
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        for (let y = 0; y < height; y += 2) {
          const distortion = Math.sin((y - animationProgress * height) / 50) * warpAmount;
          ctx.lineTo(x + distortion, y);
        }
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 2) {
          const distortion = Math.cos((x - animationProgress * width) / 50) * warpAmount;
          ctx.lineTo(x, y + distortion);
        }
        ctx.stroke();
      }

      if (animationProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '4rem',
      paddingBottom: '2rem',
    }}>
      {/* Diffeomorphism visualization canvas */}
      <canvas
        ref={canvasRef}
        width={800}
        height={120}
        style={{
          width: '100%',
          height: '120px',
          display: 'block',
          marginBottom: '2rem',
          opacity: 0.3,
        }}
      />

      {/* Hero title with slide-down animation */}
      <div
        style={{
          textAlign: 'center',
          animation: 'slideDownIn 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        }}
      >
        <h1
          style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '3rem',
            fontWeight: 'normal',
            letterSpacing: '0.02em',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: '1rem',
            color: '#111',
          }}
        >
          Computational Anatomy
        </h1>
        <h2
          style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '3rem',
            fontWeight: 'normal',
            letterSpacing: '0.02em',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: '2rem',
            color: '#111',
          }}
        >
          Laboratory
        </h2>

        {/* Loading progress bar animation */}
        <div
          style={{
            maxWidth: '200px',
            height: '2px',
            background: '#e0e0e0',
            margin: '0 auto',
            overflow: 'hidden',
            borderRadius: '1px',
          }}
        >
          <div
            style={{
              height: '100%',
              background: '#111',
              animation: 'progressBar 1.8s ease-out forwards',
              borderRadius: '1px',
            }}
          />
        </div>
      </div>

      {/* Subtle subtitle */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          animation: 'fadeInUp 1.2s ease-out 0.3s forwards',
          opacity: 0,
        }}
      >
        <p
          style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.1rem',
            color: '#666',
            letterSpacing: '0.03em',
            margin: 0,
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Mathematical and computational frameworks for analyzing biological shape across scales
        </p>
      </div>

      {/* Divider */}
      <div style={{
        borderTop: '1px solid #ddd',
        marginTop: '3.5rem',
        marginBottom: '3.5rem',
      }} />

      {/* Existing Michael I. Miller section below */}
      <style>{`
        @keyframes slideDownIn {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
