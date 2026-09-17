import type { ExperienceItem, ExpertiseItem, CivicItem, CVItem, ProfileData, ProjectItem, SkillCategory } from '../types';

export const profileData: ProfileData = {
  greeting: "Biographical Sketch",
  leadText: "Software engineer and multidisciplinary lead bridging scalable architectures, multilateral diplomacy, and brand strategy.",
  bodyText: [
    "I approach technology and leadership through the lens of complex systems—from high-concurrency microservices and federated credit scoring (SecureScore) to the delicate nuances of international diplomacy. Based in Kathmandu, my work encompasses engineering production software at Fusemachines, co-founding Lunar Chronicles Ltd., and publishing peer-reviewed deep learning research with IEEE.",
    "Across 5+ years in the Model United Nations circuit (directing flagship conferences and training delegates) and executive leadership across Rotaract District 3292 and open-source communities like NOSK, I've developed a conviction that impactful engineering relies as much on active listening and multilateral empathy as it does on technical rigor."
  ]
};

export const leadershipData: ExperienceItem[] = [
  {
    role: "Full Stack Engineer Intern",
    company: "Fusemachines",
    date: "Jul 2026 – Present",
    desc: [
      "Engineer core application modules across front-end and back-end stacks in a hybrid, production engineering team.",
      "Collaborate on production workflows, system integration, and API services."
    ]
  },
  {
    role: "Co-Founder & Managing Director",
    company: "Lunar Chronicles Ltd.",
    date: "2025 – Present",
    desc: [
      "Oversee strategic planning and operations; coordinated high-profile Health Dialogues with then Health Minister Hon. Pradeep Poudel and Heart Surgeon Dr. Bhagwan Koirala."
    ]
  },
  {
    role: "MUN Trainer & Organizer / UI-UX Designer",
    company: "Youth Thinkers' Society (YTS)",
    date: "2022 – 2026",
    desc: [
      "Trained students and delegates in multilateral diplomacy, negotiation, policy research, and public speaking; co-organized regional conferences.",
      "Created branding and digital assets for EIMUN and provincial MUN platforms."
    ]
  }
];

export const secondaryLeadershipData: ExperienceItem[] = [
  {
    role: "Web Design & Development Lead",
    company: "NCIT Tech Fest",
    date: "2024",
    desc: [
      "Ran the design and web workflow end to end for NCIT's annual tech festival, producing event branding, participant onboarding interfaces, and promotional digital assets."
    ]
  },
  {
    role: "UI/UX Designer, Web Developer & Event Organiser",
    company: "Nepal Open Source Klub (NOSK)",
    date: "Feb 2023 – Jan 2026",
    desc: [
      "Managed end-to-end web development lifecycle for 3 major events (SFD 2024, Noskathon Lite, SFD 2025); coordinated distributed contributor teams via GitHub workflows."
    ]
  },
  {
    role: "Vice President & Creative Design Lead",
    company: "MUN Society Nepal",
    date: "Sep 2024 – Present",
    desc: [
      "Oversee digital infrastructure and innovation strategy across regional chapters for events, campaigns, and publications."
    ]
  },
  {
    role: "Director General & Head of IT",
    company: "Trinity International MUN (TIMUN 5.0 & 6.0)",
    date: "2021 – 2023",
    desc: [
      "Directed conference operations and technology infrastructure for two flagship international MUN conferences.",
      "Coordinated campus technical exhibitions and represented the institution at regional educational forums."
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
      "<b>Honors:</b> 1st Place, Final Year Capstone Project Exhibition (SecureScore)",
      "<b>Electives:</b> Cybersecurity • Web Services & Applications • Information System Audit",
      "<b>Coursework:</b> Distributed Systems • Software Design & Architecture • Microservices • Agile Methodologies • Computer Networks • DBMS • Data Structures & Algorithms • Software Testing & QA • AI & Neural Networks"
    ]
  },
  {
    role: "+2 Science (NEB)",
    company: "Trinity International College",
    date: "2020 – 2022",
    desc: ["Comprehensive foundation in physical sciences."]
  },
  {
    role: "Technical Training — IT/Electronics",
    company: "Don Bosco Institute (CTEVT)",
    date: "Apr 2016 – Mar 2019",
    desc: ["Grade: A"]
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
    role: "Zonal Secretary, Zone 8",
    company: "Rotaract District 3292 (Nepal & Bhutan)",
    date: "Jul 2026 – Present",
    desc: [
      "Oversee zonal administration, compliance, and inter-club communication for clubs across Zone 8.",
      "Coordinate reporting channels and align club activities with district initiatives."
    ]
  },
  {
    role: "Events Coordination Chair",
    company: "Rotaract Club of Central Valley Kasthamandap",
    date: "Jul 2026 – Present",
    desc: [
      "Direct logistics, vendor coordination, budgeting, and execution for major club-wide events and service operations."
    ]
  },
  {
    role: "International Service Director | Creative Writer",
    company: "Rotaract Club of Central Valley Kasthamandap",
    date: "Jul 2025 – Jun 2026",
    desc: [
      "Spearheaded cross-border club twinning initiatives and managed international communication across partner districts.",
      "Authored impact reports and outreach content; aligned local initiatives with Rotary International’s seven areas of focus."
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
    id: 'ieee-ncit',
    category: 'Professional Society',
    title: 'PR Coordinator & Web Designer',
    company: 'IEEE NCIT Student Branch',
    date: 'Jan 2025 – Mar 2026',
    shortDesc: 'Managing digital presence and public relations for the student branch.',
    desc: 'Overseeing the branch\'s web infrastructure, designing promotional assets in Figma, and coordinating public relations strategies to enhance member engagement and visibility.'
  },
  {
    id: 'hult-prize',
    category: 'Social Entrepreneurship',
    title: 'Program Director & Event Co-Lead',
    company: 'Hult Prize at NCIT',
    date: 'Jul 2024 – Jul 2025',
    shortDesc: 'Directing cross-team workflows and staging for the campus-wide social entrepreneurship challenge.',
    desc: 'Directed cross-team workflows and event staging for the campus-wide social entrepreneurship challenge; served as liaison between NCIT and the Hult Prize Foundation.'
  },
  {
    id: 'github',
    category: 'Tech Community',
    title: 'Fielder',
    company: 'GitHub Field Day Nepal',
    date: 'Oct – Nov 2024',
    shortDesc: 'Engaging with open-source collaboration, developer workflows, and GitHub tooling.',
    desc: 'Participated in hands-on exposure to open-source collaboration, community governance, and developer tooling alongside engineering professionals.'
  },
  {
    id: 'un-volunteer',
    category: 'Volunteerism',
    title: 'Event Volunteer',
    company: 'UN Volunteers Nepal',
    date: '2024',
    shortDesc: 'Facilitating coordination for the 6th National Level Poetry Event.',
    desc: 'Facilitated coordination for the national poetry competition held for International Women\'s Day, managing delegate communications and event logistics.'
  },
  {
    id: 'performing-arts',
    category: 'Arts & Culture',
    title: 'President',
    company: 'Trinity Performing Arts Troupe',
    date: 'Apr 2021 – Aug 2023',
    shortDesc: 'Leading team administration and organizing cultural productions and college arts events.',
    desc: 'Led team administration and organized a range of cultural events, exhibitions, and theatrical productions for the college, managing a multidisciplinary student team.'
  },
  {
    id: 'goethe',
    category: 'International Exchange',
    title: 'Youth Delegate',
    company: 'Goethe-Institut PASCH Youth Camp, Sri Lanka & Nepal',
    date: '2019',
    shortDesc: 'Representing Nepal at the international youth camp in Sri Lanka & Nepal.',
    desc: 'Represented Nepal at the international youth camp in Negombo, Sri Lanka and Godawari, Nepal, engaging in intercultural dialogue and global citizenship workshops.'
  },
  {
    id: 'redcross',
    category: 'Humanitarian',
    title: 'Junior Member',
    company: 'Nepal Red Cross Society',
    date: 'Feb 2015 – Jul 2017',
    shortDesc: 'Assisting in blood donation camps, first-aid workshops, and public health awareness.',
    desc: 'Assisted in community blood donation camps, first-aid workshops, and public health awareness programs under the Junior Red Cross Circle.'
  },
  {
    id: 'foz',
    category: 'Wildlife Conservation',
    title: 'General Member',
    company: 'Friends of Zoo (FOZ)',
    date: 'Mar 2014 – Aug 2017',
    shortDesc: 'Supporting wildlife education campaigns, habitat upkeep, and conservation programs.',
    desc: 'Supported wildlife education campaigns, zoo habitat upkeep, and youth conservation programs promoting biodiversity and environmental stewardship.'
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

export const featuredProjects: ProjectItem[] = [
  {
    id: 'securescore',
    title: 'SecureScore',
    award: '1st Place, NCIT Project Exhibition 2026',
    category: 'Distributed Systems & Privacy-Preserving ML',
    date: '2025 – 2026',
    shortDesc: 'Zero-trust banking platform for thin rural infrastructure with federated credit scoring.',
    desc: 'Engineered a zero-trust banking architecture tailored for resource-constrained rural branches. Features a high-concurrency microservices core (Go/Gin, Apache Kafka, Redis, PostgreSQL) paired with a federated learning plane that trains credit scoring models locally across branches without centralizing sensitive financial data. Decreased rural False Negative Rate (FNR) from 0.328 to ~0.21.',
    techStack: ['Go', 'Gin', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Federated Learning', 'Python', 'Docker'],
    collaborators: ['Slok Regmi', 'Laxman Khatri', 'Anisha Adhikari']
  },
  {
    id: 'nosk-events',
    title: 'Noskathon Lite & Software Freedom Day Platforms',
    award: 'Web Design & Development Lead',
    category: 'Full-Stack Web & Brand Identity',
    date: 'Feb 2023 – Jan 2026',
    shortDesc: 'Event platforms and participant registration systems for flagship open-source conventions.',
    desc: 'Spearheaded the complete web lifecycle and visual design identity across 3 major national open-source events (SFD 2024, Noskathon Lite, and SFD 2025). Built performant web applications and coordinated distributed contributor workflows via GitHub.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'GitHub Actions']
  },
  {
    id: 'ncit-techfest',
    title: 'NCIT Tech Fest Digital Platform',
    award: 'Web Design & Development Lead',
    category: 'Web Design & Operations',
    date: '2024',
    shortDesc: 'Event branding and digital registration platform for NCIT\'s annual tech festival.',
    desc: 'Directed the design workflow end-to-end, delivering event branding, participant onboarding interfaces, schedule matrices, and promotional digital assets.',
    techStack: ['UI/UX Design', 'React', 'Figma', 'Adobe Creative Suite']
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Go (Golang)', 'Python', 'C', 'C++', 'SQL']
  },
  {
    category: 'Front-End',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Vite']
  },
  {
    category: 'Back-End & Data',
    skills: ['Node.js', 'Express', 'REST APIs', 'Microservices', 'Kafka', 'PostgreSQL', 'Redis']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git & GitHub', 'CI basics', 'Linux', 'VS Code', 'Vercel', 'Netlify']
  },
  {
    category: 'Design & UI/UX',
    skills: ['Figma', 'Canva', 'Adobe Creative Suite', 'Wireframing', 'Usability Testing', 'Design Systems']
  },
  {
    category: 'Agile & Leadership',
    skills: ['Scrum', 'Kanban', 'Sprint Planning', 'Jira', 'Trello', 'Cross-functional Leadership', 'Public Speaking']
  }
];
