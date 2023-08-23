import { Outlet } from 'react-router-dom';
import Filters from 'src/components/Filters/Filters';

export default function HomePage() {
  return (
    <div className="wrapper">
      <Filters />
      <Outlet />
    </div>
  );
}
