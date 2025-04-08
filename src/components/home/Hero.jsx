import backgroundHero from '../../assets/background-hero.svg';
import smallHero from '../../assets/small-hero.svg';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './hero.css';

const Hero = () => {
    let smallImg = useRef(null);
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        window.addEventListener('mousemove', (e) => {
            // Get mouse position relative to center of screen
            const x = (e.clientX - window.innerWidth / 2) / 20;
            const y = (e.clientY - window.innerHeight / 2) / 20;

            // Animate small image with more movement
            gsap.to(smallImg, {
                x: x * 2,
                y: y * 2,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });

    return (
        <div className="hero">
            <div className="hero-img">
                <img src={backgroundHero} alt="hero" className='background-hero' />
                <img src={smallHero} alt="hero" className='small-hero' ref={el => smallImg = el} />
            </div>
            <div className="hero-text-container">
                <h1 className="hero-text">Digital solutions for your Business</h1>
                <p className="hero-text-description mt-5">DATA. DESIGN. DEVELOPMENT. MARKETING.</p>
            </div>
        </div>
    )
}

export default Hero;
