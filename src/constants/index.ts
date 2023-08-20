export const NavLinks = [
  { href: '/', key: 'Inspiration', text: 'Inspiration' },
  { href: '/', key: 'Find Projects', text: 'Find Projects' },
  { href: '/', key: 'Learn Development', text: 'Learn Development' },
  { href: '/', key: 'Career Advancement', text: 'Career Advancement' },
  { href: '/', key: 'Hire Developers', text: 'Hire Developers' }
];

export const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots"
]

type FooterLinks = Array<{
  title:string, 
  links:Array<{text:string, href:string}>
}>

export const footerLinks:FooterLinks = [
  {
    title: 'For developers',
    links: [
      {text: 'Go Pro!', href: '/'},
      {text: 'Explore development work', href: '/'},
      {text: 'Development blog', href: '/'},
      {text: 'Code podcast', href: '/'},
      {text: 'Open-source projects', href: '/'},
      {text: 'Refer a Friend', href: '/'},
      {text: 'Code of conduct', href: '/'},
    ],
  },
  {
    title: 'Hire developers',
    links: [
      {text: 'Post a job opening', href: '/'},
      {text: 'Post a freelance project', href: '/'},
      {text: 'Search for developers', href: '/'},
    ],
  },
  {
    title: 'Brands',
    links: [
      {text: 'Advertise with us', href: '/'},
    ],
  },
  {
    title: 'Company',
    links: [
      {text: 'About', href: '/'},
      {text: 'Careers', href: '/'},
      {text: 'Support', href: '/'},
      {text: 'Media kit', href: '/'},
      {text: 'Testimonials', href: '/'},
      {text: 'API', href: '/'},
      {text: 'Terms of service', href: '/'},
      {text: 'Privacy policy', href: '/'},
      {text: 'Cookie policy', href: '/'},
    ],
  },
  {
    title: 'Directories',
    links: [
      {text: 'Development jobs', href: '/'},
      {text: 'Developers for hire', href: '/'},
      {text: 'Freelance developers for hire', href: '/'},
      {text: 'Tags', href: '/'},
      {text: 'Places', href: '/'},
    ],
  },
  {
    title: 'Development assets',
    links: [
      {text: 'Code Marketplace', href: '/'},
      {text: 'GitHub Marketplace', href: '/'},
      {text: 'NPM Registry', href: '/'},
      {text: 'Packagephobia', href: '/'},
    ],
  },
  {
    title: 'Development Resources',
    links: [
      {text: 'Freelancing', href: '/'},
      {text: 'Development Hiring', href: '/'},
      {text: 'Development Portfolio', href: '/'},
      {text: 'Development Education', href: '/'},
      {text: 'Creative Process', href: '/'},
      {text: 'Development Industry Trends', href: '/'},
    ],
  },
];