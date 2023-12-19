//Images imports
import IMG_WOMAN_JACKET from './assets/Woman_jacket.webp';
import IMG_WOMAN_JACKET_PLACEHOLDER from './assets/Woman_jacket_PLACEHOLDER.webp';
import IMG_WOMAN_SWEATSHIRT from './assets/Woman_sweatshirt.webp';
import IMG_WOMAN_SWEATSHIRT_PLACEHOLDER from './assets/Woman_sweatshirt_PLACEHOLDER.webp';
import IMG_WOMAN_TSHIRT from './assets/Woman_tshirt.webp';
import IMG_WOMAN_TSHIRT_PLACEHOLDER from './assets/Woman_tshirt_PLACEHOLDER.webp';
import IMG_WOMAN_TROUSERS from './assets/Woman_trousers.webp';
import IMG_WOMAN_TROUSERS_PLACEHOLDER from './assets/Woman_trousers_PLACEHOLDER.webp';
import IMG_MAN_JACKET from './assets/Man_jacket.webp';
import IMG_MAN_JACKET_PLACEHOLDER from './assets/Man_jacket_PLACEHOLDER.webp';
import IMG_MAN_SWEATSHIRT from './assets/Man_sweatshirt.webp';
import IMG_MAN_SWEATSHIRT_PLACEHOLDER from './assets/Man_sweatshirt_PLACEHOLDER.webp';
import IMG_MAN_TSHIRT from './assets/Man_tshirt.webp';
import IMG_MAN_TSHIRT_PLACEHOLDER from './assets/Man_tshirt_PLACEHOLDER.webp';
import IMG_MAN_TROUSERS from './assets/Man_trousers.webp';
import IMG_MAN_TROUSERS_PLACEHOLDER from './assets/Man_trousers_PLACEHOLDER.webp';

//types imports
import { Product, FilterTypes, CartProduct } from './types';

export const getPhotos = (
  filter: FilterTypes | Product | CartProduct,
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

export const checkFilters = (
  products: Product[],
  filter: FilterTypes
): Product[] => {
  return products.filter((product) => {
    const genderMatch = !filter.gender || product.gender === filter.gender;
    const typeMatch = !filter.type || product.type === filter.type;
    const priceMatch =
      (!filter.price && filter.price !== 0) || +product.price <= filter.price;
    const colorMatch =
      !filter.color ||
      filter.color.length === 0 ||
      filter.color.every((c) => product.color.includes(c));
    const sizeMatch =
      !filter.size ||
      filter.size.length === 0 ||
      filter.size.every((s) => product.size.includes(s));

    return genderMatch && typeMatch && priceMatch && colorMatch && sizeMatch;
  });
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getAllColors = (data: Product[]) => {
  const uniqueColors = new Set();

  data.forEach((item) => {
    item.color.forEach((color) => {
      uniqueColors.add(color);
    });
  });

  return Array.from(uniqueColors);
};

export const getAllSizes = (data: Product[]) => {
  const uniqueSizes = new Set();

  data.forEach((item) => {
    item.size.forEach((size) => {
      uniqueSizes.add(size);
    });
  });

  return Array.from(uniqueSizes);
};
