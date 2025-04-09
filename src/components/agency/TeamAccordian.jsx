import './teamAccordian.css';
import img1 from '../../assets/accordian-images/gallery_1.webp';    
import img2 from '../../assets/accordian-images/gallery_2.webp';
import img3 from '../../assets/accordian-images/gallery_3.webp';
import img4 from '../../assets/accordian-images/gallery_4.webp';
import img5 from '../../assets/accordian-images/gallery_5.webp';
import img6 from '../../assets/accordian-images/gallery_6.webp';
import img7 from '../../assets/accordian-images/gallery_7.webp';
import img8 from '../../assets/accordian-images/gallery_8.webp';
import img10 from '../../assets/accordian-images/gallery_10.webp';
import img11 from '../../assets/accordian-images/gallery_11.webp';
import img12 from '../../assets/accordian-images/gallery_12.webp';
import img13 from '../../assets/accordian-images/gallery_13.webp';
import img14 from '../../assets/accordian-images/gallery_14.webp';
import img15 from '../../assets/accordian-images/gallery_15.webp';
import img16 from '../../assets/accordian-images/gallery_16.webp';
import img17 from '../../assets/accordian-images/gallery_17.webp';
import img18 from '../../assets/accordian-images/gallery_18.webp';
import img19 from '../../assets/accordian-images/gallery_19.webp';
import img20 from '../../assets/accordian-images/gallery_20.webp';
import img21 from '../../assets/accordian-images/gallery_21.webp';
import img22 from '../../assets/accordian-images/gallery_22.webp';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';


const TeamAccordian = () => {

    const teamPics = [
        img1, img2, img3, img4, img5, img6, img7, img8, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
    ];

    return (
        <div className="team-accordian">
            <button><img src={leftArrow} alt="left-arrow" /></button>
            <button className='right-arrow'><img src={rightArrow} alt="right-arrow" /></button>
            {teamPics.map((pic, index) => (
                <span className="team-accordian-item" key={index}>
                    <img src={pic} alt="team-pic" />
                </span>
            ))}
        </div>
    )
}

export default TeamAccordian;
