import './videos.css';
import video1 from '../../assets/videos/Jago.mp4';
import video2 from '../../assets/videos/Translated.mp4';
import video3 from '../../assets/videos/Audi.mp4';
import video4 from '../../assets/videos/Mauijim.mp4';
import video5 from '../../assets/videos/Acea.mp4';
import { Link } from 'react-router-dom';
import arrow from '../../assets/right-arrow.svg';


const Videos = () => {
    return (
        <div className="videos">
            <div className='video-container'>
                <video src={video1} autoPlay muted loop />
                <div>
                    <h3>Jago</h3>
                    <p>The new interactive platform that shows Jago through his Art</p>
                    <Link to="/" className=''>Get Inspired
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='video-container'>
                <video src={video2} autoPlay muted loop />
                <div>
                    <h3>Translated</h3>
                    <p>Professional translation service</p>
                    <Link to="/" className=''>Get Inspired
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='video-container'>
                <video src={video3} autoPlay muted loop />
                <div>
                    <h3>Audi Roma</h3>
                    <p>A new corporate sales process</p>
                    <Link to="/" className=''>Get Inspired
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='video-container'>
                <video src={video4} autoPlay muted loop />
                <div>
                    <h3>Maui Jim</h3>
                    <p>Increase productivity in stores</p>
                    <Link to="/" className=''>Get Inspired
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='video-container'>
                <video src={video5} autoPlay muted loop />
                <div>
                    <h3>Acea</h3>
                    <p>The 20/24 Digital Business Plan</p>
                    <Link to="/" className=''>Get Inspired
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};  

export default Videos;
