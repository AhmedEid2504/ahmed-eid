import { useEffect, useRef, useState } from 'react';

import React from 'react';
import Scroller from './ui/Scroller';
import GridBG from './ui/GridBG';
import Image from 'next/image';

const ShowCase = () => {
    const [ activeMode, setActiveMode ] = useState('desktop');

    const handleMode = (mode: string) => {
        setActiveMode(mode);
    }

    
    return (
        <div className='relative h-full min-h-[100dvh] w-screen'>
            <GridBG />
            <div className='z-50 h-full w-screen text-white pt-0 sm:pt-10 p-2 pr-[6vw] flex flex-col gap-5'
            >
                <div className='flex flex-col  lg:hidden p-2 gap-3'>
                    <div className='flex gap-5 justify-center items-center'>
                        <button
                            onClick={() => handleMode('desktop')}
                            className={`border-2 max-sm:hidden border-gray-800 p-2 rounded-lg ${activeMode === 'desktop' ? 'bg-gray-800' : ''}`}
                        >
                            Desktop
                        </button>
                        <button
                            onClick={() => handleMode('tablet')}
                            className={`border-2 max-sm:hidden border-gray-800 p-2 rounded-lg ${activeMode === 'tablet' ? 'bg-gray-800' : ''}`}
                        >
                            tablet
                        </button>
                        <button
                            onClick={() => handleMode('mobile')}
                            className={`border-2 border-gray-800 p-2 rounded-lg ${activeMode === 'mobile' ? 'bg-gray-800' : ''}`}
                        >
                            Mobile
                        </button>
                    </div>
                    {activeMode === 'desktop' && (
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='h-[95dvh] w-[90vw] max-sm:h-[85dvh] bg-black border-gray-800 border-8'>
                                <iframe className='h-full w-full' src="https://high-five-swart.vercel.app/trends/trends.html"></iframe>
                            </div>
                        </div>
                    )}
                    {activeMode === 'tablet' && (
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='h-[60dvh] w-[70vw] bg-black border-gray-800 border-8'>
                                <iframe className='h-full w-full' src="https://high-five-swart.vercel.app/trends/trends.html"></iframe>
                            </div>
                        </div>
                    )}
                    {activeMode === 'mobile' && (
                        <div className='flex max-sm:flex-col justify-center items-center gap-5 px-1'>
                            <div className='h-[70dvh] w-[30vw] max-sm:w-[85vw] max-sm:h-[80dvh] bg-black border-gray-800 border-8'>
                                <iframe className='h-full w-full' src="https://high-five-swart.vercel.app/trends/trends.html"></iframe>
                            </div>
                        </div>
                    )
                    }
                </div>
                <div className=' max-lg:hidden flex justify-center items-center gap-3'>
                    <div className='gap-5 justify-center items-center'>
                        <div className='h-[95dvh] w-[65vw]  max-sm:h-[85dvh] bg-black border-gray-800 border-8'>
                            <iframe className='h-full w-full' src="https://high-five-swart.vercel.app/trends/trends.html"></iframe>
                        </div>
                    </div>
                    <div>
                        <div className='h-[70dvh] w-[360px] bg-black border-gray-800 border-8'>
                            <iframe className='h-full w-full' src="https://high-five-swart.vercel.app/trends/trends.html"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;
