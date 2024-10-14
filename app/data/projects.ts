const projects = [
    {
        id: '1',
        name: 'Portfolio',
        title: '',
        images: [
            { src: '/images/projects/project-9/project9-1.gif', alt: 'Project 9 Image', description: 'Hero Section' },
            { src: '/images/projects/project-9/project9-2.png', alt: 'Project 9 Image', description: 'Projects Section' },
            { src: '/images/projects/project-9/project9-3.png', alt: 'Project 9 Image', description: 'Skills Section' },
            { src: '/images/projects/project-9/chat.png', alt: 'Project 9 Image', description: 'Contact Section' },
        ],
        tags: ['NextJs', 'TypeScript', 'TailwindCSS'],
        description: 'My Portfolio Website built with NextJs, TypeScript and TailwindCSS showcasing my projects and skills.',
        demoLink: 'https://ahmed-eid-ashen.vercel.app/',
        codeLink:''
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
        id: '6',
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
        id: '7',
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
    {
        id: '8',
        name: 'TraQuiz',
        title: '',
        images: [
        { src: '/images/projects/traquiz/traquiz-1.png', alt: 'Project 10 Image' },
        { src: '/images/projects/traquiz/traquiz-2.png', alt: 'Project 10 Image' },
        ],
        tags: ['Html', 'CSS', 'JavaScript'],
        description: 'TraQuiz is a quiz application built with html css javascript for helping users choose the right track for them according to their test score.',
        demoLink: 'https://traquiz.vercel.app/',
        codeLink:'',
        sections: [
            {
                title: 'TraQuiz - Quiz Application Overview',
                content: 'TraQuiz is a quiz application designed to entertain and educate users with a variety of trivia questions and topics. Built with React, TypeScript, TailwindCSS, and the Open Trivia API, this app offers a fun and interactive way to test knowledge, learn new facts, and challenge friends. Users can select quiz categories, difficulty levels, and question types to customize their quiz experience and explore different subjects.',
                image: { src: '/images/projects/traquiz/traquiz-1.png', alt: 'Project 10 Image' }
            },
            {
                title: 'Diverse Quiz Categories and Question Types',
                content: 'The application features a wide range of quiz categories, including general knowledge, science, history, entertainment, and more, to cater to different interests and preferences. Users can choose specific categories or opt for random quizzes to test their knowledge across various subjects. The app also offers different question types, such as multiple choice, true/false, and open-ended questions, to provide a diverse and engaging quiz experience.',
                image: { src: '/images/projects/traquiz/traquiz-2.png', alt: 'Project 10 Image' }
            },
            {
                title: 'Interactive Quiz Interface and User Experience',
                content: 'The quiz interface is designed to be interactive and user-friendly, with intuitive controls, clear instructions, and engaging visuals to enhance the user experience. Users can navigate through questions, select answers, and track their progress in real time, creating an immersive and dynamic quiz environment. The app also includes features like score tracking, time limits, and hints to challenge users and keep them engaged throughout the quiz.',
            }
        ]
    }
]

export { projects }