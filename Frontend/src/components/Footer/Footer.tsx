import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.column}>
          <li>
            <Link to='/women' relative='path'>
              Women
            </Link>
          </li>
          <li>
            <Link to='/women/jackets' relative='path'>
              Jackets
            </Link>
          </li>
          <li>
            <Link to='/women/tshirts' relative='path'>
              Tshirts
            </Link>
          </li>
          <li>
            <Link to='/women/sweatshirts' relative='path'>
              Sweatshirts
            </Link>
          </li>
          <li>
            <Link to='/women/trousers' relative='path'>
              Trousers
            </Link>
          </li>
        </ul>

        <ul className={styles.column}>
          <li>
            <Link to='/men' relative='path'>
              Men
            </Link>
          </li>
          <li>
            <Link to='/men/jackets' relative='path'>
              Jackets
            </Link>
          </li>
          <li>
            <Link to='/men/tshirts' relative='path'>
              Tshirts
            </Link>
          </li>
          <li>
            <Link to='/men/sweatshirts' relative='path'>
              Sweatshirts
            </Link>
          </li>
          <li>
            <Link to='/men/trousers' relative='path'>
              Trousers
            </Link>
          </li>
        </ul>

        <ul className={styles.column}>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/about'>About our mission</Link>
          </li>
          <li>
            <Link to='/careers'>Work with us</Link>
          </li>
          <li>
            <Link to='/stores'>Our stores</Link>
          </li>
        </ul>

        <ul className={styles.column}>
          <li>
            <Link to='/help'>Help</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/cart'>Track your order</Link>
          </li>
          <li>
            <Link to='/cart'>Returns</Link>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <a href='https://www.facebook.com/'>
          <FacebookIcon sx={{ fontSize: '25px' }} />
        </a>
        <a href='https://www.instagram.com/'>
          <InstagramIcon sx={{ fontSize: '25px' }} />
        </a>
        <a href='https://twitter.com/'>
          <TwitterIcon sx={{ fontSize: '25px' }} />
        </a>
        <a href='https://youtube.com/'>
          <YouTubeIcon sx={{ fontSize: '25px' }} />
        </a>
      </div>
      <a href='https://github.com/Talar25' className={styles.github}>
        <p>Copyright ©{new Date().getFullYear()} Talar25</p>
      </a>
    </footer>
  );
};

export default Footer;
