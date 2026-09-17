import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Section from '../components/layout/Section';
import Footer from '../components/layout/Footer';
import ExperienceList from '../components/sections/ExperienceList';
import SkillsMatrix from '../components/sections/SkillsMatrix';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { 
  profileData, 
  professionalExperienceData,
  secondaryLeadershipData,
  venturesData,
  ytsData,
  rotaractData, 
  academicData, 
  expertiseItems, 
  civicItems,
  skillsData 
} from '../data/content';
import type { SectionId } from '../types';

// Asset Imports
import photoSatDown from '../assets/Sujal Photo/SujalPhoto_SatDown.jpg';
import photoTalking from '../assets/Sujal Photo/SujalPhoto_Talking.jpeg';
import photoUN from '../assets/Sujal Photo/SujalPhoto_UN.webp';
import photoDebating from '../assets/Sujal Photo/SujalPhoto_Debating.webp';
import photoParliament from '../assets/Sujal Photo/SujalPhoto_Parliament.webp';
import photoLanding from '../assets/Sujal Photo/SujalPhoto_Landing.webp';
import photoRotaract from '../assets/Sujal Photo/Sujal_Rotaract.jpg';
import photoWorking from '../assets/Sujal Photo/SujalPhoto_Working.webp';
import photoLandscape from '../assets/Sujal Photo/View_Landscape.jpg';

const sectionIds: SectionId[] = [
  'profile',
  'academic',
  'leadership',
  'research',
  'expertise',
  'skills',
  'rotaract',
  'mun',
  'civic',
  'ventures'
];

const Details = () => {
  useScrollReveal();
  const activeSection = useScrollSpy(sectionIds, 'profile');
  const [showMoreLeadership, setShowMoreLeadership] = useState(false);
  const [allExpertiseExpanded, setAllExpertiseExpanded] = useState(false);
  const [allMunExpanded, setAllMunExpanded] = useState(false);
  const [allCivicExpanded, setAllCivicExpanded] = useState(false);
  const [allAcademicExpanded, setAllAcademicExpanded] = useState(false);

  // Modern Web Guidance: search-hidden-content sync with native Ctrl+F beforematch event
  useEffect(() => {
    const handleBeforeMatch = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('#leadership')) setShowMoreLeadership(true);
      if (target.closest('#expertise')) setAllExpertiseExpanded(true);
      if (target.closest('#mun')) setAllMunExpanded(true);
      if (target.closest('#civic')) setAllCivicExpanded(true);
      if (target.closest('#academic')) setAllAcademicExpanded(true);
    };

    window.addEventListener('beforematch', handleBeforeMatch);
    return () => window.removeEventListener('beforematch', handleBeforeMatch);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      <Navbar activeSection={activeSection} onScroll={scrollToSection} />

      <main className="content">
        <Section 
          id="profile" 
          number="01" 
          title={<>The<br /><em>Profile</em></>}
        >
          <div className="profile-grid">
            <div className="profile-content">
              <h2 className="editorial-subtitle" style={{ marginBottom: '0.75rem' }}>{profileData.greeting}</h2>
              <p className="lead-text" style={{ fontStyle: 'italic', fontSize: '1.75rem', lineHeight: '1.3', marginBottom: '1.5rem' }}>
                {profileData.leadText}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {profileData.bodyText.map((text, i) => (
                  <p key={i} className="body-text">
                    {text}
                  </p>
                ))}
              </div>
            </div>

            <div className="profile-image-container">
              <img 
                src={photoLanding} 
                alt="Sujal - Profile" 
                className="profile-portrait"
                loading="eager"
              />
              <div style={{ marginTop: '1.25rem' }}>
                <a 
                  href="/cv-collection/Sujal CV ALL.pdf" 
                  target="_blank" 
                  className="btn-primary" 
                  style={{ 
                    padding: '0.85rem 1.5rem', 
                    width: '100%',
                    letterSpacing: '0.08em',
                    textAlign: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Download size={14} strokeWidth={1.5} style={{ marginRight: '0.6rem' }} />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section 
          id="academic" 
          number="02" 
          title={<>Academic<br /><em>Foundations</em></>}
          reversed={false}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoTalking} 
                alt="Sujal - Academic" 
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button 
                  onClick={() => setAllAcademicExpanded(!allAcademicExpanded)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}
                >
                  {allAcademicExpanded ? 'Hide Details' : 'In Details'}
                </button>
              </div>
            </div>
          }
        >
          <div className="editorial-grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="article-category" style={{ fontSize: '0.75rem', color: 'var(--text-gray)', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #eee', paddingBottom: '0.65rem' }}>Higher Education</div>
              
              <article className="article-card">
                <div className="item-meta" style={{ marginBottom: '0.6rem' }}>{academicData[0].date}</div>
                <h4 className="article-title" style={{ fontSize: '1.5rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{academicData[0].role}</h4>
                <p className="item-subtitle" style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>{academicData[0].company}</p>
                
                <p className="body-text" style={{ color: allAcademicExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                  {academicData[0].desc[0]}
                </p>

                <div hidden={!allAcademicExpanded ? ('until-found' as unknown as boolean) : undefined}>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {academicData[0].desc.slice(1).map((d, i) => (
                      <div key={i}>
                        <p className="body-text" style={{ color: 'var(--text-gray)' }} dangerouslySetInnerHTML={{ __html: d }} />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="article-category" style={{ fontSize: '0.75rem', color: 'var(--text-gray)', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #eee', paddingBottom: '0.65rem' }}>Specialization & Foundations</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {academicData.slice(1).map((item, idx) => (
                  <article key={idx} className="article-card">
                    <div className="item-meta" style={{ marginBottom: '0.4rem' }}>{item.date}</div>
                    <h4 className="article-title" style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{item.role}</h4>
                    <p className="item-subtitle" style={{ fontSize: '0.85rem' }}>{item.company}</p>
                    <div hidden={!allAcademicExpanded ? ('until-found' as unknown as boolean) : undefined}>
                      <p className="body-text" style={{ marginTop: '0.65rem' }}>{item.desc[0]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section 
          id="leadership" 
          number="03" 
          title={<>Professional<br /><em>Experience</em></>}
          reversed={true}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoParliament} 
                alt="Sujal - Engineering & Leadership" 
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button 
                  className="btn-primary" 
                  onClick={() => setShowMoreLeadership(!showMoreLeadership)}
                  style={{ width: '100%', padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}
                >
                  {showMoreLeadership ? 'Show Less' : 'Additional Roles (1)'}
                </button>
              </div>
            </div>
          }
        >
          <div>
            <ExperienceList items={professionalExperienceData} />
            <div hidden={!showMoreLeadership ? ('until-found' as unknown as boolean) : undefined} style={{ marginTop: '0.5rem' }}>
              <ExperienceList items={secondaryLeadershipData} />
            </div>
          </div>
        </Section>

        <Section 
          id="research" 
          number="04" 
          title={<>Research &<br /><em>Publications</em></>}
          reversed={false}
        >
          <article className="article-card" style={{ marginTop: '0.5rem' }}>
            <div className="article-category">IEEE Conference Paper</div>
            <h4 className="article-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>Retinal Fundus Disease Detection and Classification using ResNet-50</h4>
            <p className="item-subtitle" style={{ marginBottom: '0.85rem' }}>IEEE ICISCT 2025 // DOI: 10.1109/ICISCT68600.2025.11441375</p>
            <p className="body-text" style={{ maxWidth: '800px' }}>
              A deep learning system utilizing the ResNet-50 architecture for multi-label retinal disease classification, aimed at early diagnostic support for ocular conditions. Published in the proceedings of the 2025 International Conference on Information Science and Communications Technologies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a 
                href="https://ieeexplore.ieee.org/document/11441375" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ padding: '0.65rem 1.5rem', fontSize: '0.72rem' }}
              >
                View on IEEE Xplore
              </a>
              <a 
                href="https://www.researchgate.net/publication/399407643_Retinal_Fundus_Disease_Detection_and_Classification_using_ResNet-50" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ padding: '0.65rem 1.5rem', fontSize: '0.72rem' }}
              >
                ResearchGate
              </a>
            </div>
          </article>
        </Section>

        <Section 
          id="expertise" 
          number="05" 
          title={<>Domains of<br /><em>Expertise</em></>}
          reversed={true}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoSatDown} 
                alt="Sujal - Expertise" 
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button 
                  onClick={() => setAllExpertiseExpanded(!allExpertiseExpanded)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}
                >
                  {allExpertiseExpanded ? 'Hide Details' : 'In Details'}
                </button>
              </div>
            </div>
          }
        >
          <div className="editorial-grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {expertiseItems.slice(0, 4).map(item => (
                <article key={item.id} className="article-card">
                  <div className="article-category">{item.category}</div>
                  <h4 className="article-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{item.title}</h4>
                  <p className="body-text" style={{ color: allExpertiseExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                    {item.shortDesc}
                  </p>
                  <div hidden={!allExpertiseExpanded ? ('until-found' as unknown as boolean) : undefined}>
                    <p className="body-text" style={{ marginTop: '0.4rem' }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </article>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {expertiseItems.slice(4).map(item => (
                <article key={item.id} className="article-card">
                  <div className="article-category">{item.category}</div>
                  <h4 className="article-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{item.title}</h4>
                  <p className="body-text" style={{ color: allExpertiseExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                    {item.shortDesc}
                  </p>
                  <div hidden={!allExpertiseExpanded ? ('until-found' as unknown as boolean) : undefined}>
                    <p className="body-text" style={{ marginTop: '0.4rem' }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section 
          id="skills" 
          number="06" 
          title={<>Technical<br /><em>Toolkit</em></>}
          reversed={false}
        >
          <SkillsMatrix categories={skillsData} />
        </Section>

        <Section 
          id="rotaract" 
          number="07" 
          title={<>Rotaract &<br /><em>Global Service</em></>}
          reversed={true}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoRotaract} 
                alt="Sujal - Rotaract" 
              />
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <article className="article-card">
              <div className="item-meta" style={{ marginBottom: '0.5rem' }}>2025 – Present</div>
              <h4 className="article-title" style={{ fontSize: '1.75rem', marginBottom: '0.35rem', lineHeight: '1.2' }}>
                Rotaract Club of Central Valley Kasthamandap
              </h4>
              <p className="item-subtitle" style={{ fontSize: '0.85rem', marginBottom: '0', textTransform: 'none', letterSpacing: '0.04em' }}>
                RID 3292 — Nepal & Bhutan &nbsp;•&nbsp; Zone VIII
              </p>

              <ul className="editorial-list" style={{ marginTop: '0.5rem' }}>
                {rotaractData.map((item, idx) => (
                  <li key={idx} className="editorial-list-item">
                    <div className="item-meta">{item.date}</div>
                    <div>
                      <h5 className="item-title">{item.role}</h5>
                      {item.company !== "Rotaract Club of Central Valley Kasthamandap" && (
                        <div className="item-subtitle" style={{ marginBottom: '0.4rem' }}>{item.company}</div>
                      )}
                      <ul className="bullet-list">
                        {item.desc.map((d, dIdx) => (
                          <li key={dIdx} className="body-text">{d}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <div className="rotaract-stats-strip">
              <div className="rotaract-stat-item">
                <span className="rotaract-stat-number">03</span>
                <span className="rotaract-stat-label">Active Leadership Roles</span>
              </div>
              <div className="rotaract-stat-item">
                <span className="rotaract-stat-number">2025–</span>
                <span className="rotaract-stat-label">Present Continuous</span>
              </div>
              <div className="rotaract-stat-item">
                <span className="rotaract-stat-number">RID 3292</span>
                <span className="rotaract-stat-label">Nepal &amp; Bhutan</span>
              </div>
              <div className="rotaract-stat-item">
                <span className="rotaract-stat-number">Zone VIII</span>
                <span className="rotaract-stat-label">Zonal Secretariat</span>
              </div>
            </div>
          </div>
        </Section>

        <Section 
          id="mun" 
          number="08" 
          title={<>Diplomacy &<br /><em>Public Policy</em></>}
          reversed={false}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoDebating} 
                alt="Sujal - UN" 
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button 
                  onClick={() => setAllMunExpanded(!allMunExpanded)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}
                >
                  {allMunExpanded ? 'Hide Details' : 'In Details'}
                </button>
              </div>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
            
            <div className="editorial-metrics-3">
              <div>
                <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', lineHeight: '1' }}>60+</div>
                <div className="item-meta" style={{ marginTop: '0.35rem' }}>Conferences</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', lineHeight: '1' }}>17</div>
                <div className="item-meta" style={{ marginTop: '0.35rem' }}>Press Roles</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', lineHeight: '1' }}>50</div>
                <div className="item-meta" style={{ marginTop: '0.35rem' }}>Dais Roles</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <article className="article-card">
                <div className="item-meta" style={{ marginBottom: '0.35rem' }}>{ytsData.date}</div>
                <h4 className="article-title" style={{ fontSize: '1.4rem', marginBottom: '0.35rem', lineHeight: '1.3', fontFamily: 'var(--font-serif)' }}>{ytsData.role}</h4>
                <p className="item-subtitle" style={{ fontSize: '0.92rem', marginBottom: '0.65rem', textTransform: 'none', color: 'var(--text-ink)', fontWeight: 600 }}>{ytsData.company}</p>
                <ul className="bullet-list">
                  {ytsData.desc.map((d, idx) => (
                    <li key={idx} className="body-text">{d}</li>
                  ))}
                </ul>
              </article>

              <article className="article-card">
                <div className="item-meta" style={{ marginBottom: '0.2rem' }}>2021 – Present</div>
                <div className="article-category" style={{ margin: '0 0 0.2rem 0' }}>Leadership</div>
                <h4 className="article-title" style={{ fontSize: '1.35rem', marginBottom: '0.25rem', lineHeight: '1.3', fontFamily: 'var(--font-serif)' }}>Committee Leadership (The Dais)</h4>
                <p className="body-text" style={{ color: allMunExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                  Extensive experience moderating high-level debate across international conferences as President, Chair, and Crisis Director.
                </p>
                <div hidden={!allMunExpanded ? ('until-found' as unknown as boolean) : undefined}>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>President & Executive Director</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}><b>President:</b> UNHRC (NaLC, RPMUN X, NAMI) • ECOSOC (RC, SXJ, RUPY’s, Swostishree) • UNICEF (CS MUN 2.0, Sudesha)<br/><b>Co-President:</b> UNGA (Ripumardini Army) • UNHRC (CS MUN 3.0)<br/><b>Executive Director:</b> UNDP (UAG, BNKS) • UNWOMEN (KNS)</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Chair & Director</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}><b>Chair:</b> DISEC (V MUN, ULLENS) • UNESCO (ULLENS) • SOCHUM (ULLENS) • UNCSTD (ULLENS IBDP) • IMF (IIMUN.NEPAL)<br/><b>Crisis Director:</b> HCC (XI MUN 8.0)<br/><b>President of the Senate:</b> US SENATE (KMC, Chelsea)</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Co-Chair & Vice Chair</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}><b>Co-Chair:</b> UNESCO (EURO MUN-YTS) • UNWOMEN (Sanskriti-GHF)<br/><b>Co-Director:</b> HGA-Crisis (EURO MUN-YTS)<br/><b>Vice Chair:</b> AOSIS (GEMS) • SPECPOL (MALPI) • DISEC (SMS)</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Specialized Roles</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}>Dep. High Commissioner UNHCR (DRISTI) • Upasabhamukh FPN (Nisarga)</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="article-card">
                <div className="article-category" style={{ margin: '0.4rem 0 0.2rem 0' }}>Press & Media</div>
                <h4 className="article-title" style={{ fontSize: '1.35rem', marginBottom: '0.25rem', lineHeight: '1.3', fontFamily: 'var(--font-serif)' }}>International Press Corps (IPC)</h4>
                <p className="body-text" style={{ color: allMunExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                  Managed editorial workflows and publications as Editor-in-Chief and Head of Press across major international conferences.
                </p>
                <div hidden={!allMunExpanded ? ('until-found' as unknown as boolean) : undefined}>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Editor-in-Chief</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}>Pulchowk MUN (University) • GCI MUN • UGI MUN • Akshara MUN</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Head of Press</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}>KU MUN 2025 (University) • NAMSS MUN-YTS • Pabson NIST MUN-GHF • Aurora MUN • BDS MUN • BGM Army School MUN-GHF • AVM MUN 3.0 • BMC MUN • Ripumardini Army MUN-GHF • BBMS MUN • Deerwalk MUN • JMES MUN Jhapa* • GCI MUN 2026*</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="article-card">
                <div className="article-category" style={{ margin: '0.4rem 0 0.2rem 0' }}>Operations</div>
                <h4 className="article-title" style={{ fontSize: '1.35rem', marginBottom: '0.25rem', lineHeight: '1.3', fontFamily: 'var(--font-serif)' }}>Secretariat & Operations</h4>
                <p className="body-text" style={{ color: allMunExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                  Led full conference operations and digital infrastructure as Director General, Head of IT, and Program Organizer for multiple large-scale events.
                </p>
                <div hidden={!allMunExpanded ? ('until-found' as unknown as boolean) : undefined}>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Director General</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}>TIMUN 5.0 • TIMUN 6.0 (Also Head of IT)</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>Program Organizer</span>
                      <span style={{ color: 'var(--text-gray)', lineHeight: '1.7', display: 'block' }}>CS MUN 2.0 & 3.0</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Section>

        <Section 
          id="civic" 
          number="09" 
          title={<>Civic<br /><em>Involvement</em></>}
          reversed={true}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoUN} 
                alt="Sujal - Civic" 
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button 
                  onClick={() => setAllCivicExpanded(!allCivicExpanded)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}
                >
                  {allCivicExpanded ? 'Hide Details' : 'In Details'}
                </button>
              </div>
            </div>
          }
        >
          <div className="editorial-grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {civicItems.slice(0, 4).map(item => (
                <article key={item.id} className="article-card">
                  <div className="item-meta" style={{ marginBottom: '0.2rem' }}>{item.date}</div>
                  <div className="article-category" style={{ margin: '0 0 0.2rem 0' }}>{item.category}</div>
                  <h4 className="article-title" style={{ fontSize: '1.3rem', marginBottom: '0.25rem', lineHeight: '1.3' }}>{item.title}</h4>
                  <p className="item-subtitle" style={{ fontSize: '0.85rem', marginBottom: '0.45rem', textTransform: 'none', letterSpacing: '0' }}>{item.company}</p>
                  <p className="body-text" style={{ color: allCivicExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                    {item.shortDesc}
                  </p>
                  <div hidden={!allCivicExpanded ? ('until-found' as unknown as boolean) : undefined}>
                    <p className="body-text" style={{ marginTop: '0.5rem' }}>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {civicItems.slice(4).map(item => (
                <article key={item.id} className="article-card">
                  <div className="item-meta" style={{ marginBottom: '0.2rem' }}>{item.date}</div>
                  <div className="article-category" style={{ margin: '0 0 0.2rem 0' }}>{item.category}</div>
                  <h4 className="article-title" style={{ fontSize: '1.3rem', marginBottom: '0.25rem', lineHeight: '1.3' }}>{item.title}</h4>
                  <p className="item-subtitle" style={{ fontSize: '0.85rem', marginBottom: '0.45rem', textTransform: 'none', letterSpacing: '0' }}>{item.company}</p>
                  <p className="body-text" style={{ color: allCivicExpanded ? 'var(--text-gray)' : 'var(--text-charcoal)' }}>
                    {item.shortDesc}
                  </p>
                  <div hidden={!allCivicExpanded ? ('until-found' as unknown as boolean) : undefined}>
                    <p className="body-text" style={{ marginTop: '0.5rem' }}>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section 
          id="ventures" 
          number="10" 
          title={<>Independent<br /><em>Ventures</em></>}
          reversed={false}
          sideContent={
            <div className="side-image-small">
              <img 
                src={photoWorking} 
                alt="Sujal - Independent Ventures" 
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a 
                  href="https://lunarchronicles.com.np" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '0.6rem 1.25rem', fontSize: '0.72rem', display: 'inline-flex', justifyContent: 'center' }}
                >
                  Visit Venture &rarr;
                </a>
              </div>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <article className="article-card">
              <div className="item-meta" style={{ marginBottom: '0.5rem' }}>{venturesData[0].date}</div>
              <h4 className="article-title" style={{ fontSize: '1.75rem', marginBottom: '0.35rem', lineHeight: '1.2' }}>
                {venturesData[0].company}
              </h4>
              <p className="item-subtitle" style={{ fontSize: '0.95rem', marginBottom: '0.85rem', textTransform: 'none', color: 'var(--text-ink)', fontWeight: 600 }}>
                {venturesData[0].role}
              </p>
              <ul className="bullet-list" style={{ marginTop: '0.35rem' }}>
                {venturesData[0].desc.map((d, dIdx) => (
                  <li key={dIdx} className="body-text" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>{d}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>
      </main>

      <div style={{ width: '100%', borderTop: '1px solid #d1d1d1', borderBottom: '1px solid #d1d1d1', overflow: 'hidden' }} className="reveal">
        <img 
          src={photoLandscape} 
          alt="Kathmandu Valley" 
          className="home-landscape-image"
          style={{ 
            width: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center 40%',
            display: 'block'
          }} 
        />
      </div>

      <Footer />
    </div>
  );
};

export default Details;
