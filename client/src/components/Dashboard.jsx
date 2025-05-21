import React from 'react';
import { Users, CalendarClock, Car, MessageSquare } from 'lucide-react';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const stats = [
        {
            title: 'Total Users',
            value: '1,245',
            change: '+12%',
            icon: <Users size={20} className="text-blue-500" />,
            positive: true
        },
        {
            title: 'Active Bookings',
            value: '422',
            change: '+5%',
            icon: <CalendarClock size={20} className="text-green-500" />,
            positive: true
        },
        {
            title: 'Available Vehicles',
            value: '87',
            change: '-3%',
            icon: <Car size={20} className="text-amber-500" />,
            positive: false
        },
        {
            title: 'New Comments',
            value: '34',
            change: '+24%',
            icon: <MessageSquare size={20} className="text-purple-500" />,
            positive: true
        },
    ];

    return (
        <>
            <div className="p-4 w-full space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                    <div className="text-sm text-gray-500">Last updated: Today, 10:30 AM</div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <StatsCard key={index} {...stat} />
                    ))}
                </div>

                {/* Recent activity */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-medium text-gray-800">Recent Activity</h2>
                    </div>
                    <RecentActivity />
                </div>
            </div>
        </>

    );
};

export default Dashboard;