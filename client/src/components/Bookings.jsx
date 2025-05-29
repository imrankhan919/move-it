import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Calendar, Check, X, MoreVertical } from 'lucide-react';
import { useSelector } from 'react-redux';


const Bookings = () => {

    const { totalBookings } = useSelector(state => state.admin)

    // const mockBookings = [
    //     {
    //         id: '1',
    //         bookingId: 'BK12345',
    //         customerName: 'John Doe',
    //         vehicleName: 'Toyota Camry',
    //         startDate: '2025-01-10',
    //         endDate: '2025-01-13',
    //         status: 'Confirmed',
    //         amount: '240.00'
    //     },
    //     {
    //         id: '2',
    //         bookingId: 'BK12346',
    //         customerName: 'Jane Smith',
    //         vehicleName: 'Honda Accord',
    //         startDate: '2025-01-15',
    //         endDate: '2025-01-20',
    //         status: 'Pending',
    //         amount: '450.00'
    //     },
    //     {
    //         id: '3',
    //         bookingId: 'BK12347',
    //         customerName: 'Michael Johnson',
    //         vehicleName: 'BMW X5',
    //         startDate: '2025-01-12',
    //         endDate: '2025-01-14',
    //         status: 'Confirmed',
    //         amount: '560.00'
    //     },
    //     {
    //         id: '4',
    //         bookingId: 'BK12348',
    //         customerName: 'Sarah Williams',
    //         vehicleName: 'Ford Mustang',
    //         startDate: '2025-01-20',
    //         endDate: '2025-01-22',
    //         status: 'Cancelled',
    //         amount: '320.00'
    //     },
    //     {
    //         id: '5',
    //         bookingId: 'BK12349',
    //         customerName: 'Robert Brown',
    //         vehicleName: 'Chevrolet Malibu',
    //         startDate: '2025-01-08',
    //         endDate: '2025-01-12',
    //         status: 'Completed',
    //         amount: '380.00'
    //     },
    //     {
    //         id: '6',
    //         bookingId: 'BK12350',
    //         customerName: 'Emily Davis',
    //         vehicleName: 'Jeep Wrangler',
    //         startDate: '2025-01-25',
    //         endDate: '2025-01-30',
    //         status: 'Confirmed',
    //         amount: '750.00'
    //     },
    //     {
    //         id: '7',
    //         bookingId: 'BK12351',
    //         customerName: 'David Miller',
    //         vehicleName: 'Nissan Altima',
    //         startDate: '2025-02-01',
    //         endDate: '2025-02-03',
    //         status: 'Pending',
    //         amount: '220.00'
    //     },
    //     {
    //         id: '8',
    //         bookingId: 'BK12352',
    //         customerName: 'Jennifer Wilson',
    //         vehicleName: 'Hyundai Sonata',
    //         startDate: '2025-02-05',
    //         endDate: '2025-02-08',
    //         status: 'Confirmed',
    //         amount: '270.00'
    //     },
    //     {
    //         id: '9',
    //         bookingId: 'BK12353',
    //         customerName: 'James Taylor',
    //         vehicleName: 'Audi A4',
    //         startDate: '2025-01-18',
    //         endDate: '2025-01-21',
    //         status: 'Completed',
    //         amount: '480.00'
    //     },
    //     {
    //         id: '10',
    //         bookingId: 'BK12354',
    //         customerName: 'Lisa Anderson',
    //         vehicleName: 'Mercedes-Benz E-Class',
    //         startDate: '2025-02-10',
    //         endDate: '2025-02-15',
    //         status: 'Pending',
    //         amount: '850.00'
    //     },
    // ];



    // const [searchTerm, setSearchTerm] = useState('');
    // const [currentPage, setCurrentPage] = useState(1);
    // const [activeDropdown, setActiveDropdown] = useState(null);
    // const itemsPerPage = 8;

    // Filter bookings based on search term
    // const filteredBookings = totalBookings.filter(booking =>
    //     booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     booking.vehicleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // Pagination
    // const indexOfLastBooking = currentPage * itemsPerPage;
    // const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
    // const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);
    // const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

    // Function to get status badge styling
    const getStatusBadgeStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'confirmed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Handle booking status change
    const handleStatusChange = (bookingId, newStatus) => {
        console.log(`Changing booking ${bookingId} status to ${newStatus}`);
        // Here you would typically make an API call to update the booking status
        setActiveDropdown(null);
    };

    return (
        <div className="space-y-6 p-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-800">All Bookings</h1>

                {/* Search and filter */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                            <Calendar size={18} className="mr-2" />
                            <span>Date Range</span>
                        </button>

                        <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                            <Filter size={18} className="mr-2" />
                            <span>Filter</span>
                            <ChevronDown size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bookings table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {totalBookings.length > 0 ? (
                                totalBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                            {booking._id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {booking.user.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {booking.vehicle.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            <div>{booking.pickupLocation}</div>
                                            <div className="text-xs text-gray-500">to {booking.dropLocation}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeStyle(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                            ${booking.totalBill}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="relative">
                                                {booking.status.toLowerCase() === 'pending' ? (
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => handleStatusChange(booking.id, 'confirmed')}
                                                            className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-colors"
                                                            title="Accept Booking"
                                                        >
                                                            <Check size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusChange(booking.id, 'cancelled')}
                                                            className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors"
                                                            title="Reject Booking"
                                                        >
                                                            <X size={18} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setActiveDropdown(activeDropdown === booking.id ? null : booking.id)}
                                                            className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                                                        >
                                                            <MoreVertical size={18} />
                                                        </button>

                                                        {/* {activeDropdown === booking.id && (
                                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                                                                <div className="py-1">
                                                                    <button
                                                                        onClick={() => handleStatusChange(booking.id, 'completed')}
                                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                                    >
                                                                        Mark as Completed
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleStatusChange(booking.id, 'cancelled')}
                                                                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                                    >
                                                                        Cancel Booking
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )} */}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                                        No bookings found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {/* {filteredBookings.length > 0 && (
                    <div className="px-6 py-3 flex items-center justify-between border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{indexOfFirstBooking + 1}</span> to{' '}
                            <span className="font-medium">
                                {Math.min(indexOfLastBooking, filteredBookings.length)}
                            </span>{' '}
                            of <span className="font-medium">{filteredBookings.length}</span> results
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
        </div>
    );
};

export default Bookings;