import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import type { ProductState } from './types';
import { useEffect, useState } from 'react';
import { fetchProducts } from './api/products';

function App() {
  const [state, setState] = useState<ProductState>({ status: 'loading' });
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        setState({ status: 'loading' });
        const products = await fetchProducts();
        setState({ status: 'success', data: products });
      } catch (err) {
        setState({
          status: 'error',
          message: err instanceof Error ? err.message : 'Something went wrong',
        });
      }
    })();
  }, []);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {state.status === 'loading' && <p>Loading...</p>}
      {state.status === 'error' && <p>{state.message}</p>}
      {state.status === 'success' && (
        <Outlet context={{ products: state.data, searchQuery }} />
      )}
    </>
  );
}

export default App;
