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

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
