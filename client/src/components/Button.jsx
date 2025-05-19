import React, { ReactNode } from 'react';



const Button = ({
    children,
    type = 'button',
    variant = 'primary',
    fullWidth = false,
    size = 'md',
    disabled = false,
    icon,
    onClick,
    className = '',
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200';

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const variantClasses = {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 shadow-sm',
        secondary: 'bg-blue-100 hover:bg-blue-200 text-blue-800 focus:ring-blue-500',
        outline: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-indigo-500',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]';

    return (
        <button
            type={type}
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;