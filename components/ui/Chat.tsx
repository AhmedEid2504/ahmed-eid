import React, { useEffect, useState } from 'react'

import { FaX } from 'react-icons/fa6'
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaLinkedinIn, FaRegPaperPlane, FaTelegram, FaTelegramPlane, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from 'next/image'
import { db, auth } from '@/firebase';
import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";

type ChatProps = {
    isChatOpen: boolean;
    handleChat: () => void;
}

const Chat = ({
    isChatOpen, handleChat
}: ChatProps) => {
    const [messages, setMessages] = useState<{ id: string; [key: string]: any }[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const router = useRouter();
    const [user] = useAuthState(auth);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            console.log("User signed in:", result.user);
            
            await startNewChat();  // Start new chat if needed

            router.push("/");  // Redirect to the home page or another page after sign-in
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };
    
    const signOut = async () => {
        auth.currentUser && await auth.signOut();
    }

    useEffect(() => {
        if (!user) return;

        // Reference to the user's chat subcollection
        const chatsRef = collection(db, "users", user.uid, "messages");

        // Set up a real-time listener
        const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
            const messagesArray: { id: string; [key: string]: any }[] = [];
            snapshot.forEach((doc) => {
                messagesArray.push({ id: doc.id, ...doc.data() });
            });
            setMessages(messagesArray);
        });

        // Cleanup the listener on unmount
        return () => unsubscribe();
    }, [user]);

    const startNewChat = async () => {
        try {
            const user = auth.currentUser;
            
            if (!user) throw new Error("User not authenticated");
        
            // Check if the user already has a chat
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
        
            if (!userDoc.exists()) {
            // Create user document and a new chat subcollection
            await setDoc(userDocRef, { createdAt: serverTimestamp() });
        
            const chatsRef = collection(db, "users", user.uid, "messages");
            await addDoc(chatsRef, {
                message: "Welcome to the chat!",
                timestamp: serverTimestamp(),
                from: "system",
            });
        
            console.log("New chat started for user:", user.uid);
            } else {
            console.log("Chat already exists for user:", user.uid);
            }
        } catch (error) {
            console.error("Error starting new chat:", error);
        }
    };

    const sendMessage = async (message: string) => {
        try {
        const user = auth.currentUser;
    
        if (!user) throw new Error("User not authenticated");
    
        // Reference to the user's chat subcollection
        const chatsRef = collection(db, "users", user.uid, "messages");
    
        // Add a new message to the subcollection
        await addDoc(chatsRef, {
            message: message,
            timestamp: serverTimestamp(),
            from: user.uid,
        });
    
        console.log("Message sent:", message);
        } catch (error) {
        console.error("Error sending message:", error);
        }
    };

    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;

        await sendMessage(newMessage);
        setNewMessage(""); // Clear the input after sending the message
    };

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
                            <div className='flex flex-col gap-2 h-[75%] w-full p-2 bg-black-100'>
                                {messages.map((message) => (
                                    <div key={message.id} className='flex flex-col gap-1'>
                                        <div className='flex  gap-2 justify-between'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <div className='rounded-full h-[40px] w-[40px] overflow-hidden border-2 border-clr_1 text-white p-1'>
                                                    <div className=' flex rounded-full'>
                                                        <Image className='rounded-full' src='/images/me.jpg' alt='Chat' width={30} height={20} />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                    <h1 className='text-clr_1 text-sm'>Ahmed Eid</h1>
                                                    <p className='text-clr_1 text-sm'>{message.message}</p>
                                                </div>
                                            </div>
                                            <p className='text-clr_1 text-xs w-[20%]'>{new Date(message.timestamp?.toDate()).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=' flex w-full border-t-2 border-clr_1  justify-center items-center'>
                        <input
                            className="w-full h-[50px] bg-black bg-opacity-80 text-clr_1 p-2"
                            placeholder='Type your message here'
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                            <div className='absolute right-4'>
                                <button onClick={handleSendMessage}>
                                    <FaRegPaperPlane className="text-xl text-clr_1" />
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