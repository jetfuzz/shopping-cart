import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';

function App() {
  const productState = useProducts();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { cartItemCount, addToCart } = useCart();

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItemCount}
      />
      {productState.status === 'loading' && <p>Loading...</p>}
      {productState.status === 'error' && <p>{productState.message}</p>}
      {productState.status === 'success' && (
        <Outlet
          context={{ products: productState.data, searchQuery, addToCart }}
        />
      )}
    </>
  );
}

export default App;
