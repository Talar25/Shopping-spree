import { useSelector } from 'react-redux';
import styles from './AfterShopping.module.css';
//import hooks
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { setNavigation } from '../../reducers/navigationReducer';
import { setToInitial } from '../../reducers/cartReducer';
import { useEffect } from 'react';

const AfterShopping = () => {
  const dispatch = useAppDispatch();
  const navigation = useSelector((state: RootState) => state.navigation);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setToInitial());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = () => {
    navigate('/');
  };
  return (
    navigation === 'afterShopping' && (
      <section className={styles.page}>
        <div className={styles.afterShopping}>
          <h1>Thank you for checking out this page.</h1>
          <div className={styles.info}>
            <p>
              If you liked it, you can also check my github where i have other
              projects.
            </p>
            <p>
              You can also contact me via linkedin or mail. All information is
              on my github. Thank you!
            </p>
            <a href='https://github.com/Talar25'>
              <p className={styles.github}>Github - Talar25</p>
            </a>
          </div>

          <button onClick={handleNavigation} className={styles.btn}>
            Go back to homepage
          </button>
        </div>
      </section>
    )
  );
};

export default AfterShopping;
