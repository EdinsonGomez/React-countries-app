import { useSelector } from 'react-redux';
import { useGetCountriesByRegionQuery } from 'src/services/countries';
import List from 'src/components/list/List';

export default function RegionPage() {
  const { region } = useSelector((state) => state.filters);
  const { data = [] } = useGetCountriesByRegionQuery(region);

  return (
    <List countries={data} />
  );
}
