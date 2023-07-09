const express = require('express');
const { RegisterController, LoginController } = require('../controllers')
// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", RegisterController);

//LOGIN || POST
router.post("/login", LoginController);

// //test routes
// router.get("/test", requireSignIn, isAdmin, testController);

module.exports = router;