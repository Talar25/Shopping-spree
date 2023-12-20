import styles from './ProductDescription.module.css';
//hooks
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
//types
import { RootState } from '../../store';
//components
import { ClothDescription } from './ClothDescription';

export const ProductDescription = () => {
  //get id from params
  const params = useParams();
  const id = (params && Object.values(params)).toString();
  //find object
  const product = useSelector((state: RootState) => state.products).find(
    (product) => product.id === id
  );
  const type = product?.type;

  return (
    <section className={styles.section}>
      {type === 'jacket' && <ClothDescription type='jacket' />}
      {type === 'tshirt' && <ClothDescription type='tshirt' />}
      {type === 'trousers' && <ClothDescription type='trousers' />}
      {type === 'sweatshirt' && <ClothDescription type='sweatshirt' />}
    </section>
  );
};
