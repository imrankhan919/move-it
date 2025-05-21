import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const VehicleModal = ({ isOpen, onClose, vehicle }) => {
    const [formData, setFormData] = useState({
        name: '',
        model: '',
        type: '',
        year: '',
        licensePlate: '',
        ratePerDay: '',
        available: true,
        description: '',
    });

    // If editing an existing vehicle, populate the form
    useEffect(() => {
        if (vehicle) {
            setFormData({
                name: vehicle.name || '',
                model: vehicle.model || '',
                type: vehicle.type || '',
                year: vehicle.year || '',
                licensePlate: vehicle.licensePlate || '',
                ratePerDay: vehicle.ratePerDay.toString() || '',
                available: vehicle.available,
                description: vehicle.description || '',
            });
        }
    }, [vehicle]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle saving the vehicle data
        console.log('Saving vehicle:', formData);
        onClose();
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type } = e.target;


    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-auto">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {vehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Vehicle Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                                Model
                            </label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                                Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                                <option value="">Select Type</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Compact">Compact</option>
                                <option value="Truck">Truck</option>
                                <option value="Van">Van</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                                Year
                            </label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                min="1900"
                                max="2099"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700 mb-1">
                                License Plate
                            </label>
                            <input
                                type="text"
                                id="licensePlate"
                                name="licensePlate"
                                value={formData.licensePlate}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="ratePerDay" className="block text-sm font-medium text-gray-700 mb-1">
                                Rate Per Day ($)
                            </label>
                            <input
                                type="number"
                                id="ratePerDay"
                                name="ratePerDay"
                                value={formData.ratePerDay}
                                onChange={handleChange}
                                required
                                min="0"
                                step="0.01"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="col-span-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="available"
                                    name="available"
                                    checked={formData.available}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="available" className="ml-2 block text-sm text-gray-700">
                                    Vehicle is available for booking
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            {vehicle ? 'Update Vehicle' : 'Add Vehicle'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VehicleModal;