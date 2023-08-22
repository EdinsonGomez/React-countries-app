import { createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage';
import RegionPage from './routes/RegionPage';
import SearchPage from './routes/SearchPage';
import CountryPage from './routes/CountryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'list/region',
        element: <RegionPage />,
      },
      {
        path: 'list/search',
        element: <SearchPage />,
      },
    ],
  },
  {
    path: '/country/:code',
    element: <CountryPage />,
  },
]);

export default router;
