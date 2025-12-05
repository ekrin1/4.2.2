import './App.scss';
import Header from './modules/Header/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CardList from './modules/List/CardList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, selectLoading } from './redux/productsSlice';
import type { AppDispatch } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <MantineProvider>
        <Header />
        <CardList data={products} loading={loading} />
      </MantineProvider>
    </div>
  );
}

export default App;
