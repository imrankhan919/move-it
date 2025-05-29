import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown, Edit, Trash, Eye, Car } from 'lucide-react';
import VehicleModal from '../components/VehicleModal';
import { useSelector } from 'react-redux';

const Vehicles = () => {

    const { totalVehicles } = useSelector(state => state.admin)


    // const mockVehicles = [
    //     {
    //         id: '1',
    //         name: 'Toyota Camry',
    //         model: 'LE',
    //         type: 'Sedan',
    //         year: '2023',
    //         licensePlate: 'ABC123',
    //         ratePerDay: 80.00,
    //         available: true,
    //         description: 'Comfortable sedan with excellent fuel economy.'
    //     },
    //     {
    //         id: '2',
    //         name: 'Honda Accord',
    //         model: 'Sport',
    //         type: 'Sedan',
    //         year: '2022',
    //         licensePlate: 'DEF456',
    //         ratePerDay: 85.00,
    //         available: true,
    //         description: 'Reliable mid-size sedan with modern features.'
    //     },
    //     {
    //         id: '3',
    //         name: 'BMW X5',
    //         model: 'xDrive40i',
    //         type: 'SUV',
    //         year: '2023',
    //         licensePlate: 'GHI789',
    //         ratePerDay: 180.00,
    //         available: true,
    //         description: 'Luxury SUV with powerful performance and premium interior.'
    //     },
    //     {
    //         id: '4',
    //         name: 'Ford Mustang',
    //         model: 'GT',
    //         type: 'Sports Car',
    //         year: '2023',
    //         licensePlate: 'JKL012',
    //         ratePerDay: 120.00,
    //         available: false,
    //         description: 'Iconic American muscle car with V8 engine.'
    //     },
    //     {
    //         id: '5',
    //         name: 'Chevrolet Malibu',
    //         model: 'LT',
    //         type: 'Sedan',
    //         year: '2022',
    //         licensePlate: 'MNO345',
    //         ratePerDay: 75.00,
    //         available: true,
    //         description: 'Spacious sedan with good fuel efficiency.'
    //     },
    //     {
    //         id: '6',
    //         name: 'Jeep Wrangler',
    //         model: 'Rubicon',
    //         type: 'SUV',
    //         year: '2023',
    //         licensePlate: 'PQR678',
    //         ratePerDay: 150.00,
    //         available: true,
    //         description: 'Rugged off-road vehicle perfect for adventures.'
    //     },
    //     {
    //         id: '7',
    //         name: 'Nissan Altima',
    //         model: 'SV',
    //         type: 'Sedan',
    //         year: '2022',
    //         licensePlate: 'STU901',
    //         ratePerDay: 70.00,
    //         available: true,
    //         description: 'Comfortable sedan with advanced safety features.'
    //     },
    //     {
    //         id: '8',
    //         name: 'Hyundai Sonata',
    //         model: 'SEL',
    //         type: 'Sedan',
    //         year: '2023',
    //         licensePlate: 'VWX234',
    //         ratePerDay: 75.00,
    //         available: false,
    //         description: 'Modern sedan with sleek design and tech features.'
    //     },
    //     {
    //         id: '9',
    //         name: 'Audi A4',
    //         model: 'Premium Plus',
    //         type: 'Luxury Sedan',
    //         year: '2023',
    //         licensePlate: 'YZA567',
    //         ratePerDay: 130.00,
    //         available: true,
    //         description: 'Premium German sedan with sophisticated technology.'
    //     },
    //     {
    //         id: '10',
    //         name: 'Mercedes-Benz E-Class',
    //         model: 'E350',
    //         type: 'Luxury Sedan',
    //         year: '2023',
    //         licensePlate: 'BCD890',
    //         ratePerDay: 160.00,
    //         available: true,
    //         description: 'Elegant luxury sedan with premium comfort features.'
    //     },
    // ];



    // const [searchTerm, setSearchTerm] = useState('');
    // const [currentPage, setCurrentPage] = useState(1);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [editingVehicle, setEditingVehicle] = useState(null);
    // const itemsPerPage = 8;

    // // Filter vehicles based on search term
    // const filteredVehicles = mockVehicles.filter(vehicle =>
    //     vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     vehicle.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // // Pagination
    // const indexOfLastVehicle = currentPage * itemsPerPage;
    // const indexOfFirstVehicle = indexOfLastVehicle - itemsPerPage;
    // const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
    // const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

    // // Handle add/edit vehicle
    // const handleAddVehicle = () => {
    //     setEditingVehicle(null);
    //     setIsModalOpen(true);
    // };

    // const handleEditVehicle = (vehicle) => {
    //     setEditingVehicle(vehicle);
    //     setIsModalOpen(true);
    // };

    // // Function to get availability badge styling
    const getAvailabilityBadgeStyle = (available) => {
        return available
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800';
    };

    return (
        <div className="space-y-6 p-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-800">All Vehicles</h1>

                {/* Search and filter */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search vehicles..."

                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button

                            className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            <Plus size={18} className="mr-2" />
                            <span>Add Vehicle</span>
                        </button>

                        <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                            <Filter size={18} className="mr-2" />
                            <span>Filter</span>
                            <ChevronDown size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Vehicles table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity/Kg</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Plate</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate/Day</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {totalVehicles.length > 0 ? (
                                totalVehicles.map((vehicle) => (
                                    <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                                                    <Car size={20} className="text-gray-600" />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-800">{vehicle.name}</div>
                                                    <div className="text-xs text-gray-500">{vehicle.model}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vehicle.capacity}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vehicle.registration}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">${vehicle.rate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${getAvailabilityBadgeStyle(vehicle.available)}`}>
                                                {vehicle.available ? 'Available' : 'Booked'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => handleEditVehicle(vehicle)}
                                                    className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors">
                                                    <Trash size={16} />
                                                </button>
                                                <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-full transition-colors">
                                                    <Eye size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                        No vehicles found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {/* {totalVehicles.length > 0 && (
                    <div className="px-6 py-3 flex items-center justify-between border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{indexOfFirstVehicle + 1}</span> to{' '}
                            <span className="font-medium">
                                {Math.min(indexOfLastVehicle, totalVehicles.length)}
                            </span>{' '}
                            of <span className="font-medium">{totalVehicles.length}</span> results
                        </div>

                        <div className="flex space-x-1">
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 rounded-md ${currentPage === 1
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-1 rounded-md ${currentPage === totalPages
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )} */}
            </div>

            {/* Add/Edit Vehicle Modal */}
            {/* {isModalOpen && (
                <VehicleModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    vehicle={editingVehicle}
                />
            )} */}
        </div>
    );
};

export default Vehicles;