import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const Menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnEscape = (
      e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
    ) => {
      if ('keyCode' in e && e.keyCode === 27) {
        setOpen(false);
      }
    };

    const closeOnClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    document.addEventListener('mousedown', closeOnClickOutside);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('mousedown', closeOnClickOutside);
    };
  }, [setOpen]);
  return (
    <section
      ref={menuRef}
      className={styles.menu}
      style={open ? { left: '0' } : { left: '-100%' }}
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
