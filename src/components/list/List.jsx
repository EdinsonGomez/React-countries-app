import ListITem from './ListItem';
import '../../styles/list/list.scss';

export default function List({ countries }) {
  return (
    <div className="list">
      {countries.map((country) => (
        <ListITem key={`country-${country.cioc}`} country={country} />
      ))}
    </div>
  );
}
