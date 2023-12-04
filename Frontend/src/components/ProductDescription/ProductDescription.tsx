import styles from './ProductDescription.module.css';
//hooks
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
//types
import { RootState } from '../../store';

const ProductDescription = () => {
  //get id from params
  const params = useParams();
  const id = (params && Object.values(params)).toString();
  //find object
  const product = useSelector((state: RootState) => state.products).find(
    (product) => product.id === id
  );

  return <section className={styles.section}></section>;
};

const JacketDescription = () => {
  return <div className={styles.wrapper}></div>;
};
