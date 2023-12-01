const express = require('express');
const Workout = require('../models/WorkoutModel')
const router = express.Router();

// GET all workouts
router.get('/',(req,res)=>{
    res.json('GET all workouts')
})

// GET single workout
router.get('/:id',(req,res)=>{
    res.json('GET single workout')
})

// GET all workouts
router.get('/:id',(req,res)=>{
    res.json('GET all workouts')
})

// GET all workouts
router.post('/', async (req,res)=>{
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

// GET all workouts
router.delete('/:id',(req,res)=>{
    res.json('DELETE a workout')
})

// GET all workouts
router.patch('/:id',(req,res)=>{
    res.json('UPDATE a workout')
})

module.exports = router