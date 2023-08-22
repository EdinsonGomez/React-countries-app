import numbersHelpers from '../../helpers/numbers';

const { formatToDecimal } = numbersHelpers;

export default function ListITem({ country, onClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="list_item" role="button" tabIndex="0" onClick={() => onClick(country)}>
      <img alt={`flag-${country.ccn3}`} src={`${country?.flags?.png}`} />
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
