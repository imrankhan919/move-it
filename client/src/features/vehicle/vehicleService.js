import axios from "axios"

const getVehicle = async (vid) => {
    const response = await axios.get('/api/vehicle/' + vid)
    return response.data
}

const getVehicles = async () => {
    const response = await axios.get('/api/vehicle/')
    return response.data
}


export const vehicleService = {
    getVehicle, getVehicles
}