import React, { ReactNode } from 'react';

const FormInput = ({
    label,
    type,
    placeholder,
    error,
    icon,
    handleChange,
    value
}) => {
    return (
        <div className="space-y-1">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative rounded-md shadow-sm">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    name={label}
                    id={label}
                    value={value}
                    onChange={handleChange}
                    className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-10 py-2 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : ''
                        }`}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default FormInput;