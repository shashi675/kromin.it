import './vision.css';
import mission from '../../assets/mission.svg';
import vision from '../../assets/vision.svg';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
const Vision = () => {
    
    const missionImgRef = useRef(null);
    const visionImgRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (missionImgRef.current) {                
                gsap.to(missionImgRef.current, {
                    x: -scrollPosition * 0.15,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }
            if (visionImgRef.current) {
                gsap.to(visionImgRef.current, {
                    x: scrollPosition * 0.15 -180,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <div className="vision flex">
            <div className="mission-content">
                <img src={mission} alt="mission" ref={missionImgRef} />
                <p className='mt-5'>Be solid Digital Partners for Companies and always create new and concrete opportunities thanks to solutions designed to engage the public and optimize profits.</p>
            </div>
            <div className="vision-content mt-5">
                <img src={vision} alt="vision" ref={visionImgRef} />
                <p className='mt-5'>We believe in deep intuitions, those of entrepreneurs who have the guts to create new paradigms. That's why we intend to be the unstoppable link between digital transformation and the power of business ideas.</p>
            </div>
        </div>
    )
}   

export default Vision;
