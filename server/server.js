const express = require('express')
const connectDB = require('./config/dbConfig')
require('dotenv').config()
const colors = require('colors')
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000


// DB CONNECTION
connectDB()

// Body Parser
app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res) => {
    res.status(200).json({
        msg: "WELCOME TO MOVEIT API 1.0"
    })
})

// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"))


// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))


// Vehicle Routes
app.use("/api/vehicle", require("./routes/vehicleRoutes"))


// Error Handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running at PORT :${PORT}`.bgBlue))