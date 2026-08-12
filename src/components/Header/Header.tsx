import type { ChangeEvent } from 'react';
import { Link } from 'react-router';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value);
  }

  return (
    <header>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchChange}
      />
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
