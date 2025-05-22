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


const adminService = {
    fetchAllUsers,
    fetchAllBookings
    , fetchAllVehicles
}

export default adminService