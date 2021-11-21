// Importing express module to create a Router
const router = require('express').Router();

// Importing Measurement collection to this file from ....model.js
const { Measurement } = require('../models/measurements.model');

// This GET function runs only if this url -'/api/measurements'- is called
// It returns 5 documents(rows) sorted by 'unix_timestamp' from Measurement collection
router.get('/api/measurements', async (req, res) => {
    const measurements = await Measurement.find({}).sort({unix_timestamp: -1}).limit(5);
    res.send(measurements);
});

// Output of this file
exports.router = router;