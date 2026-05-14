import type { ExperienceItem, ExpertiseItem, CivicItem, CVItem, ProfileData } from '../types';

export const profileData: ProfileData = {
  greeting: "$ whoami",
  leadText: "I'm a software engineering student who happens to love diplomacy, design, and a good challenge.",
  bodyText: [
    "I've always been a bit of a geek about how things work—whether it's the logic of a React component or the complexity of international relations. Right now, I'm balancing my studies in Kathmandu with projects like co-founding Lunar Chronicles and researching deep learning. For me, it's less about the titles and more about the curiosity that comes with building something new.",
    "My time in the MUN circuit and Rotaract has taught me that the best solutions usually come from listening and collaborating. I'm just a perpetual learner trying to use code and community to make things a little better, one project at a time."
  ]
};

export const leadershipData: ExperienceItem[] = [
  {
    role: "Co-Founder & Managing Director",
    company: "Lunar Chronicles Ltd.",
    date: "2025 – Present",
    desc: [
      "Oversee strategic planning and operations; coordinated high-profile Health Dialogues with then Health Minister Hon. Pradeep Poudel and Heart Surgeon Dr. Bhagwan Koirala."
    ]
  },
  {
    role: "MUN Trainer/Organiser & UI/Web Designer",
    company: "Youth Thinkers' Society (YTS)",
    date: "2022 – 2026",
    desc: [
      "Managed training programmes and resources over 3.5 years; coordinated cross-functional teams in large-scale, time-critical event environments."
    ]
  }
];

export const secondaryLeadershipData: ExperienceItem[] = [
  {
    role: "Leadership & Design Operations",
    company: "Nepal College of Information Technology",
    date: "2023 – Present",
    desc: [
      "<b>Program Director & Event Co-Lead (HULT Prize):</b> Directed full program lifecycle for one of the world's largest student entrepreneurship competitions; managed 5+ sub-teams.",
      "<b>Design Team Lead (NCIT Tech Fest):</b> Managed full design workflow from concept to delivery, producing event branding, promotional materials, and digital assets."
    ]
  },
  {
    role: "UI/UX Designer, Web Developer & Event Organiser",
    company: "Nepal Open Source Klub (NOSK)",
    date: "Feb 2023 – Jan 2026",
    desc: [
      "Managed end-to-end web lifecycle for 3 major events (SFD 2024, Noskathon Lite, SFD 2025); coordinated distributed contributor teams via GitHub workflows."
    ]
  },
  {
    role: "Vice President & Creative Design Lead",
    company: "MUN Society Nepal",
    date: "Sep 2024 – Present",
    desc: [
      "Oversee digital infrastructure and innovation strategy; coordinate across regional chapters for events, campaigns, and publications."
    ]
  },
  {
    role: "Leadership & Event Operations",
    company: "Trinity International College",
    date: "2021 – 2023",
    desc: [
      "<b>Director General & Head of IT (TIMUN 5.0 & 6.0):</b> Led full conference operations, managing IT, creative, and content sub-teams.",
      "<b>President (Performing Arts Troupe):</b> Led planning and execution of large-scale arts events, managing a team of 20+.",
      "<b>Organizer (SciTech & Management Expo):</b> Coordinated large-scale technical and management exhibitions.",
      "<b>College Representative (7th Kantipur Hissan Edu-Fair):</b> Provided academic counseling and institutional representation."
    ]
  }
];

export const academicData: ExperienceItem[] = [
  {
    role: "BE Software Engineering",
    company: "Nepal College of Information Technology (PU)",
    date: "Dec 2022 – Dec 2026 (Expected)",
    desc: [
      "A comprehensive engineering program focused on scalable software architecture, distributed systems, and modern web technologies.",
      "<b>Electives:</b> Cybersecurity • Web Services & Applications • Information System Audit",
      "<b>Coursework:</b> Software Design & Architecture • Distributed Systems • AI & Neural Networks • Agile Methodologies • Computer Networks • Software Testing & QA • DBMS • Data Structures & Algorithms"
    ]
  },
  {
    role: "Ethical Hacking Certification (Ongoing)",
    company: "Broadway Infosys",
    date: "May 2026 – Jul 2026",
    desc: ["Advanced security protocols and vulnerability assessment."]
  },
  {
    role: "Technical Training — IT/Electronics",
    company: "Don Bosco Institute (CTEVT)",
    date: "Apr 2016 – Mar 2019",
    desc: ["Grade: A"]
  },
  {
    role: "+2 Science (NEB)",
    company: "Trinity International College",
    date: "2020 – 2022",
    desc: ["Comprehensive foundation in physical sciences."]
  },
  {
    role: "Secondary Education (SEE)",
    company: "DAV School",
    date: "2014 – 2020",
    desc: ["Grade: A"]
  }
];

export const rotaractData: ExperienceItem[] = [
  {
    role: "International Service Director",
    company: "Rotaract Central Valley Kasthamandap",
    date: "Jul 2025 – Present",
    desc: [
      "Orchestrating cross-border community welfare projects in collaboration with international clubs, managing multi-lingual communications, and aligning local initiatives with Rotary International’s seven areas of focus.",
      "Facilitating cultural exchange programs and representing the club in international summits and District conferences.",
      "Overseeing grant applications for international projects, managing project budgets, and ensuring transparent reporting to District and Global leadership."
    ]
  }
];

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'se',
    category: 'Digital & Architecture',
    title: 'Software Engineering',
    shortDesc: 'Full-stack development with a focus on React and robust architecture.',
    desc: 'Experienced in building resilient, high-performance web and mobile applications. Proficient in modern stacks including React, TypeScript, and high-performance styling paradigms.'
  },
  {
    id: 'pm',
    category: 'Operations & Leadership',
    title: 'Strategic Management & Event Operations',
    shortDesc: 'Directing large-scale programs and overseeing startup operations.',
    desc: 'Expert in <b>end-to-end event lifecycles</b>, team coordination, and stakeholder communication. Directed HULT Prize at NCIT and managed multi-disciplinary startup teams.'
  },
  {
    id: 'ir',
    category: 'Diplomacy',
    title: 'Geopolitics & International Relations',
    shortDesc: 'Extensive experience in global political dynamics and multilateral diplomacy.',
    desc: 'Trainer and delegate with a deep understanding of International Relations. Experienced in navigating complex negotiation environments through the MUN circuit.'
  },
  {
    id: 'cyber',
    category: 'Security',
    title: 'Cybersecurity & IT TechOps',
    shortDesc: 'Proficient in vulnerability assessment and secure operational frameworks.',
    desc: 'Focused on system integrity and secure organizational IT infrastructure. Trained in advanced security protocols and vulnerability assessment.'
  },
  {
    id: 'design',
    category: 'Aesthetics & Brand',
    title: 'Design & Branding',
    shortDesc: 'Visual identity consultation and UI/UX design using Adobe Suite.',
    desc: 'Crafting consistent brand narratives across digital and physical touchpoints. Proficient in Illustrator, InDesign, and Photoshop for brand discovery.'
  },
  {
    id: 'research',
    category: 'Scientific Inquiry',
    title: 'Research & Documentation',
    shortDesc: 'IEEE Researcher experienced in technical and academic documentation.',
    desc: 'Proficient in the full research lifecycle, from data analysis to peer-reviewed publication. Authored TIMUN handbooks and comprehensive academic prospectuses.'
  },
  {
    id: 'writing',
    category: 'Literary Arts',
    title: 'Editorial & Creative Writing',
    shortDesc: 'Proficient in content strategy, editorial workflows, and narrative crafting.',
    desc: 'Served as <b>Editor-in-Chief</b> for the IPC at PulchowkMUN. Experienced in overseeing editorial teams and producing high-impact professional publications.'
  },
  {
    id: 'civic',
    category: 'Social Impact',
    title: 'Civic & Community Engagement',
    shortDesc: 'Leading international service projects and driving community welfare.',
    desc: 'Focused on sustainable social impact through Rotaract and other community initiatives. Experienced in international service direction and local board membership.'
  }
];

export const civicItems: CivicItem[] = [
  {
    id: 'un-volunteer',
    category: 'Volunteerism',
    title: 'Event Volunteer',
    company: 'UN Volunteers Nepal',
    date: '2024 – Onwards',
    shortDesc: 'Assisting in the coordination of the 6th National Level Poetry Event.',
    desc: 'Provided logistical and operational support for the 6th National Level Poetry Event, ensuring smooth event flow and delegate management in collaboration with UNV Nepal.'
  },
  {
    id: 'nosk',
    category: 'Open Source',
    title: 'Open Source Contributor',
    company: 'Nepal Open Source Klub (NOSK)',
    date: '2023 – Onwards',
    shortDesc: 'Advocating for FOSS and contributing to community-driven tech projects.',
    desc: 'Active contributor to NOSK initiatives, focusing on visual identity and web development for major events like Software Freedom Day (SFD). Coordinated distributed contributor teams via GitHub workflows.'
  },
  {
    id: 'mentorship',
    category: 'Capacity Building',
    title: 'Public Speaking & Research Trainer',
    company: 'Youth Leadership Initiatives',
    date: '2022 – Onwards',
    shortDesc: 'Mentoring students in debate, negotiation, and academic documentation.',
    desc: 'Conducting intensive training sessions on public speaking, structured research, and diplomatic negotiation. Empowering the next generation of student leaders with the tools for effective advocacy and high-level debate.'
  },
  {
    id: 'ieee-ncit',
    category: 'Professional Society',
    title: 'PR Coordinator & Web Designer',
    company: 'IEEE NCIT Student Branch',
    date: 'Jan 2025 – Mar 2026',
    shortDesc: 'Managing digital presence and public relations for the student branch.',
    desc: 'Overseeing the branch\'s web infrastructure, designing promotional assets, and coordinating public relations strategies to enhance member engagement and visibility.'
  },
  {
    id: 'redcross',
    category: 'Humanitarian',
    title: 'Junior Member',
    company: 'Nepal Red Cross Society',
    date: 'Feb 2015 – Jul 2017',
    shortDesc: 'Engaging in disaster relief, first aid, and community health awareness.',
    desc: 'Participated in community-level health camps, first aid training, and relief distribution programs under the Junior Red Cross Circle.'
  },
  {
    id: 'foz',
    category: 'Wildlife Conservation',
    title: 'General Member',
    company: 'Friends of Zoo (FOZ)',
    date: 'Mar 2014 – Aug 2017',
    shortDesc: 'Supporting wildlife conservation and environmental education programs.',
    desc: 'Engaged in zoo-based conservation activities and educational campaigns to promote biodiversity and environmental stewardship among the youth.'
  },
  {
    id: 'goethe',
    category: 'International Exchange',
    title: 'Nepal Representative',
    company: 'Goethe-Institut International Pash Youth Camp',
    date: '2019',
    shortDesc: 'International leadership training and intercultural dialogue.',
    desc: 'Represented Nepal in multiple Goethe-Institut camps across Sri Lanka and Germany, focusing on sustainable development, language immersion, and global citizenship.'
  },
  {
    id: 'github',
    category: 'Tech Community',
    title: 'Fielder',
    company: 'GitHub Field Day Nepal',
    date: 'Oct – Nov 2024',
    shortDesc: 'Engaging with the global developer community and open-source ecosystems.',
    desc: 'Participating in deep-dive sessions on community building, open-source governance, and leveraging GitHub for large-scale event coordination and documentation.'
  }
];

export const cvData: CVItem[] = [
  {
    id: 'master',
    label: 'Master Resume (All Experience)',
    filename: 'Sujal CV ALL.pdf',
    category: 'Comprehensive'
  },
  {
    id: 'developer',
    label: 'Software Developer Resume',
    filename: 'Sujal_Thapa_Resume.pdf',
    category: 'Technical'
  },
  {
    id: 'mun',
    label: 'MUN & Diplomacy Resume',
    filename: 'Sujal MUN CV.pdf',
    category: 'Diplomatic'
  },
  {
    id: 'mun-dais',
    label: 'MUN DAIS Resume (Web)',
    filename: 'Sujal MUN DAIS Resume.html',
    category: 'Diplomatic'
  },
  {
    id: 'management',
    label: 'Operations & Management Resume',
    filename: 'Sujal_Thapa_Management_Resume.docx',
    category: 'Leadership'
  },
  {
    id: 'design',
    label: 'Creative & UI/UX Resume',
    filename: 'Sujal_Thapa_Design_Resume.docx',
    category: 'Design'
  }
];
