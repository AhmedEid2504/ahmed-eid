"use client";

import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import  MagicButton from './ui/MagicButton'
import {  FaArrowDown } from 'react-icons/fa';

const Hero = () => {

    const handleScroll = () => {
        console.log('scrolling')
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div>
            <div className='-z-10'>
                <Spotlight 
                    className='max-sm:top-[21dvh] sm:top-[12dvh] md:top-[5dvh] -right-10 h-screen w-[100vw]'
                    fill='#00fff9'
                />

                <Spotlight 
                    className='max-sm:top-[19dvh] sm:top-[10dvh] md:top-[3dvh] -right-10 h-screen w-[100vw]'
                    fill='#00a2c5'
                />
                <Spotlight 
                    className='max-sm:top-[17dvh] sm:top-[8dvh] md:top-[1dvh] -right-10 h-screen w-[100vw]'
                    fill='purple'
                />
            </div>
            <div className="h-screen w-screen relative dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.01] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className='z-50 absolute w-screen h-screen top-0 left-0 flex flex-col justify-center items-center'>
                <div className='max-w-[89vw]'>
                    <TextGenerateEffect 
                        words='Hi, I&apos;m Ahmed Eid and I&apos;m a' 
                        textColor='text-white'
                        delay={0.2}
                        textFamily='font-sans'
                        className='text-2xl md:text-3xl lg:text-4xl text-start' 
                    />
                    <TextGenerateEffect 
                        words='<ReactFrontEndDeveloper'
                        textColor='text-clr_1'
                        delay={0.5}
                        duration={5}
                        textFamily='font-serif'
                        className='text-lg md:text-2xl lg:text-3xl text-start ' 
                    />
                    <TextGenerateEffect 
                        words="talented = ' true '"
                        textColor='text-clr_1'
                        delay={0.5}
                        duration={8}
                        textFamily='font-serif'
                        className='text-lg md:text-2xl lg:text-3xl text-start pl-10 ' 
                    />
                    <TextGenerateEffect 
                        words='/>'
                        textColor='text-clr_1'
                        delay={0.5}
                        duration={5}
                        textFamily='font-serif'
                        className='text-lg md:text-2xl lg:text-3xl text-start ' 
                    />
                </div>
                <div className='mt-8'>
                    <MagicButton 
                        content='Show Projects'
                        icon={<FaArrowDown />}
                        position='right'
                        handleClick={handleScroll}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero