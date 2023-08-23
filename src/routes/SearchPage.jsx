import { useSelector } from 'react-redux';
import List from 'src/components/list/List';
import { useGetSearchCountriesQuery } from 'src/services/countries';

export default function RegionPage() {
  const { search } = useSelector((state) => state.filters);

  const { data = [] } = useGetSearchCountriesQuery(search);

  return (
    <List countries={data} />
  );
}
