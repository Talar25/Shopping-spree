import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { Menu } from './Menu';
import { CartModal } from './CartModal';
import { SmallCard } from '../../pages/CartPage/SmallCard';

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

const Popup = () => {
  const navigate = useNavigate();
  const notificationObject = useSelector(
    (state: RootState) => state.notification
  );
  console.log(notificationObject);

  const goToCart = () => {
    navigate('/cart');
  };

  if (!notificationObject) return;

  if (notificationObject) {
    return (
      <div className={styles.popup}>
        <h3 className={styles.popup_heading}>product added to the cart</h3>
        <SmallCard
          id={notificationObject.id}
          color={notificationObject.color}
          size={notificationObject.size}
          type='small'
        />
        <button className={styles.popup_btn} onClick={goToCart}>
          Go to shopping cart
        </button>
      </div>
    );
  }
};

/*
id,
color,
size,
type = '',
}: {
id: string;
color: string;
size: string;
type: string; */
