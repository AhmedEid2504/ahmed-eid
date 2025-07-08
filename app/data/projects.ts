const projects = [
    // {
    //     id: '1',
    //     name: 'Portfolio',
    //     title: '',
    //     images: [
    //         { src: '/images/projects/portfolio/portfolio-1.gif', alt: 'portfolio Image 1', description: 'Hero Section' },
    //         { src: '/images/projects/portfolio/portfolio-2.png', alt: 'portfolio Image 2', description: 'Projects Section' },
    //         { src: '/images/projects/portfolio/portfolio-3.png', alt: 'portfolio Image 3', description: 'Skills Section' },
    //         { src: '/images/projects/portfolio/chat.png', alt: 'portfolio Image 4', description: 'Contact Section' },
    //     ],
    //     tags: ['NextJs', 'TypeScript', 'TailwindCSS'],
    //     description: 'My Portfolio Website built with NextJs, TypeScript and TailwindCSS showcasing my projects and skills.',
    //     demoLink: 'https://ahmed-eid-ashen.vercel.app/',
    //     codeLink:''
    // },
    {
        id: '2',
        name: 'Insight Learn',
        title: 'Graduation Project',
        images: [
            { src: '/images/projects/insightlearn/insightlearn-1.png', alt: 'Insight Learn Image 1' },
            { src: '/images/projects/insightlearn/certificate.jpg', alt: 'Insight Learn Image 2' },
            { src: '/images/projects/insightlearn/insightlearn-2.png', alt: 'Insight Learn Image 2' },
            { src: '/images/projects/insightlearn/insightlearn-3.png', alt: 'Insight Learn Image 3' },
            { src: '/images/projects/insightlearn/insightlearn-4.png', alt: 'Insight Learn Image 4' },
            { src: '/images/projects/insightlearn/insightlearn-5.png', alt: 'Insight Learn Image 5' },
            { src: '/images/projects/insightlearn/insightlearn-6.png', alt: 'Insight Learn Image 6' },
        ],
        tags: ['React', 'Tailwind CSS', 'MorphCast Api', 'Django', 'Python', 'PostgreSql', 'Moodle', 'Azure'],
        description: 'Insight Learn is an interactive e-learning platform built with React, TypeScript, Firebase, and Tailwind CSS. The platform enables students to access educational materials, track their progress, and engage in quizzes for enhanced learning outcomes.',
        demoLink: 'https://insightlearn.vercel.app/',
        codeLink: 'https://github.com/YourUsername/InsightLearn',
    },
    {
        id: '3',
        name: 'Meme Maker',
        title: 'Application for creating memes',
        images: [
        { src: '/images/projects/mememaker/mememaker-1.png', alt: 'mememaker Image 1' },
        { src: '/images/projects/mememaker/mememaker-2.png', alt: 'mememaker Image 2' },
        ],
        tags: ['React', 'JavaScript', 'TailwindCSS', 'Firebase'],
        description: 'Meme Maker Application built with React, JavaScript, TailwindCSS and Firebase for creating memes with different templates and downloading them, with a login functionality and sharing memes on the wall of memes with other users.',
        demoLink: 'https://meme-maker-nu.vercel.app/',
        codeLink:'https://github.com/AhmedEid2504/High-Five'
    },
    {
        id: '4',
        name: 'High Five',
        title: 'E-commerce Fashion Store',
        images: [
        { src: '/images/projects/highfive/highfive-1.png', alt: 'highfive Image 1' },
        { src: '/images/projects/highfive/highfive-2.png', alt: 'highfive Image 2' },
        { src: '/images/projects/highfive/highfive-3.png', alt: 'highfive Image 3' },
        { src: '/images/projects/highfive/highfive-4.png', alt: 'highfive Image 4' },
        { src: '/images/projects/highfive/highfive-5.png', alt: 'highfive Image 5' },
        { src: '/images/projects/highfive/highfive-6.png', alt: 'highfive Image 6' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'E-commerce Fashion Store built with HTML, CSS and JavaScript showcasing different products and their details, with a cart functionality.',
        demoLink: 'https://high-five-swart.vercel.app/',
        codeLink:'https://github.com/AhmedEid2504/High-Five'
    },
    {
        id: '5',
        name: 'UBI Order',
        title: '',
        images: [
        { src: '/images/projects/ubiorder/ubiorder-1.png', alt: 'ubiorder Image 1' },
        { src: '/images/projects/ubiorder/ubiorder-2.png', alt: 'ubiorder Image 2' },
        { src: '/images/projects/ubiorder/ubiorder-3.png', alt: 'ubiorder Image 3' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'Landing Page for a Food Delivery Service built with HTML, CSS, JavaScript and Bootstrap.',
        demoLink: 'https://ubi-order.vercel.app/',
        codeLink:'https://github.com/AhmedEid2504/High-Five'
    },
    {
        id: '6',
        name: 'Cinema Maze',
        title: '',
        images: [
        { src: '/images/projects/cinemamaze/animation-1.gif', alt: 'Cinema maze animation' },
        { src: '/images/projects/cinemamaze/cinemamaze-1.png', alt: 'Cinema maze Image' },
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
        { src: '/images/projects/communitychat/communitychat-1.png', alt: 'Community Chat Image' },
        ],
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'Functional Chat Application built with HTML, CSS and JavaScript for chatting with other users.',
        demoLink: 'https://community-chat-sand.vercel.app/',
        codeLink:''
    },
    {
        id: '8',
        name: 'CodVanced',
        title: '',
        images: [
        { src: '/images/projects/traquiz/traquiz-1.png', alt: 'traquiz Image 1' },
        { src: '/images/projects/traquiz/traquiz-2.png', alt: 'traquiz Image 2' },
        ],
        tags: ['Html', 'CSS', 'JavaScript'],
        description: 'TraQuiz is a quiz application built with html css javascript for helping users choose the right track for them according to their test score.',
        demoLink: 'https://traquiz.vercel.app/',
        codeLink:'',
        sections: [
            {
                title: 'CodVanced - Quiz Application Overview',
                content: 'CodVanced is a quiz application designed to entertain and educate users with a variety of trivia questions and topics. Built with React, TypeScript, TailwindCSS, and the Open Trivia API, this app offers a fun and interactive way to test knowledge, learn new facts, and challenge friends. Users can select quiz categories, difficulty levels, and question types to customize their quiz experience and explore different subjects.',
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