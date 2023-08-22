import { Outlet, useMatch } from 'react-router-dom';
import Filters from '../components/Filters/Filters';
import CountriesList from '../components/countriesList/CountriesList';

export default function HomePage() {
  const isHomeMatch = useMatch('/');

  return (
    <div className="wrapper">
      <Filters />
      {isHomeMatch && <CountriesList />}
      <Outlet />
    </div>
  );
}
