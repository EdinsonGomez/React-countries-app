import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useGetCountryByCodeQuery } from 'src/services/country';
import useToDetailsPage from 'src/hooks/useToDetailsPage';

import '../styles/country/country.scss';

const infoSection = {
  nativeName: 'Native Name',
  topLevelDomain: 'Top Level Domain',
  population: 'Population',
  currencies: 'Currencies',
  region: 'Region',
  languages: 'Languages',
  capital: 'Capital',
};

export default function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { onRedirect } = useToDetailsPage();

  const { data: countryData = {} } = useGetCountryByCodeQuery(code);

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="wrapper">
      <div className="back-btn">
        <button type="button" className="back-btn__content" onClick={onBackClick}>
          <FontAwesomeIcon icon={faArrowLeftLong} className="back-btn__icon" />
          <span>
            Back
          </span>
        </button>
      </div>
      <div className="details">
        <div className="details__flag">
          <img alt={`flag-${countryData.name}`} src={countryData?.flag} />
        </div>
        <div className="details-info">
          <p className="details__name">{countryData.name}</p>
          <div className="details-section">
            {Object
              .keys(infoSection)
              .map((key) => (
                <p key={`info-${key}`}>
                  <strong>
                    {infoSection[key]}
                    :
                    {' '}
                  </strong>
                  {countryData[key]}
                </p>
              ))}
          </div>
          <div className="border-countries__container">
            <p><strong>Border Countries: </strong></p>
            <div className="border-countries">
              {countryData?.borderCountries?.length > 0 && (
                countryData.borderCountries.map((country) => (
                  <button
                    key={`border-country-${country.ccn3}`}
                    type="button"
                    onClick={() => onRedirect(country)}
                  >
                    {country?.name?.common}
                  </button>
                )))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
