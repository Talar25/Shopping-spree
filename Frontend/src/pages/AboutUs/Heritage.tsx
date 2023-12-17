import styles from './AboutUs.module.css';
//import components
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FlagIcon from '@mui/icons-material/Flag';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
//import images
import HeritageImage from '../../assets/Warsaw_oldtown.jpg';
import HeritageImagePlaceholder from '../../assets/Warsaw_oldtown_Placeholder.jpg';

export const Heritage = () => {
  return (
    <section className={styles.heritage}>
      <div className={styles.heritage_wrapper}>
        <div className={styles.heritage_image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={HeritageImage}
            alt='product_description-img'
            placeholderSrc={HeritageImagePlaceholder}
            effect='blur'
          />
          <h2 className={styles.heritage_imageTxt}>Since 1923</h2>
        </div>
        <div className={styles.heritage_flexWrapper}>
          <div className={styles.heritage_attribute}>
            <AutoFixHighIcon sx={{ fontSize: '25px', color: 'grey' }} />
            <h3>Curation Excellence</h3>
            <p>
              ShoppingSpree stands out for its meticulous curation, offering a
              thoughtfully selected range of products that blend style, quality,
              and innovation, ensuring our customers experience only the best.
            </p>
          </div>

          <div className={styles.heritage_attribute}>
            <FlagIcon sx={{ fontSize: '25px', color: 'grey' }} />
            <h3>Polish Elegance</h3>
            <p>
              Rooted in Warsaw, Poland, our brand exudes a unique blend of
              modern sophistication and traditional charm, capturing the essence
              of Polish elegance in every item we showcase.
            </p>
          </div>
          <div className={styles.heritage_attribute}>
            <EmojiEmotionsIcon sx={{ fontSize: '25px', color: 'grey' }} />
            <h3>Customer-Centric Approach</h3>
            <p>
              We prioritize our customers' satisfaction and convenience,
              providing a seamless and user-friendly shopping experience. From
              personalized recommendations to responsive support, we're
              dedicated to enhancing your journey with us.
            </p>
          </div>
          <div className={styles.heritage_attribute}>
            <RemoveRedEyeIcon sx={{ fontSize: '25px', color: 'grey' }} />
            <h3>Trendsetting Vision</h3>
            <p>
              ShoppingSpree is not just a shopping destination; it's a
              trendsetter. Stay ahead of the fashion curve and discover the
              latest styles, innovations, and must-have items that reflect our
              commitment to keeping you at the forefront of style.
            </p>
          </div>
        </div>
        <div className={styles.heritage_history}>
          <h2 className={styles.heritage_history_heading}>Our History</h2>

          <p>
            Founded in the bustling city of Warsaw, Poland, ShoppingSpree
            emerged in 1923 as a visionary retail destination, transforming the
            traditional shopping experience into a dynamic adventure. From its
            inception, the founders envisioned a space where customers could
            immerse themselves in carefully curated selections, blending the
            city's rich history with contemporary style.
          </p>
          <p>
            Over the years, ShoppingSpree has evolved into a beacon of Polish
            elegance, showcasing the vibrant spirit of Warsaw through its
            diverse product offerings. With a commitment to excellence and a
            customer-centric philosophy, the store has become a go-to
            destination for those seeking quality, style, and a touch of
            Warsaw's unique charm.
          </p>
          <p>
            Today, ShoppingSpree continues to redefine the retail landscape in
            Warsaw, weaving together a narrative that celebrates both the city's
            heritage and its forward-thinking spirit. As we look to the future,
            our passion for curating exceptional experiences remains at the core
            of everything we do, inviting you to embark on a shopping journey
            that goes beyond transactions, creating lasting memories with each
            purchase.
          </p>
        </div>
      </div>
    </section>
  );
};
