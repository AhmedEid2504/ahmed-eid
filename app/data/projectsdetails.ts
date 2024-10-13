type ProjectDetails = {
    id: string
    name: string
    title: string
    images: { src: string; alt: string; description?: string }[]
    tags: string[]
    description: string
    demoLink?: string
    codeLink?: string
    sections?: {
        title: string
        content: string
        image?: { src: string; alt: string }
    }[]
}

const projectsdetails: ProjectDetails[] = [
    {
        id: '1',
        name: 'Portfolio',
        title: '',
        images: [
        { src: '/images/projects/project-9/project9-1.png', alt: 'Project 9 Image', description: 'Hero Section' },
        { src: '/images/projects/project-9/project9-2.png', alt: 'Project 9 Image', description: 'Projects Section' },
        { src: '/images/projects/project-9/project9-3.png', alt: 'Project 9 Image', description: 'Skills Section' },
        ],
        tags: ['NextJs', 'TypeScript', 'TailwindCSS'],
        description: 'My Portfolio Website built with NextJs, TypeScript and TailwindCSS showcasing my projects and skills.',
        demoLink: 'https://ahmed-eid-ashen.vercel.app/',
        codeLink:'',
        sections: [
            {
                title: 'Overview of the Portfolio Website',
                content: 'This portfolio website serves as a comprehensive representation of my work, skills, and professional journey. It provides potential employers and collaborators with easy access to my most notable projects and achievements. Built using Next.js, TypeScript, and TailwindCSS, this site combines a modern tech stack with an intuitive and visually appealing interface, making it an ideal platform for showcasing my development capabilities.',
                image: { src: '/images/projects/project-9/project9-1.png', alt: 'Project 9 Image' }
            },
            {
                title: 'Advanced Tech Stack for Performance and Scalability',
                content: 'The use of Next.js ensures that the website is highly performant with built-in optimizations like server-side rendering (SSR) and static site generation (SSG). TypeScript provides strong typing, ensuring fewer runtime errors and more robust code. Finally, TailwindCSS helps maintain a clean and organized design, enabling rapid development of responsive and modern user interfaces.',
                image: { src: '/images/projects/project-9/project9-2.png', alt: 'Project 9 Image' }
            },
            {
                title: 'Highlighting My Best Work',
                content: 'One of the most important sections of this portfolio is the Projects Section, where each project is displayed with attention to detail, including images, descriptions, and live demos. This section emphasizes my diverse experience, showcasing projects built using various technologies and frameworks. Each project card is interactive, providing users with more information and links to code repositories and demos.',
                image: { src: '/images/projects/project-9/project9-3.png', alt: 'Project 9 Image' }
            },
            {
                title: 'User Experience and Responsiveness',
                content: 'The website is designed to be fully responsive, ensuring that it looks and works great on devices of all sizes, from desktops to smartphones. This attention to responsiveness makes it accessible to a broader audience and showcases my skills in creating mobile-friendly websites.'
            }
        ]
    },
    {
        id: '2',
        name: 'High Five',
        title: 'E-commerce Fashion Store',
        images: [
        { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
        { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' },
        { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' },
        { src: '/images/projects/project-1/project1-4.png', alt: 'Project 1 Image' },
        { src: '/images/projects/project-1/project1-5.png', alt: 'Project 1 Image' },
        { src: '/images/projects/project-1/project1-6.png', alt: 'Project 1 Image' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'E-commerce Fashion Store built with HTML, CSS and JavaScript showcasing different products and their details, with a cart functionality.',
        demoLink: 'https://high-five-swart.vercel.app/',
        codeLink:'https://github.com/AhmedEid2504/High-Five'
    },
    {
        id: '3',
        name: 'Meme Maker',
        title: 'Application for creating memes',
        images: [
        { src: '/images/projects/project-2/Meme-Maker-1.png', alt: 'Project 2 Image' },
        { src: '/images/projects/project-2/Meme-Maker-2.png', alt: 'Project 2 Image' },
        ],
        tags: ['React', 'JavaScript', 'TailwindCSS', 'Firebase'],
        description: 'Meme Maker Application built with React, JavaScript, TailwindCSS and Firebase for creating memes with different templates and downloading them, with a login functionality and sharing memes on the wall of memes with other users.',
        demoLink: 'https://meme-maker-nu.vercel.app/',
        codeLink:'https://github.com/AhmedEid2504/High-Five'
    },
    {
        id: '4',
        name: 'UBI Order',
        title: '',
        images: [
        { src: '/images/projects/project-4/project4-1.png', alt: 'Project 4 Image' },
        { src: '/images/projects/project-4/project4-2.png', alt: 'Project 4 Image' },
        { src: '/images/projects/project-4/project4-3.png', alt: 'Project 4 Image' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'Landing Page for a Food Delivery Service built with HTML, CSS, JavaScript and Bootstrap.',
        demoLink: 'https://ubi-order.vercel.app/',
        codeLink:'https://github.com/AhmedEid2504/High-Five'
    },
    {
        id: '5',
        name: 'Comfy House',
        title: '',
        images: [
        { src: '/images/projects/project-5/project5-1.png', alt: 'Project 5 Image 1' },
        { src: '/images/projects/project-5/project5-2.png', alt: 'Project 5 Image 2' },
        { src: '/images/projects/project-5/project5-3.png', alt: 'Project 5 Image 3' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'E-commerce Furniture Store built with HTML, CSS and JavaScript showcasing different products and their details, with a cart functionality.',
        demoLink: 'https://comfy-house-two.vercel.app/',
        codeLink:'',
    },
    {
        id: '6',
        name: 'Tindog',
        title: '',
        images: [
        { src: '/images/projects/project-6/project6-1.png', alt: 'Project 6 Image 1' },
        { src: '/images/projects/project-6/project6-2.png', alt: 'Project 6 Image 2' },
        { src: '/images/projects/project-6/project6-3.png', alt: 'Project 6 Image 3' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'Project 1 Description',
        demoLink: 'https://tindog-iota-ten.vercel.app/',
        codeLink:'',
    },
    {
        id: '7',
        name: 'Cinema Maze',
        title: '',
        images: [
        { src: '/images/projects/project-7/project7-1.png', alt: 'Project 7 Image' },
        ],
        tags: ['React', 'JavaScript', 'Movies Search API'],
        description: 'Cinema Maze Application built with React and JavaScript for searching movies.',
        demoLink: 'https://cinema-maze.vercel.app/',
        codeLink:''
    },
    {
        id: '8',
        name: 'Community Chat',
        title: '',
        images: [
        { src: '/images/projects/project-8/project8-1.png', alt: 'Project 8 Image' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'Functional Chat Application built with HTML, CSS and JavaScript for chatting with other users.',
        demoLink: 'https://community-chat-sand.vercel.app/',
        codeLink:''
    },
]

export { projectsdetails }