require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// conect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('Connected to the DB and listening on port 4000')
        })
    })
    .catch((err) => {
        console.log(err)
    })

