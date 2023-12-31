import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <Link to="/add">
          <h1>Add a Workout</h1>
        </Link>
        <Link to="/workouts">
          <h1>Check your Workouts</h1>
        </Link>
      </div> 
    </header>
  )
}

export default Navbar