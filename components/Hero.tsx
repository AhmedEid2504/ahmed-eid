import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
    return (
        <div className=''>
            <div>
                <Spotlight 
                    className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                    fill='white'
                />
                <Spotlight 
                    className='top-10 left-full h-[80vh] w-[50vw]'
                    fill='purple'
                />

                <Spotlight 
                    className='top-28 left-80 h-[80vh] w-[50vw]'
                    fill='blue'
                />
            </div>
            <div className="h-screen relative w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className='absolute w-screen h-screen top-0 left-0 flex justify-center items-center'>
                <div className='max-w-[89vw]'>
                    <h1 className='uppercase tracking-widest text-x text-center text-blue-100 max-w-80'>
                        Hi, Im <span className='text-blue-200'>Ahmed Eid</span> and Im a <span className='text-blue-200'>React Front-End Developer</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero