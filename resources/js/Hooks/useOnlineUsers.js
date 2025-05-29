import { useEffect, useState } from 'react';

export default function useOnlineUsers() {
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        Echo.join('online-users')
            .here((users) => {
                setOnlineUsers(users);
            })
            .joining((user) => {
                setOnlineUsers((prev) => [...prev, user]);
            })
            .leaving((user) => {
                setOnlineUsers((prev) => prev.filter((u) => u.id !== user.id));
            });

        // Optional: leave the channel on unmount
        return () => Echo.leave('online-users');
    }, []);

    return onlineUsers;
}
