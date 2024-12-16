const express = require('express');
const { getAllPersons, getAllBusiness } = require('../controllers/active_fields');
const router = express.Router();

// Example of web-based routes
router.get('/active_person', getAllPersons);
router.get("/active_business",getAllBusiness);

module.exports = router;
