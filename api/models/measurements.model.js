// Importing mongoose module
const mongoose = require('mongoose');

// Define a schema in mongodb to collect data based on this schema
const measurementSchema = new mongoose.Schema({
    id: mongoose.SchemaTypes.ObjectId,
    unit_id: Number,
    temperature: Number,
    unix_timestamp: Number,
});

// Output of this file and returns a collection in mongodb whose name is Measurement
exports.schema = measurementSchema;
exports.Measurement = mongoose.model('Measurement', measurementSchema);
