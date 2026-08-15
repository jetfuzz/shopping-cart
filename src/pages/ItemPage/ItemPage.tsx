import { useOutletContext, useParams } from 'react-router';
import type { Product } from '../../types';

interface ItemPageContext {
  products: Product[];
  addToCart: (product: Product) => void;
}

export default function ItemPage() {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useOutletContext<ItemPageContext>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        {product.rating.rate} out of 5 ({product.rating.count} reviews)
      </p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}
