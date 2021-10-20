import React from 'react';
import ReactDOM from 'react-dom';
import Express from 'express';

const app = Express();
const port = 3000;
app.get('/', (req,res)=> {
   res.send('index.html');
})
app.listen(port,() => {
   console.log('App listening on port 3000...');
})


