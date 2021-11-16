const mongoose = require('mongoose');
const { Measurement } = require('./api/models/measurements.model');

exports.connectToDatabase = async function() {
    await mongoose.connect("mongodb+srv://dbUser:ruCnY2RhMs9JuOJ5@cluster0.tt2bl.mongodb.net/Cargo?retryWrites=true&w=majority");
    const measurementCount = await Measurement.count();

    console.log(measurementCount);
    if(measurementCount === 0){
        for(let i=1;i<=10;i++){
            Measurement.create({
                unit_id:Math.random()*10000,
                temperature:(Math.random()*(3 - (-3)+1)-3).toFixed(1),
                unix_timestamp:new Date().setDate(i),
            });
        }
    }
};