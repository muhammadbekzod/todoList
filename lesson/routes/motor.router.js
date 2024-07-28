const express = require("express");
const {
  AddNewMotor,
  GetAllMotorData,
  EditMotor,
  DeleteMotor,
} = require("../controllers/motor.controller");
const router = express.Router();

router.post("/api/data", AddNewMotor);
router.get("/api/data", GetAllMotorData);
router.put("/api/data/:name", EditMotor);
router.delete("/api/data/:name", DeleteMotor);

module.exports = router;
