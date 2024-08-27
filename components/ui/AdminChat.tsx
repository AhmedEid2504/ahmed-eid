import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaX } from 'react-icons/fa6';
import { FaArrowLeft, FaRegPaperPlane } from 'react-icons/fa';
import { db, auth } from '@/firebase';
import { collection, query, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import useIsAdmin from "@/hooks/useIsAdmin";
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

type AdminChatProps = {
    isChatOpen: boolean;
    handleChat: () => void;
};

const AdminChat = ({
    isChatOpen, handleChat
}: AdminChatProps) => {
    const [user] = useAuthState(auth);
    const isAdmin = useIsAdmin(user?.uid);
    const [chats, setChats] = useState<{ id: string; userId: string; [key: string]: any }[]>([]);
    const [selectedChat, setSelectedChat] = useState<{ id: string; userId: string } | null>(null);
    const [messages, setMessages] = useState<{ id: string; [key: string]: any }[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

    // Fetch all users' chats without messages
    useEffect(() => {
        if (user && isAdmin) {
            const usersRef = collection(db, "users");

            const unsubscribe = onSnapshot(usersRef, (snapshot) => {
                const chatsArray: { id: string; userId: string; [key: string]: any }[] = [];
                snapshot.forEach((doc) => {
                    const userId = doc.id;
                    chatsArray.push({
                        id: doc.id,
                        userId: userId,
                    });
                });
                setChats(chatsArray);
            });

            return () => unsubscribe();
        }
    }, [user, isAdmin]);

    useEffect(() => {
        if (selectedChat) {
            const messagesRef = collection(db, "users", selectedChat.userId, "messages");
            const q = query(messagesRef);

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const messagesArray: { id: string; [key: string]: any }[] = [];
                snapshot.forEach((doc) => {
                    messagesArray.push({ id: doc.id, ...doc.data() });
                });
                messagesArray.sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));
                setMessages(messagesArray);
            });

            return () => unsubscribe();
        }
    }, [selectedChat]);

    useEffect(() => {
        // Auto-scroll to the latest message
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (newMessage.trim() === "" || !selectedChat) return;

        try {
            const messagesRef = collection(db, "users", selectedChat.userId, "messages");

            await addDoc(messagesRef, {
                message: newMessage,
                timestamp: serverTimestamp(),
                from: 'admin',
                userProfilePic: '/images/me.jpg',
                username: 'Ahmed Eid',
            });

            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    if (!user || !isAdmin) {
        return <p>Access denied. You must be an admin to view this page.</p>;
    }

    return (
        <div className="fixed flex flex-col z-40 bottom-0 sm:right-2 border-2 border-clr_1 rounded-b-none rounded-lg">
            <div className="flex flex-col w-[40vw] max-sm:w-[95vw] h-[60dvh] rounded-md rounded-b-none bg-gray-800 bg-opacity-90">
                {!selectedChat &&
                    <div className="p-4">
                    <div className="self-end p-4 flex items-center justify-between">
                        <button onClick={() => handleChat()}>
                            <FaX className="text-xl text-clr_1" />
                        </button>
                    </div>
                        <h1 className="text-clr_1 text-lg mb-2">All Chats</h1>
                        {chats.map((chat) => (
                            <div key={chat.id} onClick={() => setSelectedChat(chat)} className="p-2 border-b border-clr_1 cursor-pointer">
                                <h2 className="text-clr_1 text-sm">Chat with {chat.userId}</h2>
                            </div>
                        ))}
                    </div>
                }

                {selectedChat && (
                    <>
                    <div className='flex flex-col h-[100%]'>
                    <div className="h-[10%] p-4 flex items-center justify-between">
                        <button onClick={() => setSelectedChat(null)}>
                            <FaArrowLeft className="text-xl text-clr_1" />
                        </button>
                    </div>
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
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminChat;
