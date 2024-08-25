
import React from 'react'
import GridBG from './ui/GridBG'
import ElementSlider from './ui/ElementSlider'

const projects = [
  {
    name: 'Portfolio',
    title: '',
    images: [
      { src: '/images/projects/project-9/project9-1.png', alt: 'Project 9 Image' },
      { src: '/images/projects/project-9/project9-2.png', alt: 'Project 9 Image' },
      { src: '/images/projects/project-9/project9-3.png', alt: 'Project 9 Image' },
    ],
    tags: ['NextJs', 'TypeScript', 'TailwindCSS'],
    description: 'Project 1 Description',
    demoLink: 'https://ahmed-eid-ashen.vercel.app/',
    codeLink:''
  },
  {
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
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Meme Maker',
    title: 'Application for creating memes',
    images: [
      { src: '/images/projects/project-2/Meme-Maker-1.png', alt: 'Project 2 Image' },
      { src: '/images/projects/project-2/Meme-Maker-2.png', alt: 'Project 2 Image' },
    ],
    tags: ['React', 'JavaScript', 'TailwindCSS', 'Firebase'],
    description: 'Project 1 Description',
    demoLink: 'https://meme-maker-nu.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Airbnb Clone',
    title: '',
    images: [
      { src: '/images/projects/project-3/project3-1.png', alt: 'Project 3 Image' },
    ],
    tags: ['React', 'JavaScript'],
    description: 'Project 1 Description',
    demoLink: 'https://react-scrimba-airbnb.vercel.app/',
    codeLink:'https://react-scrimba-airbnb.vercel.app/'
  },
  {
    name: 'UBI Order',
    title: '',
    images: [
      { src: '/images/projects/project-4/project4-1.png', alt: 'Project 4 Image' },
      { src: '/images/projects/project-4/project4-2.png', alt: 'Project 4 Image' },
      { src: '/images/projects/project-4/project4-3.png', alt: 'Project 4 Image' },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description: 'Project 1 Description',
    demoLink: 'https://ubi-order.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Comfy House',
    title: '',
    images: [
      { src: '/images/projects/project-5/project5-1.png', alt: 'Project 5 Image 1' },
      { src: '/images/projects/project-5/project5-2.png', alt: 'Project 5 Image 2' },
      { src: '/images/projects/project-5/project5-3.png', alt: 'Project 5 Image 3' },
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Project 1 Description',
    demoLink: 'https://comfy-house-two.vercel.app/',
    codeLink:'',
  },
  {
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
    name: 'Cinema Maze',
    title: '',
    images: [
      { src: '/images/projects/project-7/project7-1.png', alt: 'Project 7 Image' },
    ],
    tags: ['React', 'JavaScript', 'Movies Search API'],
    description: 'Project 1 Description',
    demoLink: 'https://cinema-maze.vercel.app/',
    codeLink:''
  },
  {
    name: 'Community Chat',
    title: '',
    images: [
      { src: '/images/projects/project-8/project8-1.png', alt: 'Project 8 Image' },
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Project 1 Description',
    demoLink: 'https://community-chat-sand.vercel.app/',
    codeLink:''
  },
  
]

const Projects = () => {
  return (
    <div className='relative min-h-screen h-full w-screen text-white justify-center items-center'>
        <GridBG />
        <div className='h-full min-h-screen w-screen text-white  sm:pt-10 p-5  flex flex-col justify-center items-center gap-3'>
          <h1 className='text-3xl'>My Projects</h1>
            <div className='flex'>
              <div className='h-full flex flex-wrap justify-center items-center gap-5 bg-black bg-opacity-30 p-5 rounded-lg w-fit'>
                <ElementSlider projects={projects} />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Projects