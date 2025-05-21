import React from 'react';


const StatsCard = ({ title, value, change, icon, positive }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-transform hover:translate-y-[-2px]">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
                </div>
                <div className="p-2 rounded-md bg-gray-50">
                    {icon}
                </div>
            </div>
            <div className={`mt-4 text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
                {change} <span className="text-gray-500">from last month</span>
            </div>
        </div>
    );
};

export default StatsCard;