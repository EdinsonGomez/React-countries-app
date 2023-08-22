import { createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage';
import RegionPage from './routes/RegionPage';
import SearchPage from './routes/SearchPage';

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
]);

export default router;
