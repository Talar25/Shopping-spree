import styles from './Advertisement.module.css';
//import hooks
import { useNavigate } from 'react-router-dom';
//import components
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import images
import Image1 from '../../assets/Portrait-red_jacket_man.webp';
import Image1Placeholder from '../../assets/Portrait-red_jacket_man_PLACEHOLDER.webp';
import Image2 from '../../assets/Portrait_girl_green_jacket.webp';
import Image2Placeholder from '../../assets/Portrait_girl_green_jacket_PLACEHOLDER.webp';

const Advertisement = () => {
  const navigate = useNavigate();

  const navigateToMen = () => {
    navigate('/men/jacket');
  };

  const navigateToWomen = () => {
    navigate('/women/jacket');
  };

  return (
    <section className={styles.advertisement}>
      <div className={styles.wrapper}>
        <div className={styles.card} onClick={navigateToMen}>
          <div className={styles.image}>
            <LazyLoadImage
              width='100%'
              height='auto'
              src={Image1}
              alt='ad-img'
              placeholderSrc={Image1Placeholder}
              effect='blur'
            />
          </div>
          <div className={styles.text}>
            <h4>Jackets for true men</h4>
            <button>Check it out!</button>
          </div>
        </div>
        <div className={styles.card} onClick={navigateToWomen}>
          <div className={styles.image}>
            <LazyLoadImage
              width='100%'
              height='auto'
              src={Image2}
              alt='ad-img'
              placeholderSrc={Image2Placeholder}
              effect='blur'
            />
          </div>
          <div className={styles.text}>
            <h4>Jackets for Ladies</h4>
            <button>Check it out!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
