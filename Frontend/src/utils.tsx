//Images imports
import IMG_WOMAN_JACKET from './assets/Woman_jacket.jpg';
import IMG_WOMAN_JACKET_PLACEHOLDER from './assets/Woman_jacket_PLACEHOLDER.jpg';
import IMG_WOMAN_SWEATSHIRT from './assets/Woman_sweatshirt.jpg';
import IMG_WOMAN_SWEATSHIRT_PLACEHOLDER from './assets/Woman_sweatshirt_PLACEHOLDER.jpg';
import IMG_WOMAN_TSHIRT from './assets/Woman_tshirt.jpg';
import IMG_WOMAN_TSHIRT_PLACEHOLDER from './assets/Woman_tshirt_PLACEHOLDER.jpg';
import IMG_WOMAN_TROUSERS from './assets/Woman_trousers.jpg';
import IMG_WOMAN_TROUSERS_PLACEHOLDER from './assets/Woman_trousers_PLACEHOLDER.jpg';
import IMG_MAN_JACKET from './assets/Man_jacket.jpg';
import IMG_MAN_JACKET_PLACEHOLDER from './assets/Man_jacket_PLACEHOLDER.jpg';
import IMG_MAN_SWEATSHIRT from './assets/Man_sweatshirt.jpg';
import IMG_MAN_SWEATSHIRT_PLACEHOLDER from './assets/Man_sweatshirt_PLACEHOLDER.jpg';
import IMG_MAN_TSHIRT from './assets/Man_tshirt.jpg';
import IMG_MAN_TSHIRT_PLACEHOLDER from './assets/Man_tshirt_PLACEHOLDER.jpg';
import IMG_MAN_TROUSERS from './assets/Man_trousers.jpg';
import IMG_MAN_TROUSERS_PLACEHOLDER from './assets/Man_trousers_PLACEHOLDER.jpg';

//types imports
import { Product, FilterTypes } from './types';

export const getPhotos = (
  filter: FilterTypes | Product,
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
    const priceMatch = !filter.price || +product.price <= filter.price;
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
