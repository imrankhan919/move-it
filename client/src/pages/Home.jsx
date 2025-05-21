import React, { useState } from 'react';
import Hero from "../assets/hero.svg"
import { ChevronRight, Truck, MapPin, Package } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';

const Home = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [weight, setWeight] = useState('');

    return (
        <>
            <div className="min-h-screen bg-gray-50">


                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-50 to-white py-12 px-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                    Move Your Stuff <span className="text-indigo-600">24/7</span><br />
                                    Everywhere Anytime
                                </h1>
                                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                                    The most reliable logistics service for all your moving and delivery needs. Quick booking, verified drivers, and transparent pricing.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#get-quote"
                                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        Get Quote
                                        <ChevronRight className="ml-1 h-5 w-5" />
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        Learn How It Works
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src={Hero}
                                    alt="Logistics Illustration"
                                    className="w-full max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white" id="features">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Move-It</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our service is designed to make moving and delivery as simple as possible, with features that prioritize reliability and convenience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                            <FeatureCard />

                        </div>
                    </div>
                </section>

                {/* Get Quote Section */}
                <section className="py-16 bg-gray-50" id="get-quote">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get an Instant Quote</h2>
                                <p className="text-gray-600">
                                    Fill in the details below to get vehicle suggestions and pricing
                                </p>
                            </div>

                            <form className="bg-white rounded-lg shadow-md p-6">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter pickup address"
                                                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter destination address"
                                                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Package Weight (kg)</label>
                                        <div className="relative">
                                            <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input
                                                type="number"
                                                required
                                                min="1"
                                                placeholder="Enter package weight"
                                                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
                                    >
                                        Get Vehicle Suggestions
                                        <Truck className="ml-2 h-5 w-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 bg-white" id="how-it-works">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Get your items moved in just a few simple steps
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold text-indigo-600">1</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enter Details</h3>
                                <p className="text-gray-600">
                                    Provide pickup, drop-off locations and package weight
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold text-indigo-600">2</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose Vehicle</h3>
                                <p className="text-gray-600">
                                    Select from suggested vehicles based on your needs
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold text-indigo-600">3</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Track & Receive</h3>
                                <p className="text-gray-600">
                                    Track your delivery in real-time until it arrives
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 bg-gray-50" id="testimonials">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Don't just take our word for it - hear from some of our satisfied customers
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                            <TestimonialCard />

                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-indigo-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Move Your Stuff?</h2>
                        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Experience the convenience of our logistics service today. Fast, reliable, and affordable.
                        </p>
                        <a
                            href="#get-quote"
                            className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
                        >
                            Get a Quote Now
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;