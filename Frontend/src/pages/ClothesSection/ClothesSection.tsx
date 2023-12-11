import styles from './ClothesSection.module.css';
//hooks
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
  setGenderFilter,
  setToInitial,
  setTypeFilter,
} from '../../reducers/filterReducer';
import { setGrid } from '../../reducers/gridReducer';

//mui icons
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AddIcon from '@mui/icons-material/Add';
import RectangleIcon from '@mui/icons-material/Rectangle';
//import components
import { Clothes } from './Clothes';
import { getAllColors, getAllSizes } from '../../utils';

const ClothesSection = ({ genderType }: { genderType: string }) => {
  const dispatch = useDispatch();
  //hooks
  const [isShowed, setIsShowed] = useState(false);
  //get grid number
  const grid = useSelector((state: RootState) => state.grid);
  //get params
  const params = useParams();
  const paramValue = params && Object.values(params);
  //change gender name
  const gender = genderType === 'men' ? 'male' : 'female';

  const heading = !paramValue[0]
    ? `All clothes`
    : paramValue[0] === 'jacket'
    ? 'Jackets'
    : paramValue[0] === 'tshirt'
    ? 'T-shirts'
    : paramValue[0] === 'sweatshirt'
    ? 'Sweatshirts'
    : 'Trousers';

  useEffect(() => {
    dispatch(setToInitial());
    dispatch(setGenderFilter(gender));
    if (paramValue[0]) dispatch(setTypeFilter(paramValue[0]));
  }, [dispatch, gender, paramValue]);

  const changeVisibility = (e) => {
    e.preventDefault();
    setIsShowed(!isShowed);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1>{`${heading} for ${genderType === 'men' ? 'Men' : 'Women'}`}</h1>
        <div className={styles.clothesButtons}>
          <button className={styles.filterButton} onClick={changeVisibility}>
            Filter
          </button>
          <div className={styles.gridButtons}>
            <ViewArrayIcon
              onClick={() => dispatch(setGrid(2))}
              sx={{
                fontSize: '25px',
                color: `${grid === 2 ? 'black' : 'white'}`,
                stroke: 'grey',
              }}
            />
            <ViewColumnIcon
              onClick={() => dispatch(setGrid(3))}
              sx={{
                fontSize: '25px',
                color: `${grid === 3 ? 'black' : 'white'}`,
                stroke: 'grey',
              }}
            />
            <ViewModuleIcon
              onClick={() => dispatch(setGrid(4))}
              sx={{
                fontSize: '25px',
                color: `${grid === 4 ? 'black' : 'white'}`,
                stroke: 'grey',
              }}
            />
          </div>
        </div>
        {isShowed && <Filters />}
        <Clothes />
      </div>
    </section>
  );
};

export default ClothesSection;

const Filters = () => {
  //hooks
  const [sizeIsShowed, setSizeIsShowed] = useState(false);
  const [colorIsShowed, setColorIsShowed] = useState(false);
  //dispatch
  const dispatch = useDispatch();
  //get products
  const products = useSelector((state: RootState) => state.products);
  console.log(products);
  const sizes = getAllSizes(products);
  const colors = getAllColors(products);
  console.log(sizes, colors);

  return (
    <div className={styles.filters}>
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
            <button className={styles.filters_sizesBtn} key={size + size}>
              {size}
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
          {colors.map((color) => (
            <RectangleIcon sx={{ color: color, fontSize: '20px' }} />
          ))}
        </div>
      )}
    </div>
  );
};
