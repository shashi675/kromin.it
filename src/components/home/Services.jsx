import './services.css';
import arrow from '../../assets/right-arrow.svg';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import laptop from '../../assets/laptop.svg';
import people from '../../assets/people.svg';
import potential from '../../assets/potential.svg';

const Services = () => {
    const servicesRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.fromTo(servicesRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.services',
                    start: 'top center',
                    end: 'bottom center',
                }
            }
        );

        const rightServiceDivs = servicesRef.current.querySelectorAll('.right-services>div');
        
        rightServiceDivs.forEach((div, index) => {
            gsap.fromTo(div,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: div,
                        start: 'top center',
                        end: 'bottom center',
                    },
                    delay: index * 0.2 // Add slight delay between each div animation
                }
            );
        });
    }, []);

    return (
        <div className="services flex" ref={servicesRef}>
            <div className="left-services">
                <p>We want to stand out</p>
                <h2>Why Kromin</h2>
                <div className='line'></div>
                <div>
                    <Link to="services" className='services-link'>DISCOVER OUR SERVICES
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="right-services">
                <p>
                    Kromin allows its clients to bring ambitious projects to life. Starting from Data Analysis we shape Marketing Strategies and Digital Products, enriched by our Contents Media. We talk about numbers and results, our services are just the tip of the iceberg. The proactivity of our approach facilitates teamwork with our clients, making us proud of what we do.
                </p>
                <div>
                    <img src={laptop} alt="" />
                    <h6>Digital Natives</h6>
                    <p>
                        Data, experience and innovation inspire our approach. We focus on innovation, researching new digital technologies to deliver new solutions and services.
                    </p>
                </div>
                <div>
                    <img src={people} alt="" />
                    <h6>Company Network</h6>
                    <p>
                        We have a solid network of digital players who, like us, believe in innovation and contribute to the success of our projects.
                    </p>
                </div>
                <div>
                    <img src={potential} alt="" />
                    <h6>Multipotential</h6>
                    <p>
                        Each member of the Team takes part in the Kromin project with his own skills. We love groups of highly competent people. Our Corporate Culture makes us a moving machine with focused and strategic choices. We ask our clients to get to know the teams working on the project personally, to give a face and a voice to each team member working on the project and its goals.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;
