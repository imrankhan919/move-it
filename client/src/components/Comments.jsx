import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ThumbsUp, ThumbsDown, CheckCheck, X as XIcon } from 'lucide-react';

const Comments = () => {
    const mockComments = [
        {
            id: 'c12345abcde',
            userName: 'John Doe',
            vehicleName: 'Toyota Camry',
            rating: 5,
            text: 'Great car! Very clean and drove perfectly. Would rent again.',
            date: '2025-01-05',
            status: 'Approved'
        },
        {
            id: 'c23456bcdef',
            userName: 'Jane Smith',
            vehicleName: 'Honda Accord',
            rating: 4,
            text: 'Good experience overall. The car was in good condition.',
            date: '2025-01-08',
            status: 'Approved'
        },
        {
            id: 'c34567cdefg',
            userName: 'Michael Johnson',
            vehicleName: 'BMW X5',
            rating: 5,
            text: 'Luxury at its finest! The SUV was immaculate and drove like a dream.',
            date: '2025-01-12',
            status: 'Pending'
        },
        {
            id: 'c45678defgh',
            userName: 'Sarah Williams',
            vehicleName: 'Ford Mustang',
            rating: 2,
            text: 'Disappointed with the condition. The car had several scratches and the interior smelled like smoke.',
            date: '2025-01-15',
            status: 'Rejected'
        },
        {
            id: 'c56789efghi',
            userName: 'Robert Brown',
            vehicleName: 'Chevrolet Malibu',
            rating: 4,
            text: 'Comfortable ride and good gas mileage. Would recommend.',
            date: '2025-01-18',
            status: 'Approved'
        },
        {
            id: 'c67890fghij',
            userName: 'Emily Davis',
            vehicleName: 'Jeep Wrangler',
            rating: 5,
            text: 'Took it on an off-road adventure and it performed wonderfully! Great experience.',
            date: '2025-01-20',
            status: 'Pending'
        },
        {
            id: 'c78901ghijk',
            userName: 'David Miller',
            vehicleName: 'Nissan Altima',
            rating: 3,
            text: 'Average experience. Car was clean but had some mechanical issues.',
            date: '2025-01-22',
            status: 'Approved'
        },
        {
            id: 'c89012hijkl',
            userName: 'Jennifer Wilson',
            vehicleName: 'Hyundai Sonata',
            rating: 1,
            text: 'Terrible experience. The car broke down halfway through my trip. Would not recommend.',
            date: '2025-01-25',
            status: 'Rejected'
        },
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('all'); // 'all', 'approved', 'pending', 'rejected'
    const itemsPerPage = 6;

    // Filter comments based on search term and filter
    const filteredComments = mockComments.filter(comment => {
        const matchesSearch =
            comment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.vehicleName.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter =
            filter === 'all' ||
            (filter === 'approved' && comment.status === 'Approved') ||
            (filter === 'pending' && comment.status === 'Pending') ||
            (filter === 'rejected' && comment.status === 'Rejected');

        return matchesSearch && matchesFilter;
    });

    // Pagination
    const indexOfLastComment = currentPage * itemsPerPage;
    const indexOfFirstComment = indexOfLastComment - itemsPerPage;
    const currentComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);
    const totalPages = Math.ceil(filteredComments.length / itemsPerPage);

    // Function to handle filter change
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    // Function to get status badge styling
    const getStatusBadgeStyle = (status) => {
        switch (status) {
            case 'Approved':
                return 'bg-green-100 text-green-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'Rejected':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6 p-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-800">Comments</h1>

                {/* Search and filter */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search comments..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => handleFilterChange('all')}
                            className={`px-3 py-1 rounded-md ${filter === 'all'
                                ? 'bg-gray-200 text-gray-800'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleFilterChange('approved')}
                            className={`px-3 py-1 rounded-md ${filter === 'approved'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Approved
                        </button>
                        <button
                            onClick={() => handleFilterChange('pending')}
                            className={`px-3 py-1 rounded-md ${filter === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => handleFilterChange('rejected')}
                            className={`px-3 py-1 rounded-md ${filter === 'rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            Rejected
                        </button>
                    </div>
                </div>
            </div>

            {/* Comments grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentComments.length > 0 ? (
                    currentComments.map((comment) => (
                        <div key={comment.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-4">
                            <div className="flex justify-between mb-3">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                                        {comment.userName.charAt(0)}
                                    </div>
                                    <div className="ml-2">
                                        <div className="text-sm font-medium text-gray-800">{comment.userName}</div>
                                        <div className="text-xs text-gray-500">
                                            {comment.date} • {comment.vehicleName}
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full h-fit ${getStatusBadgeStyle(comment.status)}`}>
                                    {comment.status}
                                </span>
                            </div>

                            <div className="text-sm text-gray-600 mb-3">
                                {comment.text}
                            </div>

                            <div className="text-xs text-gray-500 mb-3">
                                Rating: {Array(5).fill(0).map((_, i) => (
                                    <span key={i} className={i < comment.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                <div className="text-xs text-gray-500">
                                    ID: {comment.id.substring(0, 8)}
                                </div>

                                <div className="flex space-x-2">
                                    <button className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                                        <ThumbsUp size={18} />
                                    </button>
                                    <button className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                                        <ThumbsDown size={18} />
                                    </button>
                                    <button className="p-1.5 rounded-full text-green-600 hover:bg-green-50 transition-colors">
                                        <CheckCheck size={18} />
                                    </button>
                                    <button className="p-1.5 rounded-full text-red-600 hover:bg-red-50 transition-colors">
                                        <XIcon size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center text-gray-500">
                        No comments found
                    </div>
                )}
            </div>

            {/* Pagination */}
            {filteredComments.length > 0 && (
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                        Showing <span className="font-medium">{indexOfFirstComment + 1}</span> to{' '}
                        <span className="font-medium">
                            {Math.min(indexOfLastComment, filteredComments.length)}
                        </span>{' '}
                        of <span className="font-medium">{filteredComments.length}</span> results
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
            )}
        </div>
    );
};

export default Comments;