const express = require("express");
const router = express.Router();

// @route       POST api/users
// @desc        Register a User 
// @access      Public
router.post("/", (req, res) => {
    res.send("Register a user");
});

// Export the router or it won't work
module.exports = router;