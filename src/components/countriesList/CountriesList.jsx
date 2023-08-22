import { useGetCountriesQuery } from '../../services/countries';
import List from '../list/List';

export default function CountriesList() {
  const { data = [] } = useGetCountriesQuery();

  return (
    <List countries={data} />
  );
}
