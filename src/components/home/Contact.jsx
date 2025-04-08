import './contact.css';
import { Link } from "react-router-dom";
import arrow from '../../assets/right-arrow.svg';


const Contact = () => {
    return (
        <div className="contact flex">
            <div className="contact-left">
                <h2>Do you have a challenge for us?</h2>
                <p>Let's create new opportunities together:</p>
                <p>tell us about your vision.</p>
            </div>
            <Link to="/">
                <button>Contact us
                    <span className='px-2'>
                        <img src={arrow} alt="" />
                    </span>
                </button>
            </Link>

        </div>
    )
}

export default Contact;
