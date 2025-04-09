import './App.css'
import './utils.css'
import { Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import Home from './components/Home';
import Agency from './components/Agency';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <div className='app'>
      <Cursor />
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
