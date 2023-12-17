import styles from './ClothesSection.module.css';
//import hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
  addColorFilter,
  addSizeFilter,
  removeColorFilter,
  removeSizeFilter,
  setPriceFilter,
} from '../../reducers/filterReducer';
import { getAllColors, getAllSizes } from '../../utils';
//import components
import AddIcon from '@mui/icons-material/Add';
import RectangleIcon from '@mui/icons-material/Rectangle';
//import types
import { Color, Size } from '../../types';

export const Filters = () => {
  //hooks
  const [sizeIsShowed, setSizeIsShowed] = useState(false);
  const [colorIsShowed, setColorIsShowed] = useState(false);
  const [price, setPrice] = useState(0);
  //dispatch
  const dispatch = useDispatch();
  //get products and its sizes, colors
  const products = useSelector((state: RootState) => state.products);
  const sizes = getAllSizes(products);
  const colors = getAllColors(products);
  const filter = useSelector((state: RootState) => state.filter);
  const maxPrice = Math.max(
    ...products.map((product) => Number(product.price))
  );

  useEffect(() => {
    setPrice(maxPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPrice = (
    e: React.ChangeEvent<HTMLInputElement>,
    price: number
  ) => {
    e.preventDefault();
    if (filter) {
      setPrice(price);
      dispatch(setPriceFilter(price));
    }
  };

  const handleAddColor = (
    e: React.MouseEvent<SVGSVGElement>,
    color: string
  ) => {
    e.preventDefault();
    if (filter) {
      dispatch(addColorFilter(color));
    }

    if (filter && filter.color?.includes(color as Color)) {
      dispatch(removeColorFilter(color));
    }
  };

  const handleAddSize = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    size: string
  ) => {
    e.preventDefault();
    if (filter) {
      dispatch(addSizeFilter(size));
    }

    if (filter && filter.size?.includes(size as Size)) {
      dispatch(removeSizeFilter(size));
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filters_price}>
        Price:
        <div className={styles.filters_priceInput}>
          0
          <input
            type='range'
            min='0'
            max={maxPrice}
            value={price}
            onChange={(e) => handleAddPrice(e, +e.target.value)}
            step='1'
          />
          {price} €
        </div>
      </div>
      <button
        onClick={() => setSizeIsShowed(!sizeIsShowed)}
        className={styles.filters_btnBig}
      >
        <span>Size</span>
        <AddIcon />
      </button>
      {sizeIsShowed && (
        <div className={styles.filters_sizes}>
          {sizes.map((size) => (
            <button
              style={{
                border: ` ${
                  filter.size?.includes(size as Size)
                    ? ' 1px solid black'
                    : 'none'
                }`,
              }}
              onClick={(e) => handleAddSize(e, size as string)}
              className={styles.filters_sizesBtn}
              key={((size as string) + size) as string}
            >
              {size as string}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setColorIsShowed(!colorIsShowed)}
        className={styles.filters_btnBig}
      >
        <span>Color</span>
        <AddIcon />
      </button>
      {colorIsShowed && (
        <div className={styles.filters_colors}>
          {colors.map((color) => {
            const colorName = color as string;
            return (
              <RectangleIcon
                key={((color as string) + color) as string}
                sx={{
                  color: colorName,
                  fontSize: '20px',
                  border: `${
                    filter.color?.includes(color as Color)
                      ? '1px solid black'
                      : 'none'
                  }`,
                }}
                onClick={(e: React.MouseEvent<SVGSVGElement>) =>
                  handleAddColor(e, color as string)
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
