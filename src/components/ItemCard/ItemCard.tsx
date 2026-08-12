import { Link } from 'react-router';
import type { Product } from '../../types';
import styles from './ItemCard.module.css';

interface ItemCardProps {
  product: Product;
}

export default function ItemCard({ product }: ItemCardProps) {
  return (
    <div className={styles.card}>
      <Link to={`/shop/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <Link to={`/shop/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <p>
        {product.rating.rate} out of 5 ({product.rating.count} reviews)
      </p>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
