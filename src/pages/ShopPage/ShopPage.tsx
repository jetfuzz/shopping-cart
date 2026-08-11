import { useOutletContext } from 'react-router';
import type { Product } from '../../types';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './ShopPage.module.css'

export default function Shop() {
  const products = useOutletContext<Product[]>();
  console.log(products)

  return (
    <div>
      <h2>Shop</h2>
      <div className={styles.shopItems}>
        {products.map((p) => (
          <ItemCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
