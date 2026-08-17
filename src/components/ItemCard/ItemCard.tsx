import { Link, useOutletContext } from 'react-router';
import type { Product } from '../../types';
import styles from './ItemCard.module.css';
import { formatPrice } from '../../utils/formatPrice';

interface ItemCardProps {
  product: Product;
}

interface ItemCardContext {
  addToCart: (product: Product) => void;
}

export default function ItemCard({ product }: ItemCardProps) {
  const { addToCart } = useOutletContext<ItemCardContext>();
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
      <p>{formatPrice(product.price)}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}
