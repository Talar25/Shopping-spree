import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const Menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setOpen]);

  return (
    <section
      className={styles.menu}
      style={open ? { left: '0' } : { left: '-40rem' }}
    >
      <div className={styles.menuNav}>
        <CloseIcon sx={{ fontSize: 25 }} onClick={() => setOpen(false)} />
      </div>
      <ul className={styles.clothes}>
        <h5>Clothes</h5>

        <li style={{ fontWeight: 'bold' }}>
          <Link to='/women'>Women</Link>
        </li>
        <li>
          <Link to='/women/jacket'>Jackets</Link>
        </li>
        <li>
          <Link to='/women/tshirt'>T-shirts</Link>
        </li>
        <li>
          <Link to='/women/sweatshirt'>Sweatshirts</Link>
        </li>
        <li>
          <Link to='/women/trousers'>Trousers</Link>
        </li>

        <li style={{ fontWeight: 'bold', marginTop: '2rem' }}>
          <Link to='/men'>Men</Link>
        </li>

        <li>
          <Link to='/men/jacket'>Jackets</Link>
        </li>
        <li>
          <Link to='/men/tshirt'>T-shirts</Link>
        </li>
        <li>
          <Link to='/men/sweatshirt'>Sweatshirts</Link>
        </li>
        <li>
          <Link to='/men/trousers'>Trousers</Link>
        </li>
      </ul>
      <ul className={styles.miscellaneous}>
        <h5>About us</h5>
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
    </section>
  );
};