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

export type NewProduct = Omit<Product, 'id'>;
