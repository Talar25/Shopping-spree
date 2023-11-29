import { NewProduct, Gender, ClothType } from './types';

const toNewProduct = (object: unknown): NewProduct => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in object &&
    'type' in object &&
    'gender' in object &&
    'description' in object &&
    'price' in object &&
    'color' in object &&
    'size' in object
  ) {
    const newProduct: NewProduct = {
      name: parseName(object.name),
      type: parseType(object.type),
      gender: parseGender(object.gender),
      description: parseName(object.description),
      price: parseName(object.price),
      color: [],
      size: [],
    };

    return newProduct;
  }

  throw new Error('Incorrect data: some fields are missing');
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender)
    .map((a) => a.toString())
    .includes(gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender;
};

const isType = (type: string): type is ClothType => {
  return Object.values(ClothType)
    .map((a) => a.toString())
    .includes(type);
};

const parseType = (type: unknown): ClothType => {
  if (!type || !isString(type) || !isType(type)) {
    throw new Error('Incorrect or missing cloth type');
  }
  return type;
};

export default toNewProduct;
