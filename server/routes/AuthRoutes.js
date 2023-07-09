const express = require('express');
const { RegisterController, LoginController, TestController } = require('../controllers')
const { RequireSignIn } = require("../middlewares/MiddleWares");

//router object
const router = express.Router();

//routing
router.post("/register", RegisterController);

router.post("/login", LoginController);

//test routes
router.get("/test", TestController);

module.exports = router;