import Hero from './services/Hero';
import ServicePageServices from './services/ServicePageServices';
import ServicePageContactUs from './services/ServicePageContactUs';
import OurPartners from './services/OurPartners';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <Hero />
            <ServicePageServices />
            <ServicePageContactUs />
            <OurPartners />
        </div>
    )
}

export default ServicesPage;
