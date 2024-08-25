import React from 'react'
import Image from 'next/image'
type SliderProps = {
    images: { src: string; alt: string }[]
}

const Slider = ({
    images
}:SliderProps) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };


  return (
    <div className='relative flex justify-center items-center gap-2'>
        <button onClick={prevSlide} className='bg-clr_3 text-white p-1 rounded-md'>{'<'}</button>
        {/* images */}
            <Image src={images[currentIndex].src} alt={images[currentIndex].alt} width={300} height={300} />
        <button onClick={nextSlide} className='bg-clr_3 text-white p-1 rounded-md'>{'>'}</button>
        {/* clickable dots */}
        <div className=' absolute flex justify-center items-center gap-2 bottom-1'>
            {images.map((image, index) => (
                <button onClick={
                    () => setCurrentIndex(index)
                } key={index} className={`bg-clr_1 text-white p-1 rounded-md ${currentIndex === index ? 'bg-clr_1' : 'bg-clr_3'}`}></button>
            ))}
        </div>
    </div>
  )
}

export default Slider