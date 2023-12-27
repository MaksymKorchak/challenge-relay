// @flow
import { faker } from '@faker-js/faker';
import type { Product } from './types';

export let products: Product[] = new Array(9).fill(1).map((_, i) => ({
  id: i + 1,
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  createdAt: faker.date.past().toISOString(),
}));
