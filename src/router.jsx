import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'src/routes/HomePage';
import RegionPage from 'src/routes/RegionPage';
import SearchPage from 'src/routes/SearchPage';
import CountryPage from 'src/routes/CountryPage';
import CountriesPage from 'src/routes/CountriesPage';

const router = createBrowserRouter([
  {
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <CountriesPage />,
      },
      {
        path: '/list/region',
        element: <RegionPage />,
      },
      {
        path: '/list/search',
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
