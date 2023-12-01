import { useParams } from 'react-router';
import styles from './ClothesSection.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
  setGenderFilter,
  setToInitial,
  setTypeFilter,
} from '../../reducers/filterReducer';
import { Product, FilterTypes } from '../../types';
import { useEffect, useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//mui icons
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import RectangleIcon from '@mui/icons-material/Rectangle';
//Images imports
import IMG_WOMAN_JACKET from '../../assets/Woman_jacket.jpg';
import IMG_WOMAN_JACKET_PLACEHOLDER from '../../assets/Woman_jacket_PLACEHOLDER.jpg';
import IMG_WOMAN_SWEATSHIRT from '../../assets/Woman_sweatshirt.jpg';
import IMG_WOMAN_SWEATSHIRT_PLACEHOLDER from '../../assets/Woman_sweatshirt_PLACEHOLDER.jpg';
import IMG_WOMAN_TSHIRT from '../../assets/Woman_tshirt.jpg';
import IMG_WOMAN_TSHIRT_PLACEHOLDER from '../../assets/Woman_tshirt_PLACEHOLDER.jpg';
import IMG_WOMAN_TROUSERS from '../../assets/Woman_trousers.jpg';
import IMG_WOMAN_TROUSERS_PLACEHOLDER from '../../assets/Woman_trousers_PLACEHOLDER.jpg';
import IMG_MAN_JACKET from '../../assets/Man_jacket.jpg';
import IMG_MAN_JACKET_PLACEHOLDER from '../../assets/Man_jacket_PLACEHOLDER.jpg';
import IMG_MAN_SWEATSHIRT from '../../assets/Man_sweatshirt.jpg';
import IMG_MAN_SWEATSHIRT_PLACEHOLDER from '../../assets/Man_sweatshirt_PLACEHOLDER.jpg';
import IMG_MAN_TSHIRT from '../../assets/Man_tshirt.jpg';
import IMG_MAN_TSHIRT_PLACEHOLDER from '../../assets/Man_tshirt_PLACEHOLDER.jpg';
import IMG_MAN_TROUSERS from '../../assets/Man_trousers.jpg';
import IMG_MAN_TROUSERS_PLACEHOLDER from '../../assets/Man_trousers_PLACEHOLDER.jpg';
import { setGrid } from '../../reducers/gridReducer';

const getPhotos = (
  filter: FilterTypes,
  type: string
): { image: string; imagePlaceholder: string } => {
  if (filter.gender === 'male') {
    switch (type) {
      case 'jacket':
        return {
          image: IMG_MAN_JACKET,
          imagePlaceholder: IMG_MAN_JACKET_PLACEHOLDER,
        };
      case 'tshirt':
        return {
          image: IMG_MAN_TSHIRT,
          imagePlaceholder: IMG_MAN_TSHIRT_PLACEHOLDER,
        };
      case 'sweatshirt':
        return {
          image: IMG_MAN_SWEATSHIRT,
          imagePlaceholder: IMG_MAN_SWEATSHIRT_PLACEHOLDER,
        };
      case 'trousers':
        return {
          image: IMG_MAN_TROUSERS,
          imagePlaceholder: IMG_MAN_TROUSERS_PLACEHOLDER,
        };
    }
  }

  if (filter.gender === 'female') {
    switch (type) {
      case 'jacket':
        return {
          image: IMG_WOMAN_JACKET,
          imagePlaceholder: IMG_WOMAN_JACKET_PLACEHOLDER,
        };
      case 'tshirt':
        return {
          image: IMG_WOMAN_TSHIRT,
          imagePlaceholder: IMG_WOMAN_TSHIRT_PLACEHOLDER,
        };
      case 'sweatshirt':
        return {
          image: IMG_WOMAN_SWEATSHIRT,
          imagePlaceholder: IMG_WOMAN_SWEATSHIRT_PLACEHOLDER,
        };
      case 'trousers':
        return {
          image: IMG_WOMAN_TROUSERS,
          imagePlaceholder: IMG_WOMAN_TROUSERS_PLACEHOLDER,
        };
    }
  }
  return { image: '', imagePlaceholder: '' };
};

const checkFilters = (products: Product[], filter: FilterTypes): Product[] => {
  let filteredProducts: Product[] = products;
  if (filter.gender) {
    filteredProducts = products.filter(
      (product) => product.gender === filter.gender
    );
  }
  if (filter.type) {
    filteredProducts = filteredProducts.filter(
      (product) => product.type === filter.type
    );
  }

  if (filter.price) {
    filteredProducts = products.filter(
      (product) => +product.price <= filter.price
    );
  }

  if (filter.color && filter.color.length > 0) {
    for (let i = 0; i < filter.color.length; i++) {
      filteredProducts = products.filter((product) =>
        product.color.includes(filter.color[i])
      );
    }
  }

  if (filter.size && filter.size.length > 0) {
    for (let i = 0; i < filter.size.length; i++) {
      filteredProducts = products.filter((product) =>
        product.size.includes(filter.size[i])
      );
    }
  }

  return filteredProducts;
};

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

const Clothes = () => {
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

const Card = ({ id }: { id: string }) => {
  const [show, setShow] = useState(false);
  const filter = useSelector((state: RootState) => state.filter);
  const products = useSelector((state: RootState) => state.products);
  const {
    name: title,
    price,
    type,
    color,
    size,
  } = products.find((product) => product.id === id);
  const { image, imagePlaceholder } = getPhotos(filter, type);
  const grid = useSelector((state: RootState) => state.grid);

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <LazyLoadImage
          onMouseMove={() => setShow(true)}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setTimeout(() => setShow(false), 1000)}
          width='100%'
          height='auto'
          src={image}
          alt='hero-img'
          placeholderSrc={imagePlaceholder}
          effect='black-and-white'
        />
        {show && (
          <div className={styles.hiddenInfo}>
            <div
              className={styles.hiddenInfo_wrapper}
              style={{
                fontSize: `${
                  grid === 2 ? '20px' : grid === 3 ? '15px' : '10px'
                }`,
              }}
            >
              <div className={styles.hiddenInfo_colors}>
                <p>Colors</p>
                <ul>
                  {color.map((c) => (
                    <li key={c}>
                      <RectangleIcon
                        style={{
                          color: `${c}`,
                          fontSize: `${
                            grid === 2 ? '25px' : grid === 3 ? '20px' : '15px'
                          }`,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>Sizes</p>
                <ul className={styles.hiddenInfo_sizes}>
                  {size.map((s) => (
                    <li
                      key={s}
                      className={styles.hiddenInfo_size}
                      style={{
                        fontSize: `${
                          grid === 2 ? '25px' : grid === 3 ? '20px' : '15px'
                        }`,
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              style={{
                padding:
                  grid === 2
                    ? '0.8rem 1.8rem'
                    : grid === 3
                    ? '0.6rem 1.6rem'
                    : '0.rem 0.8rem',
              }}
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{price} EURO</p>
      </div>
    </div>
  );
};

// transform: `translateY(${show ? '-50' : '0'}%)`
