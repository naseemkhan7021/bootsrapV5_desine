const exp = require('express');
const app = exp();
const bodyp = require("body-parser");
const path = require("path");

const port = 5500;
const localhost = "127.0.0.1";


app.use('/statice', exp.static('statice'));

// app.set('views', path.join(__dirname, 'views'))


app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'/views/index.html'));
});

app.get('/about',(req,res)=>{
    res.status(200).sendfile(path.join(__dirname,'/views/about.html'));
});
app.get('/contect',(req,res)=>{
    res.status(200).sendfile(path.join(__dirname,'/views/contect.html'));
});


app.listen(port,localhost,()=>{
    console.log(`on ${localhost}:${port}`);
});
