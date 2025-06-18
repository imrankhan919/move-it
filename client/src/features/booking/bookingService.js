import axios from "axios"

const createBooking = async (token, formData) => {

    const options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`/api/booking/${formData.id}`, formData, options)
    console.log(response.data)
    return response.data
}



const bookingService = { createBooking }
export default bookingService