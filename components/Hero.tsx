"use client";

import React, { use, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import  MagicButton from './ui/MagicButton'
import {  FaArrowDown } from 'react-icons/fa';

const Hero = () => {

    return (
        <div>
            <div>
                <Spotlight 
                    className='max-sm:top-[25vh] max-md:top-[20vh] md:top-[10vh] -right-10 h-screen w-[100vw]'
                    fill='#00fff9'
                />

                <Spotlight 
                    className='max-sm:top-[24vh] max-md:top-[20vh] md:top-[10vh] -right-20 h-screen w-[100vw]'
                    fill='#00a2c5'
                />
                <Spotlight 
                    className='max-sm:top-[23vh] max-md:top-[20vh] md:top-[10vh] -right-10 h-screen w-[100vw]'
                    fill='purple'
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
                        icon={<FaArrowDown />}
                        position='right'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero