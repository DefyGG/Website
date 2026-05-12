const publications = [
  {
    year: '2024',
    entries: [
      {
        authors: 'Stouffer KM, Trouve A, Kunst M, Ng L, Zeng H, Anant M, Fan J, Kim Y, Chen X, Rue M, Miller MI',
        title: 'Cross-modality mapping using image varifolds to align tissue-scale atlases to molecular-scale measures with application to 2D brain sections',
        journal: 'Nature Communications',
        details: '15:3530',
      },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        authors: 'Stouffer KM, Chen C, Kulason S, Xu E, Witter MP, Ceritoglu C, Albert MS, Mori S, Troncoso J, Tward DJ, Miller MI',
        title: 'Early amygdala and ERC atrophy linked to 3D reconstruction of rostral neurofibrillary tau tangle pathology in Alzheimer\'s disease',
        journal: 'NeuroImage Clin',
        details: '38:103374',
      },
      {
        authors: 'Clifton K, Anant M, Aihara G, Atta L, Aimiuwu OK, Kebschull JM, Miller MI, Tward D, Fan J',
        title: 'STalign: Alignment of spatial transcriptomics data using diffeomorphic metric mapping',
        journal: 'Nature Communications',
        details: '14(1):8123',
      },
    ],
  },
  {
    year: '2022',
    entries: [
      {
        authors: 'Stouffer KM, Witter MP, Tward DJ, Miller MI',
        title: 'Projective diffeomorphic mapping of molecular digital pathology with tissue MRI',
        journal: 'Communications Engineering',
        details: '44(1):2731-339',
      },
    ],
  },
  {
    year: '2019',
    entries: [
      {
        authors: 'Younes L, Albert M, Moghekar A, Soldan A, Pettigrew C, Miller MI',
        title: 'Identifying changepoints in biomarkers during the preclinical phase of Alzheimer\'s disease',
        journal: 'Front Aging Neurosci',
        details: '11:74',
      },
      {
        authors: 'Tang X, Ross CA, Johnson H, Paulsen JS, Younes L, Albin RL, Ratnanather JT, Miller MI',
        title: 'Regional subcortical shape analysis in premanifest Huntington\'s disease',
        journal: 'Hum Brain Mapp',
        details: '40(5):1419-1433',
      },
      {
        authors: 'Kulason S, Tward DJ, Brown T, Sicat CS, Liu C-F, Ratnanather JT, Younes L, Bakker A, Gallagher M, Albert M, Miller MI',
        title: 'Cortical thickness atrophy in the transentorhinal cortex in mild cognitive impairment',
        journal: 'NeuroImage Clin',
        details: '21:101617',
      },
    ],
  },
  {
    year: '2018',
    entries: [
      {
        authors: 'Tward DJ, Brown T, Patel J, Kageyama Y, Mori S, Troncoso JC, Miller MI',
        title: 'Quantification of 3D tangle distribution in medial temporal lobe using multimodal image registration and convolutional neural networks',
        journal: 'Alzheimers Dement',
        details: '14(7):1291',
      },
    ],
  },
  {
    year: '2017',
    entries: [
      {
        authors: 'Soldan A, Pettigrew C, Cai Q, Wang J, Wang M-C, Moghekar A, Miller MI, Albert M, BIOCARD Research Team',
        title: 'Cognitive reserve and long-term change in cognition in aging and preclinical Alzheimer\'s disease',
        journal: 'Neurobiol Aging',
        details: '60:164-172',
      },
      {
        authors: 'Tward DJ, Sicat CS, Brown T, Bakker A, Gallagher M, Albert M, Miller MI',
        title: 'Entorhinal and transentorhinal atrophy in mild cognitive impairment using longitudinal diffeomorphometry',
        journal: 'Alzheimers Dement (Amst)',
        details: '9:41-50',
      },
    ],
  },
  {
    year: '2014',
    entries: [
      {
        authors: 'Younes L, Albert M, Miller MI, BIOCARD Research Team',
        title: 'Inferring changepoint times of medial temporal lobe morphometric change in preclinical Alzheimer\'s disease',
        journal: 'NeuroImage Clin',
        details: '5:178-187',
      },
    ],
  },
  {
    year: 'Selected Earlier Works',
    entries: [
      {
        authors: 'Bakker A, Kirwan CB, Miller M, Stark CE',
        title: 'Pattern separation in the human hippocampal CA3 and dentate gyrus',
        journal: 'Science',
        details: '319(5870):1640-1642, 2008',
      },
      {
        authors: 'Beg MF, Miller MI, Trouve A, Younes L',
        title: 'Computing large deformation metric mappings via geodesic flows of diffeomorphisms',
        journal: 'Int J Comput Vis',
        details: '61(2):139-157, 2005',
      },
      {
        authors: 'Csernansky JG, Wang L, Swank J, Miller JP, Gado M, McKeel D, Miller MI, Morris JC',
        title: 'Preclinical detection of Alzheimer\'s disease: hippocampal shape and volume predict dementia onset in elderly',
        journal: 'NeuroImage',
        details: '25(3):783-792, 2005',
      },
      {
        authors: 'Grenander U, Miller MI',
        title: 'Computational anatomy: an emerging discipline',
        journal: 'Quarterly of Applied Mathematics',
        details: '56:617-694, 1998',
      },
      {
        authors: 'Christensen GE, Rabbitt RD, Miller MI',
        title: 'Deformable templates using large deformation kinematics',
        journal: 'IEEE Trans Image Process',
        details: '5(10):1435-1447, 1996',
      },
      {
        authors: 'Snyder DL, Miller MI',
        title: 'Random Point Processes in Time and Space',
        journal: 'Springer Verlag',
        details: 'New York, pp. 1-481, 1991',
      },
      {
        authors: 'Snyder DL, Miller MI, Thomas LJ, Politte DG',
        title: 'Noise and edge artifacts in maximum-likelihood reconstructions for emission tomography',
        journal: 'IEEE Trans Med Imaging',
        details: '6(3):228-238, 1987',
      },
      {
        authors: 'Sachs MB, Young ED, Miller MI',
        title: 'Speech encoding in the auditory nerve: implications for cochlear implants',
        journal: 'Ann N Y Acad Sci',
        details: '405(1):94-113, 1983',
      },
    ],
  },
];

export default function Publications() {
  return (
    <section className="section-enter content-panel" style={{ maxWidth: 820, margin: '0 auto', paddingTop: '4rem', paddingBottom: '6rem' }}>
      <h2 style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontWeight: 'normal',
        fontSize: '1.6rem',
        letterSpacing: '0.01em',
        marginBottom: '0.5rem',
        marginTop: 0,
      }}>
        Selected Publications
      </h2>
      <p style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontSize: '0.9rem',
        color: '#888',
        marginBottom: '3.5rem',
      }}>
        For a complete list, see{' '}
        <a href="https://scholar.google.com/citations?user=Ui8pnoIAAAAJ&hl=en" style={{ color: '#111', textDecoration: 'underline', textDecorationColor: '#35E1EA' }}>
          Google Scholar
        </a>
      </p>

      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3rem' }} />

      {publications.map(({ year, entries }) => (
        <div key={year} style={{ marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '1.5rem',
          }}>
            {year}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {entries.map((pub, i) => (
              <div key={i} className="pub-entry" style={{
                paddingLeft: '1.2rem',
                paddingTop: '1.1rem',
                paddingBottom: '1.1rem',
                borderBottom: '1px solid #efefef',
              }}>
                <p style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: '#111',
                  marginBottom: '0.3rem',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {pub.title}
                </p>
                <p style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.85rem',
                  color: '#555',
                  margin: '0.4rem 0 0.2rem',
                }}>
                  {pub.authors}
                </p>
                <p style={{
                  fontFamily: '"Computer Modern Serif", serif',
                  fontSize: '0.85rem',
                  color: '#888',
                  margin: 0,
                }}>
                  <span style={{ color: '#111' }}>{pub.journal}</span>
                  {', '}
                  {pub.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
