import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image'

type ElementSliderProps = {
    projects: {
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [currentIndex]);

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        }, 300);
    };

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
        }, 300);
    };

    return (
        <div className='relative flex flex-col justify-center items-center gap-2'>
            <div className='flex flex-col ease-in duration-150 gap-3'>
                <div
                    className={`relative transition-opacity cursor-pointer duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    onMouseEnter={() => setFade(true)}
                    onMouseLeave={() => setFade(true)}
                >
                    <ProjectCard 
                        {...projects[currentIndex]}
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
            <div className=' flex flex-wrap w-[95%] justify-center items-center gap-2 bg-black bg-opacity-30 p-1 rounded-md'>
                {projects.map((project, index) => (
                    <button
                        onClick={() => setCurrentIndex(index)}
                        key={index}
                        className={` text-white p-1 rounded-md ${currentIndex === index ? 'border-2 border-clr_1' : ''}`}
                    >
                        <div className='max-sm:w-[60px] max-sm:text-xs flex flex-col justify-center items-center '>
                            <Image
                                src={project.images[0].src}
                                alt={project.images[0].alt}
                                width={100}
                                height={50}
                            />
                            {project.name}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ElementSlider
