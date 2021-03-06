const express = require("express");
const router = express.Router();

// @route       GET api/contacts
// @desc        Get User's contacts 
// @access      Private
router.get("/", (req, res) => {
    res.send("Get all Contacts");
});

// @route       POST api/contacts
// @desc        Add new contact 
// @access      Private
router.post("/", (req, res) => {
    res.send("Add Contacts");
});

// @route       PUT api/contacts/:id
// @desc        Update contact 
// @access      Private
router.put("/:id", (req, res) => {
    res.send("Update Contact");
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact 
// @access      Private
router.delete("/:id", (req, res) => {
    res.send("Delete Contact");
});




// Export the router or it won't work
module.exports = router;