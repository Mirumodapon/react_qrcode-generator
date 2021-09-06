import { useState, useEffect } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState({});
  const parseUrl = (location=window.location) => {
    if (!search) return;
    const search_string = location.search.split('?')[1];
	if (!search_string) return;
	const values = search_string.split('&');

	const payload = {};
	for (let i of values) {
	  const [key, value] = i.split('=');
	  payload[key] = value;

	}
	setSearch(payload);
  }
  useEffect(
	parseUrl,
	// eslint-disable-next-line
	[]
  );

  return search;

}

export default useSearch;
