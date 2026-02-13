export const profileData = {
  name: 'Ali Moavia',
  title: 'Cybersecurity Specialist',
  avatar: '/images/avatar.jpg',
  email: 'alimoavia80@gmail.com',
  phone: '+92 325 4139900',
  birthday: 'Not specified',
  location: 'Multan, Punjab, Pakistan',
  social: {
    github: 'https://github.com/alimoavia254',
    linkedin: 'https://linkedin.com/in/ali-moavia',
    tryhackme: 'https://tryhackme.com/p/alimoavia80',
    portfolio: 'https://alimoavia254.github.io/Portfolio',
  },
};

export const aboutData = {
  description: [
    "I'm a results-driven Cybersecurity Specialist with expertise in digital forensics, penetration testing, and vulnerability assessment. Recent graduate with hands-on experience in forensic analysis, ethical hacking, and security consulting. I'm passionate about identifying and mitigating security threats to protect digital assets.",
    "My focus is on conducting comprehensive security assessments, developing forensic tools, and providing actionable recommendations for risk mitigation. I've worked with industry-standard tools including FTK, Burp Suite, Metasploit, and Wireshark. I'm committed to continuous learning and staying current with evolving cybersecurity threats and technologies.",
  ],
  services: [
    {
      icon: 'Shield',
      title: 'Penetration Testing',
      description: 'Comprehensive vulnerability assessment and penetration testing to identify security weaknesses.',
    },
    {
      icon: 'Search',
      title: 'Digital Forensics',
      description: 'Expert forensic analysis, evidence preservation, and incident response for cybercrime investigations.',
    },
    {
      icon: 'Lock',
      title: 'Security Consulting',
      description: 'Strategic security assessment and recommendations aligned with OWASP and NIST frameworks.',
    },
    {
      icon: 'Code',
      title: 'Security Tool Development',
      description: 'Custom Python-based security tools for forensic analysis, threat detection, and automated security testing.',
    },
    {
      icon: 'Globe',
      title: 'Web Development',
      description: 'Building secure, scalable web applications with modern frameworks and best practices for application security.',
    },
    {
      icon: 'Monitor',
      title: 'Custom Desktop App Development',
      description: 'Developing cross-platform desktop applications with secure architecture, optimized performance, and professional user interfaces.',
    },
  ],
  testimonials: [
    {
      avatar: '/images/testimonial-asjad.jpg',
      name: 'Dr. Muhammad Asjad Amin',
      text: 'Ali won the Best Project Award at our departmental exhibition for his outstanding work on bypassing and protecting Windows security. His project on image processing and steganography—hiding data within images—demonstrated exceptional technical skill.',
    },
    {
      avatar: '/images/testimonial-hirra.jpg',
      name: 'Hirra Sheikh',
      text: 'Ali developed "SpoofHawk", a sophisticated forensic tool for our London-based operations, and manages our digital presence. His expertise in both cybersecurity tool development and web services is impressive.',
    },
    {
      avatar: '/images/testimonial-james.jpg',
      name: 'James Carter',
      text: 'We engaged Ali from the USA for a comprehensive security audit. His ability to identify critical vulnerabilities in our infrastructure was invaluable. A highly recommended cybersecurity professional.',
    },
    {
      avatar: '/images/testimonial-sarah.jpg',
      name: 'Sarah Jenkins',
      text: 'Working with Ali on our UK-based digital forensics case was a seamless experience. His deep understanding of evidence handling and forensic analysis tools ensured a successful investigation.',
    },
  ],
  clients: [
    { name: 'Punjab Police', logo: '/logos/punjab-police.jpg' },
    { name: 'NAVTTC', logo: '/logos/navttc.jpg' },
    { name: 'PFTP', logo: '/logos/pftp.jpg' },
    { name: 'Islamia University', logo: '/logos/iub.jpg' },
    { name: 'TryHackMe', logo: '/logos/tryhackme.jpg' },
    { name: 'HackTheBox', logo: '/logos/hackthebox.jpg' },
  ],
};

export const resumeData = {
  education: [
    {
      title: 'Bachelor of Science in Cybersecurity & Digital Forensics',
      period: '2021 — 2025',
      description: 'Islamia University of Bahawalpur. Core Coursework: Cybersecurity, Digital Forensics, Network Security, Cryptography, Incident Response, Malware Analysis. Final Year Project: Portable Forensic Analysis Tool (Published).',
    },
    {
      title: 'Industry Certifications',
      period: '2020 — 2024',
      description: 'Ethical Hacking (EC-Council), Digital Forensics Examiner (Alison), CCNP ROUTE Fundamentals (Cisco), Front-End Web Developer (Sololearn).',
    },
  ],
  experience: [
    {
      title: 'Cybersecurity Consultant Trainee',
      period: 'June 2025 — December 2025',
      description: 'Professional Freelancing Training Program (PFTP). Conducted comprehensive VAPT assessments, identified high-risk vulnerabilities including SQL injection and XSS, and delivered detailed remediation reports using Burp Suite and Metasploit.',
    },
    {
      title: 'Digital Forensics Intern',
      period: 'January 2025 — February 2025',
      description: 'Punjab Police (Cyber Wing). Assisted in digital evidence collection, conducted forensic triage using FTK and Autopsy, prepared forensic reports for law enforcement case files.',
    },
    {
      title: 'Teaching Assistant (Cybersecurity)',
      period: 'July 2024 — September 2024',
      description: 'NAVTTC Bahawalpur. Delivered cybersecurity training, designed hands-on laboratory exercises, and evaluated student performance in Linux, network security, and forensic analysis.',
    },
  ],
  skills: [
    { name: 'Penetration Testing & Vulnerability Assessment', level: 85 },
    { name: 'Digital Forensics & Incident Response', level: 90 },
    { name: 'Network Security & Traffic Analysis', level: 80 },
    { name: 'Security Tool Development (Python)', level: 85 },
    { name: 'Web Application Security Testing', level: 82 },
    { name: 'Threat Intelligence & Risk Assessment', level: 78 },
  ],
};

export const portfolioData = {
  categories: ['all', 'forensics', 'penetration testing', 'security tools'],
  projects: [
    {
      title: 'Portable Forensic Analysis Tool (PFAT)',
      category: 'forensics',
      image: '/images/project-pfat.jpg',
      icon: 'Search',
      description: 'Python-based forensic tool that automates browser history and USB artifact collection with ML-based prioritization',
      tech: ['Python', 'Tkinter', 'Machine Learning', 'Forensics'],
      liveUrl: 'https://github.com/alimoavia254',
      githubUrl: 'https://github.com/alimoavia254',
    },
    {
      title: 'SpoofHawk: Email Spoofing Detection',
      category: 'security tools',
      image: '/images/project-spoofhawk.jpg',
      icon: 'Shield',
      description: 'Email spoofing detection system using Random Forest ML with SPF and DKIM validation',
      tech: ['Python', 'Machine Learning', 'Email Security', 'Tkinter'],
      liveUrl: 'https://github.com/alimoavia254',
      githubUrl: 'https://github.com/alimoavia254',
    },
    {
      title: 'AMN-DOS: Network Stress Testing Tool',
      category: 'security tools',
      image: '/images/project-amndos.jpg',
      icon: 'Zap',
      description: 'Ethical DDoS simulation tool for network resilience testing with HTTP flood and Slowloris techniques',
      tech: ['Python', 'Network Security', 'DDoS Simulation'],
      liveUrl: 'https://github.com/alimoavia254',
      githubUrl: 'https://github.com/alimoavia254',
    },
    {
      title: 'VAPT Assessment - Web Application',
      category: 'penetration testing',
      image: '/images/project-vapt.jpg',
      icon: 'Globe',
      description: 'Comprehensive vulnerability and penetration testing assessment identifying SQL injection and XSS flaws',
      tech: ['Burp Suite', 'OWASP Top 10', 'SQLMap', 'Manual Testing'],
      liveUrl: 'https://github.com/alimoavia254',
      githubUrl: 'https://github.com/alimoavia254',
    },
    {
      title: 'Digital Forensic Analysis',
      category: 'forensics',
      image: '/images/project-dfir.jpg',
      icon: 'HardDrive',
      description: 'End-to-end forensic investigation with evidence collection, analysis, and reporting for cybercrime cases',
      tech: ['FTK Imager', 'Autopsy', 'Belkasoft', 'WinHex'],
      liveUrl: 'https://github.com/alimoavia254',
      githubUrl: 'https://github.com/alimoavia254',
    },
    {
      title: 'Network Security Assessment',
      category: 'penetration testing',
      image: '/images/project-netsec.jpg',
      icon: 'Server',
      description: 'Network infrastructure assessment including scanning, enumeration, and vulnerability identification',
      tech: ['Nmap', 'Wireshark', 'Metasploit', 'Tcpdump'],
      liveUrl: 'https://github.com/alimoavia254',
      githubUrl: 'https://github.com/alimoavia254',
    },
  ],
};

export const blogData = {
  posts: [
    {
      title: 'Advanced Digital Forensic Tool v3.0 | Ali Moavia & Mehwish Naz',
      category: 'Tool Development',
      date: 'Oct 2025',
      readTime: '15 min',
      image: '/images/blog-adft.jpg',
      excerpt: 'Comprehensive Forensic Collection with Machine Learning. Seamlessly operates across Windows, macOS, and Linux systems with automatic OS detection and adaptive collection methods.',
      tags: ['Digital Forensics', 'Machine Learning', 'Python', 'Cybersecurity'],
      slug: 'advanced-digital-forensic-tool-v3',
    },
    {
      title: 'AMN-DOS · Advanced Multi-Layer Network Assessment Tool',
      category: 'Network Security',
      date: 'Feb 2026',
      readTime: '10 min',
      image: '/images/blog-amndos.jpg',
      excerpt: 'A proof-of-concept stress tool combining HTTP flood, Slowloris, and TCP SYN flood attack vectors for red team assessments.',
      tags: ['Python', 'Network Security', 'DoS', 'Red Teaming'],
      slug: 'amn-dos',
    },
  ],
};

export const contactData = {
  email: 'alimoavia80@gmail.com',
  phone: '+92 325 4139900',
  location: 'Multan, Punjab, Pakistan',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.8366073934697!2d71.4262!3d30.1937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3926babe64f6da69%3A0x123456789!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890',
};