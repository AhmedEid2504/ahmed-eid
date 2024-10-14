import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import ImageModal from './ImageModal';

type SliderProps = {
    images: { src: string; alt: string }[];
    description?: string;
};

const Slider = ({ images, description }: SliderProps) => {
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

    // Check for undefined src and reset currentIndex if necessary
    useEffect(() => {
        if (currentIndex >= images.length || !images[currentIndex]?.src) {
            setCurrentIndex(0);
        } else {
            setFade(true);
        }
    }, [currentIndex, images]);

    return (
        <div className="relative flex flex-wrap justify-center items-center gap-2">
            <div className="flex max-md:flex-col ease-in duration-150 gap-2">
                <button
                    onClick={prevSlide}
                    className="bg-white text-clr_1 bg-opacity-15 hover:bg-opacity-30 active:opacity-50 p-1 rounded-md"
                >
                    {'<'}
                </button>
                <div
                    className={`relative max-w-[300px] max-h-[200px] sm:max-w-[600px] sm:max-h-[350px] overflow-auto transition-opacity cursor-pointer duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    onMouseEnter={() => setFade(true)}
                    onMouseLeave={() => setFade(true)}
                >
                    {images[currentIndex]?.src ? (
                        <Image
                            className="rounded-md transition-opacity duration-300"
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            width={600}
                            height={350}
                            onClick={() => setIsModalOpen(true)}
                        />
                    ) : (
                        <div className="w-[300px] h-[200px] bg-gray-300 rounded-md"></div>
                    )}
                </div>
                <button
                    onClick={nextSlide}
                    className="bg-white  text-clr_1 bg-opacity-15 hover:bg-opacity-30 active:opacity-50 p-1 rounded-md"
                >
                    {'>'}
                </button>
            </div>
            <div className="md:absolute flex justify-center items-center gap-6 bottom-6  bg-black bg-opacity-30 p-1 rounded-md">
                {images.map((image, index) => (
                    <button
                        onClick={() => setCurrentIndex(index)}
                        key={index}
                        className={`bg-clr_1 text-white p-1 rounded-md ${currentIndex === index ? 'bg-clr_1' : 'bg-clr_3'}`}
                        aria-label={`image ${index + 1}`}
                    ></button>
                ))}
            </div>
            {isModalOpen && images[currentIndex]?.src && (
                <ImageModal
                    imageSrc={images[currentIndex].src}
                    imageAlt={images[currentIndex].alt}
                    onClose={() => setIsModalOpen(false)}
                    description={description}
                />
            )}
        </div>
    );
};

export default Slider;
