import './hero.css';
import video from '../../assets/videos/team_hero_video.mp4';

const Hero = () => {
    return (
        <div className="hero flex">
            <div className='agency-video'>
                <video src={video} autoPlay muted loop playsInline />
            </div>
            <div className='agency-content'>
                <div className='line'></div>
                <h1 className='mb-4'>What we believe in goes far beyond our projects</h1>
                <p>Kromin is founded on values that the whole team shares and is ready to defend.</p>
            </div>
        </div>
    )
}

export default Hero;
