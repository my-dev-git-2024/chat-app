import React from 'react';
import useOnlineUsers from '@/Hooks/useOnlineUsers';
export default function ProfilePictureOnChat({ user }) {

     const onlineUsers = useOnlineUsers();

    const isOnline = onlineUsers?.some((u) => u.id === user.id);

    // const isOnline = () => {
    //     if (!user?.last_seen_at) return false;

    //     const lastSeen = new Date(user.last_seen_at);
    //     const now = new Date();
    //     const diffInMinutes = (now - lastSeen) / (1000 * 60); 

    //     return diffInMinutes <= 3;
    // };

    return (    
        <div className="inline-block relative">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-700">
                <span className="font-medium leading-none text-white">
                    {user.name.charAt(0).toUpperCase()}
                </span>
            </span>
            <span
                className={`absolute bottom-0 right-0.5 block h-2 w-2 rounded-full ring-2 ring-white ${
                    isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`}
            />
        </div>
    );
}
