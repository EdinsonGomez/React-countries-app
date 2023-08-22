import numberHelper from './numbers';

const getCountryByCode = (code) => fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  .then((res) => res.json());

const { formatToDecimal } = numberHelper;

const getValueOfObjects = (obj, key) => {
  if (!obj || !Object.keys.length) return '';

  const listData = Object
    .keys(obj)
    .map((objKey) => {
      if (!key) return obj[objKey];
      return obj[objKey]?.[key] ?? '';
    });

  return listData.join(', ');
};

const getBorderCountries = async (borderList = []) => {
  const countriesRequest = await Promise.all(
    borderList.map((code) => getCountryByCode(code)),
  );

  const countries = countriesRequest.map(([country]) => country);

  return countries;
};

const parseDataRequest = async (data) => {
  if (!data) return {};

  const borderCountries = await getBorderCountries(data?.borders);

  const parseData = {
    name: data?.name?.common ?? '',
    flag: data?.flags?.png,
    nativeName: data?.name?.nativeName ? Object.values(data.name.nativeName)[0].common : '',
    population: data?.population ? formatToDecimal(data.population) : 0,
    region: data?.region ?? '',
    subRegion: data?.subregion ?? '',
    capital: data?.capital?.[0] ?? '',
    topLevelDomain: data?.tld?.[0] ?? '',
    currencies: getValueOfObjects(data?.currencies, 'name'),
    languages: getValueOfObjects(data?.languages),
    borderCountries,
  };

  return parseData;
};

export default { parseDataRequest };
