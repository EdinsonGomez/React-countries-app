/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { setSearch, setRegion } from 'src/store/filtersReducers';
import SelectCustom from './SelectCustom';

import 'src/styles/filters/filters.scss';

export default function Filters() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search, region } = useSelector((state) => state.filters);

  const [localSearch, setLocalSearch] = useState(search);

  const handleChange = ({ target }) => {
    setLocalSearch(target.value);
  };

  const onSelect = (value) => {
    dispatch(setRegion(value));
    if (search) dispatch(setSearch(''));
    navigate('/list/region');
  };

  const onSearch = () => {
    if (localSearch) {
      dispatch(setRegion(''));
      dispatch(setSearch(localSearch));
      navigate('/list/search');
    } else {
      navigate('/');
    }
  };

  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  return (
    <div className="filters">
      <div className="search-input">
        <span role="button" tabIndex="0" onClick={onSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-input__icon" />
        </span>
        <input
          id="search_input"
          name="search_input"
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={localSearch}
          onKeyUp={onKeyUp}
          autoComplete="off"
        />
      </div>

      <SelectCustom
        placeholder="Filter by Region"
        value={region}
        onChange={onSelect}
      />
    </div>
  );
}
