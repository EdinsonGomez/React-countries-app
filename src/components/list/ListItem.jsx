import numbersHelpers from '../../helpers/numbers';

const { formatToDecimal } = numbersHelpers;

export default function ListITem({ country }) {
  return (
    <div key={country.cioc} className="list_item">
      <img alt={`flag-${country.cioc}`} src={`${country?.flags?.png}`} />
      <div className="list_item__description">
        <p className="list_item__name">{country?.name?.common}</p>
        <p>
          <strong>Population: </strong>
          {formatToDecimal(country?.population)}
        </p>
        <p>
          <strong>Region: </strong>
          {country?.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country?.capital?.[0]}
        </p>
      </div>
    </div>
  );
}
