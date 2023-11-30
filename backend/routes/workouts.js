const express = require('express');

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
router.post('/',(req,res)=>{
    res.json('POST a new workout')
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