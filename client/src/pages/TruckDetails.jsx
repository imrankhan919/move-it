import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from '../features/vehicle/vehicleSlice'
import { useParams } from 'react-router-dom'

const TruckDetails = () => {

    const { vehicle, isLoading, isError, isSuccess, message } = useSelector(state => state.vehicle)


    const dispatch = useDispatch()
    const { vid } = useParams()

    useEffect(() => {
        dispatch(getVehicle(vid))
    }, [])


    return (
        <main className='p-16'>

            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Truck Details</h1>
                        <p className="mt-2 text-gray-600">Comprehensive information about your fleet vehicle</p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">

                        <div className="relative h-80 bg-gray-100">
                            <img
                                src={vehicle.image}
                                alt="Tata Motors Truck"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                                    <i className="fas fa-circle text-green-500 mr-1 animate-pulse"></i>Active
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <div className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                                    <span className="text-sm font-medium">{vehicle.registration}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Truck ID:</span>
                                            <span className="font-medium text-gray-900">{vehicle._id}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">License Plate:</span>
                                            <span className="font-medium text-gray-900">{vehicle.registration}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Make & Model:</span>
                                            <span className="font-medium text-gray-900">{vehicle.name}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Rate:</span>
                                            <span className="font-medium text-gray-900">{vehicle.rate}/Day</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-gray-600">Color:</span>
                                            <span className="font-medium text-gray-900">Blue & White</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Capacity:</span>
                                            <span className="font-medium text-gray-900">{vehicle.capacity} Kg</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Engine:</span>
                                            <span className="font-medium text-gray-900">BS6 Diesel</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Fuel Type:</span>
                                            <span className="font-medium text-gray-900">Diesel</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Transmission:</span>
                                            <span className="font-medium text-gray-900">Manual 6-Speed</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-gray-600">Mileage:</span>
                                            <span className="font-medium text-gray-900">28,450 km</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                                <div className="text-2xl font-bold text-blue-600">8.2</div>
                                <div className="text-sm text-blue-600 font-medium">km/L Average</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors duration-200 cursor-pointer">
                                <div className="text-2xl font-bold text-green-600">96.8%</div>
                                <div className="text-sm text-green-600 font-medium">Uptime</div>
                            </div>
                            <div className="bg-yellow-50 rounded-lg p-4 text-center hover:bg-yellow-100 transition-colors duration-200 cursor-pointer">
                                <div className="text-2xl font-bold text-yellow-600">189</div>
                                <div className="text-sm text-yellow-600 font-medium">Trips This Month</div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors duration-200 cursor-pointer">
                                <div className="text-2xl font-bold text-purple-600">4.9</div>
                                <div className="text-sm text-purple-600 font-medium">Driver Rating</div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Team Comments</h3>
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                                <i className="fas fa-comments mr-1"></i>8 Comments
                            </span>
                        </div>


                        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm font-medium">A</span>
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        placeholder="Add a comment about this truck..."
                                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                                        rows="3"
                                    ></textarea>
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <button className="hover:text-primary-600 transition-colors">
                                                <i className="fas fa-paperclip mr-1"></i>Attach File
                                            </button>
                                            <button className="hover:text-primary-600 transition-colors">
                                                <i className="fas fa-at mr-1"></i>Mention
                                            </button>
                                        </div>
                                        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                                            <i className="fas fa-paper-plane mr-2"></i>Post Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">

                            <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-medium">JS</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="font-medium text-gray-900">John Smith</span>
                                        <span className="text-sm text-gray-500">Driver</span>
                                        <span className="text-sm text-gray-400">•</span>
                                        <span className="text-sm text-gray-500">2 hours ago</span>
                                    </div>
                                    <p className="text-gray-700 mb-2">Just completed the maintenance check. Everything looks good! The engine is running smoothly and fuel efficiency has improved after the recent service.</p>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                            <i className="fas fa-thumbs-up mr-1"></i>Like (3)
                                        </button>
                                        <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                            <i className="fas fa-reply mr-1"></i>Reply
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-medium">MJ</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="font-medium text-gray-900">Mike Johnson</span>
                                        <span className="text-sm text-gray-500">Fleet Manager</span>
                                        <span className="text-sm text-gray-400">•</span>
                                        <span className="text-sm text-gray-500">5 hours ago</span>
                                    </div>
                                    <p className="text-gray-700 mb-2">Scheduled the next service for February 15th. Please ensure the truck is available at the depot by 8 AM. Also, we need to update the insurance documents before the end of this month.</p>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                            <i className="fas fa-thumbs-up mr-1"></i>Like (1)
                                        </button>
                                        <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                            <i className="fas fa-reply mr-1"></i>Reply
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-medium">SK</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="font-medium text-gray-900">Sarah Kim</span>
                                        <span className="text-sm text-gray-500">Maintenance Tech</span>
                                        <span className="text-sm text-gray-400">•</span>
                                        <span className="text-sm text-gray-500">1 day ago</span>
                                    </div>
                                    <p className="text-gray-700 mb-2">Noticed some wear on the front tires during the last inspection. Recommend replacing them within the next 2 weeks to maintain safety standards.</p>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-2">
                                        <div className="flex items-center">
                                            <i className="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>
                                            <span className="text-sm font-medium text-yellow-800">Maintenance Alert</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                            <i className="fas fa-thumbs-up mr-1"></i>Like (5)
                                        </button>
                                        <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                            <i className="fas fa-reply mr-1"></i>Reply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                                    <i className="fas fa-chevron-down mr-2"></i>Load More Comments (5)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-600">Status:</span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    On Route
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-600">Current Driver:</span>
                                <span className="font-medium text-gray-900">John Smith</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-600">Location:</span>
                                <span className="font-medium text-gray-900">Mumbai, India</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-600">Next Service:</span>
                                <span className="font-medium text-gray-900">Feb 15, 2024</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance & Registration</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Insurance:</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                        Valid
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Expires: Dec 31, 2024</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Registration:</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                        Valid
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Expires: Aug 15, 2024</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Inspection:</span>
                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                                        Due Soon
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Due: Jan 28, 2024</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Trip Completed</p>
                                    <p className="text-xs text-gray-500">Mumbai to Pune - 2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Fuel Refill</p>
                                    <p className="text-xs text-gray-500">BPCL Station - 4 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Maintenance Check</p>
                                    <p className="text-xs text-gray-500">Oil change completed - 2 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                    <i className="fas fa-route mr-2"></i>View Route History
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                    <i className="fas fa-chart-line mr-2"></i>Performance Report
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                    <i className="fas fa-tools mr-2"></i>Maintenance Log
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                    <i className="fas fa-file-alt mr-2"></i>Documents
                </button>
            </div>

        </main>
    )
}

export default TruckDetails
