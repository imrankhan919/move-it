import React from 'react';
import { Calendar, Car, User, MessageSquare } from 'lucide-react';

const RecentActivity = () => {
    const activities = [
        {
            id: 1,
            type: 'booking',
            title: 'New booking created',
            description: 'John Doe booked Toyota Camry for 3 days',
            time: '10 minutes ago',
            icon: <Calendar size={16} className="text-blue-500" />
        },
        {
            id: 2,
            type: 'vehicle',
            title: 'Vehicle status updated',
            description: 'Honda Accord marked as unavailable for maintenance',
            time: '1 hour ago',
            icon: <Car size={16} className="text-amber-500" />
        },
        {
            id: 3,
            type: 'user',
            title: 'New user registered',
            description: 'Jane Smith created a new account',
            time: '3 hours ago',
            icon: <User size={16} className="text-green-500" />
        },
        {
            id: 4,
            type: 'comment',
            title: 'New review submitted',
            description: 'Michael Johnson left a 5-star review for BMW X5',
            time: '5 hours ago',
            icon: <MessageSquare size={16} className="text-purple-500" />
        },
        {
            id: 5,
            type: 'booking',
            title: 'Booking canceled',
            description: 'Sarah Williams canceled Ford Mustang booking #12458',
            time: '1 day ago',
            icon: <Calendar size={16} className="text-red-500" />
        },
    ];

    return (
        <div className="divide-y divide-gray-100">
            {activities.map((activity) => (
                <div key={activity.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                        <div className="p-2 rounded-md bg-gray-50 mr-4">
                            {activity.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentActivity;