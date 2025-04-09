import './joinKromin.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/right-arrow-white.svg';
const JoinKromin = () => {
    return (
        <div className="join-kromin flex">
            <div className="join-kromin-left">
                <h3 className='mb-3'>Join Kromin</h3>
                <p>We’re always looking for new talents who match our Mission and Vision.</p>
            </div>
            <Link to="/">
                <button>Discover our current vacancies
                    <span className='px-2'>
                        <img src={arrow} alt="" />
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default JoinKromin;
