import './cousel.css';
import company1 from '../../assets/firstRow/Acea.png';
import company2 from '../../assets/firstRow/Arken.png';
import company3 from '../../assets/firstRow/Audi.png';
import company4 from '../../assets/firstRow/Bmw.png';
import company5 from '../../assets/firstRow/Carinci.png';
import company6 from '../../assets/firstRow/Enel.png';
import company7 from '../../assets/firstRow/Fiorentina.png';
import company8 from '../../assets/firstRow/Izzo.png';
import company9 from '../../assets/firstRow/Jago.png';
import company10 from '../../assets/firstRow/JTI.png';
import company11 from '../../assets/secondRow/Klopman.png';
import company12 from '../../assets/secondRow/L_automobile.png';
import company13 from '../../assets/secondRow/Lazioinnova.png';
import company14 from '../../assets/secondRow/Mantegna.png';
import company15 from '../../assets/secondRow/Matecat.png';
import company16 from '../../assets/secondRow/Maui.png';
import company17 from '../../assets/secondRow/Mercedes.png';
import company18 from '../../assets/secondRow/Pi.png';
import company19 from '../../assets/secondRow/Translated.png';

const Crousel = () => {
  const companies1 = [
    { src: company1, alt: "company1" },
    { src: company2, alt: "company2" },
    { src: company3, alt: "company3" },
    { src: company4, alt: "company4" },
    { src: company5, alt: "company5" },
    { src: company6, alt: "company6" },
    { src: company7, alt: "company7" },
    { src: company8, alt: "company8" },
    { src: company9, alt: "company9" },
    { src: company10, alt: "company10" }
  ];

  const companies2 = [
    { src: company11, alt: "company11" },
    { src: company12, alt: "company12" },
    { src: company13, alt: "company13" },
    { src: company14, alt: "company14" },
    { src: company15, alt: "company15" },
    { src: company16, alt: "company16" },
    { src: company17, alt: "company17" },
    { src: company18, alt: "company18" },
    { src: company19, alt: "company19" },
  ];

  return (
    <div className="crousel">
      <div className='upper-row'>
        {companies1.map((company, index) => (
          <span key={`first-${index}`}>
            <img src={company.src} alt={company.alt} />
          </span>
        ))}
        {companies1.map((company, index) => (
          <span key={`second-${index}`}>
            <img src={company.src} alt={company.alt} />
          </span>
        ))}
      </div>
      <div className="lower-row mt-5">
      {companies2.map((company, index) => (
          <span key={`first-${index}`}>
            <img src={company.src} alt={company.alt} />
          </span>
        ))}
        {companies2.map((company, index) => (
          <span key={`second-${index}`}>
            <img src={company.src} alt={company.alt} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Crousel;
