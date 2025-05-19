import axios from "axios"

const register = async (formData) => {
    const response = await axios.post("/api/auth/register")
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}

const login = async (formData) => {
    const response = await axios.post("/api/auth/login")
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}


const authService = { register, login }


export default authService