// @flow
import { products } from "./_db";

// returns an array of products.
const get = () => products;

// adds a new product to the products array.
const add = (product: Object) => {
  const newProduct = {
    id: products.length + 1,
    createdAt: new Date().toISOString(),
    ...product,
  };
  products.push(newProduct);
  return newProduct;
};

// updates a product in the products array.
const update = (id: number, edits: Object) => {
    const updatedProduct = { ...edits, id: Number(id) };
    const idx = products.findIndex(p => p.id == id);
    products[idx] = { ...updatedProduct };
    return updatedProduct;
};


export {
    get,
    add,
    update,
};
