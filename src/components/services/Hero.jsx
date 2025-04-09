import './hero.css';
import backgroundHero from '../../assets/background-hero.svg';
import smallHero from '../../assets/small-hero.svg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
        <div className="services-hero flex">
            <div className='services-hero-left'>
                <div className='line'></div>
                <h1>We know how to innovate, we believe in ideas and results</h1>
                <p>We see each new project as an opportunity to create something unique and special: challenges excite us. Always.</p>
                <div className='services-hero-content'>
                </div>
            </div>
            <div className="services-hero-right">
                <img src={backgroundHero} alt="hero" className='background-hero' />
                <img src={smallHero} alt="hero" className='small-hero' ref={el => smallImg = el} />
            </div>
        </div>
    )
}

export default Hero;
