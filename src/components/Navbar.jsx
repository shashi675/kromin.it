import logo from '../assets/logo.svg';
import './navbar.css';
import hamburger from '../assets/burger-menu.svg';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const navLinks = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleScroll = (shouldPrevent) => {
        if (shouldPrevent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const toggleNav = () => {
        setIsOpen(!isOpen);
        
        if (!isOpen) {
            // Opening animation
            navLinks.current.classList.remove('hidden');
            // Initially hide all list items
            const listItems = navLinks.current.querySelectorAll('li');
            listItems.forEach(item => item.classList.add('hidden'));
            
            toggleScroll(true);
            gsap.fromTo(navLinks.current,
                {
                    x: '100%',
                    opacity: 0
                },
                {
                    x: '0%',
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        // Animate list items one by one after container appears
                        listItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.remove('hidden');
                                gsap.fromTo(item,
                                    {
                                        x: 50,
                                        opacity: 0
                                    },
                                    {
                                        x: 0,
                                        opacity: 1,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    }
                                );
                            }, index * 100); // 100ms delay between each item
                        });
                    }
                }
            );
        } else {
            // Closing animation
            const listItems = navLinks.current.querySelectorAll('li');
            
            const hideItems = (index) => {
                if (index < 0) {
                    // After all items are hidden, animate the container
                    gsap.to(navLinks.current, {
                        x: '100%',
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.in',
                        onComplete: () => {
                            navLinks.current.classList.add('hidden');
                            toggleScroll(false);
                        }
                    });
                    return;
                }
                
                gsap.to(listItems[index], {
                    x: 50,
                    opacity: 0,
                    duration: 0.1,
                    ease: 'power2.in',
                    onComplete: () => {
                        listItems[index].classList.add('hidden');
                        hideItems(index - 1);
                    }
                });
            };
            
            hideItems(listItems.length - 1);
        }
    };

    // Cleanup on component unmount
    useEffect(() => {
        return () => {
            toggleScroll(false);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="navbar-logo flex">
                <img src={logo} alt="logo" />
                <span>kromin</span>
            </div>
            <div className="hamburger" onClick={toggleNav}>
                <img src={hamburger} alt="hamburger" />
            </div>
            <div className="navbar-links hidden" ref={navLinks}>
                <ul className='flex'>
                    <li><a href="/agency">Agency</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="#">Success stories</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Academy</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contact us</a></li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
