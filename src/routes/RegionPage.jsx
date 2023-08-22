import { useGetCountriesByRegionQuery } from '../api/countriesApi';
import List from '../components/list/List';

export default function RegionPage() {
  const { data = [] } = useGetCountriesByRegionQuery('Asia');

  return (
    <List countries={data} />
  );
}
