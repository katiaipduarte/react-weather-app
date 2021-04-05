import { action, PayloadAction } from 'typesafe-actions';
import { Location } from '../../interfaces/location';
import { SearchTypes } from './type';

export const doSearch = (searchQuery: string): PayloadAction<string, string> =>
  action(SearchTypes.SEARCH_QUERY, searchQuery);

export const clearSearch = (): PayloadAction<string, null> => action(SearchTypes.SEARCH_CLEAR, null);

export const choosenOne = (location_selected: Location): PayloadAction<string, Location> =>
  action(SearchTypes.SEARCH_FOUND, location_selected);

export const addSearchItems = (locations: Location[]): PayloadAction<string, any> =>
  action(SearchTypes.SEARCH_ITEMS_LOAD, locations);

export const updateSearchResult = (searchQuery: string): PayloadAction<string, string> =>
  action(SearchTypes.SEARCH_QUERY_SELECTED, searchQuery);
