import { createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage';
import RegionPage from './routes/RegionPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'region',
        element: <RegionPage />,
      },
    ],
  },
]);

export default router;
