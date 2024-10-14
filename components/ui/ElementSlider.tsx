import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image'

type ElementSliderProps = {
    projects: {
        id: string
        name: string
        title: string
        images: { src: string; alt: string }[]
        tags: string[]
        description: string
        demoLink?: string
        codeLink?: string
    }[]
}

const ElementSlider = ({projects}:ElementSliderProps) => {
    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [currentElementIndex]);

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentElementIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }, 300);
    };

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentElementIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
        }, 300);
    };

    return (
        <div className='relative flex flex-col justify-between items-center gap-2'>
            <div className='flex flex-col ease-in duration-150 gap-3'>
                <div
                    className={`relative transition-opacity cursor-pointer duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    onMouseEnter={() => setFade(true)}
                    onMouseLeave={() => setFade(true)}
                >
                    <ProjectCard 
                        {...projects[currentElementIndex]}
                    />

                </div>
                <div className='flex justify-center items-center gap-5'>
                    <button
                        onClick={prevSlide}
                        className='bg-white text-clr_1 bg-opacity-15 hover:bg-opacity-30 active:opacity-50 px-3 py-1.5 rounded-md'>
                        {'<'}
                    </button>
                    <button
                        onClick={nextSlide}
                        className='bg-white text-clr_1 bg-opacity-15 hover:bg-opacity-30 active:opacity-50 px-3 py-1.5 rounded-md'>
                        {'>'}
                    </button>
                </div>
            </div>
            <div className=' flex md:flex-wrap max-md:overflow-auto max-md:overflow-y-hidden max-md:w-[70vw] justify-center items-center max-md:justify-start max-md:items-start gap-2 bg-black bg-opacity-30 p-1 rounded-md'>
                {projects.map((project, index) => (
                    <button
                        onClick={() => setCurrentElementIndex(index)}
                        key={index}
                        className={` text-white p-1 rounded-md ${currentElementIndex === index ? 'border-2 border-clr_1' : ''}`}
                    >
                        <div className='relative max-md:w-[60px] max-md:max-w-[100px] max-md:max-h-[50px] max-md:text-xs flex flex-col justify-center items-center '>
                            <Image
                                src={project.images[0].src}
                                alt={project.images[0].alt}
                                width={100}
                                height={50}
                            />
                            <div className='absolute hidden max-sm:block bg-black bg-opacity-50 w-full h-full '>

                            </div>
                            <h1 className='max-sm:absolute text-xs'>
                                {project.name}
                            </h1>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ElementSlider
