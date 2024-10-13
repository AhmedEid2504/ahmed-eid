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
                content: 'The website is designed to be fully responsive, ensuring that it looks and works great on devices of all sizes, from desktops to smartphones. This attention to responsiveness makes it accessible to a broader audience and showcases my skills in creating mobile-friendly websites.',
                image: { src: '/images/projects/project-9/project9-3.png', alt: 'Project 9 Image' }
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
        codeLink:'https://github.com/AhmedEid2504/High-Five',
        sections: [
            {
                title: 'High Five - E-commerce Fashion Store Overview',
                content: 'High Five is an elegant and functional e-commerce website tailored for fashion enthusiasts. Built using HTML, CSS, and JavaScript, this website offers a seamless shopping experience with a modern and visually appealing interface. It demonstrates my ability to create feature-rich, user-friendly e-commerce platforms with smooth navigation and a clean layout.',
                image: { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' }
            },
            {
                title: 'Key Features and Functional Shopping Experience',
                content: 'The website includes essential e-commerce features such as product listings, detailed product views, and a functional shopping cart system. The cart allows users to easily add and remove items, view their selections, and proceed to checkout. Additionally, intuitive navigation and product categorization enhance the user experience, allowing shoppers to quickly find what they need.',
                image: { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' }
            },
            {
                title: 'Interactive Shopping Cart and Checkout Process',
                content: 'The shopping cart functionality allows users to add products, adjust quantities, and proceed to checkout seamlessly. The checkout process is designed to be intuitive and user-friendly, guiding customers through the necessary steps to complete their purchase. Users can review their order, enter shipping details, and choose payment options, creating a streamlined shopping experience.',
                image: { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' }
            },
            {
                title: 'Responsive Design and Mobile Compatibility',
                content: 'High Five is built with a responsive design that ensures optimal performance on devices of all sizes. Whether users are browsing on a desktop, tablet, or smartphone, the website adapts to different screen resolutions and orientations, providing a consistent and engaging experience. This mobile compatibility enhances accessibility and usability, catering to a diverse audience of fashion shoppers.',
                image: { src: '/images/projects/project-1/project1-4.png', alt: 'Project 1 Image' }
            }
        ]
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
        codeLink:'https://github.com/AhmedEid2504/High-Five',
        sections: [
            {
                title: 'Meme Maker - Application Overview',
                content: 'Meme Maker is a fun and interactive web application that allows users to create custom memes using a variety of templates and styles. Built with React, JavaScript, TailwindCSS, and Firebase, this application combines a modern tech stack with a user-friendly interface, making meme creation easy and enjoyable. Users can choose from a selection of meme templates, add custom text, and download or share their creations with others.',
                image: { src: '/images/projects/project-2/Meme-Maker-1.png', alt: 'Project 2 Image' }
            },
            {
                title: 'Customizable Meme Creation and Sharing',
                content: 'The application offers a range of meme templates and styles to suit different preferences and humor. Users can customize their memes by adding text, changing fonts, and adjusting colors to create unique and personalized creations. Once satisfied with their meme, users can download the image or share it directly to the "Wall of Memes," where other users can view, like, and comment on the shared memes.',
                image: { src: '/images/projects/project-2/Meme-Maker-2.png', alt: 'Project 2 Image' }
            },
            {
                title: 'User Authentication and Social Interaction',
                content: 'Meme Maker includes user authentication functionality, allowing users to create accounts, log in, and access personalized features. The "Wall of Memes" serves as a social platform where users can interact with each other by sharing, liking, and commenting on memes. This social aspect adds a community element to the application, encouraging engagement and collaboration among meme creators.',
                image: { src: '/images/projects/project-2/Meme-Maker-2.png', alt: 'Project 2 Image' }
            }
        ]
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
        codeLink:'https://github.com/AhmedEid2504/High-Five',
        sections: [
            {
                title: 'UBI Order - Landing Page Overview',
                content: 'UBI Order is a landing page designed for a food delivery service, showcasing the company\'s offerings and features in a visually appealing and informative layout. Built with HTML, CSS, JavaScript, and Bootstrap, this landing page combines modern design elements with responsive components to create an engaging user experience. The page highlights key services, benefits, and promotions to attract potential customers and encourage conversions.',
                image: { src: '/images/projects/project-4/project4-1.png', alt: 'Project 4 Image' }
            },
            {
                title: 'Interactive Design and User Engagement',
                content: 'The landing page features interactive elements such as animated sections, hover effects, and call-to-action buttons to engage users and guide them through the content. The use of vibrant colors, high-quality images, and clear typography enhances the visual appeal and readability of the page, making it easy for visitors to navigate and explore the information provided. The responsive design ensures that the page looks great on devices of all sizes, from desktops to mobile phones.',
                image: { src: '/images/projects/project-4/project4-2.png', alt: 'Project 4 Image' }
            },
            {
                title: 'Promotions and Call-to-Action',
                content: 'The landing page includes sections dedicated to promoting special offers, discounts, and featured menu items to entice customers to place an order. Call-to-action buttons and links are strategically placed throughout the page to encourage users to explore further, sign up for services or place an order. These elements are designed to drive conversions and generate leads for the food delivery service, ultimately increasing customer engagement and sales.',
                image: { src: '/images/projects/project-4/project4-3.png', alt: 'Project 4 Image' }
            }
        ]
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
        sections: [
            {
                title: 'Comfy House - E-commerce Furniture Store Overview',
                content: 'Comfy House is an e-commerce website designed for furniture enthusiasts, offering a wide range of products and styles for home decor. Built with HTML, CSS, and JavaScript, this website provides an immersive shopping experience with detailed product listings, interactive features, and a user-friendly interface. The site showcases my ability to create visually appealing and functional e-commerce platforms that cater to diverse customer preferences.',
                image: { src: '/images/projects/project-5/project5-1.png', alt: 'Project 5 Image 1' }
            },
            {
                title: 'Product Catalog and Detailed Listings',
                content: 'The website features a comprehensive product catalog with detailed listings for each item, including high-quality images, descriptions, prices, and customer reviews. Users can browse through different categories, filter products based on preferences, and view additional details to make informed purchasing decisions. The interactive design elements and intuitive navigation enhance the user experience, making it easy to explore and discover new products.',
                image: { src: '/images/projects/project-5/project5-2.png', alt: 'Project 5 Image 2' }
            },
            {
                title: 'Shopping Cart and Checkout Process',
                content: 'Comfy House includes a functional shopping cart system that allows users to add products, adjust quantities, and proceed to checkout with ease. The cart displays a summary of selected items, total prices, and shipping options, providing a seamless shopping experience. The checkout process is designed to be user-friendly, guiding customers through the necessary steps to complete their purchase securely and efficiently.',
                image: { src: '/images/projects/project-5/project5-3.png', alt: 'Project 5 Image 3' }
            },
            {
                title: 'Responsive Design and Mobile Compatibility',
                content: 'The website is built with a responsive design that ensures optimal performance on devices of all sizes, from desktops to smartphones. This mobile compatibility allows users to shop conveniently on their mobile devices, browse products, and make purchases on the go. The responsive layout adapts to different screen resolutions and orientations, providing a consistent and engaging shopping experience for all users.',
                image: { src: '/images/projects/project-5/project5-3.png', alt: 'Project 5 Image 3' }
            }
        ]
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
        sections: [
            {
                title: 'Tindog - Landing Page Overview',
                content: 'Tindog is a landing page designed for a fictional mobile app that connects dog owners and their pets for social interactions and playdates. The page features a modern and engaging design with vibrant colors, playful illustrations, and interactive elements to capture the attention of visitors. Built with HTML, CSS, JavaScript, and Bootstrap, this landing page demonstrates my ability to create visually appealing and responsive web interfaces that cater to specific target audiences.',
                image: { src: '/images/projects/project-6/project6-1.png', alt: 'Project 6 Image 1' }
            },
            {
                title: 'Engaging Design Elements and User Experience',
                content: 'The landing page includes engaging design elements such as animated sections, hover effects, and interactive buttons to create an immersive user experience. The use of high-quality images, clear typography, and consistent branding enhances the visual appeal and readability of the page, making it easy for visitors to navigate and explore the content. The responsive layout ensures that the page looks great on devices of all sizes, from desktops to mobile phones.',
                image: { src: '/images/projects/project-6/project6-2.png', alt: 'Project 6 Image 2' }
            },
            {
                title: 'Promotions and Call-to-Action',
                content: 'The landing page features sections dedicated to promoting the app\'s key features, benefits, and subscription plans to attract potential users. Call-to-action buttons and links are strategically placed throughout the page to encourage visitors to sign up, learn more, or download the app. These elements are designed to drive conversions and generate leads for the Tindog app, ultimately increasing user engagement and app downloads.',
                image: { src: '/images/projects/project-6/project6-3.png', alt: 'Project 6 Image 3' }
            }
        ]
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
        codeLink:'',
        sections: [
            {
                title: 'Cinema Maze - Movie Search Application Overview',
                content: 'Cinema Maze is a movie search application that allows users to explore a vast collection of movies, view details, and search for specific titles. Built with React, JavaScript, and the Movies Search API, this application provides a user-friendly interface for discovering new films, reading synopses, and accessing relevant information. The app showcases my ability to create interactive and dynamic web applications that leverage external APIs to deliver engaging content to users.',
                image: { src: '/images/projects/project-7/project7-1.png', alt: 'Project 7 Image' }
            },
            {
                title: 'Comprehensive Movie Database and Search Functionality',
                content: 'The application features a comprehensive movie database with a wide range of genres, release years, and ratings to suit different preferences. Users can search for movies by title, genre, or keyword, making it easy to find specific films or explore new releases. The search functionality is designed to be intuitive and efficient, providing instant results and detailed information on each movie, including trailers, cast, and reviews.',
                image: { src: '/images/projects/project-7/project7-1.png', alt: 'Project 7 Image' }
            },
            {
                title: 'Interactive Movie Details and User Engagement',
                content: 'Each movie listing includes interactive elements such as trailers, images, and reviews to engage users and enhance their browsing experience. Users can click on movie posters to view detailed information, watch trailers, and read synopses to learn more about the films. The app also allows users to save favorite movies, create watchlists, and share recommendations with friends, fostering a sense of community and interaction among movie enthusiasts.',
                image: { src: '/images/projects/project-7/project7-1.png', alt: 'Project 7 Image' }
            }
        ]
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
        codeLink:'',
        sections: [
            {
                title: 'Community Chat - Chat Application Overview',
                content: 'Community Chat is a functional web application that allows users to engage in real-time conversations with other users. Built with HTML, CSS, and JavaScript, this chat application provides a simple and intuitive interface for sending messages, viewing chat history, and interacting with a community of users. The app showcases my ability to create interactive and dynamic web features that facilitate communication and social interaction online.',
                image: { src: '/images/projects/project-8/project8-1.png', alt: 'Project 8 Image' }
            },
            {
                title: 'Real-Time Messaging and User Interaction',
                content: 'The chat application features real-time messaging capabilities, enabling users to send and receive messages instantly without page refreshes. Users can view chat history, see online status indicators, and engage in group or private conversations with other users. The interface is designed to be user-friendly and responsive, providing a seamless chat experience that encourages interaction and community building.',
                image: { src: '/images/projects/project-8/project8-1.png', alt: 'Project 8 Image' }
            },
            {
                title: 'Customizable Chat Settings and User Profiles',
                content: 'Users can customize their chat settings, update profiles, and manage notifications to personalize their chat experience. The application allows users to create unique usernames, set profile pictures, and adjust privacy settings to control their online presence. By providing these customization options, the chat application enhances user engagement and encourages users to connect and communicate with others in a safe and interactive environment.',
                image: { src: '/images/projects/project-8/project8-1.png', alt: 'Project 8 Image' }
            }
        ]
    },
]

export { projectsdetails }