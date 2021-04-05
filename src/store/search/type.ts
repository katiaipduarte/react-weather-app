import { Location } from '../../interfaces/location';

export const SearchTypes = {
  SEARCH_ITEMS_LOAD: '@@SEARCH/SEARCH_ITEMS_LOAD',
  SEARCH_QUERY: '@@SEARCH/SEARCH_QUERY',
  SEARCH_CLEAR: '@@SEARCH/SEARCH_CLEAR',
  SEARCH_FOUND: '@@SEARCH/SEARCH_FOUND',
  SEARCH_QUERY_SELECTED: '@@SEARCH/SEARCH_QUERY_SELECTED',
};

export interface SearchState {
  searchQuery: string;
  locations: Location[];
  searchedResult: Location;
}

export const INITIAL_SEARCH_STATE: SearchState = {
  searchQuery: '',
  locations: [],
  searchedResult: {
    city: 'Lisbon',
    country: 'Portugal',
    lat: 38.7259284,
    lon: -9.137382, //Original value: -9.137382,17 but since it's not reading the float it was rounded to -9.137382
  },
};
