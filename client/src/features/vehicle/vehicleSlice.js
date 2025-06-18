import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { vehicleService } from "./vehicleService";

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState: {
        vehicles: [],
        vehicle: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getVehicle.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getVehicle.fulfilled, (state, action) => {
                state.isLoading = false
                state.vehicle = action.payload
                state.isSuccess = true
                state.isError = false
            })
            .addCase(getVehicle.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getVehicles.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getVehicles.fulfilled, (state, action) => {
                state.isLoading = false
                state.vehicles = action.payload.vehicles
                state.deliveryData = action.payload.deliveryData
                state.isSuccess = true
                state.isError = false
            })
            .addCase(getVehicles.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export default vehicleSlice.reducer


// GET Vehicle
export const getVehicle = createAsyncThunk("GET/VEHICLE", async (vid, thunkAPI) => {

    try {
        return await vehicleService.getVehicle(vid)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// GET Vehicles
export const getVehicles = createAsyncThunk("GET/VEHICLES", async (deliveryData, thunkAPI) => {

    try {
        return await vehicleService.getVehicles(deliveryData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})