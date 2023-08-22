import { useSelector } from 'react-redux';
import { useGetCountriesByRegionQuery } from '../services/countries';
import List from '../components/list/List';

export default function RegionPage() {
  const { region } = useSelector((state) => state.filters);

  const { data = [] } = useGetCountriesByRegionQuery(region);

  return (
    <List countries={data} />
  );
}
