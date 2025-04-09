import './agency.css';
import Hero from './agency/Hero';
import Vision from './agency/Vision';
import Teams from './agency/Teams';
import JoinKromin from './agency/JoinKromin';
import FollowUs from './agency/FollowUs';
// import TeamAccordian from './agency/TeamAccordian';
const Agency = () => {    

    return (
        <div className="agency">
            <Hero />
            <Vision />
            <Teams />
            {/* <TeamAccordian /> */}
            <JoinKromin />
            <FollowUs />
        </div>
    )
}

export default Agency;
