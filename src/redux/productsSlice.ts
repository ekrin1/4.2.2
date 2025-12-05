import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Product } from '../types/Product';

interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await fetch(
      'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
    );
    const data: Product[] = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.isLoading;

export default productsSlice.reducer;
