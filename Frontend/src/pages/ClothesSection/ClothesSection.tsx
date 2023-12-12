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
//import components
import { Clothes } from './Clothes';
import { Filters } from './Filters';

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
  }, []);

  useEffect(() => {
    if (paramValue[0]) dispatch(setTypeFilter(paramValue[0]));
    dispatch(setGenderFilter(gender));
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
