const mongoose = require('mongoose');
const Department = require('../models/Department');
const FAQ = require('../models/FAQ');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    await seedDepartments();
    await seedFAQs();
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

const seedDepartments = async () => {
  const count = await Department.countDocuments();
  if (count > 0) return;
  await Department.insertMany([
    {
      code: 'CSE',
      name: 'Computer Science & Engineering',
      faculty: 'Engineering',
      minGPA: 4.5,
      seats: 120,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers algorithms, software engineering, artificial intelligence, databases, networks, and systems programming.',
      careers: ['Software Engineer', 'AI/ML Engineer', 'Data Scientist', 'Backend Developer', 'DevOps Engineer', 'CTO'],
      requiredSubjects: ['Physics', 'Mathematics', 'Chemistry or Biology'],
      admissionTestRequired: true,
      tags: ['tech', 'programming', 'ai', 'software', 'computer'],
      keywordMatch: ['computer', 'coding', 'programming', 'software', 'tech', 'cse', 'web', 'app', 'developer'],
      careerMatch: ['software engineer', 'developer', 'programmer', 'ai', 'data scientist', 'tech', 'it'],
      roadmap: {
        year1: ['C/C++ programming', 'Data Structures', 'Discrete Math', 'Computer Architecture'],
        year2: ['OOP with Java', 'Database Systems', 'Web Development', 'Algorithms'],
        year3: ['Machine Learning basics', 'Software Engineering', 'Internship', 'Mobile Development'],
        year4: ['Final Year Project', 'Capstone', 'Job Preparation', 'Portfolio Building']
      },
      jobRoles: ['Full Stack Developer', 'Data Engineer', 'AI Researcher', 'Cloud Architect', 'Cybersecurity Analyst'],
      industrySectors: ['FinTech', 'E-Commerce', 'Healthcare IT', 'Telecom', 'Government IT']
    },
    {
      code: 'SWE',
      name: 'Software Engineering',
      faculty: 'Engineering',
      minGPA: 4.5,
      seats: 60,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Specialized in software design, architecture, testing, project management, DevOps, and agile development.',
      careers: ['Software Engineer', 'QA Engineer', 'Project Manager', 'DevOps Engineer', 'Solutions Architect'],
      requiredSubjects: ['Physics', 'Mathematics', 'Chemistry or Biology'],
      admissionTestRequired: true,
      tags: ['tech', 'programming', 'software', 'engineering', 'agile'],
      keywordMatch: ['software', 'engineering', 'swe', 'coding', 'development', 'agile', 'devops'],
      careerMatch: ['software engineer', 'developer', 'project manager', 'devops', 'architect'],
      roadmap: {
        year1: ['Programming fundamentals', 'OOP', 'Discrete Math', 'Requirements Engineering'],
        year2: ['Software Architecture', 'Design Patterns', 'Testing & QA', 'Databases'],
        year3: ['Agile & Scrum', 'Cloud Computing', 'DevOps', 'Internship'],
        year4: ['Final Project', 'Capstone', 'Soft Skills', 'Industry Placement']
      },
      jobRoles: ['Software Developer', 'QA Tester', 'Scrum Master', 'Release Engineer', 'Technical Lead'],
      industrySectors: ['Software Houses', 'Startups', 'Enterprise IT', 'Banking Tech', 'Remote Freelance']
    },
    {
      code: 'EEE',
      name: 'Electrical & Electronic Engineering',
      faculty: 'Engineering',
      minGPA: 4.5,
      seats: 60,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers circuit theory, power systems, electronics, signals, embedded systems, and telecommunications.',
      careers: ['Electrical Engineer', 'Telecom Engineer', 'Power Systems Engineer', 'Embedded Developer'],
      requiredSubjects: ['Physics', 'Mathematics', 'Chemistry'],
      admissionTestRequired: true,
      tags: ['tech', 'electronics', 'circuits', 'power', 'telecom'],
      keywordMatch: ['electrical', 'electronics', 'circuit', 'eee', 'power', 'embedded', 'signal'],
      careerMatch: ['electrical engineer', 'electronics', 'telecom', 'power', 'embedded'],
      roadmap: {
        year1: ['Circuit Analysis', 'Engineering Math', 'Physics', 'Electronics I'],
        year2: ['Signals & Systems', 'Digital Electronics', 'Microprocessors', 'Power Systems'],
        year3: ['Embedded Systems', 'Communication', 'Control Systems', 'Internship'],
        year4: ['Final Project', 'Power Distribution', 'Industry Training', 'Capstone']
      },
      jobRoles: ['Power Engineer', 'Telecom Specialist', 'Embedded Developer', 'PCB Designer', 'Network Engineer'],
      industrySectors: ['Power Sector', 'Telecom', 'Manufacturing', 'Defense', 'Renewable Energy']
    },
    {
      code: 'MCT',
      name: 'Multimedia & Creative Technology',
      faculty: 'Science & Information Technology',
      minGPA: 4.0,
      seats: 60,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers UI/UX design, animation, game development, digital media, photography, and creative software.',
      careers: ['UI/UX Designer', 'Game Developer', 'Animator', 'Graphic Designer', 'Video Producer'],
      requiredSubjects: ['Any group with Math or Arts background preferred'],
      admissionTestRequired: true,
      tags: ['design', 'creative', 'ui', 'ux', 'game', 'animation', 'media'],
      keywordMatch: ['design', 'creative', 'art', 'graphics', 'animation', 'game', 'media', 'ui', 'ux'],
      careerMatch: ['designer', 'animator', 'game developer', 'creative', 'multimedia', 'artist'],
      roadmap: {
        year1: ['Design Fundamentals', 'Drawing & Illustration', 'Typography', 'Color Theory'],
        year2: ['UI/UX Design', 'Motion Graphics', '3D Modeling', 'Web Design'],
        year3: ['Game Development', 'Video Production', 'App Design', 'Internship'],
        year4: ['Portfolio Development', 'Client Projects', 'Freelance Skills', 'Capstone']
      },
      jobRoles: ['UX Designer', 'Motion Designer', 'Game Artist', 'Brand Designer', 'Content Creator'],
      industrySectors: ['Gaming', 'Advertising', 'Startups', 'Film & Media', 'Education Tech']
    },
    {
      code: 'CE',
      name: 'Civil Engineering',
      faculty: 'Engineering',
      minGPA: 4.0,
      seats: 60,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers structural analysis, geotechnical engineering, transportation, water resources, and construction management.',
      careers: ['Civil Engineer', 'Structural Designer', 'Urban Planner', 'Construction Manager'],
      requiredSubjects: ['Physics', 'Mathematics', 'Chemistry'],
      admissionTestRequired: true,
      tags: ['engineering', 'construction', 'structural', 'civil'],
      keywordMatch: ['civil', 'construction', 'building', 'structure', 'bridge', 'road'],
      careerMatch: ['civil engineer', 'structural', 'construction', 'urban planner'],
      roadmap: {
        year1: ['Engineering Drawing', 'Surveying', 'Engineering Math', 'Fluid Mechanics'],
        year2: ['Structural Analysis', 'Soil Mechanics', 'Concrete Technology', 'Transportation'],
        year3: ['Foundation Design', 'Steel Structures', 'AutoCAD', 'Internship'],
        year4: ['Final Project', 'Construction Management', 'Estimation', 'Capstone']
      },
      jobRoles: ['Structural Engineer', 'Site Engineer', 'Project Manager', 'RAJUK Inspector', 'Consultant'],
      industrySectors: ['Real Estate', 'Government LGED/PWD', 'Construction Firms', 'NGO Infrastructure', 'Consulting']
    },
    {
      code: 'ME',
      name: 'Mechanical Engineering',
      faculty: 'Engineering',
      minGPA: 4.0,
      seats: 60,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers thermodynamics, fluid mechanics, manufacturing, robotics, CAD/CAM, and material science.',
      careers: ['Mechanical Engineer', 'Robotics Engineer', 'Production Manager', 'Automotive Engineer'],
      requiredSubjects: ['Physics', 'Mathematics', 'Chemistry'],
      admissionTestRequired: true,
      tags: ['engineering', 'robotics', 'manufacturing', 'mechanical'],
      keywordMatch: ['mechanical', 'machine', 'robotics', 'manufacturing', 'automobile'],
      careerMatch: ['mechanical engineer', 'robotics', 'manufacturing', 'production'],
      roadmap: {
        year1: ['Engineering Mechanics', 'Thermodynamics I', 'Engineering Drawing', 'Materials Science'],
        year2: ['Fluid Mechanics', 'Manufacturing Processes', 'CAD/CAM', 'Machine Design'],
        year3: ['Robotics', 'Heat Transfer', 'Automation', 'Internship'],
        year4: ['Final Project', 'Industrial Training', 'Vibration & Control', 'Capstone']
      },
      jobRoles: ['Production Engineer', 'Design Engineer', 'Maintenance Engineer', 'Quality Manager', 'HVAC Engineer'],
      industrySectors: ['Manufacturing', 'Automotive', 'Garments Industry', 'Shipbuilding', 'Energy']
    },
    {
      code: 'TE',
      name: 'Textile Engineering',
      faculty: 'Engineering',
      minGPA: 4.0,
      seats: 60,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers fiber science, yarn technology, fabric manufacturing, dyeing, garment production, and quality control.',
      careers: ['Textile Engineer', 'Production Manager', 'Quality Controller', 'Export Manager'],
      requiredSubjects: ['Physics', 'Chemistry', 'Mathematics'],
      admissionTestRequired: true,
      tags: ['textile', 'manufacturing', 'garment', 'engineering'],
      keywordMatch: ['textile', 'garment', 'fabric', 'fashion', 'rmo', 'export'],
      careerMatch: ['textile engineer', 'garment', 'production', 'quality'],
      roadmap: {
        year1: ['Textile Fibers', 'Chemistry for Textile', 'Yarn Manufacturing', 'Engineering Math'],
        year2: ['Fabric Manufacturing', 'Dyeing & Printing', 'Apparel Production', 'Testing Methods'],
        year3: ['Industrial Textile', 'Fashion Tech', 'Merchandising', 'Internship'],
        year4: ['Final Project', 'Export Documentation', 'Supply Chain', 'Capstone']
      },
      jobRoles: ['Production Officer', 'QC Inspector', 'Merchandiser', 'Dye House Manager', 'Technical Manager'],
      industrySectors: ['RMG Sector', 'BGMEA Members', 'Export-Oriented Factories', 'Technical Textiles']
    },
    {
      code: 'BBA',
      name: 'Business Administration',
      faculty: 'Business & Entrepreneurship',
      minGPA: 3.5,
      seats: 180,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers management, marketing, finance, accounting, human resources, entrepreneurship, and business strategy.',
      careers: ['Business Manager', 'Entrepreneur', 'Marketing Executive', 'Financial Analyst', 'HR Manager'],
      requiredSubjects: ['Any group accepted'],
      admissionTestRequired: true,
      tags: ['business', 'management', 'finance', 'marketing', 'bba'],
      keywordMatch: ['business', 'management', 'finance', 'marketing', 'hr', 'accounting', 'mba', 'bba', 'entrepreneur'],
      careerMatch: ['manager', 'entrepreneur', 'marketing', 'finance', 'business', 'hr', 'sales'],
      roadmap: {
        year1: ['Business Math', 'Principles of Management', 'Accounting Basics', 'Business English'],
        year2: ['Financial Management', 'Marketing Management', 'HRM', 'Business Law'],
        year3: ['Entrepreneurship', 'Supply Chain', 'Business Analytics', 'Internship'],
        year4: ['Strategic Management', 'Thesis', 'Industry Project', 'Capstone']
      },
      jobRoles: ['Brand Manager', 'Financial Analyst', 'HR Executive', 'Operations Manager', 'Startup Founder'],
      industrySectors: ['Banking', 'NGO', 'FMCG', 'Consulting', 'Startups', 'MNCs']
    },
    {
      code: 'ARCH',
      name: 'Architecture',
      faculty: 'Architecture & Environment Design',
      minGPA: 3.5,
      seats: 40,
      tuitionPerSemester: 9900,
      duration: '5 years',
      description: 'Covers architectural design, urban planning, building construction, interior design, sustainable architecture.',
      careers: ['Architect', 'Urban Designer', 'Interior Designer', 'Landscape Architect'],
      requiredSubjects: ['Mathematics preferred', 'Portfolio required'],
      admissionTestRequired: true,
      tags: ['design', 'creative', 'architecture', 'urban', 'interior'],
      keywordMatch: ['architecture', 'design', 'drawing', 'interior', 'urban', 'building'],
      careerMatch: ['architect', 'interior designer', 'urban planner', 'designer'],
      roadmap: {
        year1: ['Architectural Drawing', 'Design Studio I', 'History of Architecture', 'Building Materials'],
        year2: ['Design Studio II', 'Structural Systems', 'Environmental Design', 'Urban Planning Basics'],
        year3: ['Design Studio III', 'Landscape Architecture', 'Digital Tools', 'Internship'],
        year4: ['Advanced Studio', 'Sustainable Design', 'Construction Management', 'Research'],
        year5: ['Thesis Studio', 'Professional Practice', 'Portfolio', 'Capstone']
      },
      jobRoles: ['Licensed Architect', 'Interior Designer', 'Urban Planner', 'Real Estate Consultant', 'Design Professor'],
      industrySectors: ['RAJUK', 'Real Estate', 'Consulting Firms', 'Government Projects', 'NGO Housing']
    },
    {
      code: 'PHARM',
      name: 'Pharmacy',
      faculty: 'Allied Health Sciences',
      minGPA: 4.0,
      seats: 50,
      tuitionPerSemester: 9900,
      duration: '4 years',
      description: 'Covers pharmacology, medicinal chemistry, pharmaceutical technology, clinical pharmacy, and drug regulatory affairs.',
      careers: ['Pharmacist', 'Drug Researcher', 'Clinical Pharmacist', 'Pharmaceutical Sales'],
      requiredSubjects: ['Biology', 'Chemistry', 'Physics or Mathematics'],
      admissionTestRequired: true,
      tags: ['health', 'medicine', 'pharmacy', 'biology', 'chemistry'],
      keywordMatch: ['pharmacy', 'medicine', 'drug', 'health', 'biology', 'chemistry', 'clinical'],
      careerMatch: ['pharmacist', 'drug researcher', 'clinical', 'pharmaceutical', 'healthcare'],
      roadmap: {
        year1: ['Pharmaceutical Chemistry', 'Human Anatomy', 'Biology', 'Microbiology'],
        year2: ['Pharmacology I', 'Pharmaceutics', 'Medicinal Chemistry', 'Pathology'],
        year3: ['Clinical Pharmacy', 'Industrial Pharmacy', 'Drug Regulation', 'Internship'],
        year4: ['Thesis Research', 'Hospital Training', 'Regulatory Affairs', 'Capstone']
      },
      jobRoles: ['Hospital Pharmacist', 'Drug Inspector', 'Clinical Researcher', 'Medical Sales Rep', 'QC Analyst'],
      industrySectors: ['Hospitals', 'Pharma Companies (Square, Beximco)', 'WHO/DGDA', 'Research Institutes']
    },
    {
      code: 'ENG',
      name: 'English Language & Literature',
      faculty: 'Humanities & Social Sciences',
      minGPA: 3.0,
      seats: 80,
      tuitionPerSemester: 7500,
      duration: '4 years',
      description: 'Covers linguistics, British and American literature, creative writing, translation, discourse analysis.',
      careers: ['Teacher', 'Journalist', 'Translator', 'Content Writer', 'Diplomat', 'Editor'],
      requiredSubjects: ['Any group accepted'],
      admissionTestRequired: true,
      tags: ['arts', 'language', 'humanities', 'literature', 'english'],
      keywordMatch: ['english', 'language', 'literature', 'writing', 'journalism', 'communication', 'translation'],
      careerMatch: ['teacher', 'journalist', 'writer', 'translator', 'editor', 'diplomat'],
      roadmap: {
        year1: ['English Phonology', 'Introduction to Literature', 'Grammar & Composition', 'Linguistics Basics'],
        year2: ['British Literature', 'American Literature', 'Creative Writing', 'Translation Studies'],
        year3: ['Discourse Analysis', 'Applied Linguistics', 'Media Writing', 'Internship'],
        year4: ['Research Methodology', 'Thesis', 'Professional Communication', 'Capstone']
      },
      jobRoles: ['IELTS Trainer', 'Content Writer', 'Copy Editor', 'Diplomatic Aide', 'University Lecturer'],
      industrySectors: ['Education', 'Media', 'NGOs', 'Embassies', 'BPO/Call Centers']
    }
  ]);
  console.log('Departments seeded');
};

const seedFAQs = async () => {
  const count = await FAQ.countDocuments();
  if (count > 0) return;
  await FAQ.insertMany([
    { question: 'What is the admission deadline?', answer: 'The admission portal opens in October and closes in late November. The admission test is held in December and results are published in January. Always verify exact dates from diu.ac.bd.', category: 'deadline', keywords: ['deadline', 'last date', 'when', 'date', 'apply', 'close'] },
    { question: 'What documents are required for admission?', answer: 'SSC & HSC marksheets + certificates (original + 2 attested copies), SSC/HSC admit cards, NID or birth certificate, 4 passport photos, admission test admit card, bank payment receipt (BDT 500).', category: 'documents', keywords: ['document', 'certificate', 'paper', 'required', 'bring', 'marksheet'] },
    { question: 'Is there an admission test?', answer: 'Yes. MCQ format, 90 minutes, 100 marks. Math 30, Physics/Chemistry 30, English 20, GK 20. Negative marking: -0.25 per wrong answer.', category: 'test', keywords: ['test', 'exam', 'mcq', 'entrance', 'syllabus', 'negative'] },
    { question: 'What is the tuition fee at DIU?', answer: 'Tuition is BDT 9,900 per semester for most programs. English Literature is BDT 7,500/semester. Application fee is BDT 500 one-time. Scholarships can reduce by 25-100%.', category: 'fees', keywords: ['fee', 'tuition', 'cost', 'taka', 'bdt', 'price', 'how much', 'diu'] },
    { question: 'Are scholarships available at DIU?', answer: 'DIU offers: 100% waiver for GPA 5.0 (both), 50% for GPA 4.5-4.99, 25% for GPA 4.0-4.49. Also special quotas for freedom fighters, sports, siblings.', category: 'scholarship', keywords: ['scholarship', 'waiver', 'free', 'discount', 'stipend', 'merit', 'diu'] },
    { question: 'How do I apply for admission at DIU?', answer: 'Step 1: Go to studentportal.diu.ac.bd. Step 2: Fill online form. Step 3: Pay BDT 500. Step 4: Download admit card. Step 5: Appear for test. Step 6: Check merit list. Step 7: Enroll and pay fees.', category: 'process', keywords: ['apply', 'how to', 'process', 'steps', 'register', 'enroll'] },
    { question: 'What is the minimum GPA for CSE or SWE at DIU?', answer: 'Both CSE and SWE require minimum GPA 4.5 in SSC and HSC separately. Students must also pass the admission test. Science group (Physics and Math) is required.', category: 'eligibility', keywords: ['gpa', 'cse', 'swe', 'minimum', 'requirement', 'eligible', 'qualify'] },
    { question: 'What is the difference between CSE and SWE?', answer: 'CSE (Computer Science & Engineering) covers broader topics: algorithms, systems, networking, AI, hardware. SWE (Software Engineering) focuses on software development lifecycle, design patterns, testing, and project management. Both lead to similar careers but SWE is more industry-focused.', category: 'general', keywords: ['difference', 'cse', 'swe', 'compare', 'vs', 'better', 'choose'] },
    { question: 'Can Arts or Commerce students apply to DIU?', answer: 'Yes! BBA and English departments accept all groups. For Engineering, CSE, EEE, Pharmacy — Science background with Physics, Chemistry, and Math is required. MCT (Multimedia) accepts all groups.', category: 'eligibility', keywords: ['arts', 'commerce', 'humanities', 'group', 'science', 'eligible', 'apply'] },
    { question: 'What is the location of DIU?', answer: 'Daffodil International University (DIU) is located in Ashulia, Savar, Dhaka. Address: Daffodil Smart City, Ashulia, Savar, Dhaka-1341. Permanent Campus with residential facilities available.', category: 'general', keywords: ['location', 'address', 'where', 'campus', 'savar', 'ashulia', 'diu'] }
  ]);
  console.log('FAQs seeded');
};

module.exports = connectDB;
