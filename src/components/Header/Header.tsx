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
      <ul>
        {select === 'women' && (
          <>
            <Link to='/women-jackets'>Jackets</Link>
            <Link to='/women-tshirts'>T-shirts</Link>
            <Link to='/women-sweatshirts'>Sweatshirts</Link>
            <Link to='/women-trousers'>Trousers</Link>
          </>
        )}
        {select === 'men' && (
          <>
            <Link to='/men-jackets'>Jackets</Link>
            <Link to='/men-tshirts'>T-shirts</Link>
            <Link to='/men-sweatshirts'>Sweatshirts</Link>
            <Link to='/men-trousers'>Trousers</Link>
          </>
        )}
      </ul>
    </section>
  );
};
