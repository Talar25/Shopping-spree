import { useParams } from 'react-router';
import styles from './AllClothes.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores';
import { useEffect } from 'react';
import { setFilteredProducts } from '../../reducers/filterReducer';
import { Product } from '../../types';

const AllClothes = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const paramValue = params && Object.values(params);
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    let filtered: Product[] = [];

    if (paramValue.length > 1) {
      const arg1 = paramValue[0] === 'women' ? 'female' : 'male';
      const arg2 = paramValue[1];
      filtered = products
        .filter((product) => product.gender === arg1)
        .filter((product) => product.type === arg2);
    } else {
      filtered = products.filter((product) => product.gender === 'female');
    }

    dispatch(setFilteredProducts(filtered));
  });
  return (
    <>
      <h1>all clothes</h1>
      <p>{paramValue}</p>
    </>
  );
};

export default AllClothes;
