import React, { ReactNode } from 'react';
import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';


const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-indigo-50 to-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">{subtitle}</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10 border border-gray-100 transform transition-transform duration-200 ease-in-out hover:scale-[1.01]">
                    {children}
                </div>
            </div>

            <footer className="mt-8 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Move-It. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AuthLayout;