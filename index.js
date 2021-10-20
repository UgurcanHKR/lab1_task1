const express = require("express");
const {MongoClient} = require('mongodb');
const app = express();
const port = 3000;

var url = "mongodb+srv://dbUser:GIfZyEKRLZlwUueW@"+
"cluster0.tt2bl.mongodb.net/Cargo?"+
"retryWrites=true&w=majority";

var invokeDatabase = function(callback) {
    
    MongoClient.connect(url, function(err, db) {
    db = db.db("Cargo");
    if(err) {
        console.log("Unable to connect database");
        callback(err, null);
        return;
    }    
    console.log("Connected successfully to database server");

    selectDataFiltered(db, function(err, data) {
        callback(err, data);
    });
    db.close;
    });
};

var selectDataFiltered = function(db, callback){
    
    db.collection("cargo_info").find({}).toArray (function(err, result) {
        if (err) throw err;
        callback(err, result);        
    });

};

app.get('', function(req, res) {
    console.log("Someone connected.")
    invokeDatabase(function(err, data) {
        if(err)
            res.status(500).json({error: err});
        else
            res.json(data);
    }
    );
        //res.send('Welcome G')
});


app.listen(port, () => {
   console.log('App listening on port 3000...');
})


