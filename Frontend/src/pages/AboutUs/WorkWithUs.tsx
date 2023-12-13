import styles from './AboutUs.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import WorktWithUsImage from '../../assets/Happy_people.jpg';
import WorktWithUsImagePlaceholder from '../../assets/Happy_people_PLACEHOLDER.jpg';

export const WorkWithUs = () => {
  const navigate = useNavigate();

  const goToCareers = (e) => {
    e.preventDefault();

    navigate('/careers');
  };

  return (
    <section className={styles.workWithUs}>
      <div className={styles.workWithUs_wrapper}>
        <div className={styles.workWithUs_text}>
          <h3 className={styles.workWithUs_text_heading}> Join Our Team!</h3>
          <p className={styles.workWithUs_text_paragraph}>
            Are you ready to embark on a journey of creativity, collaboration,
            and continuous growth? We believe in fostering a dynamic and
            inclusive work environment where passion meets purpose. As we strive
            to redefine industry standards, we are on the lookout for talented
            individuals who share our commitment to excellence.
          </p>

          <button
            onClick={goToCareers}
            className={styles.workWithUs_text_button}
          >
            Find more
          </button>
        </div>
        <div className={styles.workWithUs_image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={WorktWithUsImage}
            alt='product_description-img'
            placeholderSrc={WorktWithUsImagePlaceholder}
            effect='blur'
          />
        </div>
      </div>
    </section>
  );
};
