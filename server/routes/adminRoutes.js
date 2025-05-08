const express = require("express");
const { addVehicle, updateVehicle, removeVehicle } = require("../controllers/adminController");
const adminProtect = require("../middleware/adminMiddleware");

const router = express.Router()


router.post("/add-vehicle", adminProtect, addVehicle)
router.put("/update-vehicle/:id", adminProtect, updateVehicle)
router.delete("/remove-vehicle/:id", adminProtect, removeVehicle)


module.exports = router