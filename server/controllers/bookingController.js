const Booking = require("../models/bookingModel")
const Vehicle = require("../models/vehicleModel")

const addBooking = async (req, res) => {

    // Get Vehicle
    const vehicle = await Vehicle.findById(req.params.id)

    if (!vehicle) {
        res.status(404)
        throw new Error('Vehicle Not Found!!')
    }

    // Check if all fields are coming 
    const { pickupLocation, dropLocation, weight, distance } = req.body

    if (!pickupLocation || !dropLocation || !weight || !distance) {
        res.status(400)
        throw new Error("Please Fill All Details")
    }


    const newBooking = await Booking.create({
        user: req.user._id,
        vehicle: vehicle._id,
        pickupLocation: pickupLocation,
        dropLocation: dropLocation,
        distance: distance,
        weight: weight,
        estimatedDeliveryTime: "1 Day",
        totalBill: distance * vehicle.rate,
        status: 'pending'
    })


    if (!newBooking) {
        res.status(400)
        throw new Error('Booking Not Added')
    }

    res.status(201).json(newBooking)
}


module.exports = { addBooking }