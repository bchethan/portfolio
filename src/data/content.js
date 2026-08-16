export const personal = {
  name: 'Bobbali Chethan Reddy',
  shortName: 'Chethan Reddy',
  tagline: 'Data Analyst | SQL • Python • Power BI',
  intro:
    'B.Tech CSE (AI & ML) graduate with hands-on experience in SQL, Python, Excel, and Power BI. Currently seeking Data Analyst roles and internships where I can turn data into actionable business insights.',
  email: 'bchethannreddy@gmail.com',
  phone: null, // set e.g. '+91 XXXXX XXXXX' to enable phone toggle
  github: 'https://github.com/bchethan',
  linkedin: 'https://www.linkedin.com/in/bchethanreddy/',
  resume: '/Chethan-DA.pdf',
  openToWork: true,
}

export const about = {
  education: {
    degree: 'B.Tech CSE (AI & ML)',
    institution: 'Bharat Institute of Engineering and Technology',
    location: 'Hyderabad',
    period: '2022 – 2026',
    status: 'Graduated',
  },
  narrative:
    'My journey into data analytics began with curiosity about patterns hidden in everyday numbers — from sports statistics to business KPIs. Through academic projects and self-driven learning on Kaggle, I discovered that clean data and clear visualizations can turn complex problems into decisions people actually trust. I enjoy the full pipeline: querying messy datasets, exploring trends, and building dashboards that tell a story stakeholders can act on.',
}

export const skillGroups = [
  {
    title: 'Data Analysis',
    icon: 'BarChart3',
    skills: [
      { name: 'SQL (MySQL, SQLite)', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Pandas & NumPy', level: 85 },
      { name: 'Excel', level: 88 },
      { name: 'Matplotlib & Seaborn', level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Power BI', level: 88 },
    ],
  },
  {
    title: 'Core Concepts',
    icon: 'Lightbulb',
    skills: [
      { name: 'Data Cleaning', level: 90 },
      { name: 'Exploratory Data Analysis', level: 88 },
      { name: 'Data Visualization', level: 87 },
    ],
  },
]

export const projects = [
  {
    id: 'social-media-ads',
    title: 'Social Media Advertisement Performance Analysis',
    stack: ['SQL', 'Power BI'],
    github: 'https://github.com/bchethan',
    description:
      'End-to-end analysis of social media ad campaigns with an interactive Power BI dashboard tracking impressions, clicks, CTR, spend, purchases, and ROI.',
    insights: [
      'Ages 18–34 drove ~74% of purchases — primary target demographic for campaign optimization.',
      'US, UK, and Canada accounted for ~50% of purchases — key markets for budget allocation.',
      'Highest-converting interest categories: Art, Technology, Gaming, and Travel.',
    ],
    accent: '#22d3ee',
    dashboardImage: '/projects/social-media-dashboard.png',
    dashboardAlt: 'Social Media Advertisement Performance Power BI dashboard',
  },
  {
    id: 'brazilian-ecommerce',
    title: 'Brazilian E-commerce Sales Analysis',
    stack: ['SQL', 'Power BI'],
    github: 'https://github.com/bchethan',
    description:
      'Analyzed ~100K orders across 9 relational tables from the Olist dataset using MySQL — joins, CTEs, window functions, and subqueries.',
    insights: [
      'Rio de Janeiro had the longest delivery time (15 days) with a below-average rating of 3.87/5.',
      'Flagged top-selling category (bed_bath_table) for quality issues despite high sales volume.',
      'Built Power BI dashboards to visualize delivery performance and category-level trends.',
    ],
    accent: '#818cf8',
    dashboardImage: '/projects/ecommerce-dashboard.png',
    dashboardAlt: 'Brazilian E-commerce Sales Analysis Power BI dashboard',
  },
]

export const activities = [
  {
    title: 'Kaggle Courses',
    items: ['Pandas for Data Analysis', 'SQL for Data Science'],
    icon: 'GraduationCap',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    items: ['Participated in national-level hackathon', 'Collaborative problem-solving under time constraints'],
    icon: 'Trophy',
  },
  {
    title: 'Continuous Learning',
    items: ['Active on GitHub with analytics projects', 'Exploring advanced SQL and dashboard design patterns'],
    icon: 'BookOpen',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
]
