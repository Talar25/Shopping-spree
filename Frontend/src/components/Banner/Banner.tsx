import styles from './Banner.module.css';
//import component
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <h3>Stay in the loop with our latest updates! </h3>
        <p>
          Subscribe to our newsletter for exclusive news, promotions, and more.
          Don't miss out – join our community now!
        </p>
        <div className={styles.input}>
          <input type='email' placeholder='Your email adress...'></input>
          <button>
            <ArrowForwardIcon
              sx={{ fontSize: 20, color: 'white' }}
              color='action'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
