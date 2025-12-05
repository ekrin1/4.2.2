import { Card as MantineCard, Image } from '@mantine/core';
import Button from '../../shared/Button';
import styles from './Card.module.scss';
import { useState } from 'react';
import type { Product } from '../../types/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

type CardProps = {
  product: Product;
  loading: boolean;
};

export default function Card({ product, loading }: CardProps) {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const increaseCountHandler = () => {
    setCounter((prev) => prev + 1)
  };
  
  const decreaseCountHandler = () => { 
    if (counter === 1) return;
    setCounter((prev) => prev - 1);
  };

  return (

    <div className={styles.card}>
      {loading ? (
        <div className={styles.cardLoader}>
          <img src="./assets/img/loader.svg" alt="Loader" />
        </div>

      ) : (

        <MantineCard p={0}>
          <Image src={product.image} alt={product.name} />
          <div className={styles.cardMain}>
            <h4>{product.name}</h4>
            <div className={styles.addBlock}>
              <button className={styles.iconMinus} onClick={decreaseCountHandler} />
              <span>{counter}</span>
              <button className={styles.iconPlus} onClick={increaseCountHandler} />
            </div>
          </div>
          <div className={styles.cardFooter}>
            <h3>$ {product.price * counter}</h3>
            <div className={styles.cardButton}>
              <Button
                onClick={() => {
                  dispatch(addToCart({ product, quantity: counter }));
                }}
                className={styles.cardButton}
                color="rgb(231, 250, 235)"
                size="lg"
              >
                <span>Add to cart</span>
                <img src="./assets/img/cart2.svg" alt="Cart" />
              </Button>
            </div>
          </div>
        </MantineCard>
      )}
    </div>
  );
}
