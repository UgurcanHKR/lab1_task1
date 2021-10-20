import Express from 'express';

const app = Express();
const port = 3000;

app.get('', (req,res)=> {
   res.sendFile('index.html');
})


app.listen(port,() => {
   console.log('App listening on port 3000...');
})


