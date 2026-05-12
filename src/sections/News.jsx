const newsItems = [
  {
    date: 'March 2026',
    title: 'Prof. Miller Elected 2025 AAAS Fellow',
    body: 'Prof. Miller has been elected to the 2025 class of Fellows of the American Association for the Advancement of Science (AAAS) — one of 449 scholars honored across all scientific disciplines. The fellowship recognizes his career contributions to computational medicine and brain imaging for predicting neurodegenerative disease. Fellows will be celebrated in Washington, D.C. on May 29, 2026.',
    url: 'https://hub.jhu.edu/2026/03/26/ten-from-johns-hopkins-named-2025-aaas-fellows/',
    tag: 'Award',
  },
  {
    date: 'March 2025',
    title: 'NIH-Funded Research Spotlighted for Earlier Alzheimer\'s Diagnosis',
    body: 'The Johns Hopkins Hub and Hopkins Medicine featured Prof. Miller\'s NIH-funded program on early theranostics for Alzheimer\'s disease, highlighting how his lab uses MRI and molecular markers to detect structural brain changes in the temporal lobe years before clinical symptoms appear. The work draws on longitudinal data from the BIOCARD cohort — one of the largest preclinical Alzheimer\'s studies in the world.',
    url: 'https://hub.jhu.edu/2025/03/17/nih-funding-alzeimhers-disease-michael-miller/',
    tag: 'Research',
  },
  {
    date: 'April 2024',
    title: 'New Method in Nature Communications Bridges Molecular and Tissue-Scale Brain Atlases',
    body: 'A paper by Kaitlin Stouffer, Prof. Miller, and collaborators at the Allen Institute and ENS Paris-Saclay, published in Nature Communications (vol. 15, article 3530), introduces xIV-LDDMM — a method representing spatial transcriptomics data as generalized functions to align molecular-scale measures to tissue-scale MRI atlases. The work maps MERFISH and BARseq data to the Allen Mouse Brain Atlas using diffeomorphic metric mapping.',
    url: 'https://www.nature.com/articles/s41467-024-47883-4',
    tag: 'Publication',
  },
  {
    date: 'February 2024',
    title: 'Prof. Miller Co-Authors IEEE Roadmap on Grand Challenges in Biomedical Engineering',
    body: 'As senior author of a major position paper published in IEEE Open Journal of Engineering in Medicine and Biology, Prof. Miller helped lead a consortium of 50 researchers from 34 universities to identify five grand challenges at the interface of engineering and medicine. He presented the findings as a plenary at the BMES Annual Meeting in October 2024.',
    url: 'https://news.cornell.edu/stories/2024/03/consortium-identifies-5-grand-challenges-biomedical-engineering',
    tag: 'Publication',
  },
  {
    date: 'December 2023',
    title: 'STalign Published in Nature Communications — Open-Source Tool for Spatial Transcriptomics',
    body: 'STalign, a Python toolkit co-developed with Prof. Miller and Daniel Tward (UCLA), was published in Nature Communications (vol. 14, article 8123). The tool uses large deformation diffeomorphic metric mapping (LDDMM) to align spatial transcriptomics datasets across samples, resolutions, and technologies — enabling cross-platform comparisons of gene expression data in tissue sections.',
    url: 'https://www.nature.com/articles/s41467-023-43915-7',
    tag: 'Publication',
  },
  {
    date: 'February 2024',
    title: 'Hopkins BME Highlights STalign as Breakthrough Computational Tool',
    body: 'Johns Hopkins BME published a feature on STalign, describing how the tool allows researchers to precisely align spatial single-cell data across tissue sections and technologies. The piece highlights the collaboration between Prof. Miller\'s group and the Fan Lab, and the adaptation of the LDDMM algorithm from neuroimaging to single-cell spatial genomics.',
    url: 'https://www.bme.jhu.edu/news-events/news/computational-tool-for-spatial-single-cell-research/',
    tag: 'News',
  },
];

const tagColors = {
  Award: { bg: '#f0f7ff', text: '#3a7bd5' },
  Publication: { bg: '#f0faf4', text: '#2e7d52' },
  News: { bg: '#fdf6ec', text: '#b07620' },
};

export default function News() {
  return (
    <section
      className="section-enter content-panel"
      style={{ maxWidth: 760, margin: '0 auto', paddingTop: '4rem', paddingBottom: '6rem' }}
    >
      <h2 style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontWeight: 'normal',
        fontSize: '1.6rem',
        letterSpacing: '0.01em',
        marginBottom: '0.5rem',
        marginTop: 0,
      }}>
        News
      </h2>
      <p style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontSize: '0.9rem',
        color: '#888',
        marginBottom: '3.5rem',
      }}>
        Recent announcements, publications, and laboratory events.
      </p>

      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3rem' }} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {newsItems.map((item, i) => {
          const tag = tagColors[item.tag] || tagColors['News'];
          return (
            <div
              key={i}
              className="news-item-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '2rem',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid #efefef',
              }}
            >
              {/* Left column: date + tag */}
              <div style={{ paddingTop: '0.15rem' }}>
                <p style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.82rem',
                  color: '#aaa',
                  letterSpacing: '0.02em',
                  margin: '0 0 0.6rem',
                }}>
                  {item.date}
                </p>
                <span style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: tag.bg,
                  color: tag.text,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                }}>
                  {item.tag}
                </span>
              </div>

              {/* Right column: title + body + link */}
              <div>
                <p style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.98rem',
                  color: '#111',
                  fontWeight: 'normal',
                  margin: '0 0 0.5rem',
                  lineHeight: 1.5,
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.88rem',
                  color: '#555',
                  lineHeight: 1.75,
                  margin: '0 0 0.75rem',
                }}>
                  {item.body}
                </p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: '"Computer Modern Serif", serif',
                      fontSize: '0.8rem',
                      color: '#87CEEB',
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Read more →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}