import { BrowserRouter, Routes, Route} from 'react-router-dom'

// pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Workouts from './pages/Workouts';
import WorkoutForm from './components/WorkoutForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route path='/add' element={<WorkoutForm />} />

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
