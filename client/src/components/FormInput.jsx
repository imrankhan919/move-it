import React, { ReactNode } from 'react';

const FormInput = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    error,
    icon,
    endAdornment
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
                    className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-10 py-2 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : ''
                        }`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? `${label}-error` : undefined}
                />
                {endAdornment && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        {endAdornment}
                    </div>
                )}
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600" id={`${label}-error`}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormInput;