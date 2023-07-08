const express = require('express');
const registerController = require('../controllers/RegisterController')

// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.get("/register", registerController);

// //LOGIN || POST
// router.post("/login", loginController);

// //test routes
// router.get("/test", requireSignIn, isAdmin, testController);

module.exports = router;