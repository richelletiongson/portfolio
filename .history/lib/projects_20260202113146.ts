export type Category = "all" | "ui-ux" | "product" | "graphic"

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  fullDescription: string
  tags: string[]
  image: string
  category: Category
  year: string
  client: string
  role: string
  duration: string
  tools: string[]
  overview: string
  challenge: string
  solution: string
  results: string
  gallery: string[]
  // Case-study layout (e.g. Jargon)
  layout?: "default" | "case-study"
  tagline?: string
  rolesDisplay?: string
  introImage?: string
  wireframeLowFi?: string
  wireframeHighFi?: string
  userFlowImage?: string
  moodboardImage?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "jargon",
    title: "Jargon",
    description: "A concept-driven app exploring specialized language and digital inclusion for tradespeople.",
    fullDescription: "Jargon is a concept-driven project exploring specialized language and digital inclusion. The project focuses on translating complex, industry-specific terms into clear, accessible language—helping users navigate technical jargon without feeling excluded or overwhelmed.",
    tags: ["Mobile App", "Trades", "UI/UX", "Frontend"],
    image: "/projects/project-1.jpg",
    category: "ui-ux",
    year: "2025",
    client: "Personal Project",
    role: "UX/UI Designer",
    duration: "3 months",
    tools: ["Figma", "Javascript"],
    overview: "Jargon is a concept-driven project exploring specialized language and digital inclusion. It focuses on translating complex, industry-specific terms for clarity and accessibility—helping users understand technical language without feeling excluded or overwhelmed.",
    challenge: "Complex, industry-specific language often creates a communication gap that excludes or overwhelms users. The challenge was to bridge this gap and make specialized terminology accessible without losing meaning.",
    solution: "Jargon addresses the challenge by simplifying terminology, using intuitive layouts, and prioritizing clarity and accessibility. The app presents industry terms in context with plain-language explanations and visual cues.",
    results: "The project creates a more inclusive and accessible user experience by reducing confusion and empowering users to engage with complex information. Users can learn and retain trade-specific language in a supportive, clear interface.",
    gallery: ["/projects/project-1.jpg", "/projects/project-2.jpg", "/projects/project-3.jpg"],
    layout: "case-study",
    tagline: "Built with tradespeople, for tradespeople. Speak your trade fluently.",
    rolesDisplay: "UX/UI Designer, Frontend Developer",
    introImage: "/projects/project-1.jpg",
    wireframeLowFi: "/projects/project-2.jpg",
    wireframeHighFi: "/projects/project-3.jpg",
    userFlowImage: "/projects/project-1.jpg",
    moodboardImage: "/projects/project-2.jpg",
  },
  {
    id: 2,
    slug: "linko",
    title: "Linko",
    description: "Elevating Portugal's premier travel experience with immersive digital storytelling",
    fullDescription: "Linko needed a complete digital transformation to match their reputation as Portugal's most exclusive travel agency, serving discerning travelers seeking authentic experiences.",
    tags: ["Web Design", "Travel", "Branding"],
    image: "/projects/project-2.jpg",
    category: "ui-ux",
    year: "2025",
    client: "Linko",
    role: "UI/UX Designer",
    duration: "4 months",
    tools: ["Figma", "AI Illustrator", "Frontend"],
    overview: "Voyage Travel represents the pinnacle of Portuguese hospitality, curating experiences for travelers who seek authenticity over tourism. Our task was to create a digital presence that captures the essence of their service—personal, refined, and deeply connected to Portuguese culture and landscape.",
    challenge: "The brand's online presence didn't reflect the premium, curated experiences they offered. Competitors were winning bookings with flashier websites despite inferior service.",
    solution: "We created an immersive editorial experience featuring full-bleed photography, subtle animations, and a booking flow that feels more like planning a dream than filling out forms. The site now converts at 3x the industry average.",
    results: "Since launch, Voyage Travel has seen a 285% increase in qualified inquiries and a 42% improvement in booking conversion rates. The average booking value increased by 60% as users engaged more deeply with premium offerings. The site was featured in several design publications and has become a reference point for luxury travel brands seeking digital transformation.",
    gallery: ["/projects/project-2.jpg", "/projects/project-3.jpg", "/projects/project-4.jpg"],
  },
  {
    id: 3,
    slug: "aesthea",
    title: "Aesthea",
    description: "Distilling architectural impact to its spatial essence through minimal design",
    fullDescription: "Aesthea, an award-winning architecture firm, needed a portfolio website that would showcase their work without competing with it—a digital space as carefully considered as their physical ones.",
    tags: ["Portfolio", "Architecture", "UI/UX"],
    image: "/projects/project-3.jpg",
    category: "ui-ux",
    year: "2025",
    client: "Aesthea",
    role: "Co-Lead UI/UX Designer",
    duration: "4 months",
    tools: ["Figma", "AI Illustrator", "Frontend"],
    overview: "Aesthea has won numerous awards for their residential and commercial projects, but their digital portfolio wasn't doing their work justice. We partnered with them to create a website that embodies their design principles: restraint, materiality, and attention to how spaces unfold over time.",
    challenge: "Architecture portfolios often overwhelm with imagery. The firm wanted a site that would let their buildings breathe while still conveying the depth of their design philosophy.",
    solution: "We designed a minimal, grid-based layout with generous white space and subtle interactions. Each project page unfolds like a story, with careful attention to typography and pacing that mirrors the firm's own design process.",
    results: "The new portfolio has become a powerful business development tool, with qualified project inquiries increasing by 200%. The site's performance and accessibility scores consistently reach 95+, and it has been recognized with several design awards including an Awwwards Honorable Mention. Most importantly, the firm reports that clients now arrive to initial meetings with a deeper understanding of their approach.",
    gallery: ["/projects/project-3.jpg", "/projects/project-4.jpg", "/projects/project-5.jpg"],
  },
  {
    id: 4,
    slug: "ember",
    title: "Ember", // Redesign
    description: "Bringing clarity to complex data systems with intuitive visualization",
    fullDescription: "Ember, a B2B analytics platform, was losing enterprise deals because their powerful data engine was trapped behind an impenetrable interface. They needed design that matched their engineering excellence.",
    tags: ["SaaS", "Dashboard", "Data Viz"],
    image: "/projects/project-4.jpg",
    category: "ui-ux",
    year: "2025",
    client: "Ember",
    role: "Co-Lead UI/UX Designer",
    duration: "4 months",
    tools: ["Figma", "AI Illustrator", "Frontend"],
    overview: "Ember processes billions of data points for Fortune 500 companies, but their interface was holding them back from enterprise growth. This comprehensive redesign touched every aspect of the product, from onboarding to advanced analytics workflows, while establishing a scalable design system for future development.",
    challenge: "Users were spending hours learning basic workflows. The interface had grown organically over 5 years, resulting in inconsistent patterns and buried features.",
    solution: "We conducted extensive user research and rebuilt the information architecture from the ground up. A new design system brought consistency, while smart defaults and contextual help reduced time-to-insight by 60%.",
    results: "The redesign directly contributed to Ember closing their first Fortune 100 deal within 6 months of launch. Customer satisfaction scores improved from 6.2 to 8.9, and support tickets decreased by 45%. The design system now powers all of Ember's products and has accelerated their development velocity by 40%.",
    gallery: ["/projects/project-4.jpg", "/projects/project-5.jpg", "/projects/project-6.jpg"],
  },
  {
    id: 5,
    slug: "real-rare",
    title: "Real Rare",
    description: "Crafting a bold visual identity for an emerging fintech startup",
    fullDescription: "Real Rare, a challenger bank targeting Gen Z, needed a brand identity that would feel fresh and trustworthy—standing out from both traditional banks and other fintechs.",
    tags: ["Branding", "Logo", "UI/UX"],
    image: "/projects/project-1.jpg",
    category: "graphic",
    year: "2025",
    client: "Real Rare",
    role: "Co-Lead UI/UX Designer",
    duration: "3 months",
    tools: ["Figma", "AI Illustrator", "Frontend"],
    overview: "Real Rare is reimagining banking for digital natives who want their financial tools to feel as modern as the rest of their lives. We developed a comprehensive brand identity that spans digital and physical touchpoints, from app interfaces to debit card design.",
    challenge: "The fintech space is crowded with similar-looking brands using gradients and geometric logos. Real Rare needed to be distinctive while still conveying financial stability.",
    solution: "We developed a bold typographic identity anchored by a custom wordmark with subtle motion built in. The color palette balances energetic coral with grounding navy, supported by a flexible illustration system.",
    results: "Real Rare launched to significant press coverage, with the brand identity specifically called out in features by TechCrunch and Fast Company. The waitlist grew to 50,000 users before launch, and brand recall in target demographics reached 34% within six months—unprecedented for a new entrant in the space.",
    gallery: ["/projects/project-5.jpg", "/projects/project-6.jpg", "/projects/project-7.jpg"],
  },
  {
    id: 6,
    slug: "movie-poster ",
    title: "Movie Poster",
    description: "Designing an engaging workout companion that motivates and tracks progress",
    fullDescription: "Pulse wanted to differentiate in the crowded fitness app market by focusing on sustainable habits rather than extreme challenges—design that encourages rather than shames.",
    tags: ["Graphic Design", "Movie Poster", "UI/UX"],
    image: "/projects/project-2.jpg",
    category: "graphic",
    year: "2025",
    client: "Movie Poster",
    role: "Co-Lead UI/UX Designer",
    duration: "4 months",
    tools: ["Figma", "AI Illustrator", "Frontend"],
    overview: "Pulse Fitness took a different approach to wellness, focusing on sustainable habits rather than extreme transformations. We designed an app that meets users where they are, celebrating progress without judgment and adapting to the natural rhythms of busy lives.",
    challenge: "Most movie posters are generic and lack personality. The movie poster needed to stand out and be memorable.",
    solution: "We designed a custom poster that is unique and memorable. The poster is designed to be a conversation starter and to be memorable.",
    results: "The movie poster was a success and was featured in several design publications and has become a case study in movie poster design.",
    gallery: ["/projects/project-2.jpg", "/projects/project-3.jpg", "/projects/project-4.jpg"],
  },
  {
    id: 7,
    slug: "dynasty poster",
    title: "Dynasty",
    description: "Editorial design for a sustainability-focused print and digital publication",
    fullDescription: "Dynasty Poster needed a complete redesign that would appeal to a younger demographic while maintaining credibility with environmental scientists and policy makers.",
    tags: ["Graphic Design", "Dynasty Poster", "UI/UX"],
    image: "/projects/project-3.jpg",
    category: "graphic",
    year: "2022",
    client: "Evergreen Media",
    role: "Art Director",
    duration: "4 months",
    tools: ["InDesign", "Photoshop", "Figma"],
    overview: "Evergreen Magazine has been covering environmental issues for over two decades, but needed a fresh perspective to engage younger readers without alienating their established audience. We redesigned both the print publication and digital experience with a focus on visual storytelling.",
    challenge: "Environmental publications often look dated or preachy. The magazine needed to feel premium and contemporary while treating complex topics with appropriate seriousness.",
    solution: "We developed a modular grid system that accommodates both data-heavy investigative pieces and beautiful photo essays. A refined color palette and custom typography give the publication a distinctive voice.",
    results: "Subscriptions among 25-40 year olds increased by 180% following the redesign, while print sales at newsstands grew 45%. The magazine won a National Magazine Award for design and has been featured as a case study in editorial design conferences. Digital engagement time increased by 65%.",
    gallery: ["/projects/project-3.jpg", "/projects/project-4.jpg", "/projects/project-1.jpg"],
  },
  {
    id: 8,
    slug: "something",
    title: "Something",
    description: "Something",
    fullDescription: "Something was losing market share to newer competitors despite having superior technology. The interface, designed by engineers, was powerful but impenetrable to non-technical users.",
    tags: ["Graphic Design", "Something", "UI/UX"],
    image: "/projects/project-4.jpg",
    category: "product",
    year: "2022",
    client: "Something Technologies",
    role: "Lead Product Designer",
    duration: "10 months",
    tools: ["Figma", "Maze", "Amplitude"],
    overview: "Something's platform handles petabytes of data for enterprises worldwide, but their growth was limited by an interface that required extensive training. We embarked on a year-long partnership to transform the entire product experience while maintaining backward compatibility for existing users.",
    challenge: "Enterprise software often sacrifices usability for feature completeness. Something needed to serve power users while becoming accessible to everyone in an organization.",
    solution: "We implemented progressive disclosure throughout, with smart defaults that work for 80% of use cases while keeping advanced features discoverable. Onboarding time dropped from days to hours.",
    results: "Something deals increased 75% year-over-year following the redesign, with shorter sales cycles as prospects could evaluate the product independently. Customer training costs decreased by 80%, and NPS scores improved from 23 to 67. The platform now serves over 2 million daily active users.",
    gallery: ["/projects/project-4.jpg", "/projects/project-1.jpg", "/projects/project-2.jpg"],
  },
  {
    id: 9,
    slug: "something-else",
    title: "Something Else",
    description: "Something Else",
    fullDescription: "Something Else, a beloved local roaster expanding to new markets, needed a brand evolution that would scale nationally while preserving the craft authenticity that built their reputation.",
    tags: ["Branding", "Packaging", "Identity"],
    image: "/projects/project-1.jpg",
    category: "graphic",
    year: "2022",
    client: "Something Else",
    role: "Creative Director",
    duration: "6 months",
    tools: ["Illustrator", "Photoshop", "Dimension"],
    overview: "Something Else built a loyal following in their home market through exceptional coffee and genuine community connection. As they expanded, they needed a brand system that could scale across new locations and product lines while preserving the handcrafted feeling that made them special.",
    challenge: "The original hand-drawn brand had charm but lacked consistency and didn't reproduce well across applications. Growth required systematization without losing soul.",
    solution: "We refined the hand-lettered logo into a flexible wordmark, developed a rich illustration system for packaging, and created comprehensive guidelines that empower local managers while maintaining brand coherence.",
    results: "The rebrand supported successful expansion into 12 new markets, with each location maintaining brand consistency while allowing for local adaptation. Retail product sales increased 230% as the new packaging design performed significantly better on shelves. The brand has become a case study in scaling artisan authenticity.",
    gallery: ["/projects/project-1.jpg", "/projects/project-2.jpg", "/projects/project-3.jpg"],
  },
]

export const categories = [
  { id: "all" as Category, label: "All Work" },
  { id: "ui-ux" as Category, label: "UI/UX Design" },
  { id: "product" as Category, label: "Product Design" },
  { id: "graphic" as Category, label: "Graphic Design" },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const current = getProjectBySlug(currentSlug)
  if (!current) return projects.slice(0, limit)
  
  return projects
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
}

export function getOtherProjects(currentSlug: string): Project[] {
  return projects.filter(p => p.slug !== currentSlug)
}
