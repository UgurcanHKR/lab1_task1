import React from 'react';
import ReactDOM from 'react-dom';
import Express from 'express';

const app = Express();
const port = 3000;
app.get('/', (req,res)=> {
   console.log('Hello World!');
})
app.listen(port,() => {
   console.log('App listening on port 3000...');
})



ReactDOM.render(
  <h1>Hello, world! First page</h1>,
  document.getElementById('root')
);
