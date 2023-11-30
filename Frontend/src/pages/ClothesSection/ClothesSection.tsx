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

const getPhotos = (
  filter: FilterTypes,
  type: string
): { image: string; imagePlaceholder: string } => {
  console.log(filter);
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

  const filterProducts = useCallback(() => {
    const result = checkFilters(products, filter);
    setFilterProducts(result);
  }, [products, filter]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <div className={styles.grid}>
      {filteredProducts.map((product) => (
        <Card
          title={product.name}
          price={product.price}
          key={product.id}
          type={product.type}
        />
      ))}
    </div>
  );
};

const Card = ({
  title,
  price,
  type,
}: {
  title: string;
  price: string;
  type: string;
}) => {
  const filter = useSelector((state: RootState) => state.filter);

  const { image, imagePlaceholder } = getPhotos(filter, type);

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={image}
          alt='hero-img'
          placeholderSrc={imagePlaceholder}
          effect='black-and-white'
        />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{price} EURO</p>
      </div>
    </div>
  );
};
