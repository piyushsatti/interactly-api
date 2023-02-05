const express = require('express');
const router = express.Router();
const {  
    createContactController,
    getContactController,
    updateContactController,
    deleteContactController
} = require("../controllers/contactController");

router.post('/createContact', (req, res) => {
    createContactController(req, res);
});

router.get('/getContact', (req, res) => {
    getContactController(req, res);
});

router.post('/updateContact', (req, res) => {
    updateContactController(req, res);
});

router.post('/deleteContact', (req, res) => {
    deleteContactController(req, res);
});

module.exports = router;