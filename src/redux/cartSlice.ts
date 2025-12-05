import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartProduct, Product } from '../types/Product';
import type { RootState } from './store';

interface CartState {
  orders: CartProduct[];
  cartOpen: boolean;
}

const initialState: CartState = {
  orders: [],
  cartOpen: false,
};

const cartSlice = createSlice({ 
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existing = state.orders.find(
        (item) => item.product.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.orders.push({ product, quantity });
      }
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.orders.find((o) => o.product.id === id);
      if (item) item.quantity += 1;
    },

    setToggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.orders.find((o) => o.product.id === id);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.orders = state.orders.filter((o) => o.product.id !== id);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, setToggleCart } = cartSlice.actions;
export const selectOrders = (state: RootState) => state.cart.orders;
export const selectToggleCart = (state: RootState) => state.cart.cartOpen;
export default cartSlice.reducer;
