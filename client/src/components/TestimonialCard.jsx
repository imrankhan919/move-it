import React from 'react';

const TestimonialCard = ({ quote, author, role, imageSrc }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col h-full">
                <div className="mb-4 text-indigo-600">
                    <svg width="24" height="24" className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0492 3.23C11.6992 2.85 12.2992 2.85 12.9492 3.23L20.4992 7.45C21.1492 7.83 21.4992 8.55 21.4992 9.22V14.77C21.4992 15.45 21.1492 16.16 20.4992 16.54L12.9492 20.76C12.2992 21.14 11.6992 21.14 11.0492 20.76L3.49922 16.54C2.84922 16.16 2.49922 15.45 2.49922 14.77V9.22C2.49922 8.55 2.84922 7.83 3.49922 7.45L11.0492 3.23Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus! Sit aliquam quae voluptas dolor repudiandae cupiditate commodi architecto, qui quidem quisquam nihil delectus obcaecati laboriosam omnis ullam, necessitatibus vel.</p>
                <div className="flex items-center">
                    {/* <img 
            src={imageSrc} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          /> */}
                    <div>
                        <p className="font-medium text-gray-800">Autor Name</p>
                        <p className="text-gray-500 text-sm">Role</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;