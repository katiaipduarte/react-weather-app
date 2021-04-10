import { AnyAction } from 'redux';
import searchStateReducer, { getSelectedLocation } from './reducer';
import { INITIAL_SEARCH_STATE, SearchTypes } from './type';

describe('Test Suite for Search Store Reducer', () => {
  it('should return the initial state and action is undefined', () =>
    expect(searchStateReducer(undefined, {} as AnyAction)).toEqual(INITIAL_SEARCH_STATE));

  it('should update the search term selected', () => {
    const searchQuery = 'test';
    const updateSearchTermAction = {
      type: SearchTypes.SEARCH_QUERY,
      error: undefined,
      meta: undefined,
      payload: searchQuery,
    };

    expect(searchStateReducer(INITIAL_SEARCH_STATE, updateSearchTermAction).searchQuery).toEqual(searchQuery);
  });

  it('should clear the search term selected and the locations array', () => {
    const clearSearchAndLocationAction = {
      type: SearchTypes.SEARCH_CLEAR,
      error: undefined,
      meta: undefined,
      payload: null,
    };

    expect(searchStateReducer(INITIAL_SEARCH_STATE, clearSearchAndLocationAction).searchQuery).toEqual('');
    expect(searchStateReducer(INITIAL_SEARCH_STATE, clearSearchAndLocationAction).locations.length).toEqual(0);
  });

  it('should clear the search term, locations array be empty and update the search result', () => {
    const location = { city: 'city', country: 'country', lat: 10, lon: 10 };
    const searchFoundAction = {
      type: SearchTypes.SEARCH_FOUND,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    expect(searchStateReducer(INITIAL_SEARCH_STATE, searchFoundAction).searchQuery).toEqual('');
    expect(searchStateReducer(INITIAL_SEARCH_STATE, searchFoundAction).locations.length).toEqual(0);
    expect(searchStateReducer(INITIAL_SEARCH_STATE, searchFoundAction).searchedResult).toEqual(location);
  });

  it('should update locations array', () => {
    const locations = [
      { city: 'city', country: 'country', lat: 10, lon: 10 },
      { city: 'city2', country: 'country2', lat: 20, lon: 20 },
    ];
    const updateLocationArrayAction = {
      type: SearchTypes.SEARCH_ITEMS_LOAD,
      error: undefined,
      meta: undefined,
      payload: locations,
    };
    expect(searchStateReducer(INITIAL_SEARCH_STATE, updateLocationArrayAction).locations.length).toEqual(
      locations.length,
    );
  });

  it('should get the final search query adnd the search result undefined, since initial state does not have locations', () => {
    const searchQuery = 'city, country';

    const selectedSearchQueryAction = {
      type: SearchTypes.SEARCH_QUERY_SELECTED,
      error: undefined,
      meta: undefined,
      payload: searchQuery,
    };

    expect(searchStateReducer(INITIAL_SEARCH_STATE, selectedSearchQueryAction).searchQuery).toEqual(searchQuery);
    expect(searchStateReducer(INITIAL_SEARCH_STATE, selectedSearchQueryAction).searchedResult).toEqual(undefined);
  });

  it('should return select location, given only city and locations array', () => {
    const searchTerm = 'city';
    const location = [
      { city: 'city2', country: 'country2', lat: 20, lon: 20 },
      { city: 'city', country: 'country', lat: 10, lon: 10 },
    ];
    expect(getSelectedLocation(searchTerm, location)).toEqual(location[1]);
  });

  it('should return select location, given the city and country and locations array', () => {
    const searchTerm = 'city2, country2';
    const location = [
      { city: 'city2', country: 'country2', lat: 20, lon: 20 },
      { city: 'city', country: 'country', lat: 10, lon: 10 },
    ];
    expect(getSelectedLocation(searchTerm, location)).toEqual(location[0]);
  });
});
