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
        { src: '/images/projects/Portfolio/Portfolio-1.gif', alt: 'Portfolio Image 1', description: 'Hero Section' },
        { src: '/images/projects/Portfolio/Portfolio-2.png', alt: 'Portfolio Image 2', description: 'Projects Section' },
        { src: '/images/projects/Portfolio/Portfolio-3.png', alt: 'Portfolio Image 3', description: 'Skills Section' },
        { src: '/images/projects/Portfolio/chat.png', alt: 'Portfolio Image 4', description: 'Contact Section' },
        ],
        tags: ['NextJs', 'TypeScript', 'TailwindCSS'],
        description: 'My Portfolio Website built with NextJs, TypeScript and TailwindCSS showcasing my projects and skills.',
        demoLink: 'https://ahmed-eid-ashen.vercel.app/',
        codeLink:'',
        sections: [
            {
                title: 'Overview of the Portfolio Website',
                content: 'This portfolio website serves as a comprehensive representation of my work, skills, and professional journey. It provides potential employers and collaborators with easy access to my most notable projects and achievements. Built using Next.js, TypeScript, and TailwindCSS, this site combines a modern tech stack with an intuitive and visually appealing interface, making it an ideal platform for showcasing my development capabilities.',
                image: { src: '/images/projects/Portfolio/Portfolio-1.png', alt: 'Portfolio Image' }
            },
            {
                title: 'Awesome Animations and Interactive Elements',
                content: 'The website features engaging animations and interactive elements that enhance the user experience and create a dynamic interface. From scrolling animations to hover effects, each element is designed to capture the user\'s attention and guide them through the content. These animations add a touch of creativity and interactivity to the site, making it more engaging and memorable for visitors.',
                image: { src: '/images/projects/Portfolio/animation-1.gif', alt: 'Portfolio Image' }
            },
            {
                title: 'Reusable Components and Modular Design',
                content: 'The website is built with reusable components and a modular design approach, allowing for easy maintenance and scalability. Each section of the site is designed as a separate component, making it simple to update content, add new projects, or modify existing features. This modular structure ensures consistency in design and functionality across the site, providing a seamless user experience for visitors.',
            },
            {
                title: 'Advanced Tech Stack for Performance and Scalability',
                content: 'The use of Next.js ensures that the website is highly performant with built-in optimizations like server-side rendering (SSR) and static site generation (SSG). TypeScript provides strong typing, ensuring fewer runtime errors and more robust code. Finally, TailwindCSS helps maintain a clean and organized design, enabling rapid development of responsive and modern user interfaces.',
                image: { src: '/images/projects/Portfolio/tech.jpg', alt: 'Portfolio Image' }
            },
            {
                title: 'Highlighting My Best Work',
                content: 'One of the most important sections of this portfolio is the Projects Section, where each project is displayed with attention to detail, including images, descriptions, and live demos. This section emphasizes my diverse experience, showcasing projects built using various technologies and frameworks. Each project card is interactive, providing users with more information and links to code repositories and demos.',
                image: { src: '/images/projects/Portfolio/animation-2.gif', alt: 'Portfolio Image' }
            },
            {
                title: 'Real-Time Chat Feature for Instant Communication With Me',
                content: 'The portfolio website includes a real-time chat feature that allows visitors to communicate with me instantly. This feature enables potential employers, collaborators, or clients to reach out, ask questions, or discuss opportunities directly on the site. The chat interface is user-friendly and responsive, providing a seamless communication channel for engaging with visitors in real time.',
                image: { src: '/images/projects/Portfolio/chat.png', alt: 'Portfolio Image' }
            }
        ]
    },
    {
        id: '2',
        name: 'Insight Learn',
        title: 'Interactive Learning Platform',
        images: [
            { src: '/images/projects/insightlearn/insightlearn-1.png', alt: 'Insight Learn Image 1' },
            { src: '/images/projects/insightlearn/insightlearn-2.png', alt: 'Insight Learn Image 2' },
            { src: '/images/projects/insightlearn/insightlearn-3.png', alt: 'Insight Learn Image 3' },
            { src: '/images/projects/insightlearn/insightlearn-4.png', alt: 'Insight Learn Image 4' },
            { src: '/images/projects/insightlearn/insightlearn-5.png', alt: 'Insight Learn Image 5' },
            { src: '/images/projects/insightlearn/insightlearn-6.png', alt: 'Insight Learn Image 6' },
            { src: '/images/projects/insightlearn/insightlearn-7.png', alt: 'Insight Learn Image 7' },
            { src: '/images/projects/insightlearn/insightlearn-8.png', alt: 'Insight Learn Image 8' },
            { src: '/images/projects/insightlearn/insightlearn-9.png', alt: 'Insight Learn Image 9' },
            { src: '/images/projects/insightlearn/insightlearn-10.png', alt: 'Insight Learn Image 10' },
            { src: '/images/projects/insightlearn/insightlearn-11.png', alt: 'Insight Learn Image 11' },
            { src: '/images/projects/insightlearn/insightlearn-12.png', alt: 'Insight Learn Image 12' },
            { src: '/images/projects/insightlearn/insightlearn-13.png', alt: 'Insight Learn Image 13' },
        ],
        tags: ['React', 'Tailwind CSS', 'MorphCast Api', 'Django', 'Python', 'PostgreSql', 'Moodle', 'Azure'],
        description: 'Insight Learn is an interactive e-learning platform built with React, TypeScript, Firebase, and Tailwind CSS. The platform enables students to access educational materials, track their progress, and engage in quizzes using moodle system while analyzing their facial features to make predictions on their success and help professors understand them.',
        demoLink: 'https://insightlearn.vercel.app/',
        codeLink: 'https://github.com/YourUsername/InsightLearn',
        sections: [
            {
                title: 'Certificate by the Computer Scientific Society',
                content: 'Insight Learn received a certificate of appreciation from the Computer Scientific Society for its outstanding contribution to e-learning and educational technology. The platform\'s innovative approach to personalized learning and data analytics has set a new standard for interactive education.',
                image: { src: '/images/projects/insightlearn/certificate.jpg', alt: 'Insight Learn Certificate' }
            },
            {
                title: 'Insight Learn Graduation Project - Analytical E-Learning Platform',
                content: 'Insight Learn is an e-learning platform that provides students with a personalized, interactive learning experience. It tracks progress, engages students, and offers insights for educators. With features like interactive quizzes and real-time data synchronization, it creates a dynamic learning environment.',
                image: { src: '/images/projects/insightlearn/insightlearn-1.png', alt: 'Insight Learn Image' }
            },
            {
                title: 'MorphCast AI SDK for Facial Analysis',
                content: 'Insight Learn uses MorphCast AI to analyze students\' facial expressions and predict success based on emotional responses. This helps educators gauge engagement levels and learning preferences, enhancing the learning experience with personalized feedback.',
                image: { src: '/images/projects/insightlearn/morphcast.png', alt: 'Insight Learn Facial Analysis' }
            },
            {
                title: 'Moodle LMS Integration',
                content: 'The platform integrates with Moodle LMS to offer course management, assessments, and collaborative tools. This ensures a seamless e-learning experience for students and educators.',
                image: { src: '/images/projects/insightlearn/moodle.png', alt: 'Insight Learn Moodle Integration' }
            },
            {
                title: 'Personalized Dashboard',
                content: 'Insight Learn features a personalized dashboard where users can track progress, view analytics, and access resources. Interactive charts and data visualizations help monitor performance and guide informed decisions.',
                image: { src: '/images/projects/insightlearn/insightlearn-4.png', alt: 'Insight Learn Dashboard' }
            },
            {
                title: 'Machine Learning Predictions',
                content: 'Machine learning algorithms analyze student data to predict success rates and offer personalized recommendations. This helps educators tailor strategies based on student behavior and engagement.',
                image: { src: '/images/projects/insightlearn/insightlearn-10.png', alt: 'Insight Learn ML Predictions' }
            },
            {
                title: 'Administration and Reporting Tools',
                content: 'Insight Learn provides powerful reporting tools for administrators and educators to track student progress and generate insights. Detailed analytics and reports support data-driven decisions to improve teaching and learning.',
                image: { src: '/images/projects/insightlearn/insightlearn-5.png', alt: 'Insight Learn Reporting Tools' }
            },
            {
                title: 'Dark and Light Mode Support',
                content: 'The platform offers dark and light mode options to accommodate user preferences and reduce eye strain. Users can switch between modes seamlessly, enhancing accessibility and user experience.',
                image: { src: '/images/projects/insightlearn/insightlearn-12.png', alt: 'Insight Learn Dark and Light Mode' }
            },
            {
                title: 'Our Team',
                content: 'Insight Learn was developed by a dedicated team of developers, designers, and educators who collaborated to create an innovative e-learning platform. Their combined expertise and passion for education led to the successful implementation of cutting-edge features and functionalities.',
                image: { src: '/images/projects/insightlearn/insightlearn-13.png', alt: 'Insight Learn Team' }
            },
            
            
        ]
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
        codeLink:'https://github.com/AhmedEid2504/High-Five',
        sections: [
            {
                title: 'Meme Maker - Application Overview',
                content: 'Meme Maker is a fun and interactive web application that allows users to create custom memes using a variety of templates and styles. Built with React, JavaScript, TailwindCSS, and Firebase, this application combines a modern tech stack with a user-friendly interface, making meme creation easy and enjoyable. Users can choose from a selection of meme templates, add custom text, and download or share their creations with others.',
                image: { src: '/images/projects/mememaker/mememaker-1.png', alt: 'mememaker Image' }
            },
            {
                title: 'Customizable Meme Creation and Sharing',
                content: 'The application offers a range of meme templates and styles to suit different preferences and humor. Users can customize their memes by adding text, changing fonts, and adjusting colors to create unique and personalized creations. Once satisfied with their meme, users can download the image or share it directly to the "Wall of Memes," where other users can view, like, and comment on the shared memes.',
                image: { src: '/images/projects/mememaker/mememaker-2.png', alt: 'mememaker Image' }
            },
            {
                title: 'User Authentication and Social Interaction',
                content: 'Meme Maker includes user authentication functionality, allowing users to create accounts, log in, and access personalized features. The "Wall of Memes" serves as a social platform where users can interact with each other by sharing, liking, and commenting on memes. This social aspect adds a community element to the application, encouraging engagement and collaboration among meme creators.',
            }
        ]
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
        codeLink:'https://github.com/AhmedEid2504/High-Five',
        sections: [
            {
                title: 'High Five - E-commerce Fashion Store Overview',
                content: 'High Five is an elegant and functional e-commerce website tailored for fashion enthusiasts. Built using HTML, CSS, and JavaScript, this website offers a seamless shopping experience with a modern and visually appealing interface. It demonstrates my ability to create feature-rich, user-friendly e-commerce platforms with smooth navigation and a clean layout.',
                image: { src: '/images/projects/highfive/highfive-2.png', alt: 'highfive Image' }
            },
            {
                title: 'Responsive Design and Mobile Compatibility',
                content: 'High Five is built with a responsive design that ensures optimal performance on devices of all sizes. Whether users are browsing on a desktop, tablet, or smartphone, the website adapts to different screen resolutions and orientations, providing a consistent and engaging experience. This mobile compatibility enhances accessibility and usability, catering to a diverse audience of fashion shoppers.',
                image: { src: '/images/projects/highfive/highfive-responsive-1.png', alt: 'highfive Image' }
            },
            {
                title: 'Key Features and Functional Shopping Experience',
                content: 'The website includes essential e-commerce features such as product listings, detailed product views, and a functional shopping cart system. The cart allows users to easily add and remove items, view their selections, and proceed to checkout. Additionally, intuitive navigation and product categorization enhance the user experience, allowing shoppers to quickly find what they need.',
                image: { src: '/images/projects/highfive/highfive-5.png', alt: 'highfive Image' }
            },
            {
                title: 'Interactive Shopping Cart and Checkout Process',
                content: 'The shopping cart functionality allows users to add products, adjust quantities, and proceed to checkout seamlessly. The checkout process is designed to be intuitive and user-friendly, guiding customers through the necessary steps to complete their purchase. Users can review their order, enter shipping details, and choose payment options, creating a streamlined shopping experience.',
                image: { src: '/images/projects/highfive/highfive-6.png', alt: 'highfive Image' }
            },
        ]
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
        codeLink:'https://github.com/AhmedEid2504/High-Five',
        sections: [
            {
                title: 'UBI Order - Landing Page Overview',
                content: 'UBI Order is a landing page designed for a food delivery service, showcasing the company\'s offerings and features in a visually appealing and informative layout. Built with HTML, CSS, JavaScript, and Bootstrap, this landing page combines modern design elements with responsive components to create an engaging user experience. The page highlights key services, benefits, and promotions to attract potential customers and encourage conversions.',
                image: { src: '/images/projects/ubiorder/ubiorder-1.png', alt: 'ubiorder Image' }
            },
            {
                title: 'Interactive Design and User Engagement',
                content: 'The landing page features interactive elements such as animated sections, hover effects, and call-to-action buttons to engage users and guide them through the content. The use of vibrant colors, high-quality images, and clear typography enhances the visual appeal and readability of the page, making it easy for visitors to navigate and explore the information provided. The responsive design ensures that the page looks great on devices of all sizes, from desktops to mobile phones.',
                image: { src: '/images/projects/ubiorder/ubiorder-2.png', alt: 'ubiorder Image' }
            },
            {
                title: 'Promotions and Call-to-Action',
                content: 'The landing page includes sections dedicated to promoting special offers, discounts, and featured menu items to entice customers to place an order. Call-to-action buttons and links are strategically placed throughout the page to encourage users to explore further, sign up for services or place an order. These elements are designed to drive conversions and generate leads for the food delivery service, ultimately increasing customer engagement and sales.',
                image: { src: '/images/projects/ubiorder/ubiorder-3.png', alt: 'ubiorder Image' }
            }
        ]
    },
    {
        id: '6',
        name: 'Cinema Maze',
        title: '',
        images: [
        { src: '/images/projects/cinemamaze/cinemamaze-1.png', alt: 'cinemamaze Image' },
        ],
        tags: ['React', 'JavaScript', 'Movies Search API'],
        description: 'Cinema Maze Application built with React and a movie search api the user gets results based on the search term.',
        demoLink: 'https://cinema-maze.vercel.app/',
        codeLink:'',
        sections: [
            {
                title: 'Cinema Maze - Movie Search Application Overview',
                content: 'Cinema Maze is a movie search application that allows users to discover and explore a wide range of movies based on their search queries. Built with React and JavaScript, this application leverages a movie search API to fetch and display movie data in a user-friendly interface. Users can search for movies by title, genre, or actor, view detailed information about each movie, and save their favorite films for future reference.',
                image: { src: '/images/projects/cinemamaze/cinemamaze-1.png', alt: 'cinemamaze Image' }
            },
            {
                title: 'Dynamic Search Functionality',
                content: 'The application features dynamic search functionality that enables users to find movies quickly and easily by entering keywords or phrases. The search results are displayed in a visually appealing format, with movie posters, titles, and descriptions to help users make informed decisions.',
                image: { src: '/images/projects/cinemamaze/animation-1.gif', alt: 'cinemamaze animation' }
            },
        ]
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
        codeLink:'',
        sections: [
            {
                title: 'Community Chat - Chat Application Overview',
                content: 'Community Chat is a functional web application that allows users to engage in real-time conversations with other users. Built with HTML, CSS, and JavaScript, this chat application provides a simple and intuitive interface for sending messages, viewing chat history, and interacting with a community of users. The app showcases my ability to create interactive and dynamic web features that facilitate communication and social interaction online.',
                image: { src: '/images/projects/communitychat/communitychat-1.png', alt: 'Community Chat Image' }
            },
            {
                title: 'Real-Time Messaging and User Interaction',
                content: 'The chat application features real-time messaging capabilities, enabling users to send and receive messages instantly without page refreshes. Users can view chat history, see online status indicators, and engage in group or private conversations with other users. The interface is designed to be user-friendly and responsive, providing a seamless chat experience that encourages interaction and community building.',
                image: { src: '/images/projects/communitychat/communitychat-1.png', alt: 'Community Chat Image' }
            },
            {
                title: 'Customizable Chat Settings and User Profiles',
                content: 'Users can customize their chat settings, update profiles, and manage notifications to personalize their chat experience. The application allows users to create unique usernames, set profile pictures, and adjust privacy settings to control their online presence. By providing these customization options, the chat application enhances user engagement and encourages users to connect and communicate with others in a safe and interactive environment.',
                image: { src: '/images/projects/communitychat/communitychat-1.png', alt: 'Community Chat Image' }
            }
        ]
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
        description: 'CodVanced is a quiz application built with html css javascript for helping users choose the right track for them according to their test score.',
        demoLink: 'https://traquiz.vercel.app/',
        codeLink:'',
        sections: [
            {
                title: 'CodVanced - Quiz Application',
                content: 'TraQuiz is a quiz application designed to help users choose the right track for them based on their test scores. The app features a series of questions that users can answer to determine their strengths, weaknesses, and preferences. By analyzing the user\'s responses, TraQuiz provides personalized recommendations and suggestions for career paths, educational programs, or skill development opportunities. The app aims to guide users in making informed decisions about their future based on their interests and abilities.',
                image: { src: '/images/projects/traquiz/traquiz-1.png', alt: 'traquiz Image' }
            },
            {
                title: 'Track Selection and Recommendation System',
                content: 'The quiz application offers a variety of questions covering different topics, skills, and interests to assess the user\'s knowledge and preferences. Based on the user\'s responses, TraQuiz generates a personalized track recommendation that aligns with the user\'s strengths and interests. The app provides detailed information about each track, including required skills, job opportunities, and educational resources, to help users make informed decisions about their future.',
                image: { src: '/images/projects/traquiz/traquiz-2.png', alt: 'traquiz Image' }
            },
            {
                title: 'Interactive Quiz Interface and User Experience',
                content: 'The application is built with a responsive layout, ensuring a seamless experience on both mobile and desktop devices, Users are presented with immediate feedback based on their answers, helping them make informed decisions.',
                image: { src: '/images/projects/traquiz/animation-1.gif', alt: 'traquiz Image' }
            }
        ]

    }
]

export { projectsdetails }