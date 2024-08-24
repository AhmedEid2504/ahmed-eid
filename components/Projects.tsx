
import React from 'react'
import GridBG from './ui/GridBG'
import ProjectCard from './ui/ProjectCard'

const Projects = () => {
  return (
    <div className='relative h-screen w-screen text-white justify-center items-center'>
        <GridBG />
        <div className='h-full w-screen overflow-hidden text-white pt-3 sm:pt-10 p-5 pr-[20px] flex flex-col justify-center items-center'>
          <h1 className='text-3xl'>Projects</h1>
            <div className='flex overflow-auto'>
              <div className=' flex flex-wrap justify-center items-center gap-5 bg-black bg-opacity-30 p-5 rounded-lg w-[80vw]'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Projects