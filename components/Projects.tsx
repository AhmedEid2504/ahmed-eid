
import React from 'react'
import GridBG from './ui/GridBG'
import ProjectCard from './ui/ProjectCard'

const projects = [
  {
    name: 'Project 1',
    title: 'Project 1 Title',
    images: [
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
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
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
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
      { src: '/images/projects/project-1/project1-2.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-1.png', alt: 'Project 1 Image' },
      { src: '/images/projects/project-1/project1-3.png', alt: 'Project 1 Image' }
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
        <div className='h-full w-screen overflow-hidden text-white pt-3 sm:pt-10 p-5 pr-[55px] flex flex-col justify-center items-center'>
          <h1 className='text-3xl'>Projects</h1>
            <div className='flex overflow-auto'>
              <div className=' flex flex-wrap justify-center items-center gap-5 bg-black bg-opacity-30 p-5 rounded-lg w-[80vw]'>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Projects