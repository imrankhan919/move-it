import axios from "axios"

const getVehicle = async (vid) => {
    const response = await axios.get('/api/vehicle/' + vid)
    return response.data
}

const getVehicles = async (deliveryData) => {
    console.log(deliveryData)
    const response = await axios.get('/api/vehicle/')

    const data = response.data.filter(item => item.capacity >= deliveryData.weight)
    return { vehicles: data, deliveryData: deliveryData }

}


export const vehicleService = {
    getVehicle, getVehicles
}