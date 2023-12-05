import styles from './ClothesSection.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Product } from '../../types';
import { useEffect, useState, useCallback } from 'react';
import { Card } from '../../components/Card/Card';
import { checkFilters } from '../../utils';

export const Clothes = () => {
  const [filteredProducts, setFilterProducts] = useState<Product[]>([]);
  const products = useSelector((state: RootState) => state.products);
  const filter = useSelector((state: RootState) => state.filter);
  const grid = useSelector((state: RootState) => state.grid);

  const filterProducts = useCallback(() => {
    const result = checkFilters(products, filter);
    setFilterProducts(result);
  }, [products, filter]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
    >
      {filteredProducts.map((product) => (
        <Card key={product.id} id={product.id} />
      ))}
    </div>
  );
};
