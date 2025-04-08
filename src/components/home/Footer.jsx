import logo from '../../assets/logo.svg';
import './footer.css';
const Footer = () => {
    return (
        <div className="footer flex">
            <div className="footer-left">
                <div className="footer-logo flex">
                    <img src={logo} alt="logo" />
                    <span>kromin</span>
                </div>
            </div>
            <div className="footer-center">
                <div className="footer-center-links flex">
                    <a href="#">Agency</a>
                    <a href="#">Services</a>
                    <a href="#">Success stories</a>
                    <a href="#">Careers</a>
                    <a href="#">Academy</a>
                    <a href="#">Events</a>
                    <a href="#">Contact us</a>
                </div>
            </div>
            <div className="footer-right">
                <div className="phone-contact">
                    <p>Contact us</p>
                    <a href="tel:+911234567890">+91 1234567890</a>
                </div>
                <div className="email-contact">
                    <p>Email</p>
                    <a href="mailto:info@kromin.com">info@kromin.com</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
