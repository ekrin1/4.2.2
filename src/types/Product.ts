export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};
export type CartProduct = {
  product: Product;
  quantity: number;
};
