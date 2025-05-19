import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-3 bg-indigo-50 rounded-full mb-4">
                {/* <Icon className="h-7 w-7 text-indigo-600" /> */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Title</h3>
            <p className="text-gray-600 text-sm">Descritpion</p>
        </div>
    );
};

export default FeatureCard;