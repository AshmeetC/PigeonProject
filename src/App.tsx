import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Events from './components/Events';

function App() {
  return (
    <div className='overflow-hidden bg-[#625A4F] text-white'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<><Home /><About /><Contact /></>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;