import React from 'react';
import { Head, usePage, Link } from "@inertiajs/react";
import useOnlineUsers from '@/Hooks/useOnlineUsers';

const Dashboard = ({ totalUsers, users }) => {
     const onlineUsers = useOnlineUsers();
    
        const isOnline = onlineUsers?.some((u) => u.id === users.id);
    return (
        <>
        <Head title='Admin dashbored' />
            <div className="flex min-h-screen bg-gray-900 text-white">
                <aside className="w-64 bg-gray-800 p-6">
                    <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
                    
                    <nav className="space-y-4">
                        <a href="#" className="block px-4 py-2 bg-gray-700 rounded">Dashboard</a>
                        <Link as="button" className="block px-4 py-2 hover:bg-gray-700 rounded" method="get" href={route('chat.index') }>
                            chat with team
                        </Link>
                        <Link as="button" className="block px-4 py-2 hover:bg-gray-700 rounded" method="post" href={route('logout')}>
                            logout
                        </Link>
                    </nav>

                </aside>
                <main className="flex-1 p-10 space-y-8">
                    
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                        <p className="text-4xl font-bold">{totalUsers}</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Users</h3>
                        <table className="w-full table-auto text-left">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4">Name</th>
                                    <th className="py-2 px-4">Email</th>
                                    <th className="py-2 px-4">status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr key={idx} className="border-b border-gray-700">
                                        <td className="py-2 px-4">{user.name}</td>
                                        <td className="py-2 px-4">{user.email}</td>
                                        <td 
                                            className={`m-3 inline-flex items-center px-3 py-2 rounded-full text-sm font-medium text-white ${
                                                isOnline ? 'bg-green-500' : 'bg-gray-400'
                                            }`}
                                        >
                                            {isOnline ? 'Online' : 'Offline'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
