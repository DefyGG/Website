export default function Contact() {
  return (
    <section className="section-enter content-panel" style={{ maxWidth: 680, margin: '0 auto', paddingTop: '4rem', paddingBottom: '6rem' }}>
      <h2 style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontWeight: 'normal',
        fontSize: '1.6rem',
        letterSpacing: '0.01em',
        marginBottom: '0.5rem',
        marginTop: 0,
      }}>
        Contact
      </h2>
      <p style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontSize: '0.9rem',
        color: '#888',
        marginBottom: '3.5rem',
      }}>
        Inquiries regarding research, collaboration, and graduate admissions.
      </p>

      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3.5rem' }} />

      {/* Primary contact */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#888',
          marginBottom: '1.4rem',
        }}>
          Principal Investigator
        </p>

        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '1.05rem',
          color: '#111',
          marginBottom: '0.3rem',
        }}>
          Michael I. Miller
        </p>
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.9rem',
          color: '#555',
          lineHeight: 1.9,
          marginBottom: 0,
        }}>
          Bessie Darling Massey Professor<br />
          Director of Biomedical Engineering, Johns Hopkins University<br />
          Co-Director, Kavli Neuroscience Discovery Institute
        </p>
      </div>

      {/* Grid of contact details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
        <div>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '1rem',
          }}>
            Electronic Mail
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.92rem',
            color: '#111',
            margin: 0,
          }}>
            MIM@jhu.edu
          </p>
        </div>

        <div>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '1rem',
          }}>
            Office
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.92rem',
            color: '#333',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Clark Hall, Room 310<br />
            3400 North Charles Street<br />
            Baltimore, MD 21218
          </p>
        </div>

        <div>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '1rem',
          }}>
            Laboratory
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.92rem',
            color: '#333',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Center for Imaging Science<br />
            Kavli Neuroscience Discovery Institute<br />
            Clark Hall, Lower Level
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3rem' }} />

      {/* Prospective students */}
      <div>
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#888',
          marginBottom: '1.2rem',
        }}>
          Prospective Graduate Students
        </p>
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.92rem',
          color: '#444',
          lineHeight: 1.85,
          margin: 0,
        }}>
          We welcome applications from students with strong backgrounds in applied mathematics,
          statistics, electrical engineering, or computer science who are interested in computational
          neuroimaging and shape analysis. Prospective students are encouraged to apply through the
          Johns Hopkins Department of Biomedical Engineering and to contact Prof. Miller directly.
        </p>
      </div>
    </section>
  );
}
