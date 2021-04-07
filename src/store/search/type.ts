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
  searchedResult: {} as Location,
};
