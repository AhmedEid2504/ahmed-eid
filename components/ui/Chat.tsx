import React from 'react'

import ChatButton from './ChatButton'
import { FaX } from 'react-icons/fa6'
import GridBG from './GridBG'
import { FaEnvelope, FaPaperPlane, FaRegPaperPlane, FaTelegram } from 'react-icons/fa'

type ChatProps = {
    isChatOpen: boolean;
    handleChat: () => void;
}

const Chat = ({
    isChatOpen, handleChat
}: ChatProps) => {


    return (
        <div className="fixed flex flex-col z-40 bottom-0 sm:right-2 border-2 border-clr_1 rounded-b-none rounded-lg">
            <div className="flex flex-col w-[30vw] max-sm:w-[95vw] h-[60dvh] rounded-md rounded-b-none bg-gray-800 bg-opacity-90 p-4  ">
                <button 
                    onClick={handleChat}
                    className="p-1 self-end"
                >
                    <FaX className="text-xl text-clr_1 " />
                </button>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-clr_1">Chat with me</h1>
                    <p className="text-clr_1">Im here to help you with anything you need</p>
                </div>
            </div>
            <div className=' flex w-full border-t-2 border-clr_1  justify-center items-center'>
                <input 
                    className=" w-full h-[50px] bg-black bg-opacity-80 text-clr_1 p-2   "
                    placeholder='Type your message here'
                    type="text" 
                    
                />
                <div className=' absolute right-4'>
                    <button>
                        <FaRegPaperPlane className="text-1xl text-clr_1" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat