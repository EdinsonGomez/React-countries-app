import useToDetailsPage from '../../hooks/useToDetailsPage';
import ListITem from './ListItem';
import '../../styles/list/list.scss';

export default function List({ countries }) {
  const { onRedirect } = useToDetailsPage();

  return (
    <div className="list">
      {countries.map((country) => (
        <ListITem key={`country-${country.ccn3}`} country={country} onClick={onRedirect} />
      ))}
    </div>
  );
}
