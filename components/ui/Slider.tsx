import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import ImageModal from './ImageModal'


type SliderProps = {
    images: { src: string; alt: string }[]
}

const Slider = ({ images }: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [currentIndex]);

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 300);
    };

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }, 300);
    };

    return (
        <div className='relative flex flex-wrap justify-center items-center gap-2'>
            <div className='flex ease-in duration-150 gap-2'>
                <button
                    onClick={prevSlide}
                    className='bg-white text-clr_1 bg-opacity-15 hover:bg-opacity-30 active:opacity-50 p-1 rounded-md'>
                    {'<'}
                </button>
                <div
                    className={`relative transition-opacity cursor-pointer duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    onMouseEnter={() => setFade(true)}
                    onMouseLeave={() => setFade(true)}
                >
                    <Image
                        className='rounded-md transition-opacity duration-300'
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        width={300}
                        height={200}
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>
                <button
                    onClick={nextSlide}
                    className='bg-white text-clr_1 bg-opacity-15 hover:bg-opacity-30 active:opacity-50 p-1 rounded-md'>
                    {'>'}
                </button>
            </div>
            <div className='absolute flex justify-center items-center gap-2 bottom-1 bg-black bg-opacity-30 p-1 rounded-md'>
                {images.map((image, index) => (
                    <button
                        onClick={() => setCurrentIndex(index)}
                        key={index}
                        className={`bg-clr_1 text-white p-1 rounded-md ${currentIndex === index ? 'bg-clr_1' : 'bg-clr_3'}`}
                    ></button>
                ))}
            </div>
            {isModalOpen && (
                <ImageModal
                    imageSrc={images[currentIndex].src}
                    imageAlt={images[currentIndex].alt}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    )
}

export default Slider
