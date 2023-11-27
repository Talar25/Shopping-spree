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

      <h1 className={styles.heading}>Shopping Spree</h1>
      <Link to='/cart'>Shopping cart</Link>
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
  const [select, setSelect] = useState<null | string>(null);

  return (
    <section
      className={styles.menu}
      style={open ? { left: '0' } : { left: '-40rem' }}
    >
      <CloseIcon sx={{ fontSize: 25 }} onClick={() => setOpen(false)} />
      <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Children</li>
      </ul>
    </section>
  );
};

// style={{translate: 'transformX(-100%)'}}
