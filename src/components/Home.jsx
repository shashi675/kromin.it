import './home.css';
import Hero from './Home/Hero';
import Crousel from './Home/Crousel';
import Services from './Home/Services';
import Videos from './Home/Videos';
import { Link } from 'react-router-dom';
import arrow from '../assets/right-arrow.svg';
import Contact from './Home/Contact';
import Footer from './Home/Footer';
const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Crousel />
            <Services />
            <Videos />
            <Link to="/">
                <button>All success cases
                    <span className='px-2'>
                        <img src={arrow} alt="" />
                    </span>
                </button>
            </Link>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;
