const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
    id: mongoose.SchemaTypes.ObjectId,
    unit_id: Number,
    temperature: Number,
    unix_timestamp: Number,
});

exports.schema = measurementSchema;

exports.Measurement = mongoose.model('Measurement', measurementSchema);
