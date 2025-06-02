import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        totalBookings: [],
        totalVehicles: [],
        totalComments: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
                state.isError = false
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllBookings.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getAllBookings.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.totalBookings = action.payload
                state.isError = false
            })
            .addCase(getAllBookings.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllVehicles.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.totalVehicles = action.payload
                state.isError = false
            })
            .addCase(getAllVehicles.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createVehicle.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(createVehicle.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.totalVehicles = [action.payload, ...state.totalVehicles]
                state.isError = false
            })
            .addCase(createVehicle.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export default adminSlice.reducer


// GET ALL USERS
export const getAllUsers = createAsyncThunk("ADMIN/FETCH/USERS", async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    try {
        return await adminService.fetchAllUsers(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// GET ALL USERS
export const getAllBookings = createAsyncThunk("ADMIN/FETCH/BOOKINGS", async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    try {
        return await adminService.fetchAllBookings(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// GET ALL VEHICLES
export const getAllVehicles = createAsyncThunk("ADMIN/FETCH/VEHICLES", async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    try {
        return await adminService.fetchAllVehicles(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})


// Add Vehicle
export const createVehicle = createAsyncThunk("ADMIN/CREATE/VEHICLE", async (formData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    try {
        return await adminService.addVehicle(token, formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }



})