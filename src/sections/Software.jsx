const software = [
  {
    name: 'MRICloud',
    acronym: 'MRICloud',
    description: 'A cloud-based neuroinformatics platform for automated brain MRI segmentation and quantification, developed by Prof. Miller and colleagues at the JHU Center for Imaging Science. Provides whole-brain parcellation across hundreds of anatomical regions via multi-atlas diffeomorphic registration, accessible through a web browser with no local installation required.',
    language: 'Web / C++',
    status: 'Active',
    tags: ['Segmentation', 'MRI', 'Cloud', 'Atlas'],
    url: 'https://mricloud.org',
    paper: 'Mori et al., Computing in Science & Engineering, 2016',
    paperUrl: 'https://doi.org/10.1109/MCSE.2016.93',
  },
  {
    name: 'xIV-LDDMM',
    acronym: 'xIV-LDDMM',
    description: 'Cross-modality image varifold LDDMM toolkit developed by Kaitlin Stouffer and Prof. Miller. Aligns molecular-scale spatial transcriptomics data (MERFISH, BARseq) to tissue-scale MRI brain atlases using diffeomorphic metric mapping, representing omics data as generalized functions encoding position and high-dimensional gene/cell-type identity.',
    language: 'Python',
    status: 'Active',
    tags: ['Transcriptomics', 'Registration', 'Atlas', 'Varifolds'],
    url: 'https://github.com/kstouff4/xIV-LDDMM-Particle',
    paper: 'Stouffer, Miller et al., Nature Communications, 2024',
    paperUrl: 'https://www.nature.com/articles/s41467-024-47883-4',
  },
  {
    name: 'STalign',
    acronym: 'STalign',
    description: 'Open-source Python toolkit for aligning spatial transcriptomics datasets across samples, resolutions, and technologies. Co-developed with Prof. Miller and Daniel Tward (UCLA), it adapts LDDMM — originally developed for MRI registration — to handle non-linear tissue distortions and partial section overlap in spatial omics data.',
    language: 'Python',
    status: 'Active',
    tags: ['Transcriptomics', 'LDDMM', 'Registration'],
    url: 'https://github.com/JEFworks-Lab/STalign',
    paper: 'Clifton, Anant, Miller et al., Nature Communications, 2023',
    paperUrl: 'https://www.nature.com/articles/s41467-023-43915-7',
  },
];

export default function Software() {
  return (
    <section
      className="section-enter content-panel"
      style={{ maxWidth: 900, margin: '0 auto', paddingTop: '4rem', paddingBottom: '6rem' }}
    >
      <h2 style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontWeight: 'normal',
        fontSize: '1.6rem',
        letterSpacing: '0.01em',
        marginBottom: '0.5rem',
        marginTop: 0,
      }}>
        Software
      </h2>
      <p style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontSize: '0.9rem',
        color: '#888',
        marginBottom: '3.5rem',
      }}>
        Open-source tools developed or co-developed by Prof. Miller and the laboratory.
      </p>

      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3rem' }} />

      <div className="software-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
        {software.map(sw => (
          <div key={sw.name} className="software-card software-card-item" style={{ padding: '2rem 2.2rem', background: '#fff' }}>

            {/* Name + Status */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <p style={{
                fontFamily: '"Computer Modern Serif", serif',
                fontSize: '1.05rem',
                color: '#111',
                margin: 0,
                fontWeight: 'normal',
              }}>
                {sw.name}
              </p>
              <span style={{
                fontFamily: '"Computer Modern Serif", serif',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                color: sw.status === 'Active' ? '#111' : '#bbb',
                textTransform: 'uppercase',
              }}>
                {sw.status}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '0.87rem',
              color: '#555',
              lineHeight: 1.75,
              marginBottom: '1.2rem',
            }}>
              {sw.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {sw.tags.map(t => (
                <span key={t} style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.75rem',
                  color: '#888',
                  border: '1px solid #e0e0e0',
                  padding: '2px 8px',
                  letterSpacing: '0.03em',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Language */}
            <p style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '0.8rem',
              color: '#aaa',
              margin: '0 0 1rem',
            }}>
              {sw.language}
            </p>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              {sw.url && (
                <a
                  href={sw.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: '"Computer Modern Serif", serif',
                    fontSize: '0.8rem',
                    color: '#87CEEB',
                    textDecoration: 'none',
                  }}
                >
                  Repository →
                </a>
              )}
              {sw.paper && (
                <a
                  href={sw.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: '"Computer Modern Serif", serif',
                    fontSize: '0.8rem',
                    color: '#aaa',
                    textDecoration: 'none',
                    fontStyle: 'italic',
                  }}
                >
                  {sw.paper}
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}