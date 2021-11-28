const express = require("express");
const router = express.Router();

// @route       GET api/auth
// @desc        Get logged in User 
// @access      Private
router.get("/", (req, res) => {
    res.send("Get logged in user");
});

// @route       POST api/auth
// @desc        Authenticate User & Get Token (send Data)
// @access      Public
router.post("/", (req, res) => {
    res.send("Log in user");
});

// Export the router or it won't work
module.exports = router;