import React from 'react';
import {
    LayoutDashboard,
    Users,
    CalendarClock,
    Car,
    MessageSquare,
    X
} from 'lucide-react';



const Sidebar = ({
    activePage,
    setActivePage,
    isOpen,
    setIsOpen
}) => {
    const menuItems = [
        { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { id: 'users', name: 'All Users', icon: <Users size={20} /> },
        { id: 'bookings', name: 'All Bookings', icon: <CalendarClock size={20} /> },
        { id: 'vehicles', name: 'All Vehicles', icon: <Car size={20} /> },
        { id: 'comments', name: 'Comments', icon: <MessageSquare size={20} /> },
    ];

    const handleNavigation = (pageId) => {
        setActivePage(pageId);
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    min-h-screen
          fixed lg:sticky top-0 left-0 z-50 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                {/* Close button for mobile */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 lg:hidden"
                >
                    <X size={20} />
                </button>

                {/* Admin header */}
                <div className="p-6 border-b">
                    <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
                </div>

                {/* Navigation */}
                <nav className="p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleNavigation(item.id)}
                                    className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors
                    ${activePage === item.id
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;