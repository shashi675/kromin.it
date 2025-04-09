import './servicePageServices.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/right-arrow-pink.svg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicePageServices = () => {

    const servicePageServicesRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rightServiceDivs = servicePageServicesRef.current.querySelectorAll('.service-page-services>div');
        
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
                        start: 'bottom bottom',
                        end: 'bottom center',
                    },
                    delay: index * 0.2 // Add slight delay between each div animation
                }
            );
        });
    }, []);

    return (
        <div className="service-page-services" ref={servicePageServicesRef}>
            <h2>Services</h2>
            <div className='flex'>
                <div>
                    <h4>Data Analysis & Consulting</h4>
                    <ul>
                        <li>Insights</li>
                        <li>Business Research</li>
                    </ul>
                </div>
                <div>
                    <p>Through data analysis we identify valuable KPIs and determine what is the best strategy to pursue. Analyzing before doing allows us to create powerful strategies.</p>
                    <Link to="/" className=''>Find out more
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <h4>Design & Development</h4>
                    <ul>
                        <li>Digital Product</li>
                        <li>Websites</li>
                    </ul>
                </div>
                <div>
                    <p>We focus not only on the aesthetics of a product but also on what allows its functional use. We develop Digital Products able to automate and simplify the most sophisticated workflows.</p>
                    <Link to="/" className=''>Find out more
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <h4>Creative Communication</h4>
                    <ul>
                        <li>Social Management</li>
                        <li>Video Production</li>
                    </ul>
                </div>
                <div>
                    <p>We provide a wide range of high quality creative solutions with great visual impact that enhance the perception of the Brand. We reach the interest of thousands of users through content strategies that exploit the potential of the Brand.</p>
                    <Link to="/" className=''>Find out more
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <h4>Marketing & Strategy</h4>
                    <ul>
                        <li>Inbound Marketing</li>
                        <li>Performance Advertising</li>
                    </ul>
                </div>
                <div>
                    <p>We follow our clients along a path aimed at achieving their objectives through Marketing and Performance Advertising strategies capable of engaging the audience, enhancing brand loyalty, increasing sales and profits.</p>
                    <Link to="/" className=''>Find out more
                        <span className='px-2'>
                            <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServicePageServices;
