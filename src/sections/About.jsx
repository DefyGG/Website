export default function About() {
  const headshotPath = '/Michael-Miller.png';

  return (
    <section className="section-enter" style={{ maxWidth: 920, margin: '0 auto', paddingTop: '2rem', paddingBottom: '6rem' }}>
      {/* Intro row */}
      <div className="about-intro-row" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(260px, 0.9fr)',
        gap: '2.5rem',
        alignItems: 'center',
        marginBottom: '3.5rem',
      }}>
        <div className="about-glass" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 1.5rem 1.7rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 className="about-name" style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '2.8rem',
              fontWeight: 'normal',
              letterSpacing: '0.01em',
              lineHeight: 1.15,
              margin: 0,
              marginBottom: '0.5rem',
              color: '#111',
            }} className="about-intro-title">
              Michael I. Miller
            </h1>

            <p style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '1.05rem',
              color: '#555',
              letterSpacing: '0.03em',
              marginBottom: '0.25rem',
              paddingTop: '2rem',
            }}>
              Bessie Darling Massey Professor
            </p>
            <p style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '1.05rem',
              color: '#555',
              letterSpacing: '0.03em',
              marginBottom: '0.25rem',
            }}>
              Director of Biomedical Engineering, Johns Hopkins University
            </p>
            <p style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '1.05rem',
              color: '#555',
              letterSpacing: '0.03em',
              marginBottom: '0.25rem',
            }}>
              Co-Director, Kavli Neuroscience Discovery Institute
            </p>
            <p style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '1.05rem',
              color: '#555',
              letterSpacing: '0.03em',
            }}>
              Department of Biomedical Engineering, Johns Hopkins University
            </p>
          </div>
        </div>

        <div className="about-headshot-wrap" style={{ justifySelf: 'end', width: '100%', maxWidth: 390, minHeight: '100%', display: 'flex' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'stretch' }}>
            <>
              <img
                src={headshotPath}
                alt="Michael I. Miller headshot"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('[data-headshot-fallback]');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                data-headshot-fallback
                style={{
                  textAlign: 'center',
                  padding: '1.5rem 0',
                  display: 'none',
                  width: '100%',
                  minHeight: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: '"Computer Modern Serif", serif',
                    fontSize: '0.78rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#888',
                    margin: 0,
                    marginBottom: '0.9rem',
                  }}>
                    Headshot Upload
                  </p>
                  <p style={{
                    fontFamily: '"Computer Modern Serif", serif',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#555',
                    margin: 0,
                  }}>
                    Place {headshotPath} in the public folder.
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* Read more block - appears below the image */}
      <details className="about-dropdown" style={{ marginBottom: '2rem' }}>
        <summary className="about-dropdown-summary">
          <span>Read more</span>
          <span className="about-dropdown-chevron">▼</span>
        </summary>
        <div className="about-glass about-dropdown-content" style={{ margin: '0 1rem 1rem' }}>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
            marginBottom: '1.1rem',
          }}>
            As a biomedical engineer who specializes in data science, Miller is pioneering cutting-edge technologies in computational medicine to understand and diagnose neurodegenerative diseases. His research focuses on the functional and structural characteristics of the human brain in health and disease, including Huntington&apos;s disease, Alzheimer&apos;s disease, dementia, bipolar disorder, schizophrenia, and epilepsy. By developing new tools to analyze patient brain scans, derived from advanced medical imaging technologies, Miller aims to predict the risk of developing neurological disorders years before the onset of clinical symptoms. His lab is currently devising cloud-based methods to build and share libraries of brain images—and the algorithms used to understand them—associated with neuropsychiatric illness. Miller&apos;s research is highly translational, and he has co-founded four start-up companies in the past decade.
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
            marginBottom: '1.1rem',
          }}>
            Miller has co-authored more than 200 peer-reviewed publications, as well as two highly cited textbooks on random point processes and computational anatomy. In 2002, he was recognized by the Institute for Scientific Information (ISI) Essential Science Indicators for garnering the highest rate of increase in total citations in the field of engineering for his work in computational anatomy.
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
            marginBottom: '1.1rem',
          }}>
            He has received numerous awards for his work, including the national Institute of Electrical and Electronics Engineers (IEEE) Biomedical Engineering Thesis Award in 1982, the Johns Hopkins Paul Ehrlich Graduate Student Thesis Award in 1983, and the National Science Foundation (NSF) Presidential Young Investigator Award in 1986. He was named an inaugural Johns Hopkins University Gilman Scholar in 2011 for demonstrating a distinguished record of research, teaching, and service. He is an elected Fellow of the American Institute for Medical and Biological Engineering, the Institute of Electrical and Electronics Engineers, and the Biomedical Engineering Society.
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.02rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
          }}>
            Miller earned his BS from the State University of New York at Stony Brook in 1976, and his MS in electrical engineering and PhD in biomedical engineering from Johns Hopkins University in 1978 and 1983, respectively. He was the Newton R. and Sarah L. Wilson Professor in Biomedical Engineering at Washington University in St. Louis until joining Johns Hopkins University in 1998. He was named the Herschel and Ruth Seder Professor in Biomedical Engineering in 2003, before his appointment as the director of biomedical engineering in 2017. He was also previously the director of the Johns Hopkins Center for Imaging Science.
          </p>
        </div>
      </details>

      {/* Thin rule */}
      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3.5rem' }} />

      {/* Lab information with images */}
      <div className="about-lab-grid" style={{ marginBottom: '3.5rem' }}>
        <div className="about-lab-cell about-lab-image-cell">
          <img
            src="/Allen-Institute-Mouse-Brain.png"
            alt="Allen Institute Mouse Brain"
            className="about-lab-image"
            onError={e => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('[data-lab-image-fallback]');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            data-lab-image-fallback
            style={{
              textAlign: 'center',
              padding: '2rem 1.5rem',
              display: 'none',
              width: '100%',
              minHeight: '200px',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f5f5f5',
            }}
          >
            <div>
              <p style={{
                fontFamily: '"Computer Modern Serif", serif',
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#888',
                margin: 0,
                marginBottom: '0.9rem',
              }}>
                Image Upload
              </p>
              <p style={{
                fontFamily: '"Computer Modern Serif", serif',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: '#555',
                margin: 0,
              }}>
                Place Allen-Institute-Mouse-Brain.png in the public folder.
              </p>
            </div>
          </div>
          <p className="about-lab-caption">Allen Mouse Atlas</p>
        </div>

        <div className="about-lab-cell about-lab-text-cell">
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
            maxWidth: '34rem',
          }}>
            Our laboratory develops mathematical and computational frameworks for the analysis of biological shape across scales.
            Central to this program is the theory of diffeomorphic image registration, the study of smooth, invertible mappings
            that carry one anatomical configuration into another, applied to the human brain as observed through multi-scale
            imaging modalities.
          </p>
        </div>

        <div className="about-lab-cell about-lab-text-cell">
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
            maxWidth: '34rem',
          }}>
            Current research integrates high-field structural MRI, spatial transcriptomics, lipidomics, and fluorescence protein
            staining to construct a coordinated atlas of neurodegeneration and shape change in the brain.
          </p>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: '#222',
            margin: 0,
            maxWidth: '34rem',
          }}>
            This work lies at the intersection of differential geometry, statistical inference, and systems neuroscience, with applications in the early detection and staging of Alzheimer's disease, traumatic brain injury, and normal aging.
          </p>
        </div>

        <div className="about-lab-cell about-lab-pointcloud-cell">
          <img
            src="/Point-Clouds.png"
            alt="Point Clouds"
            className="about-lab-image"
            onError={e => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('[data-points-fallback]');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            data-points-fallback
            style={{
              textAlign: 'center',
              padding: '2rem 1.5rem',
              display: 'none',
              width: '100%',
              minHeight: '200px',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f5f5f5',
            }}
          >
            <div>
              <p style={{
                fontFamily: '"Computer Modern Serif", serif',
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#888',
                margin: 0,
                marginBottom: '0.9rem',
              }}>
                Image Upload
              </p>
              <p style={{
                fontFamily: '"Computer Modern Serif", serif',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: '#555',
                margin: 0,
              }}>
                Place Point-Clouds.png in the public folder.
              </p>
            </div>
          </div>
          <p className="about-lab-caption" style={{ marginTop: '0.7rem' }}>Point-cloud representation of layer II ERC</p>
        </div>
      </div>

      {/* Research areas */}
      <div className="content-panel" style={{ marginBottom: '4rem' }}>
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#888',
          marginBottom: '1.4rem',
        }}>
          Research Areas
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {[
            'Diffeomorphic Registration',
            'Computational Anatomy',
            'High-Field MRI',
            'Spatial Transcriptomics',
            'Lipidomics',
            'Protein Pathology',
            'Shape Analysis',
            'Neurodegeneration',
            'Statistical Shape Theory',
          ].map(tag => (
            <span key={tag} style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '0.85rem',
              border: '1px solid #ccc',
              padding: '4px 12px',
              color: '#333',
              letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Contact line */}
      <div className="content-panel" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.9rem',
          color: '#555',
          lineHeight: 1.9,
        }}>
          Center for Imaging Science, Clark Hall<br />
          Johns Hopkins University, Baltimore, MD 21218<br />
          <span style={{ color: '#111' }}>MIM@jhu.edu</span>
        </p>
      </div>
    </section>
  );
}
