import { createContext } from 'react';
import type { Product, CartProduct } from '../types/Product';

type MyContextType = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orders: CartProduct[];
  setOrders: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  data: Product[] | null;
};

export const MyContext = createContext<MyContextType>({
  cartOpen: false,
  setCartOpen: () => {},
  orders: [],
  setOrders: () => {},
  data: null,
});
