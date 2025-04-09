import './outPartners.css';
import partner1 from '../../assets/Idib.svg';
import partner2 from '../../assets/luther.svg';
import partner3 from '../../assets/fuoricitta.svg';
import partner4 from '../../assets/seeweb.svg';

const OurPartners = () => {
    return (
        <div className='our-partners'>
            <p>Our Partners</p>
            <h1>Every time at our side</h1>
            <div className='line'></div>
            <div className="partner-images flex">
                <img src={partner1} alt="partner1" />
                <img src={partner2} alt="partner2" />
                <img src={partner3} alt="partner3" />
                <img src={partner4} alt="partner4" />
            </div>
        </div>
    )
}   

export default OurPartners;
