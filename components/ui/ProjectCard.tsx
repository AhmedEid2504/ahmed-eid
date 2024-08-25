import React from 'react'
import Image from 'next/image'
import Slider from './Slider'
import MagicButton from './MagicButton'
import { FaArrowDown } from 'react-icons/fa'

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
    <div className='flex flex-col justify-center items-center p-5 max-sm:p-2 rounded-lg shadow-sm shadow-clr_1 bg-clr_1 bg-opacity-15 w-[70vw]'>
        {/* images slider */}
        <Slider images={images} />
        {/* description */}
        <div className='flex flex-col justify-center items-center gap-2 pt-2'>
            <h1 className='text-xl max-sm:text-lg'>{name}</h1>
            {/* tags */}
            <div className='flex justify-center items-center gap-2'>
              {tags.map((tag, index) => (
                <span key={index} className='bg-black bg-opacity-35 text-white p-2 max-sm:text-xs max-sm:pt-0.5 max-sm:py-0 rounded-md'>{tag}</span>
              ))}
            </div>
            <h1 className='text-sm'>{title}</h1>
            <div className='flex justify-center items-center gap-3'>
                <a href={demoLink} target='_blank'>
                  <MagicButton
                      content='Show Demo'
                      otherClasses='w-36 max-sm:w-24 max-sm:text-xs max-sm:px-0.5'
                  />
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard