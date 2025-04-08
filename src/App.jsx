import './App.css'
import './utils.css'
import { Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import Home from './components/Home';
import Services from './components/home/Services';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Cursor />
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
