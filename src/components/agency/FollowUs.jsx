import './followUs.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/right-arrow-white.svg';

const FollowUs = () => {
    return (
        <div className="follow-us flex">
            <h1>Do you want to get to know Team Kromin?</h1>
            <Link to="/">
                <button>Follow us
                    <span className='px-2'>
                        <img src={arrow} alt="" />
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default FollowUs;
