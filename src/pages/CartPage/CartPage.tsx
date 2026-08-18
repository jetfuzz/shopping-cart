import { useOutletContext } from 'react-router';
import type { CartItem } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import styles from './CartPage.module.css';

const TAX_RATE = 0.13;

interface CartContext {
  cart: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

interface OrderSummary {
  subtotal: number;
  total: number;
  tax: number;
}

function getTotal(cartItems: CartItem[]): OrderSummary {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0,
  );
  const tax = subtotal * TAX_RATE;
  return { subtotal, tax, total: subtotal + tax };
}

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } =
    useOutletContext<CartContext>();
  const { subtotal, tax, total } = getTotal(cart);

  if (cart.length === 0) return <p>Your shopping cart is empty</p>;
  return (
    <div className={styles.cartPage}>
      <div className={styles.cart}>
        <h2>Shopping Bag</h2>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.cartItem}>
            <img src={item.product.image} alt={item.product.title} />
            <div>
              <h4>{item.product.title}</h4>
              <p>{item.product.category}</p>
            </div>
            <div>
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity - 1)
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(item.product.id)}>
              Delete
            </button>
            <p>{formatPrice(item.product.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      <div className={styles.orderSummary}>
        <h3>Order Summary</h3>
        <p>Subtotal: {formatPrice(subtotal)}</p>
        <p>Tax: {formatPrice(tax)}</p>
        <hr />
        <p>Total: {formatPrice(total)}</p>
        <button
          onClick={() =>
            window.alert(
              "Congrats! If this were a real shop, you'd have just placed an order 😁",
            )
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
