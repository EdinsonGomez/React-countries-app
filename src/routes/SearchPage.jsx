import { useSelector } from 'react-redux';
import { useGetSearchCountriesQuery } from '../services/countries';
import List from '../components/list/List';

export default function RegionPage() {
  const { search } = useSelector((state) => state.filters);

  const { data = [] } = useGetSearchCountriesQuery(search);

  return (
    <List countries={data} />
  );
}
