import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { Menu } from './Menu';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const cartLength = cart.reduce((acc, cur) => acc + cur.number, 0);

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
      <Link to='/cart'>Shopping bag ({cartLength})</Link>
    </nav>
  );
};

export default Header;
