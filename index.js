const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db');

const api = require('./routes');

app.use(bodyParser.json());

app.use('/api',api);

mongoose.connect(db.url).then(()=>{
    app.listen(port,(err)=>{
        if(err){
            console.log(err);
            process.exit(0);
        }else {
            console.log('E Boom will open in ', port);
        }
    });
}).catch(()=>{
    console.log('Connect to MongoDB Errot');
})

