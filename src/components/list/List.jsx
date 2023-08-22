import '../../styles/list/list.scss';

export default function List({ countries }) {
  return (
    <div className="list-countries">
      {countries.map((country) => (
        <div key={`country-${country.cioc}`} className="list-countries__item">
          Country item
        </div>
      ))}
    </div>
  );
}
