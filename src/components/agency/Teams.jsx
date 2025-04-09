import './teams.css';
import img1 from '../../assets/team-images/emanuele.webp';
import img2 from '../../assets/team-images/marco.webp';
import img3 from '../../assets/team-images/vincenzo.webp';
import img4 from '../../assets/team-images/cesidio.webp';
import img5 from '../../assets/team-images/silvia.webp';
import img6 from '../../assets/team-images/pasquale.webp';
import img7 from '../../assets/team-images/alessia.webp';
import img8 from '../../assets/team-images/sara.webp';
import img9 from '../../assets/team-images/giuseppe.webp';
import img10 from '../../assets/team-images/stefano.webp';
import img11 from '../../assets/team-images/lorenzo.webp';
import img12 from '../../assets/team-images/greta.webp';
import img13 from '../../assets/team-images/giacomo.webp';
import PersonIcon from './personIcon/PersonIcon';
import weAreTeam from '../../assets/wearekromin.svg';

const Teams = () => {

    const teams = [
        {
            name: 'Emanuele Maria Esposito',
            imgUrl: img1,
            linkedinUrl: 'https://www.linkedin.com/in/espositoemanuele/',
            role1: 'CO-FOUNDER',
            role2: 'HEAD OF MARKETING'
        },
        {
            name: 'Marco Ciotoli',
            imgUrl: img2,
            linkedinUrl: 'https://www.linkedin.com/in/marcociotoli/',
            role1: 'CO-FOUNDER',
            role2: 'HEAD OF FRONT-END DEV'
        },
        {
            name: 'Vincenzo Ruffa',
            imgUrl: img3,
            linkedinUrl: 'https://www.linkedin.com/in/vruffa/',
            role1: 'CO-FOUNDER',
            role2: 'HEAD OF BACK-END DEV'
        },
        {
            name: 'Cesidio Borrelli',
            imgUrl: img4,
            linkedinUrl: 'https://www.linkedin.com/in/cesidio-borrelli/',
            role1: 'COMMERCIAL SALES REPRESENTATIVE'
        },
        {
            name: 'Silvia Staccone',
            imgUrl: img5,
            linkedinUrl: 'https://www.linkedin.com/in/silvia-staccone-b301b115a/',
            role1: 'HEAD OF ACCOUNTING'
        },
        {
            name: 'Pasquale Gallo',
            imgUrl: img6,
            linkedinUrl: 'https://www.linkedin.com/in/pasquale-gallo-03b477102/',
            role1: 'PROJECT MANAGER | COPYWRITER'
        },
        {
            name: 'Alessia Ceci',
            imgUrl: img7,
            linkedinUrl: null,
            role1: 'COPYWRITER | CONTENT & COMMUNITY MANAGER'
        },
        {
            name: 'Sara Mastrantonio',
            imgUrl: img8,
            linkedinUrl: 'https://www.linkedin.com/in/sara-mastrantonio-34963a130/',
            role1: 'HEAD OF DESIGN'
        },
        {
            name: 'Giuseppe Russo',
            imgUrl: img9,
            linkedinUrl: 'https://www.linkedin.com/in/giuseppe-russo-6a7b39147/',
            role1: 'DESIGNER'
        },
        {
            name: 'Stefano Carlini',
            imgUrl: img10,
            linkedinUrl: 'https://www.linkedin.com/in/stefano-carlini-3035b9204/',
            role1: 'JUNIOR UX/UI DESIGNER'
        },
        {
            name: 'Lorenzo Promutico',
            imgUrl: img11,
            linkedinUrl: 'https://www.linkedin.com/in/lorenzo-promutico-324440198/',
            role1: 'CREATIVE DIRECTOR'
        },
        {
            name: 'Greta Testugini',
            imgUrl: img12,
            linkedinUrl: 'https://www.linkedin.com/in/greta-testugini-995a161b5/',
            role1: 'SOCIAL MEDIA MANAGER'
        },
        {
            name: 'Giacomo Caruzzi',
            imgUrl: img13,
            linkedinUrl: 'https://www.linkedin.com/in/giacomo-caruzzi-900000000000000000000000000000000000000000/',
            role1: 'ART DIRECTOR'
        }
    ]


    return (
        <div className="teams flex">
            <div className="we-are-kromin mb-5">
                <img src={weAreTeam} alt="we are team" />
            </div>
            {teams.map((team, ind) => (
                <PersonIcon person={team} ind={ind} />
            ))}
        </div>
    )
}   

export default Teams;
