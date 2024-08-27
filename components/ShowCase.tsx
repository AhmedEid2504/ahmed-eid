import { useEffect, useRef } from 'react';

import React from 'react';
import Scroller from './ui/Scroller';
import GridBG from './ui/GridBG';
import Image from 'next/image';


const ShowCase = () => {
    
    return (
        <div className='relative h-full min-h-[100dvh] w-screen'>
            <GridBG />


            <div className='z-50 h-full w-screen text-white pt-3 sm:pt-10 p-5 pr-[20px]'
            >
                
                <Image src='/images/responsive.jpg' alt='Hero Image' width={1000} height={500} className='max-w-full max-h-full' />
            </div>
        </div>
    );
};

export default ShowCase;
