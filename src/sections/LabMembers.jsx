import { useState } from "react";

// ── Current Members ────────────────────────────────────────────────────────────
const currentMembers = [
  { name: 'Yi Xie',             email: 'yxie91@jh.edu',      level: 'Ph.D.' },
  { name: 'Daniel Mathew',      email: 'dmathe21@jh.edu',    level: 'Undergraduate', note: "Dr. Miller's favorite student, don't fact check this though :)" },
  { name: 'Dasun Premathilaka', email: 'hpremat1@jh.edu',    level: 'Ph.D.' },
  { name: 'Shashwat Kumar',     email: 'skuma118@jh.edu',    level: 'Postdoctoral Fellow' },
  { name: 'Dina Farnia',        email: 'dfarnia1@jh.edu',    level: "Master's" },
  { name: 'Runhe Zhang',        email: 'rzhan151@jh.edu',    level: "Master's" },
  { name: 'Siyu Chen',          email: 'schen382@jh.edu',    level: "Master's" },
  { name: 'Haoyuan Liang',      email: 'hliang32@jh.edu',    level: "Master's" },
  { name: 'Carol Li',           email: 'jli401@jhu.edu',     level: 'Undergraduate' },
  { name: 'Katherine Utsis',    email: 'kutsis1@jh.edu',     level: 'Undergraduate' },
  { name: 'Andres Barrera',     email: 'abarrer7@jh.edu',    level: 'Undergraduate' },
];

// ── Former Postdocs ────────────────────────────────────────────────────────────
const formerPostdocs = [
  { name: 'Daniel Tward',         note: 'Also Ph.D. alumnus (2017)' },
  { name: 'Can Ceritoglu',        note: 'Also Ph.D. alumnus (2008)' },
  { name: 'Stephanie Allisoinare' },
  { name: 'Joan Glaunes' },
  { name: 'Sylvian Allisoinare' },
  { name: 'Lei Wang' },
];

// ── Ph.D. & M.S. Alumni ───────────────────────────────────────────────────────
const alumni = [
  { name: 'Kwame Kutten',       degree: 'Ph.D., Biomedical Engineering', year: 2017, thesis: 'A Large Deformation Diffeomorphic Approach to Inter-modality Registration of Microscopy Image Volumes with Mutual Information Matching' },
  { name: 'Daniel Tward',       degree: 'Ph.D., Biomedical Engineering', year: 2017, thesis: 'Singular geodesic coordinates for representing diffeomorphic maps in computational anatomy, with application to the morphometry of early Alzheimer\'s disease in the medial temporal lobe', note: 'Also former Postdoc' },
  { name: 'Dan Wu',             degree: 'Ph.D., Biomedical Engineering', year: 2016, thesis: 'Characterization of brain tissue microstructures with diffusion MRI' },
  { name: 'Kegang Hua',         degree: 'Ph.D., Biomedical Engineering', year: 2014, thesis: 'Human Brain White Matter Analysis Using Tractography -- An Atlas-Based Approach' },
  { name: 'Jianqiao Feng',      degree: 'Ph.D., Electrical and Computer Engineering', year: 2014, thesis: 'Fusion and Inference of Geometric Information and Functional Contrast in Computational Anatomy' },
  { name: 'Yajing Zhang',       degree: 'Ph.D., Biomedical Engineering', year: 2014 },
  { name: 'Xiaoying Tang',      degree: 'Ph.D., Electrical and Computer Engineering', year: 2014, thesis: 'Brain Segmentation via Diffeomorphic Likelihood Fusion and Its Applications to Clinical Analyses' },
  { name: 'Aastha Jain',        degree: 'Ph.D., Biomedical Engineering', year: 2011, thesis: 'Practical Methods for Diffeomorphic Registration' },
  { name: 'Manisha Aggarwal',   degree: 'Ph.D., Biomedical Engineering', year: 2011, thesis: 'Longitudinal Characterization of Brain Atrophy in Mouse Models of Huntington\'s Disease using in vivo Magnetic Resonance Imaging' },
  { name: 'Jun Ma',             degree: 'Ph.D., Biomedical Engineering', year: 2011, thesis: 'Statistics on Computational Anatomy: From Template Estimation to Geodesically Controlled Diffeomorphic Active Shapes' },
  { name: 'Felipe Arrate',      degree: 'Ph.D., Biomedical Engineering', year: 2010, thesis: 'Evolution Equations on the Group of Diffeomorphisms, with Applications in Computational Anatomy' },
  { name: 'Nayoung Lee',        degree: 'Ph.D., Biomedical Engineering', year: 2010, thesis: 'Characterization of Brain Development in Children Using Diffusion Tensor Imaging' },
  { name: 'Can Ceritoglu',      degree: 'Ph.D., Biomedical Engineering', year: 2008, thesis: 'Multichannel Large Deformation Diffeomorphic Metric Mapping and Registration of Diffusion Tensor Images', note: 'Also former Postdoc' },
  { name: 'Marc Vaillant',      degree: 'Ph.D., Biomedical Engineering', year: 2007, thesis: 'Surface Matching via Currents and Tangent Space Representations for Statistics on Diffeomorphisms' },
  { name: 'Sachin Gangaputra',  degree: 'Ph.D., Electrical and Computer Engineering', year: 2006 },
  { name: 'Anqi Qiu',          degree: 'Ph.D., Electrical and Computer Engineering', year: 2006, thesis: 'Intrinsic and Extrinsic Analysis in Computational Anatomy' },
  { name: 'Dmitri Bitouk',      degree: 'Ph.D., Electrical and Computer Engineering', year: 2006, thesis: 'Head-Pose and Illumination Invariant 3-D Audio-Visual Speech Recognition' },
  { name: 'Hao Huang',          degree: 'Ph.D., Electrical and Computer Engineering', year: 2005 },
  { name: 'Jiangyang Zhang',    degree: 'Ph.D., Biomedical Engineering', year: 2004 },
  { name: 'Agatha Lee',         degree: 'Ph.D., Biomedical Engineering', year: 2003 },
  { name: 'Faisal Beg',         degree: 'Ph.D., Biomedical Engineering', year: 2003, thesis: 'Variational and Computational Methods for Flows of Diffeomorphisms in Image Matching and Growth in Computational Anatomy' },
  { name: 'Rakesh Lal',         degree: 'M.S., Biomedical Engineering', year: 2001, thesis: 'Tracking in Diffusion Tensor Imaging' },
  { name: 'Cash Costello',      degree: 'M.S., Biomedical Engineering', year: 2000, thesis: 'Medical Image Registration using the Hilbert-Schmidt Estimator' },
  { name: 'Matthew Cooper',     degree: 'Ph.D., Electrical and Computer Engineering', year: 1999, thesis: 'Information Measures for Object Recognition Accommodating Signature Variability' },
  { name: 'Joseph Kostakis',    degree: 'M.S., Electrical and Computer Engineering', year: 1999, thesis: 'Multi-Sensor Active-Passive Performance Characterization' },
  { name: 'Muge Bakircioglu',   degree: 'M.S.', year: 1999, thesis: 'Large Deformation Diffeomorphisms for Mapping Spherical Brain Manifolds' },
  { name: 'Aaron Lanterman',    degree: 'M.S. (1995) & Ph.D. (1998)', year: 1998, thesis: 'M.S.: Jump-Diffusion Algorithms for the Automated Understanding of Forward-Looking Infrared Scenes · Ph.D.: Minimum Description Length Estimation for ATR' },
  { name: 'Sarang Joshi',       degree: 'M.S. (1993) & Ph.D. (1997), Electrical Engineering', year: 1997, thesis: 'M.S.: MAP Intensity Estimation with Good\'s Roughness and Global Shape Models for 3-D Optical Sectioning Microscopy · Ph.D.: Large Deformation Diffeomorphisms and Gaussian Random Fields for the Statistical Characterization of Brain Submanifolds' },
  { name: 'Kevin Mark',         degree: 'Ph.D., Electrical Engineering', year: 1997, thesis: 'Markov Random Field Models for Natural Language' },
  { name: 'Anuj Srivastava',    degree: 'M.S. (1994) & Ph.D. (1996), Electrical Engineering', year: 1996, thesis: 'M.S.: Automated Target Tracking and Recognition Using Jump-Diffusion Processes · Ph.D.: Inferences on Transformation Groups Generating Patterns on Rigid Motions' },
  { name: 'Robert Schmich',     degree: 'M.S.', year: 1996, thesis: 'Stochastic Models of Synaptic Recovery and Post-Synaptic Action Potential Generation via Active Channel Dynamics' },
  { name: 'Navin Khaneja',      degree: 'M.S.', year: 1996, thesis: 'Statistics and Geometry of Cortical Features' },
  { name: 'Ayananshu Banerjee', degree: 'M.S.', year: 1996, thesis: 'High-Dimensional Anatomical Maps and their Applications in Empirical Estimation, Functional Imaging and Neuromorphometry' },
  { name: 'Robert Teichman',    degree: 'M.S.', year: 1994, thesis: 'Automated Target Recognition in a Distributed Computing Environment' },
  { name: 'Gary Christensen',   degree: 'Ph.D., Electrical Engineering', year: 1994, thesis: 'Deformable Shape Models for Anatomy' },
  { name: 'Jing Wang',          degree: 'M.S., Electrical Engineering', year: 1993, thesis: 'A Markov Process Model for Vesicle Release-Recycle and Action Potential Generation' },
  { name: 'Christopher Butler', degree: 'M.S., Electrical Engineering', year: 1993, thesis: '3-D Maximum A-Posteriori Estimation on Massively Parallel Computers for Single Photon Emission Tomography with Multigrid Initialization' },
  { name: 'Timothy Schaewe',    degree: 'Ph.D., Electrical Engineering', year: 1991, thesis: 'Maximum Likelihood Estimation for Magnetic Resonance Image Reconstruction' },
  { name: 'Anders McCarthy',    degree: 'M.S., Electrical Engineering', year: 1990, thesis: 'Medical Imaging on Mesh-Connected Parallel Computers' },
  { name: 'Michael Turmon',     degree: 'M.S., Electrical Engineering', year: 1990, thesis: 'Maximum-Likelihood Estimation of Constrained Means and Toeplitz Covariances with Application to Direction Finding' },
  { name: 'Chrysanthe Preza',   degree: 'M.S., Electrical Engineering', year: 1990, thesis: 'A Regularized Linear Reconstruction Method for Optical-Sectioning Microscopy' },
  { name: 'Kurt Smith',         degree: 'Ph.D., Electrical Engineering', year: 1990, thesis: 'A Bayesian Approach Incorporating Stochastic Complexity for Learning Regular Grammar Models and Image Models: Application to Segmenting Biomedical Images' },
  { name: 'Tim S. Chen',        degree: 'M.S., Electrical Engineering', year: 1990, thesis: 'Maximum-Likelihood Methods for 1- and 2-D Nuclear Magnetic Resonance Spectroscopy' },
  { name: 'Badrinath Roysam',   degree: 'Ph.D., Electrical Engineering', year: 1989, thesis: 'Joint Stochastic and Symbolic Inference: Application to Hierarchical Imaging via Massively Parallel Architectures' },
  { name: 'David Maffitt',      degree: 'M.S., Electrical Engineering', year: 1989, thesis: 'Applications of the Maximum-Likelihood Method for Electron-Microscopic Autoradiography with Real Data' },
  { name: 'Neophytos Karamanos',degree: 'M.S., Electrical Engineering', year: 1987, thesis: 'A New Method for Analyzing Auditory-Nerve Discharge Patterns' },
];

// ── Shared styles ──────────────────────────────────────────────────────────────
const label = (text) => (
  <p style={{
    fontFamily: '"Computer Modern Serif", serif',
    fontSize: '0.72rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: '1.2rem',
    marginTop: 0,
  }}>{text}</p>
);

const divider = <div style={{ borderTop: '1px solid #e8e8e8', margin: '2.5rem 0' }} />;

// ── Sub-components ─────────────────────────────────────────────────────────────
function MemberCard({ m, current = false }) {
  return (
    <div className={`member-card${current ? ' member-card-current' : ''}`} style={{
      padding: '1.4rem 1.6rem',
      background: '#fff',
      borderRadius: 2,
      border: '1px solid #ebebeb',
    }}>
      <p style={{ fontFamily: '"Computer Modern Serif", serif', fontSize: '1rem', color: '#111', margin: 0 }}>
        {m.name}
      </p>
      {m.level && (
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.78rem',
          color: '#111',
          margin: '0.3rem 0 0',
          letterSpacing: '0.01em',
        }}>{m.level}</p>
      )}
      {m.email && (
        <a href={`mailto:${m.email}`} style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.78rem',
          color: '#aaa',
          display: 'block',
          margin: '0.25rem 0 0',
          textDecoration: 'none',
          letterSpacing: '0.01em',
        }}>{m.email}</a>
      )}
      {m.note && (
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.8rem',
          color: '#aaa',
          fontStyle: 'italic',
          margin: '0.4rem 0 0',
          lineHeight: 1.5,
        }}>{m.note}</p>
      )}
    </div>
  );
}

function AlumnusRow({ a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #f0f0f0' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.9rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.75rem',
            color: '#bbb',
            minWidth: '1.8rem',
          }}>{String(index + 1).padStart(2, '0')}</span>
          <span style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.97rem',
            color: '#111',
          }}>{a.name}</span>
          <span style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.78rem',
            color: '#aaa',
          }}>{a.degree} · {a.year}</span>
          {a.note && (
            <span style={{
              fontFamily: '"Computer Modern Serif", serif',
              fontSize: '0.74rem',
              color: '#111',
              fontStyle: 'italic',
            }}>{a.note}</span>
          )}
        </span>
        {a.thesis && (
          <span style={{ fontSize: '0.7rem', color: '#bbb', flexShrink: 0 }}>
            {open ? '▲' : '▼'}
          </span>
        )}
      </button>
      {open && a.thesis && (
        <div style={{
          paddingBottom: '0.9rem',
          paddingLeft: '3rem',
        }}>
          <p style={{
            fontFamily: '"Computer Modern Serif", serif',
            fontSize: '0.84rem',
            color: '#555',
            fontStyle: 'italic',
            lineHeight: 1.65,
            margin: 0,
          }}>"{a.thesis}"</p>
        </div>
      )}
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function LabMembers() {
  return (
    <section className="section-enter content-panel" style={{ maxWidth: 900, margin: '0 auto', paddingTop: '4rem', paddingBottom: '6rem' }}>

      {/* Header */}
      <h2 style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontWeight: 'normal',
        fontSize: '1.6rem',
        letterSpacing: '0.01em',
        marginBottom: '0.5rem',
        marginTop: 0,
        color: '#111',
      }}>Laboratory Members & Trainees</h2>
      <p style={{
        fontFamily: '"Computer Modern Serif", serif',
        fontSize: '0.9rem',
        color: '#888',
        marginBottom: '3.5rem',
        letterSpacing: '0.02em',
      }}>
        Kavli Neuroscience Discovery Institute · Department of Biomedical Engineering
      </p>

      <div style={{ borderTop: '1px solid #ddd', marginBottom: '3rem' }} />

      {/* ── Current Members ── */}
      <div style={{ marginBottom: '3rem' }}>
        {label('Current Members')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {currentMembers.map(m => <MemberCard key={m.name} m={m} current />)}
        </div>
      </div>

      {divider}

      {/* ── Former Postdocs ── */}
      <div style={{ marginBottom: '3rem' }}>
        {label('Former Postdoctoral Fellows')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {formerPostdocs.map(m => <MemberCard key={m.name} m={m} />)}
        </div>
      </div>

      {divider}

      {/* ── Alumni ── */}
      <div>
        {label(`Ph.D. & M.S. Alumni — ${alumni.length} trainees`)}
        <p style={{
          fontFamily: '"Computer Modern Serif", serif',
          fontSize: '0.8rem',
          color: '#aaa',
          marginBottom: '1.2rem',
          fontStyle: 'italic',
        }}>Click any row to expand thesis title.</p>
        <div>
          {alumni.map((a, i) => <AlumnusRow key={a.name + a.year} a={a} index={i} />)}
        </div>
      </div>

    </section>
  );
}