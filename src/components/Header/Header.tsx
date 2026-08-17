import { Search } from 'lucide-react';
import type { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount: number;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  cartItemCount,
}: HeaderProps) {
  const navigate = useNavigate();

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value);
  }

  return (
    <header>
      <h1>Shopping Cart</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/shop');
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <Search size={18} aria-label="Search" />
        </button>
      </form>
      <nav>
        <span>
          <Link to="/">Home</Link> |
        </span>
        <span>
          <Link to="/shop">Shop</Link> |
        </span>
        <span>
          <Link to="/cart">Cart {cartItemCount > 0 && cartItemCount}</Link>
        </span>
      </nav>
    </header>
  );
}
