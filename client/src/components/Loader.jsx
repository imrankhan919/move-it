import React from 'react';


const Loader = ({
    size = 'md',
    color = 'primary',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    const colorClasses = {
        primary: 'border-indigo-600',
        white: 'border-white'
    };

    return (
        <div className={`${className} flex items-center justify-center`}>
            <div
                className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          border-2
          border-t-transparent
          rounded-full
          animate-spin
        `}
                role="status"
                aria-label="Loading"
            />
        </div>
    );
};

export default Loader;