import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './cursor.css';

const Cursor = () => {
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

  let cursor = useRef(null);

  useGSAP(() => {
    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        ease: 'power2.out'
      });
    });
  });

    return (
        <div className='cursor' ref={el => cursor = el}></div>
    );
};

export default Cursor;
