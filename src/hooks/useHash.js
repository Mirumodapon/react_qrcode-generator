import { useState, useEffect } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState(null);
  const parseUrl = (location=window.location) => {
    const search_string = location.hash.split('#')[1];
	setSearch(search_string);
  }
  useEffect(
	parseUrl,
	// eslint-disable-next-line
	[]
  );

  return search;

}

export default useSearch;
