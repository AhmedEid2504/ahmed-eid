import React from 'react'
import Image from 'next/image'
import GridBG from './GridBG'
const Loader = () => {
    return (
        <div className=' absolute z-50 h-full w-full bg-black text-clr_1 flex justify-center items-center'>
            <GridBG />
            <div className='animate-pulse rounded-full border-2 border-clr_1 p-3'>
                <Image className='rounded-full' src='/images/me.jpg' width={200} height={200} alt="loader" />
            </div>
        </div>
    )
}

export default Loader