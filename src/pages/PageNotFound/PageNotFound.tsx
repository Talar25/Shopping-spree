import styles from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className={styles.page}>
      <div className={styles.pageNotFound}>
        <h1>Page not found</h1>
        <Link to='/'>
          <button className={styles.btn}>Go back to homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
