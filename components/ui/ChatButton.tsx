import Image from 'next/image'
import React from 'react'
import { FaCommentDots, FaRegCommentDots } from 'react-icons/fa'
import { FaCommentSms, FaMessage } from 'react-icons/fa6'

type ChatButtonProps = {
    isChatOpen: boolean;
    handleChat: () => void;
}

const ChatButton = ({
    isChatOpen, handleChat
}: ChatButtonProps) => {
    return (
        <div className='z-50 fixed bottom-5 right-8'>
            <FaRegCommentDots className=' absolute text-2xl -right-6 -top-2 text-clr_1' />
            <button
                onClick={handleChat}
                className='rounded-full border-2 border-clr_1 text-white p-1'
            >
                <div className=' h-[40px] flex overflow-hidden rounded-full justify-center items-center'>
                    <Image className='rounded-full' src='/images/me.jpg' alt='Chat' width={40} height={30} />
                </div>
            </button>
        </div>
    )
}

export default ChatButton