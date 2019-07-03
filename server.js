const express = require('express');
const app = express();
const routes = require('./routes')
const mongoose = require('mongoose')
const mongodb = 'mongodb://localhost:27017/learnmongo'
mongoose.connect(mongodb,{useNewUrlParser: true})
.then(()=>{
    console.log('connected to database')
})


routes(app);

app.listen(3000, ()=>{
    console.log('Server Running at port 3000')
})
