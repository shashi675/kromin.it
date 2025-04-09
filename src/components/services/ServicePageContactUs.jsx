import './servicePageContactUs.css';
import { Link } from "react-router-dom";
import arrow from '../../assets/right-arrow.svg';


const ServicePageContactUs = () => {
    return (
        <div className="service-page-contact-us flex">
            <div className="contact-left">
                <h2>Have you found the service you were looking for?</h2>
                <p className='mt-4'>Contact us to meet our experts who will advise you according to your business goals.</p>
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

export default ServicePageContactUs;
