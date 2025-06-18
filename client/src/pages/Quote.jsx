import React, { useState, useMemo, useEffect } from 'react';
import { MapPin, Clock, Calendar, ArrowRight, WeightIcon } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../features/vehicle/vehicleSlice';
import { addBooking } from '../features/booking/bookingSlice';



const Quote = () => {

    const { vehicles, deliveryData } = useSelector(state => state.vehicle)
    const dispatch = useDispatch()



    const [pickupAddress, setPickupAddress] = useState(deliveryData?.pickupLocation);
    const [deliveryAddress, setDeliveryAddress] = useState(deliveryData?.dropLocation);


    const handleAddBooking = (id) => {

        dispatch(addBooking({ id: id, pickupLocation: pickupAddress, dropLocation: deliveryAddress, weight: deliveryData.weight }))

    }



    useEffect(() => {
        // dispatch(getVehicles())
    }, [])



    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Choose Your Vehicle
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Select the perfect vehicle for your move
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 gap-6">
                                {vehicles.map((vehicle) => (
                                    <div
                                        key={vehicle.id}
                                        className={vehicle?.isAvailable ? `
                      relative rounded-lg border-2 overflow-hidden cursor-pointer
                      transition-all duration-200 hover:shadow-lg bg-white border-gray-200 hover:border-indigo-200'
                                            
                    ` : `
                      relative rounded-lg border-2 overflow-hidden cursor-pointer
                      transition-all duration-200 hover:shadow-lg bg-gray-500 border-gray-200 hover:border-indigo-200'
                                            
                    `}

                                    >
                                        <div className="flex">
                                            <div className="w-1/3">
                                                <img
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="w-2/3 p-6">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900">
                                                            {vehicle.name}
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {vehicle.description}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-xl font-bold text-gray-900">
                                                            INR {vehicle.rate}
                                                        </span>
                                                        <span className="text-gray-500 text-sm">/km</span>
                                                    </div>
                                                </div>

                                                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                                                    <div>
                                                        <span className="font-medium">Capacity:</span>
                                                        <span className="ml-2">{vehicle.capacity}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Registration:</span>
                                                        <span className="ml-2">{vehicle.registration}</span>
                                                    </div>
                                                </div>
                                                <button onClick={() => handleAddBooking(vehicle._id)} className={vehicle?.isAvailable ? 'float-end mt-8 bg-green-500 py-1.5 hover:bg-green-700 cursor-pointer px-6 rounded-md font-semibold text-white' : 'float-end mt-8 bg-gray-500 py-1.5 hover:bg-gray-700 cursor-pointer px-6 rounded-md font-semibold text-white'}>{vehicle?.isAvailable ? "Book Now" : "Not Available"}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput
                                        label="Pickup Address"
                                        type="text"
                                        placeholder="Enter pickup location"
                                        value={pickupAddress}
                                        icon={<MapPin size={18} className="text-gray-500" />}
                                        disabled
                                    />

                                    <FormInput
                                        label="Delivery Address"
                                        type="text"
                                        placeholder="Enter delivery location"
                                        value={deliveryAddress}
                                        icon={<MapPin size={18} className="text-gray-500" />}
                                        disabled
                                    />

                                    <FormInput
                                        label="Weight (Kilograms)"
                                        type="text"
                                        value={deliveryData?.weight}
                                        icon={<WeightIcon size={18} className="text-gray-500" />}
                                        disabled
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="mt-8 lg:mt-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h3 className="text-lg font-medium text-gray-900">Price Breakdown</h3>

                            {selectedVehicle ? (
                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Base Price</span>
                                        <span className="font-medium">${totalCost.base.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Distance Cost ({distance} km)</span>
                                        <span className="font-medium">${totalCost.distance.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                                        <span className="text-base font-medium text-gray-900">Total</span>
                                        <span className="text-base font-bold text-gray-900">
                                            ${totalCost.total.toFixed(2)}
                                        </span>
                                    </div>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        loading={loading}
                                        disabled={!pickupAddress || !deliveryAddress || !date || !time}
                                        onClick={handleSubmit}
                                    >
                                        Book Now <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </div>
                            ) : (
                                <div className="mt-6 text-center text-gray-500">
                                    Select a vehicle to see the price breakdown
                                </div>
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Quote;