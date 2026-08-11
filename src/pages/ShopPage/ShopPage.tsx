import { useOutletContext } from 'react-router';
import type { Product } from '../../types';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './ShopPage.module.css';
import { useState } from 'react';

export default function Shop() {
  const products = useOutletContext<Product[]>();
  const categories = [...new Set(products.map((p) => p.category))];
  const [selected, setSelected] = useState<string[]>([]);

  function toggleCategory(category: string): void {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  }

  const filteredProducts =
    selected.length === 0
      ? products
      : products.filter((p) => selected.includes(p.category));

  return (
    <div>
      <h2>Shop</h2>

      <fieldset>
        <legend>Categories</legend>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </fieldset>

      <div className={styles.shopItems}>
        {filteredProducts.length === 0 
        ? <p>No results.</p> 
        : filteredProducts.map((p) => (
          <ItemCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
