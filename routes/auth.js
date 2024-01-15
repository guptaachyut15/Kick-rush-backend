const express = require("express");
const { signUpHandler } = require("../controllers/auth");
const router = express.Router();

router.post("/", signUpHandler);

module.exports = router;
