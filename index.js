import express from 'express';
const app = express();



app.use('/', (req, res) => {
    res.send('<html><h1>I am working</h1></html>')
})


app.listen(3000, () => {
    console.log('App is listning to port: 3000');
})