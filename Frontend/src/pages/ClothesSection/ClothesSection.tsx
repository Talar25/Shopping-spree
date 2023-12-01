import { useParams } from 'react-router';
import styles from './ClothesSection.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
  setGenderFilter,
  setToInitial,
  setTypeFilter,
} from '../../reducers/filterReducer';

//mui icons
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { setGrid } from '../../reducers/gridReducer';
import { Clothes } from './Clothes';

const ClothesSection = ({ genderType }: { genderType: string }) => {
  const dispatch = useDispatch();
  const grid = useSelector((state: RootState) => state.grid);
  const params = useParams();
  const paramValue = params && Object.values(params);
  const gender = genderType === 'men' ? 'male' : 'female';
  dispatch(setToInitial());
  dispatch(setGenderFilter(gender));
  if (paramValue[0]) dispatch(setTypeFilter(paramValue[0]));

  const heading = !paramValue[0]
    ? `All clothes`
    : paramValue[0] === 'jacket'
    ? 'Jackets'
    : paramValue[0] === 'tshirt'
    ? 'T-shirts'
    : paramValue[0] === 'sweatshirt'
    ? 'Sweatshirts'
    : 'Trousers';

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1>{`${heading} for ${genderType === 'men' ? 'Men' : 'Women'}`}</h1>
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
        <Clothes />
      </div>
    </section>
  );
};

export default ClothesSection;
