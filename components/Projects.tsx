
import React from 'react'
import GridBG from './ui/GridBG'
import ElementSlider from './ui/ElementSlider'

import { projects } from '../app/data/projects'

const Projects = () => {
  return (
    <div className='relative min-h-screen h-full w-screen text-white justify-center items-center'>
        <GridBG />
        <div className='h-full min-h-screen w-screen text-white p-5 flex flex-col justify-center items-center gap-2'>
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