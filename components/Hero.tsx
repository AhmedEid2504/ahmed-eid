"use client";

import React, { use, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import  MagicButton from './ui/MagicButton'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
        >
            {/*div that moves with mouse position centered*/}
            <div
                className="absolute -z-30 w-[200px] h-[200px] bg-clr_1 bg-opacity-[3%] rounded-full"
                style={{ top: mousePosition.y - 100, left: mousePosition.x - 100 }}
            >

            </div>
            <div>
                <Spotlight 
                    className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                    fill='white'
                />
                <Spotlight 
                    className='top-0 left-[50vw] h-[90vh] w-[50vw]'
                    fill='purple'
                />

                <Spotlight 
                    className='top-28 -right-10 h-[80vh] w-[50vw]'
                    fill='blue'
                />
            </div>
            <div className="h-screen w-screen relative dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.01] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className='absolute w-screen h-screen top-0 left-0 flex flex-col justify-center items-center'>
                <div className='max-w-[89vw]'>
                    <TextGenerateEffect 
                        words='Hi, I&apos;m Ahmed Eid and I&apos;m a React Front-End Developer' 
                        className='text-3xl md:text-4xl lg:text-5xl text-center' 
                    />
                </div>
                <div className='mt-8'>
                    <MagicButton 
                        content='Show Projects'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero