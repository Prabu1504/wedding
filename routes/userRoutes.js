const express = require("express");
const router = express.Router();
const {CreateGuest,GetGuest}= require("../controllers/userController");

router.post("/post", CreateGuest);
router.get("/get/:id", GetGuest);
module.exports = router;
