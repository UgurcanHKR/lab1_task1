// Importing mongoose module
const mongoose = require('mongoose');

// Importing Measurement collection to this file from ....model.js
const { Measurement } = require('./api/models/measurements.model');

// This function connects to mongodb and returns the count value for Measurement collection
exports.connectToDatabase = async function() {

    // Connection is established by my credentials
    await mongoose.connect("mongodb+srv://dbUser:ruCnY2RhMs9JuOJ5@cluster0.tt2bl.mongodb.net/Cargo?retryWrites=true&w=majority");
    
    // To get the count value of Measurement
    const measurementCount = await Measurement.count();

    // Print the count value of Measurement
    console.log(measurementCount);

    // To check the count value of Measurement 
    if(measurementCount === 0){

        // This loop creates 10 documents
        for(let i=1;i<=10;i++){

            // This "create" function inserts a document 
            // This document contains 3 fields; "unit_id", "temperature", "unix_timestamp"
            Measurement.create({
                unit_id:Math.random()*10000,
                temperature:(Math.random()*(2.9 - (-2.9)+1)-2.9).toFixed(1),
                unix_timestamp:new Date().setDate(i),
            });
        }
    }
};