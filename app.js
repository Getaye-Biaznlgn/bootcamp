const express = require('express');
const path = require('path');
const members= require('./members');
const dotenv = require('dotenv');
const bootcamp = require('./routes/bootcamp');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
var app= express()
// to serve static files
app.use(express.static(path.join(__dirname,'public')))
// to include .env config files

dotenv.config({path: './config/config.env'})

connectDB();
// json body parser
app.use(express.json())
app.use('/api/bootcamps', bootcamp);
app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`server started on port ${PORT} ${process.env.NODE_ENV}`));