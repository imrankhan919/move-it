import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const Users = () => {

    const mockUsers = [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'Active' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', status: 'Active' },
        { id: '3', name: 'Michael Johnson', email: 'michael@example.com', role: 'Admin', status: 'Active' },
        { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', role: 'Customer', status: 'Inactive' },
        { id: '5', name: 'Robert Brown', email: 'robert@example.com', role: 'Customer', status: 'Active' },
        { id: '6', name: 'Emily Davis', email: 'emily@example.com', role: 'Manager', status: 'Active' },
        { id: '7', name: 'David Miller', email: 'david@example.com', role: 'Customer', status: 'Active' },
        { id: '8', name: 'Jennifer Wilson', email: 'jennifer@example.com', role: 'Customer', status: 'Inactive' },
        { id: '9', name: 'James Taylor', email: 'james@example.com', role: 'Customer', status: 'Active' },
        { id: '10', name: 'Lisa Anderson', email: 'lisa@example.com', role: 'Customer', status: 'Active' },
        { id: '11', name: 'Thomas Martin', email: 'thomas@example.com', role: 'Customer', status: 'Active' },
        { id: '12', name: 'Patricia Thompson', email: 'patricia@example.com', role: 'Customer', status: 'Inactive' },
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Filter users based on search term
    const filteredUsers = mockUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    return (
        <div className="space-y-6 p-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-semibold text-gray-800">All Users</h1>

                {/* Search and filter */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                        <Filter size={18} className="mr-2" />
                        <span>Filter</span>
                        <ChevronDown size={16} className="ml-2" />
                    </button>
                </div>
            </div>

            {/* Users table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {currentUsers.length > 0 ? (
                                currentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-800">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${user.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                                            <button className="text-red-600 hover:text-red-800">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {filteredUsers.length > 0 && (
                    <div className="px-6 py-3 flex items-center justify-between border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{indexOfFirstUser + 1}</span> to{' '}
                            <span className="font-medium">
                                {Math.min(indexOfLastUser, filteredUsers.length)}
                            </span>{' '}
                            of <span className="font-medium">{filteredUsers.length}</span> results
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
        </div>
    );
};

export default Users;