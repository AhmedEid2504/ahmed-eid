import { useState, useEffect } from 'react';
import { db, auth } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

const useIsAdmin = (userId: string | undefined) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (userId) {
            const checkAdminStatus = async () => {
                try {
                    const adminDocRef = doc(db, 'admins', userId);
                    const adminDoc = await getDoc(adminDocRef);

                    setIsAdmin(adminDoc.exists());
                } catch (error) {
                    console.error("Error checking admin status:", error);
                }
            };

            checkAdminStatus();
        }
    }, [userId]);

    return isAdmin;
};

export default useIsAdmin;
