import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"

export const store = configureStore({
    reducer: { auth, admin },
})