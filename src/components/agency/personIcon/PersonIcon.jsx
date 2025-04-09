import './personIcon.css';
import { Link } from 'react-router-dom';
const PersonIcon = ({ person, ind }) => {

    const borderRadius = [
        '50% 0 50% 50%',
        '50% 50% 0 50%'
    ]

    return (
        <div className="person-icon">
            <Link to={`${person.linkedinUrl}`} target='_blank'>
                <img src={person.imgUrl} alt={person.name} style={{ borderRadius: borderRadius[ind % 2]}} />
                <h4>{person.name}</h4>
                <p>{person.role1}</p>
                <p>{person.role2}</p>
            </Link>
        </div>
    )
}

export default PersonIcon;
