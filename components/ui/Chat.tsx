import React, { useEffect, useState, useRef } from 'react';
import { FaX } from 'react-icons/fa6';
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaLinkedinIn, FaRegPaperPlane, FaTelegram, FaTelegramPlane, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import { db, auth } from '@/firebase';
import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';

type ChatProps = {
    isChatOpen: boolean;
    handleChat: () => void;
};

const Chat = ({ isChatOpen, handleChat }: ChatProps) => {
    const [messages, setMessages] = useState<{ id: string; [key: string]: any }[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const router = useRouter();
    const [user] = useAuthState(auth);
    const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            console.log("User signed in:", result.user);
            await startNewChat();
            router.push("/");
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const signOut = async () => {
        auth.currentUser && await auth.signOut();
    };

    useEffect(() => {
        if (!user) return;

        const chatsRef = collection(db, "users", user.uid, "messages");

        const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
            const messagesArray: { id: string; [key: string]: any }[] = [];
            snapshot.forEach((doc) => {
                messagesArray.push({ id: doc.id, ...doc.data() });
            });

            // Manually sort messages by timestamp
            messagesArray.sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));

            setMessages(messagesArray);
        });

        return () => unsubscribe();
    }, [user]);

    useEffect(() => {
        // Auto-scroll to the latest message
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const startNewChat = async () => {
        try {
            const user = auth.currentUser;
            if (!user) throw new Error("User not authenticated");

            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, { createdAt: serverTimestamp() });

                const chatsRef = collection(db, "users", user.uid, "messages");
                await addDoc(chatsRef, {
                    message: "Welcome to the chat!",
                    timestamp: serverTimestamp(),
                    from: "system",
                    userProfilePic: '/images/me.jpg',
                    username: 'Ahmed Eid',
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

            const chatsRef = collection(db, "users", user.uid, "messages");

            await addDoc(chatsRef, {
                message: message,
                timestamp: serverTimestamp(),
                from: user.uid,
                userProfilePic: user.photoURL || '/images/default-profile.jpg',
                username: user.displayName || 'Anonymous',
            });

            console.log("Message sent:", message);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;

        await sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <div className="fixed flex flex-col z-40 bottom-0 sm:right-2 border-2 border-clr_1 rounded-b-none rounded-lg">
            <div className="flex flex-col w-[40vw] max-sm:w-[95vw] h-[60dvh] rounded-md rounded-b-none bg-gray-800 bg-opacity-90">
                <button onClick={handleChat} className="p-2 self-end h-[10%]">
                    <FaX className="text-xl text-clr_1" />
                </button>
                {!user ?
                    <div className="flex flex-col justify-evenly items-center h-full gap-5">
                        <div className='flex flex-col'>
                            <h1 className="text-2xl text-clr_1 text-center">Login To Chat With Me Directly</h1>
                            <button onClick={handleGoogleSignIn} className="bg-clr_1 text-black p-2 rounded-md mt-4">Login</button>
                        </div>
                        <div className="flex flex-col justify-center items-center space-x-4 gap-2">
                            <h1 className='text-2xl text-clr_1 text-center gap-5'>Or</h1>
                            <div className='flex justify-center items-center gap-2'>
                                <button><FaEnvelope className="text-2xl text-clr_1" /></button>
                                <button><FaWhatsappSquare className="text-2xl text-clr_1" /></button>
                                <button><FaTelegramPlane className="text-2xl text-clr_1" /></button>
                                <button><FaFacebookSquare className="text-2xl text-clr_1" /></button>
                                <button><FaLinkedin className="text-2xl text-clr_1" /></button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col h-[90%]'>
                        <div className=' text-clr_1 h-[85%] px-4 py-2 flex flex-col overflow-y-auto'>
                            <div className='flex flex-col gap-2'>
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex items-start gap-2 ${message.from === auth.currentUser?.uid ? "flex-row-reverse" : ""}`}
                                    >
                                        <div className='flex flex-col items-center'>
                                            <div className='rounded-full h-[40px] w-[40px] overflow-hidden'>
                                                <Image className='rounded-full' src={message.userProfilePic || '/images/default-profile.jpg'} alt='User' width={40} height={40} />
                                            </div>
                                            <h2 className='text-sm text-clr_1'>{message.username}</h2>
                                        </div>
                                        <div
                                            className={`p-2 rounded-lg ${
                                                message.from === auth.currentUser?.uid
                                                    ? "bg-clr_1 text-black"
                                                    : "bg-black bg-opacity-80 text-clr_1"
                                            }`}
                                        >
                                            {message.message}
                                            <div className='text-xs text-white mt-1'>
                                                {message.timestamp ? formatDistanceToNow(new Date(message.timestamp.seconds * 1000), { addSuffix: true }) : "No timestamp"}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Scroll to the bottom */}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                            }}
                            className='flex w-full items-center self-end h-[15%] bg-black'
                        >
                            <input
                                className="w-[90%] h-full bg-black bg-opacity-80 text-clr_1 p-2 rounded-l-lg"
                                placeholder='Type your message here'
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <div className='absolute right-0 '>
                                <button
                                    type="submit"
                                    className=' text-clr_1 p-2 rounded-r-lg flex items-center justify-center'
                                >
                                    <FaRegPaperPlane className="text-xl" />
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};

export default Chat;
