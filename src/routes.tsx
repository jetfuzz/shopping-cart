import App from './App';
import Cart from './pages/Cart/Cart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ShopItem from './pages/ShopItem/ShopItem';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:id',
        element: <ShopItem />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
