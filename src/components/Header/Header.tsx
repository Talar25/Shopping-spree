import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.header}>
      <MenuIcon sx={{ fontSize: 25 }} onClick={() => setOpen(true)} />
      <Menu setOpen={setOpen} open={open} />

      <Link to='/'>
        <h1 className={styles.heading}>Shopping Spree</h1>
      </Link>
      <Link to='/cart'>Shopping bag</Link>
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
  const [select, setSelect] = useState<string>('men');

  return (
    <section
      className={styles.menu}
      style={open ? { left: '0' } : { left: '-40rem' }}
    >
      <div className={styles.menuNav}>
        <CloseIcon sx={{ fontSize: 25 }} onClick={() => setOpen(false)} />
        <button
          onClick={() => setSelect('women')}
          style={select === 'women' ? { textDecoration: 'underline' } : {}}
        >
          Women
        </button>
        <button
          onClick={() => setSelect('men')}
          style={select === 'men' ? { textDecoration: 'underline' } : {}}
        >
          Men
        </button>
      </div>
      <ul className={styles.clothes}>
        <h5>Clothes</h5>
        {select === 'women' && (
          <>
            <li>
              <Link to='women/jackets'>Jackets</Link>
            </li>
            <li>
              <Link to='women/tshirts'>T-shirts</Link>
            </li>
            <li>
              <Link to='women/sweatshirts'>Sweatshirts</Link>
            </li>
            <li>
              <Link to='women/trousers'>Trousers</Link>
            </li>
          </>
        )}
        {select === 'men' && (
          <>
            <li>
              <Link to='men/jackets'>Jackets</Link>
            </li>
            <li>
              <Link to='men/tshirts'>T-shirts</Link>
            </li>
            <li>
              <Link to='men/sweatshirts'>Sweatshirts</Link>
            </li>
            <li>
              <Link to='men/trousers'>Trousers</Link>
            </li>
          </>
        )}
      </ul>
      <ul className={styles.miscellaneous}>
        <h5>About us</h5>
        <li>
          <Link to='about'>About our mission</Link>
        </li>
        <li>
          <Link to='careers'>Work with us</Link>
        </li>
        <li>
          <Link to='stores'>Our stores</Link>
        </li>
      </ul>
    </section>
  );
};
