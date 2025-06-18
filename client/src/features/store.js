import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import vehicle from "./vehicle/vehicleSlice"
import booking from "./booking/bookingSlice"

export const store = configureStore({
    reducer: { auth, admin, vehicle, booking },
})