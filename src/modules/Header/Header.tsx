import { Badge } from '@mantine/core';
import Button from '../../shared/Button.tsx';
import Cart from './Cart.tsx';
import styles from './Header.module.scss';
import { selectOrders, selectToggleCart, setToggleCart } from '../../redux/cartSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store.ts';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const cartOpen = useSelector(selectToggleCart);
  const orders = useSelector(selectOrders);

  return (

    <header>

      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <span className={styles.headerText}>
            Vegetable{' '}
            <a href="">
              <img
                src='./assets/img/logo.svg'
                alt="Logo"
              />
            </a>
          </span>
        </div>

        <div className={styles.cart}>
          <Button
            color="green"
            radius="md"
            size="lg"
            onClick={() => dispatch(setToggleCart())}
          >
            <Badge
              className={styles.badge}
              color="white"
              mr={10}
              circle
              size="md"
            >
              <span>{orders.length}</span>
            </Badge>
            <span>Cart</span>
            <img
              src='./assets/img/cart.svg'
              alt="Cart"
            />
          </Button>
        </div>
        
      </div>
      {cartOpen && <Cart />}
    </header>
  );
}
