import styles from './Advertisement.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image1 from '../../assets/Portrait-red_jacket_man.jpg';
import Image1Placeholder from '../../assets/Portrait-red_jacket_man_PLACEHOLDER.jpg';
import Image2 from '../../assets/Portrait_girl_green_jacket.jpg';
import Image2Placeholder from '../../assets/Portrait_girl_green_jacket_PLACEHOLDER.jpg';

const Advertisement = () => {
  const navigate = useNavigate();

  const navigateToMen = () => {
    navigate('/men-jackets');
  };

  const navigateToWomen = () => {
    navigate('/women-jackets');
  };

  return (
    <section className={styles.advertisement}>
      <div className={styles.wrapper}>
        <div className={styles.image} onClick={navigateToMen}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={Image1}
            alt='ad-img'
            placeholderSrc={Image1Placeholder}
            effect='blur'
          />
          <div className={styles.text}>
            <h4>Jackets for true men</h4>
            <button>Check it out!</button>
          </div>
        </div>
        <div className={styles.image} onClick={navigateToWomen}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={Image2}
            alt='ad-img'
            placeholderSrc={Image2Placeholder}
            effect='blur'
          />
          <div className={styles.text} style={{ bottom: '15%', right: '21%' }}>
            <h4>Jackets for Ladies</h4>
            <button>Check it out!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
