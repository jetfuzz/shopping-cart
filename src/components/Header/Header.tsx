import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <nav>
        <span>
          <Link to="/">Home</Link> |
        </span>
        <span>
          <Link to="/shop">Shop</Link> |
        </span>
        <span>
          <Link to="/cart">Cart</Link>
        </span>
      </nav>
    </header>
  );
}
