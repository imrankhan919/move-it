import axios from "axios"

const fetchAllUsers = async (token) => {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get('/api/admin/get-users', options)
    return response.data
}

const fetchAllBookings = async (token) => {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get('/api/admin/get-bookings', options)
    return response.data
}

const fetchAllVehicles = async (token) => {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get('/api/admin/get-vehicles', options)
    return response.data
}


const addVehicle = async (token, formData) => {

    console.log(formData)

    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post("/api/admin/add-vehicle", formData, options)
    return response.data
}

const updateVehicle = async (token, formData) => {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put("/api/admin/update-vehicle/" + formData._id, formData, options)
    return response.data
}



const deleteVehicle = async (token, id) => {
    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete("/api/admin/remove-vehicle/" + id, options)
    return response.data
}





const adminService = {
    fetchAllUsers,
    fetchAllBookings,
    fetchAllVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle
}

export default adminService