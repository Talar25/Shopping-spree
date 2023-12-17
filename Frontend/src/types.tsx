export interface CarouselItemInterface {
  src: string;
  placeholder: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum ClothType {
  Jacket = 'jacket',
  Tshirt = 'tshirt',
  Sweatshirt = 'sweatshirt',
  Trousers = 'trousers',
}

export enum Size {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

export enum Color {
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  RED = 'red',
  GREY = 'grey',
  BROWN = 'brown',
}

export interface Product {
  id: string;
  name: string;
  type: ClothType;
  gender: Gender;
  description: string;
  price: string;
  size: Size[];
  color: Color[];
}

export interface CartProduct {
  id: string;
  name: string;
  type: ClothType;
  gender: Gender;
  description: string;
  price: string;
  size: string;
  color: string;
  number: number;
}

export interface FilterTypes {
  name: string | null;
  gender: Gender | null;
  type: ClothType | null;
  price: number | null;
  size: Size[] | null;
  color: Color[] | null;
}

export type NewProduct = Omit<Product, 'id'>;

export interface FormTypes {
  name: FormInput;
  surname: FormInput;
  email: FormInput;
  telephone: FormInput;
  country: FormInput;
  province: FormInput;
  adress: FormInput;
  city: FormInput;
  postcode: FormInput;
}

interface FormInput {
  content: string;
  error: string;
}

export interface Author {
  author: string;
  name: string;
}
