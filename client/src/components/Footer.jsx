import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-12 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Truck className="h-6 w-6 text-indigo-600" />
                            <span className="text-xl font-bold text-gray-800">Move-It</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Your reliable logistics partner for quick and safe delivery services 24/7.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Services</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800 mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Local Moving</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Intercity Delivery</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Furniture Transport</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Express Delivery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-800 mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                                <span className="text-gray-600 text-sm">support@moveit.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                                <span className="text-gray-600 text-sm">+1 (800) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Move-It Logistics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;