const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// GET a single workout 
const getWorkout = async (req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: "No such workout"})
    } 

    res.status(200).json(workout)
}

// POST a single workout 
const createWorkout = async (req,res) => {
    const {title, reps, load} = req.body
// add doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// DELETE a single workout 
const deleteWorkout = (req,res)=>{
    res.json('DELETE a single workout')
}

// UPDATE a single workout 
const updateWorkout = (req,res)=>{
    res.json('UPDATE a single workout')
}


module.exports = { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}