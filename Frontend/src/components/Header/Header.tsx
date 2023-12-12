import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { Menu } from './Menu';
import { CartModal } from './CartModal';
import { Popup } from './Popup';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
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

  const handleOpenMenu = () => {
    setOpenMenu(true);
    setOpenCart(false);
  };

  const handleOpenCart = () => {
    setOpenCart(true);
    setOpenMenu(false);
  };

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
      <MenuIcon
        sx={{ fontSize: 25, cursor: 'pointer' }}
        onClick={handleOpenMenu}
      />
      <Menu setOpen={setOpenMenu} open={openMenu} />
      <CartModal setOpen={setOpenCart} open={openCart} />
      <Popup />

      <Link to='/'>
        <h1 className={styles.heading}>Shopping Spree</h1>
      </Link>
      <button className={styles.cartOpen_btn} onClick={handleOpenCart}>
        Shopping bag ({cartLength})
      </button>
    </nav>
  );
};

export default Header;
