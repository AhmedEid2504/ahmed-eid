import React from 'react';
import Image from 'next/image';

type ModalProps = {
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
};

const Modal = ({ imageSrc, imageAlt, onClose }: ModalProps) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
            <div className='relative'>
                <button
                    onClick={onClose}
                    className='absolute -bottom-10 max-sm:right-[46%] right-[50%] text-white text-4xl max-sm:text-2xl'
                >
                    &times;
                </button>
                <Image src={imageSrc} alt={imageAlt} width={800} height={700} className='max-w-full max-h-full' />
            </div>
        </div>
    );
};

export default Modal;
