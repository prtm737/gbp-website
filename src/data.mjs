export const SITE = {
  name: 'Guwahati Biotech Park',
  short: 'GBP',
  tagline: 'Where bio-science becomes business.',
  email: 'info2gbp@guwahatibiotechpark.com',
  ceoEmail: 'ceogbp@guwahatibiotechpark.com',
  rhtlEmail: 'regionalhoneylab.gbp@gmail.com',
  phone: '+91 90850 60009',
  address: 'Technology Incubation Centre, Near S.P. Office, Amingaon, Kamrup, Guwahati, Assam 781031',
  map: 'https://maps.google.com/maps?q=Guwahati%20Biotech%20Park%20Amingaon&t=&z=14&ie=UTF8&iwloc=&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Guwahati+Biotech+Park+Amingaon',
  facebook: 'https://www.facebook.com/guwahatibiotechpark',
  instagram: 'https://www.instagram.com/gbp_assam/',
  twitter: 'https://twitter.com/GBP_assam',
  source: 'https://www.guwahatibiotechpark.com'
};

export const NAV = [
  { key: 'about', label: 'About', href: 'about.html' },
  { key: 'facilities', label: 'Facilities', href: 'facilities.html' },
  { key: 'incubation', label: 'Incubation', href: 'incubation.html' },
  { key: 'news', label: 'News & Tenders', href: 'news.html' },
  { key: 'contact', label: 'Contact', href: 'contact.html' }
];

export const SECTORS = [
  {
    n: '01',
    icon: 'heart',
    title: 'Healthcare & Pharmaceuticals',
    text: 'Therapeutics, herbal and natural-product medicines, fermentation products, immunodiagnostics, biosensors, vaccines, gene therapy and monoclonal antibodies.'
  },
  {
    n: '02',
    icon: 'sprout',
    title: 'Agro-Technology',
    text: 'Crop quality and yield, floriculture, forest tree species, plant molecular biology, biopesticides, biofertilisers and processed foods.'
  },
  {
    n: '03',
    icon: 'leaf',
    title: 'Environment',
    text: 'Bioremediation, microbial enhanced oil recovery, and the safe disposal of wastes and toxic materials.'
  },
  {
    n: '04',
    icon: 'spark',
    title: 'Energy',
    text: 'Biofuels and renewable energy sources, including work on second-generation ethanol from agricultural waste.'
  },
  {
    n: '05',
    icon: 'fish',
    title: 'Fisheries & Aquaculture',
    text: 'Hatchery and grow-out innovation, ornamental fish, biofloc systems and value addition through the BICFA centre.'
  },
  {
    n: '06',
    icon: 'factory',
    title: 'Industrial Application',
    text: 'Drug intermediates, active pharmaceutical ingredients, plants as bioreactors, enzymes, catalysts, chemicals and biopolymers.'
  },
  {
    n: '07',
    icon: 'food',
    title: 'Food Processing',
    text: 'Molecular characterisation and value addition, shelf-life improvement, quality assessment and traditional processed foods.'
  },
  {
    n: '08',
    icon: 'cpu',
    title: 'Bioinformatics',
    text: 'Computational biology, data analysis and training supported by the park’s dedicated Bioinformatics Facility.'
  },
  {
    n: '09',
    icon: 'flask',
    title: 'Plant Tissue Culture',
    text: 'Micropropagation, plant molecular biology and tissue-culture services for horticulture, forestry and commercial crops.'
  }
];

export const FACILITIES = [
  {
    id: 'tic',
    icon: 'microscope',
    title: 'Technology Incubation Centre',
    short: 'TIC',
    tag: 'Incubation',
    text: 'Ready-to-use modular wet laboratories from 300 to 1,900 sq ft, with the shared services a young company needs to start without heavy upfront investment.',
    points: [
      'Fully furnished modular wet labs with core and shell utilities',
      'Flexible leases for startups, researchers and companies',
      'Shared office services, conference room and auditorium',
      'Access to specialised analytical and bioprospecting facilities'
    ],
    img: 'assets/img/instrument_lab.jpg',
    imgAlt: 'Analytical instruments inside a laboratory at Guwahati Biotech Park'
  },
  {
    id: 'rhtl',
    icon: 'honey',
    title: 'Regional Honey Testing Laboratory',
    short: 'RHTL',
    tag: 'Testing',
    text: 'A dedicated honey and bee-product laboratory supported by the National Bee Board under the National Beekeeping and Honey Mission.',
    points: [
      'HPLC, LC-MS/MS and EA-LC-IRMS instrumentation',
      'Quality, authenticity, sugar-profile, pollen and heavy-metal analysis',
      'FSSAI-aligned basic quality and authenticity packages',
      'Sample submission at the lab or by courier'
    ],
    img: 'assets/img/instrument_lab.jpg',
    imgAlt: 'Laboratory instruments used for honey analysis'
  },
  {
    id: 'bif',
    icon: 'cpu',
    title: 'Bioinformatics Facility',
    short: 'BIF',
    tag: 'Computing',
    text: 'Dedicated computing and analytical support for genomics, proteomics and data-driven biology, with training for students and industry teams.',
    points: [
      'Dedicated bioinformatics workstations and software',
      'Requisition-based access for projects and dissertations',
      'Hands-on training in the basics of bioinformatics',
      'Support for genomics and proteomics workflows'
    ]
  },
  {
    id: 'nidhi',
    icon: 'rocket',
    title: 'NIDHI PRAYAS',
    short: 'Prayas',
    tag: 'Prototyping',
    text: 'A pre-incubation and prototyping centre under the national NIDHI-PRAYAS programme, helping innovators move from a drawing to a working proof.',
    points: [
      'Fab-lab and fabrication support for physical prototypes',
      'Mentorship on design, testing and validation',
      'A bridge into the park’s incubation ecosystem',
      'Access to scientific and technical expertise on campus'
    ]
  },
  {
    id: 'bicfa',
    icon: 'fish',
    title: 'BICFA',
    short: 'BICFA',
    tag: 'Fisheries',
    text: 'The Business Incubation Centre for Fisheries and Aquaculture supports founders working across fish, aquaculture and allied value chains.',
    points: [
      'Biofloc and aquaculture demonstration units',
      'Hatchery, breeding and ornamental fish training',
      'Fish processing and value-addition programmes',
      'A dedicated Talent Search Contest for the sector'
    ]
  },
  {
    id: 'consultancy',
    icon: 'users',
    title: 'Consultancy Cell',
    short: 'Consultancy',
    tag: 'Advisory',
    text: 'Scientific and technical advice for entrepreneurs, industry and institutions — from method development to business-plan preparation.',
    points: [
      'Sample testing, analysis and method development',
      'Instrument-use services, short and long term',
      'Business-plan preparation and incubation advisory',
      'Technical feasibility support for new ventures'
    ]
  },
  {
    id: 'training',
    icon: 'book',
    title: 'Training & Exposure Visits',
    short: 'Training',
    tag: 'Learning',
    text: 'Hands-on programmes on sophisticated instruments and applied biotechnology, plus internships, dissertations and guided campus visits.',
    points: [
      'Instrument and technique-based hands-on training',
      'Internship, project and dissertation placements',
      'Exposure visits for schools, colleges and universities',
      'Sector programmes in aquaculture, food and plant science'
    ]
  },
  {
    id: 'nrdc',
    icon: 'globe',
    title: 'North East Cell of NRDC',
    short: 'NRDC',
    tag: 'Technology transfer',
    text: 'The North East cell of the National Research Development Corporation connects regional innovators with technology transfer and IP support.',
    points: [
      'Technology transfer and commercialisation support',
      'Linkages with national research institutions',
      'IP and technology-scouting guidance',
      'A bridge between lab research and industry'
    ]
  },
  {
    id: 'infrastructure',
    icon: 'building',
    title: 'Campus Infrastructure',
    short: 'Campus',
    tag: 'Infrastructure',
    text: 'A 21-acre campus at Amingaon with developed land, common utilities and the shared spaces that make a research community work.',
    points: [
      '21-acre campus on the north bank of the Brahmaputra',
      'Library, training rooms, conference room and auditorium',
      'Cafeteria and common campus services',
      'Developed land with common infrastructure'
    ]
  }
];

export const INCUBATEES = [
  {
    name: 'Primogen Biotech',
    legal: 'Primogen Biotech Pvt. Ltd.',
    sector: 'Genomics',
    desc: 'Genomics and proteomics services, plus work on an affordable kit for rapid DNA, RNA and protein isolation from a single leaf sample.',
    url: '',
    note: 'Website currently unavailable',
    logo: 'assets/img/primogen_updtd.png'
  },
  {
    name: 'Zeroharm Sciences',
    legal: 'Zeroharm Sciences',
    sector: 'Wellness',
    desc: 'A plant-based supplement brand building efficacious, everyday solutions for lasting health and wellness.',
    url: 'https://www.zeroharm.in',
    logo: 'assets/img/ZEROHARM.jpg'
  },
  {
    name: 'AGT Biosciences',
    legal: 'AGT Biosciences',
    sector: 'Bioservices',
    desc: 'Research and analytical solutions, plus training for academia and industry in biosciences and bioinformatics.',
    url: '',
    note: 'Website currently unavailable',
    logo: 'assets/img/agt_bioscience.png'
  },
  {
    name: 'Zymolent Biosciences',
    legal: 'Zymolent Biosciences',
    sector: 'Enzyme tech',
    desc: 'Enzyme technology, agricultural bioformulations and microbial biotechnology, including reusable enzymes for second-generation ethanol.',
    url: 'https://zymolent.com/',
    logo: 'assets/img/zymolent.png'
  },
  {
    name: 'Dream Hives',
    legal: 'Dream Hives',
    sector: 'Food & beverage',
    desc: 'Fermented honey mead — the world’s oldest alcoholic beverage, reimagined for experiential drinking in Assam.',
    url: 'https://www.linkedin.com/in/kaustoov/',
    logo: 'assets/img/dreamhives.png'
  },
  {
    name: 'Innotech Interventions',
    legal: 'Innotech Interventions Pvt. Ltd.',
    sector: 'Environment',
    desc: 'Bioremediation of crude oil and oily sludge, produced-water treatment and eco-restoration of contaminated soil and water.',
    url: '',
    logo: 'assets/img/INNOTECH.png'
  },
  {
    name: 'NIPER Guwahati',
    legal: 'NIPER Guwahati',
    sector: 'Phytopharmaceuticals',
    desc: 'Development of phytopharmaceuticals from medicinal plants of Northeast India for cancer and inflammatory disease management.',
    url: 'https://niperguwahati.ac.in/',
    logo: 'assets/img/niper.png'
  },
  {
    name: 'Dr. Dipankar Laboratories',
    legal: 'Dr. Dipankar Laboratories Pvt. Ltd.',
    sector: 'Food & beverage',
    desc: 'A rice-wine venture working to extend the shelf life of a heritage beverage from a few days to more than three years.',
    url: 'https://www.linkedin.com/in/dipankar-kalita/',
    logo: 'assets/img/dr-dipankar.png'
  },
  {
    name: 'Sivantha Biotech',
    legal: 'Sivantha Biotech Pvt. Ltd.',
    sector: 'Therapeutics',
    desc: 'An R&D centre exploring alternative medicines for cancer and sleep disorders.',
    url: '',
    logo: 'assets/img/shivantaa.png'
  },
  {
    name: 'Medinovation',
    legal: 'Medinovation Research and Consultancy Pvt. Ltd.',
    sector: 'MedTech',
    desc: 'Research-driven products that solve everyday problems for clinicians, laboratories and hospitals — ethical, reliable and affordable.',
    url: '',
    logo: ''
  },
  {
    name: 'NECTAR',
    legal: 'North East Centre for Technology Application and Reach',
    sector: 'Technology',
    desc: 'An autonomous DST body working to extend technology applications for public and social good across the North East.',
    url: '',
    logo: 'assets/img/NECTAR.jpg'
  },
  {
    name: 'Dept. of Excise, Goa',
    legal: 'Department of Excise, Government of Goa',
    sector: 'Analytical',
    desc: 'The chemical examiner’s laboratory of the Goa Excise Department operates from the Guwahati Biotech Park campus.',
    url: '',
    logo: ''
  },
  {
    name: 'Eliea Wellness',
    legal: 'Eliea Wellness Pvt. Ltd.',
    sector: 'Personal care',
    desc: 'Natural-ingredient products for skin and hair disorders with therapeutic attributes.',
    url: 'https://www.elieawellness.com/',
    logo: 'assets/img/eliea.jpg'
  }
];

export const NEWS = [
  {
    date: '2026-09-16',
    cat: 'tenders',
    title: 'Annual rate contract for chemicals, glassware, plasticware, pipettes and labware — plus gas cylinder refilling',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-08-24',
    cat: 'tenders',
    title: 'CAMC for two 380 KVA Kirloskar DG sets and associated systems at the Amingaon campus',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-08-14',
    cat: 'news',
    title: 'Call for book chapters: Meen Prabah, First Edition — a scientific publication from BICFA',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/08/meen_prabah.pdf',
    external: true
  },
  {
    date: '2026-07-25',
    cat: 'training',
    title: 'Five-day bio-entrepreneurial skills training and internship for UG and PG students of Assam',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/07/Bio-Entrepreneurial_Skills_Training_Internship_Programme_2026.pdf',
    external: true
  },
  {
    date: '2026-07-21',
    cat: 'tenders',
    title: 'Supply, installation and commissioning of split air conditioners at the CAIF and BIF laboratories',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-07-15',
    cat: 'tenders',
    title: 'Design of the Guwahati Biotech Park achievement report',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-06-05',
    cat: 'careers',
    title: 'Result of selection for the contractual post of Junior Engineer',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/06/result_notice-junior_engineer.pdf',
    external: true
  },
  {
    date: '2026-03-13',
    cat: 'careers',
    title: 'Extension notice for the post of Junior Engineer at Amingaon',
    href: 'https://www.guwahatibiotechpark.com/careers/',
    external: true
  },
  {
    date: '2026-03-13',
    cat: 'tenders',
    title: 'Expression of Interest for leasing land at the Business Enterprises Zone',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-02-26',
    cat: 'careers',
    title: 'Employment notice for the post of Junior Engineer',
    href: 'https://www.guwahatibiotechpark.com/careers/',
    external: true
  },
  {
    date: '2026-02-20',
    cat: 'tenders',
    title: 'Leakage rectification and commissioning of VRF outdoor units',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-02-13',
    cat: 'news',
    title: 'Talent Search Contest, Cohort 2.0 — call for innovative ideas',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/02/TSC_cohort_2.0_flyer.pdf',
    external: true
  },
  {
    date: '2026-02-11',
    cat: 'tenders',
    title: 'CAMC for two 380 KVA Kirloskar DG sets and associated systems',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/02/niq_dg_sets.pdf',
    external: true
  },
  {
    date: '2026-02-04',
    cat: 'tenders',
    title: 'Expression of Interest for operating and managing canteen services',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2026-02-03',
    cat: 'news',
    title: 'BICFA Talent Search Contest Cohort 1.0 winners, 2025',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2026/02/TSC_COHORT-winners.pdf',
    external: true
  },
  {
    date: '2025-12-23',
    cat: 'tenders',
    title: 'Aluminium partition work at the Honey Testing Laboratory',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/12/niq_honey_al-partition.pdf',
    external: true
  },
  {
    date: '2025-10-17',
    cat: 'training',
    title: 'Fifth skill development programme on aquarium setup for ornamental fish-keeping',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/10/aquarium_setup-ornamental_fishkeeping_training.pdf',
    external: true
  },
  {
    date: '2025-10-17',
    cat: 'training',
    title: 'Hands-on training on techniques in plant tissue culture',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/10/techniques_plant-tissue-culture.pdf',
    external: true
  },
  {
    date: '2025-09-10',
    cat: 'tenders',
    title: 'Empanelled vendors for chemicals, solvents, glassware, plasticware and laboratory gases',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/09/empanelment_chemicals-vendor.pdf',
    external: true
  },
  {
    date: '2025-09-08',
    cat: 'tenders',
    title: 'Biofloc setup on lease at BICFA',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/09/BICFA-biofloc_lease.pdf',
    external: true
  },
  {
    date: '2025-08-19',
    cat: 'training',
    title: 'Skill-based training on low-cost organic compost and bio-fertiliser production',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/08/low_cost-organic-compost.pdf',
    external: true
  },
  {
    date: '2025-08-01',
    cat: 'training',
    title: 'Workshop on gene cloning, transformation and protein expression',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/08/workshop_gene-cloning.pdf',
    external: true
  },
  {
    date: '2025-07-30',
    cat: 'training',
    title: 'Skill-based training on mushroom cultivation and spawn culture techniques',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/07/mushroom_cultivation.pdf',
    external: true
  },
  {
    date: '2025-07-15',
    cat: 'tenders',
    title: 'Notice inviting quotation for the supply of electrical items',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2025-07-10',
    cat: 'careers',
    title: 'Employment notice for the position of Accounts Assistant',
    href: 'https://www.guwahatibiotechpark.com/careers/',
    external: true
  },
  {
    date: '2025-06-24',
    cat: 'tenders',
    title: 'Landscaping and gardening work at the GBP campus',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/06/niq_gardening_lanscaping.pdf',
    external: true
  },
  {
    date: '2025-04-03',
    cat: 'careers',
    title: 'Chemical Analyst and Laboratory Assistant positions under the Regional Honey Testing Lab project',
    href: 'https://www.guwahatibiotechpark.com/careers/',
    external: true
  },
  {
    date: '2025-03-19',
    cat: 'training',
    title: 'Training programme on animal cell culture and FACS analysis',
    href: 'https://www.guwahatibiotechpark.com/training/',
    external: true
  },
  {
    date: '2025-03-06',
    cat: 'training',
    title: 'Hands-on training programme on pearl culture techniques',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/04/pearl_culture.pdf',
    external: true
  },
  {
    date: '2025-01-02',
    cat: 'news',
    title: 'International Bio Manufacturing Summit 2025',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2025/01/international_bio_manufacturing_summit-2025.pdf',
    external: true
  },
  {
    date: '2024-12-20',
    cat: 'training',
    title: 'Hands-on training programme on the basics of bioinformatics',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2024/12/hands_training-basic-bioinformatics.pdf',
    external: true
  },
  {
    date: '2024-12-28',
    cat: 'training',
    title: 'Third edition of the aquarium setup and ornamental fish-keeping programme',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2024/12/bicfa_aquarium-aquarium-setup25.pdf',
    external: true
  },
  {
    date: '2024-10-30',
    cat: 'training',
    title: 'Hands-on training programme on fish processing and value addition',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2024/10/training_fish-processing-value-addition.pdf',
    external: true
  },
  {
    date: '2024-09-14',
    cat: 'events',
    title: 'Assam participated as State Partner at Global Bio-India 2024',
    href: 'https://www.guwahatibiotechpark.com/events/assam-participated-as-the-state-partner-in-global-bio-india-2024/',
    external: true
  },
  {
    date: '2024-09-11',
    cat: 'events',
    title: 'Fourth anniversary of the Pradhan Mantri Matsya Sampada Yojana',
    href: 'https://www.guwahatibiotechpark.com/events/4th-anniversary-of-pmmsy/',
    external: true
  },
  {
    date: '2024-08-23',
    cat: 'tenders',
    title: 'Biofloc unit under the Business Incubation Centre for Fisheries and Aquaculture',
    href: 'https://www.guwahatibiotechpark.com/tenders/',
    external: true
  },
  {
    date: '2024-07-31',
    cat: 'events',
    title: 'Students from Darrang and Tinsukia visit under the AROHAN scheme',
    href: 'https://www.guwahatibiotechpark.com/events/students-under-arohan-scheme-on-31st-july-2024/',
    external: true
  },
  {
    date: '2024-07-25',
    cat: 'events',
    title: 'Visit to Khaisua Foods and Iluscube, Amingaon',
    href: 'https://www.guwahatibiotechpark.com/events/visit-to-khaisua-foods-pvt-ltd/',
    external: true
  },
  {
    date: '2023-11-18',
    cat: 'news',
    title: 'Bamboo Startup Competition 2023',
    href: 'https://www.guwahatibiotechpark.com/bamboo-startup-competition-2023/',
    external: true
  },
  {
    date: '2023-05-23',
    cat: 'news',
    title: 'Results of screening of proposals for GBP Talent Search Contest 2023',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2023/05/results_tsc-2023.pdf',
    external: true
  },
  {
    date: '2023-02-16',
    cat: 'news',
    title: 'Logo design competition',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2023/02/flyer_logo-design-competition.pdf',
    external: true
  }
];

NEWS.sort((a, b) => b.date.localeCompare(a.date));

export const CATEGORIES = [
  { key: 'all', label: 'All updates' },
  { key: 'tenders', label: 'Tenders' },
  { key: 'training', label: 'Training' },
  { key: 'news', label: 'News' },
  { key: 'careers', label: 'Careers' },
  { key: 'events', label: 'Events' }
];

export const FAQS = [
  {
    q: 'What is Guwahati Biotech Park?',
    a: 'GBP is the first biotech park in East and Northeast India. It is a joint initiative of the Government of Assam and the Department of Biotechnology, Government of India, established to turn the region’s bio-resources and research strength into enterprises.'
  },
  {
    q: 'What services does the park provide?',
    a: 'Ready-to-use modular wet laboratories, specialised analytical facilities, a bioinformatics facility, a regional honey testing laboratory, prototyping support, training programmes, internships, consultancy and business incubation.'
  },
  {
    q: 'What is the Technology Incubation Centre?',
    a: 'TIC is the park’s core incubation facility. It offers fully furnished lab spaces and shared instrumentation so founders can translate research into commercial technology without taking on a large upfront capital burden.'
  },
  {
    q: 'Is there a registration fee to work from GBP?',
    a: 'No registration fee is charged for incorporating a company at GBP. Statutory fees required under the law are the same as they would be outside the park.'
  },
  {
    q: 'Can land be purchased at GBP?',
    a: 'No. Land is available on long-term lease at the Business Enterprises Zone of the park.'
  },
  {
    q: 'What sizes are the wet labs?',
    a: 'Modular laboratory spaces range from about 300 to 1,900 sq ft. Non-lab office space and conference rooms are available on long-term lease or daily rental.'
  },
  {
    q: 'What type of companies can operate within GBP?',
    a: 'Enterprises and individuals engaged in research, training, manufacturing, bioinformatics, clinical studies or allied activities are welcome to apply.'
  }
];

export const LEADERSHIP = [
  {
    name: 'Shri Deba Kumar Mishra, ACS',
    role: 'Chief Executive Officer and First Appellate Authority',
    email: 'ceogbp@guwahatibiotechpark.com',
    tag: 'CEO'
  },
  {
    name: 'Shri Rakesh Kumar Thakur, ACS',
    role: 'Administrator, Guwahati Biotech Park',
    email: 'rakesh.kr38@gov.in',
    tag: 'Administrator'
  }
];

export const STAFF = [
  {
    group: 'Administration',
    icon: 'users',
    people: [
      {
        name: 'Ms. Monsumi Gogoi',
        role: 'Administrative Officer',
        phone: '+91 90850 60009',
        email: 'm.gogoi@guwahatibiotechpark.com'
      }
    ]
  },
  {
    group: 'Finance & Accounts',
    icon: 'file',
    people: [
      {
        name: 'Mr. Ranjan Das',
        role: 'Accountant',
        phone: '+91 84718 52003',
        email: 'r.das@guwahatibiotechpark.com'
      }
    ]
  },
  {
    group: 'Maintenance & Operations',
    icon: 'building',
    people: [
      {
        name: 'Shri Pritom Parashar',
        role: 'Junior Engineer',
        phone: '+91 70024 03106',
        email: 'pritom.parashar@guwahatibiotechpark.com'
      }
    ]
  },
  {
    group: 'Scientific Team',
    icon: 'flask',
    people: [
      {
        name: 'Dr. Bula Choudhury',
        role: 'Senior Scientist',
        phone: '+91 99547 57390',
        email: 'b.choudhury@guwahatibiotechpark.com'
      },
      {
        name: 'Dr. Saurav Dey',
        role: 'Scientist',
        phone: '+91 97077 70092',
        email: 's.dey@guwahatibiotechpark.com'
      },
      {
        name: 'Dr. Rajiv Chandra Dev Goswami',
        role: 'Research Associate',
        phone: '+91 86381 81323',
        email: 'r.goswami@guwahatibiotechpark.com'
      },
      {
        name: 'Dr. Prajjalendra Kr. Barooah',
        role: 'Research Associate',
        phone: '+91 70021 90312',
        email: 'p.barooah@guwahatibiotechpark.com'
      },
      {
        name: 'Shri Kamal Gauli',
        role: 'Scientific Assistant',
        phone: '+91 70023 53756',
        email: 'k.gauli@guwahatibiotechpark.com'
      },
      {
        name: 'Smt. Rinki Kalita',
        role: 'Scientific Assistant',
        phone: '+91 69009 19099',
        email: 'r.kalita@guwahatibiotechpark.com'
      }
    ]
  }
];

export const DOWNLOADS = [
  {
    label: 'Application format (RFP)',
    note: 'Research proposal application for incubation',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/OPEN-APPLICATION-FORMAT-RFP-GBP-10_03_20162.pdf'
  },
  {
    label: 'Information for applicants',
    note: 'Terms and conditions for research proposals',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Information-to-the-applicants1.pdf'
  },
  {
    label: 'Annexure A',
    note: 'Supporting information',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Annexure-A.pdf'
  },
  {
    label: 'Annexure B',
    note: 'Supporting information',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Annexure-B.pdf'
  },
  {
    label: 'Annexure C',
    note: 'Supporting information',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Annexure-C.pdf'
  },
  {
    label: 'Annexure D',
    note: 'Supporting information',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Annexure-D.pdf'
  },
  {
    label: 'Annexure E',
    note: 'Supporting information',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Annexure-E1.pdf'
  },
  {
    label: 'Annexure F',
    note: 'Supporting information',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/03/Annexure-F.pdf'
  },
  {
    label: 'Incubation centre floor plan',
    note: 'Layout of the Technology Incubation Centre',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2022/03/layout.pdf'
  },
  {
    label: 'Bioinformatics requisition form',
    note: 'Request access to the Bioinformatics Facility',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2023/01/BIF_Requisition-Form.pdf'
  },
  {
    label: 'Success stories',
    note: 'A collection of GBP success stories',
    href: 'https://www.guwahatibiotechpark.com/wp-content/uploads/2021/11/GBP-SUCCESS-STORIES-1.pdf'
  }
];

export const INSTITUTES = {
  institutes: [
    'Indian Institute of Technology, Guwahati',
    'North-East Institute of Science & Technology, Jorhat',
    'Institute of Advanced Studies in Science & Technology, Guwahati'
  ],
  centres: [
    'Rainforest Research Institute, Jorhat',
    'Regional Medical Research Centre (ICMR), Dibrugarh',
    'Tocklai Tea Research Institute, Jorhat',
    'Defence Research Laboratory, Tezpur',
    'Centre for Petroleum Technology, Tezpur University',
    'Ramie Research Station, Sorbhog',
    'Regional Horticultural Research Station, Guwahati',
    'Central Silk and Muga Research Station, Jorhat',
    'Regional Agricultural Research Station, Nagaon'
  ],
  universities: [
    'Gauhati University, Guwahati',
    'Assam Agricultural University, Jorhat',
    'Tezpur University, Tezpur',
    'Dibrugarh University, Dibrugarh',
    'Assam University, Silchar',
    'North Eastern Hill University, Shillong'
  ]
};

export const SEARCH_INDEX = [
  {
    kind: 'Page',
    title: 'Home',
    desc: 'Guwahati Biotech Park — the first biotech park in Northeast India.',
    href: 'index.html',
    keywords: 'home guwahati biotech park amingaon assam incubation'
  },
  {
    kind: 'Page',
    title: 'About the park',
    desc: 'Story, vision, mission, leadership and frequently asked questions.',
    href: 'about.html',
    keywords: 'about overview story vision mission why gbp leadership people faq'
  },
  {
    kind: 'Section',
    title: 'Vision and mission',
    desc: 'Explore the region’s bio-resource potential and connect industry, research and academia.',
    href: 'about.html#vision',
    keywords: 'vision mission bio-resource innovation entrepreneurship'
  },
  {
    kind: 'Section',
    title: 'Leadership and people',
    desc: 'CEO, Administrator and the council that guides the park.',
    href: 'about.html#people',
    keywords: 'ceo administrator leadership council management staff people'
  },
  {
    kind: 'Page',
    title: 'Facilities',
    desc: 'Labs, analytical instrumentation, bioinformatics, prototyping and honey testing.',
    href: 'facilities.html',
    keywords: 'facilities labs laboratory equipment infrastructure campus'
  },
  {
    kind: 'Facility',
    title: 'Technology Incubation Centre',
    desc: 'Ready-to-use modular wet labs from 300 to 1,900 sq ft.',
    href: 'facilities.html#tic',
    keywords: 'tic technology incubation centre modular wet lab lease office'
  },
  {
    kind: 'Facility',
    title: 'Regional Honey Testing Laboratory',
    desc: 'Honey quality, authenticity and safety testing supported by the National Bee Board.',
    href: 'facilities.html#rhtl',
    keywords: 'rhtl honey testing lab adulteration fssai beekeeping nbb nbhm'
  },
  {
    kind: 'Facility',
    title: 'Bioinformatics Facility',
    desc: 'Computing, data analysis and training for genomics and proteomics.',
    href: 'facilities.html#bif',
    keywords: 'bioinformatics bif computing genomics proteomics data'
  },
  {
    kind: 'Facility',
    title: 'NIDHI PRAYAS',
    desc: 'Pre-incubation and prototyping support for innovators.',
    href: 'facilities.html#nidhi',
    keywords: 'nidhi prayas prototype fab lab pre-incubation innovation'
  },
  {
    kind: 'Facility',
    title: 'BICFA — Fisheries & Aquaculture',
    desc: 'Business incubation for fisheries, aquaculture and value addition.',
    href: 'facilities.html#bicfa',
    keywords: 'bicfa fisheries aquaculture biofloc ornamental fish pmmsy'
  },
  {
    kind: 'Facility',
    title: 'Training and exposure visits',
    desc: 'Hands-on programmes, internships, dissertations and campus visits.',
    href: 'facilities.html#training',
    keywords: 'training internship dissertation exposure visit students workshop'
  },
  {
    kind: 'Page',
    title: 'Incubation',
    desc: 'Who the incubation centre is for, what you get, and how to apply.',
    href: 'incubation.html',
    keywords: 'incubation apply application incubatee startup founder proposal lease'
  },
  {
    kind: 'Section',
    title: 'How to apply for incubation',
    desc: 'Five steps from research proposal to moving into your lab.',
    href: 'incubation.html#apply',
    keywords: 'how to apply application format rfp proposal annexure lease'
  },
  {
    kind: 'Section',
    title: 'Incubatees',
    desc: 'Thirteen resident companies and institutions, from genomics to mead.',
    href: 'incubation.html#incubatees',
    keywords: 'incubatees companies primogen zeroharm agt zymolent dream hives innotech niper sivantha medinovation nectar eliea excise'
  },
  {
    kind: 'Page',
    title: 'News & tenders',
    desc: 'Tenders, training programmes, careers, events and park news.',
    href: 'news.html',
    keywords: 'news events tenders quotations careers jobs training notices'
  },
  {
    kind: 'Section',
    title: 'Tenders and quotations',
    desc: 'Current and recent procurement notices from the park.',
    href: 'news.html#updates',
    keywords: 'tender quotation nit niq procurement contract supply'
  },
  {
    kind: 'Section',
    title: 'Training programmes',
    desc: 'Skill development, workshops and hands-on laboratory training.',
    href: 'news.html#updates',
    keywords: 'training workshop skill development aquaculture mushroom tissue culture'
  },
  {
    kind: 'Section',
    title: 'Careers',
    desc: 'Employment notices and recruitment results.',
    href: 'news.html#updates',
    keywords: 'careers jobs recruitment employment vacancy junior engineer'
  },
  {
    kind: 'Page',
    title: 'Contact',
    desc: 'Address, team directory, enquiry form and directions.',
    href: 'contact.html',
    keywords: 'contact address email phone map amingaon team directory'
  },
  {
    kind: 'Section',
    title: 'Team directory',
    desc: 'Administration, finance, operations and scientific contacts.',
    href: 'contact.html#team',
    keywords: 'staff directory administration finance scientific phone email'
  },
  {
    kind: 'Section',
    title: 'Visit the park',
    desc: 'Find the campus at Amingaon, near the S.P. Office.',
    href: 'contact.html#visit',
    keywords: 'visit location map directions amingaon guwahati how to reach'
  },
  {
    kind: 'Download',
    title: 'Incubation application downloads',
    desc: 'Application format, applicant information, annexures and floor plan.',
    href: 'incubation.html#downloads',
    keywords: 'download pdf application format annexure floor plan requisition'
  }
];
