import React from 'react';

export default function ProfilePictureOnChat({ user }) {
    const isOnline = () => {
        if (!user?.last_seen_at) return false;

        const lastSeen = new Date(user.last_seen_at);
        const now = new Date();
        const diffInMinutes = (now - lastSeen) / (1000 * 60); // milliseconds to minutes

        return diffInMinutes <= 3; // You can adjust this window
    };

    return (    
        <div className="inline-block relative">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-700">
                <span className="font-medium leading-none text-white">
                    {user.name.charAt(0).toUpperCase()}
                </span>
            </span>
            <span
                className={`absolute bottom-0 right-0.5 block h-2 w-2 rounded-full ring-2 ring-white ${
                    isOnline() ? 'bg-green-500' : 'bg-gray-400'
                }`}
            />
        </div>
    );
}
