import styles from './ProductDescription.module.css';
//hooks
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
//types
import { RootState } from '../../store';
//components
//images
import { JacketDescription } from './JacketDescription';
import { TshirtsDescription } from './TshirtsDescription';
import { TrousersDescription } from './TrousersDescription';
import { SweatshirtDescription } from './SweatshirtDescription';

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
      {type === 'jacket' && <JacketDescription />}
      {type === 'tshirt' && <TshirtsDescription />}
      {type === 'trousers' && <TrousersDescription />}
      {type === 'sweatshirt' && <SweatshirtDescription />}
    </section>
  );
};
