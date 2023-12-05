import styles from './ProductPage.module.css';
import { Card } from '../../components/Card/Card';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { Product } from '../../types';
import { RootState } from '../../store';
import { setGenderFilter, setTypeFilter } from '../../reducers/filterReducer';

export const RecommendedItems = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilterProducts] = useState<Product[]>([]);
  //get id from params
  const params = useParams();
  const id = (params && Object.values(params)).toString();
  //find object
  const products = useSelector((state: RootState) => state.products);
  const product = products.find((product) => product.id === id);
  //find other 4 objects of the same type
  const filterProducts = useCallback(() => {
    if (products && product) {
      const otherProducts = products
        .filter((p) => p.gender === product.gender)
        .filter((p) => p.type === product.type)
        .filter((p) => p.id !== product.id)
        .slice(0, 4);
      setFilterProducts(otherProducts);
      dispatch(setGenderFilter(product.gender));
      dispatch(setTypeFilter(product.type));
    }
  }, [products, product, dispatch]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <section className={styles.recommended_section}>
      <div className={styles.recommended_wrapper}>
        <h3 className={styles.recommended_heading}>Recommended for you</h3>
        <div className={styles.recommended_gallery}>
          {filteredProducts.length === 4 &&
            filteredProducts.map((product) => (
              <Card key={product.id} id={product.id} />
            ))}
        </div>
      </div>
    </section>
  );
};
