import React, { useState } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/auth/authSlice';

const Header = () => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        dispatch(logoutUser())
    }




    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to={"/"} className="flex items-center space-x-2">
                    <Truck className="h-6 w-6 text-indigo-600" />
                    <span className="text-xl font-bold text-gray-800">Move-It</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">

                    {/* <a

                        href="#"
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                        Link
                    </a> */}

                </nav>

                <div className="hidden md:block">

                    {
                        user ? (<>

                            {
                                user.isAdmin ? (<a
                                    href="/auth/admin"
                                    className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                                >
                                    Welcome Admin
                                </a>) : (<></>)
                            }

                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-white mx-2 bg-red-600 rounded-lg hover:bg-red-500 transition-colors duration-200"
                            >
                                Logout
                            </button>

                        </>) : (
                            <a
                                href="/login"
                                className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            >
                                Login
                            </a>
                        )
                    }
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white px-4 py-3 shadow-md">
                    <nav className="flex flex-col space-y-3">

                        {/* <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-indigo-600 py-2 border-b border-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a> */}

                        {
                            !user ? (<a
                                href="/login"
                                className="text-indigo-600 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </a>) : (<button

                                className="bg-red-600 font-medium py-2 rounded-md text-white"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>)
                        }

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;