const Vehicle = require("../models/vehicleModel")

const addVehicle = async (req, res) => {

    const { name, image, description, registration, capacity, rate, isAvailable } = req.body

    if (!name || !image || !description || !registration || !capacity || !rate || !isAvailable) {
        res.status(400)
        throw new Error("Please Fill All Details!!")
    }


    // Create Vehicle
    const newVehicle = await Vehicle.create({
        name,
        image,
        description,
        registration,
        capacity,
        rate,
        isAvailable
    })

    if (!newVehicle) {
        res.status(400)
        throw new Error('Vehicle Not Created')
    }

    res.status(201).json(newVehicle)
}


const updateVehicle = async (req, res) => {

    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!updatedVehicle) {
        res.status(400)
        throw new Error('Vehicle Not Created')
    }

    res.status(200).json(updatedVehicle)

}

const removeVehicle = async (req, res) => {

    const updatedVehicle = await Vehicle.findByIdAndDelete(req.params.id)

    res.status(200).json({
        id: req.params.id,
        message: "Vehicle Removed!"
    })

}





module.exports = { addVehicle, updateVehicle, removeVehicle }