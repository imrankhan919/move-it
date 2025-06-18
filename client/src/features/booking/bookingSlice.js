import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        bookings: [],
        booking: {},
        bookingIsLoading: false,
        bookingIsSuccess: false,
        bookingIsError: false,
        bookingErrormessage: ""
    },
    reducers: {},
    extraReducers: builder => { }
})


export default bookingSlice.reducer


// Add Booking 

export const addBooking = createAsyncThunk("ADD/BOOKING", async (formData, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    try {
        return await bookingService.createBooking(token, formData)


    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }


})