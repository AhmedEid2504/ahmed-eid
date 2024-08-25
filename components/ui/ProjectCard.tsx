import React from 'react'
import Image from 'next/image'
import Slider from './Slider'

type ProjectCardProps = {
  name: string
  title: string
  images: { src: string; alt: string }[]
  tags: string[]
  description: string
  demoLink?: string
  codeLink?: string
}

const ProjectCard = ({
  name, title, images, tags, description, demoLink, codeLink
}:ProjectCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center p-5 rounded-lg shadow-md shadow-clr_4 bg-clr_1 bg-opacity-15 w-fit'>
        {/* images slider */}
        <Slider images={images} />
        {/* description */}
        <div className='flex flex-col justify-center items-center gap-2 pt-2'>
            <h1>{name}</h1>
            {/* tags */}
            <div className='flex justify-center items-center gap-2'>
              {tags.map((tag, index) => (
                <span key={index} className='bg-clr_3 text-white p-1 rounded-md'>{tag}</span>
              ))}
            </div>
            <h2>{title}</h2>
            <div className='flex justify-center items-center gap-3'>
                <a href={demoLink} target='_blank'>
                  <button className='bg-clr_1 text-white p-2 rounded-md'>
                    Demo
                  </button>
                </a>
                <a href={codeLink} target='_blank'>
                  <button className='bg-clr_1 text-white p-2 rounded-md'>
                    Code
                  </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard