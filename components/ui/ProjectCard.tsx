import React from 'react'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5 rounded-lg shadow-md shadow-clr_4 bg-clr_1 bg-opacity-15 w-fit'>
        <Image src='/images/projects/project-1/project1-2.png' alt='project-1' width={300} height={300} />
        <div className='flex flex-col justify-center items-center gap-2 pt-2'>
            <h1>High Five</h1>
            {/* tags */}
            <div className='flex justify-center items-center gap-2'>
                <span className='bg-clr_3 text-white p-1 rounded-md'>React</span>
                <span className='bg-clr_3 text-white p-1 rounded-md'>Next.js</span>
                <span className='bg-clr_3 text-white p-1 rounded-md'>TailwindCSS</span>
            </div>
            <h2>E-commerce</h2>
            <div className='flex justify-center items-center gap-3'>
                <button className='bg-clr_1 text-white p-2 rounded-md'>View Project</button>
                <button className='bg-clr_1 text-white p-2 rounded-md'>View Code</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard