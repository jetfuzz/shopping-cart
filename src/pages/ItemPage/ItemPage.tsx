import { useOutletContext, useParams } from 'react-router';
import type { Product } from '../../types';
import { useState } from 'react';
import styles from './ItemPage.module.css';

interface ItemPageContext {
  products: Product[];
  addToCart: (product: Product, quantity?: number) => void;
}

export default function ItemPage() {
  const { id } = useParams();
  const { products, addToCart } = useOutletContext<ItemPageContext>();
  const [quantity, setQuantity] = useState<number>(1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increment = () => setQuantity((prev) => prev + 1);

  if (!id) return <p>Product not found.</p>;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.itemPage}>
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>
          {product.rating.rate} out of 5 ({product.rating.count} reviews)
        </p>
        <p>${product.price}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <div>
          <button onClick={decrement}>-</button>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value) || 1))
            }
          />
          <button onClick={increment}>+</button>
        </div>
        <button onClick={() => addToCart(product, quantity)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
