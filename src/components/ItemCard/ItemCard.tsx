import type { Product } from '../../types';
import styles from './ItemCard.module.css';

interface ItemCardProps {
  product: Product;
}

export default function ItemCard({ product }: ItemCardProps) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        {product.rating.rate} out of 5 ({product.rating.count} reviews)
      </p>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
