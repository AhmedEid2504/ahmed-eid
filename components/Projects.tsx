
import React from 'react'
import GridBG from './ui/GridBG'
import ElementSlider from './ui/ElementSlider'

const projects = [
  {
    name: 'High Five',
    title: 'E-commerce Fashion Store',
    images: [
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Project 1',
    title: 'Project 1 Title',
    images: [
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' }
    ],
    tags: ['tag1', 'tag2'],
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Project 1',
    title: 'Project 1 Title',
    images: [
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' }
    ],
    tags: ['tag1', 'tag2'],
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Project 1',
    title: 'Project 1 Title',
    images: [
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' }
    ],
    tags: ['tag1', 'tag2'],
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Project 1',
    title: 'Project 1 Title',
    images: [
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' }
    ],
    tags: ['tag1', 'tag2'],
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
  {
    name: 'Project 1',
    title: 'Project 1 Title',
    images: [
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' }
    ],
    tags: ['tag1', 'tag2'],
    description: 'Project 1 Description',
    demoLink: 'https://high-five-swart.vercel.app/',
    codeLink:'https://github.com/AhmedEid2504/High-Five'
  },
]

const Projects = () => {
  return (
    <div className='relative h-screen w-screen text-white justify-center items-center'>
        <GridBG />
        <div className='h-[95dvh] w-screen overflow-hidden text-white pt-3 sm:pt-10 p-5 pr-[55px] flex flex-col justify-center items-center gap-3'>
          <h1 className='text-3xl'>My Projects</h1>
            <div className='flex'>
              <div className='h-fit flex flex-wrap justify-center items-center gap-5 bg-black bg-opacity-30 p-5 rounded-lg w-fit'>
                <ElementSlider projects={projects} />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Projects