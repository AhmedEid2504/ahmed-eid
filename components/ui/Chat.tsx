import React from 'react'

import { FaX } from 'react-icons/fa6'
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaLinkedinIn, FaRegPaperPlane, FaTelegram, FaTelegramPlane, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from 'next/image'

type ChatProps = {
    isChatOpen: boolean;
    handleChat: () => void;
}

const Chat = ({
    isChatOpen, handleChat
}: ChatProps) => {
    const router = useRouter();

    const [user] = useAuthState(auth);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            // You can access user info here: result.user
            console.log("User signed in:", result.user);
            router.push("/"); // Redirect to the home page or another page after sign-in
        } catch (error) {
            console.error("Error signing in with Google:", error);
            // Handle Errors here.
        }
    };
    
    const signOut = async () => {
        auth.currentUser && await auth.signOut();
    }

    return (
        <div className="fixed flex flex-col z-40 bottom-0 sm:right-2 border-2 border-clr_1 rounded-b-none rounded-lg">
            <div className="flex flex-col w-[40vw] max-sm:w-[95vw] h-[60dvh] rounded-md rounded-b-none bg-gray-800 bg-opacity-90 ">
                <button 
                    onClick={handleChat}
                    className="p-2 self-end"
                >
                    <FaX className="text-xl text-clr_1 " />
                </button>
                { !user ?
                    <div className="flex flex-col justify-evenly items-center h-full gap-5">
                        <div className='flex flex-col'>
                            <h1 className="text-2xl text-clr_1 text-center">Login To Chat With Me Directly</h1>
                            <button
                                onClick={handleGoogleSignIn}
                                className="bg-clr_1 text-black p-2 rounded-md mt-4">
                                Login
                            </button>
                        </div>
                        <div className="flex flex-col  justify-center items-center space-x-4 gap-2">
                            <h1 className='text-2xl text-clr_1 text-center gap-5'>Or</h1>
                            <div className='flex justify-center items-center gap-2'>
                                <button>
                                    <FaEnvelope className="text-2xl text-clr_1" />
                                </button>
                                <button>
                                    <FaWhatsappSquare className="text-2xl text-clr_1" />
                                </button>
                                <button>
                                    <FaTelegramPlane className="text-2xl text-clr_1" />
                                </button>
                                <button>
                                    <FaFacebookSquare className="text-2xl text-clr_1" />
                                </button>
                                <button>
                                    <FaLinkedin className="text-2xl text-clr_1" />
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col h-full'>
                        <div className='h-[90%] text-clr_1 px-4 py-2 flex flex-col items-center'>
                            <div className='rounded-full h-[60px] w-[60px] overflow-hidden border-2 border-clr_1 text-white p-1'>
                                <div className=' flex rounded-full'>
                                    <Image className='rounded-full' src='/images/me.jpg' alt='Chat' width={50} height={30} />
                                </div>
                            </div>
                            <h1 className='text-2xl'>Ahmed Eid</h1>
                            <div className='flex flex-col gap-2 h-[75%] p-2 bg-black-100'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores minima ullam, accusamus pariatur molestiae est laborum et id sit esse vel iste magni, praesentium ipsam quia! Repellendus necessitatibus eos eius!</p>
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
                }
            </div>
            
        </div>
    )
}

export default Chat