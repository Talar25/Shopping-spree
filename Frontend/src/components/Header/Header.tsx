import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const changeHeader = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else setScroll(false);
    };

    window.addEventListener('scroll', changeHeader);
  }, []);

  return (
    <nav
      className={styles.header}
      style={
        scroll
          ? {
              position: 'fixed',
              top: 0,
              left: 0,
              backgroundColor: 'white',
              color: 'black',
            }
          : {}
      }
    >
      <MenuIcon sx={{ fontSize: 25 }} onClick={() => setOpen(true)} />
      <Menu setOpen={setOpen} open={open} />

      <Link to='/'>
        <h1 className={styles.heading}>Shopping Spree</h1>
      </Link>
      <Link to='/cart'>Shopping bag ({cart.length})</Link>
    </nav>
  );
};

export default Header;

const Menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
