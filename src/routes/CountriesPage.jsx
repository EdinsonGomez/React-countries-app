import { useGetCountriesQuery } from 'src/services/countries';
import List from 'src/components/list/List';

export default function CountriesPage() {
  const { data = [] } = useGetCountriesQuery();

  return (
    <List countries={data} />
  );
}
