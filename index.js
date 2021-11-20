// Each module is installed via "npm install (module name)"
const express = require("express");
const {MongoClient} = require('mongodb');
const app = express();
const port = 3001;

// mongodb url has username:password and database name
var url = "mongodb+srv://dbUser:ruCnY2RhMs9JuOJ5@"+
"cluster0.tt2bl.mongodb.net/Cargo?"+
"retryWrites=true&w=majority";

// this function calls the database from mongodb and
// calls another function for retrieving data from "cargo_info" table
var invokeDatabase = function(callback) {

    // with Mongodb module and connect function, we get the connection with url info
    MongoClient.connect(url, function(err, db) {
    db = db.db("Cargo");
    if(err) {
        console.log("Unable to connect database");
        callback(err, null);
        return;
    }    
    // Information for successful connection 
    console.log("Connected successfully to database server");

    // This function calls select specified collection and its all elements
    selectDataFiltered(db, function(err, data) {
        callback(err, data);
    });

    // connection is closed
    db.close;
    });
};

// "Cargo_info" database collection is selected by find function
var selectDataFiltered = function(db, callback){

    // the given collection is converted into a normal array
    db.collection("cargo_infos").find({}).toArray (function(err, result) {
        if (err) throw err;
        callback(err, result);        
    });
};

// This function provides to define a route handler for GET reqs to a given URL
app.get('', function(req, res) {

    console.log("Someone connected.")

    // Set up database connection using this function
    invokeDatabase(function(err, data) {
        if(err)
            // if con is unable, standard error is given
            res.status(500).json({error: err});
        else
            // if con is ok, the data is presented with json format
            res.json(data);
    }
    );
});

// With this function provides that this application is running on specified port
app.listen(port, () => {
   
   // Information for listening the application 
   console.log('App listening on port 3001...');
})


