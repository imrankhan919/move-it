const Booking = require("../models/bookingModel")
const Vehicle = require("../models/vehicleModel")

const addBooking = async (req, res) => {

    // Get Vehicle
    const vehicle = await Vehicle.findById(req.params.uid)

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


// Get Booking
const getBooking = async (req, res) => {

    const booking = await Booking.findById(req.params.bid).populate('user').populate('vehicle')
    if (!booking) {
        res.status(404)
        throw new Error('Booking Not Found!!')
    }

    res.status(200).json(booking)
}


// Cancel Booking
const cancelBooking = async (req, res) => {

    // Check if admin accepted booking
    const booking = await Booking.findById(req.params.bid)

    if (!booking) {
        res.status(404)
        throw new Error('Booking Not Found!')
    }

    if (booking.status === "accepted") {
        res.status(400)
        throw new Error("Booking Can't Be Canceled")
    } else {
        const cancelledBooking = await Booking.findByIdAndUpdate(req.params.bid, { status: 'cancelled' }, { new: true })
        res.status(200).json(cancelledBooking)
    }




}





module.exports = { addBooking, getBooking, cancelBooking }