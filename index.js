const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');

const api = require('./routes');

app.use(bodyParser.json());

app.use('/api',api);

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        process.exit(0);
    }else {
        console.log('Store will open in ', port);
    }
})