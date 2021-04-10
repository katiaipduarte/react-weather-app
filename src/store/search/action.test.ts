import * as actions from './action';
import { SearchTypes } from './type';

describe('Test Suite for Search Store Actions', () => {
  it('should update the search term selected', () => {
    const searchQuery = 'test';
    const expectAction = {
      type: SearchTypes.SEARCH_QUERY,
      error: undefined,
      meta: undefined,
      payload: searchQuery,
    };

    expect(actions.doSearch(searchQuery)).toEqual(expectAction);
  });

  it('should clear the search term selected and the results', () => {
    const expectAction = {
      type: SearchTypes.SEARCH_CLEAR,
      error: undefined,
      meta: undefined,
      payload: null,
    };

    expect(actions.clearSearch()).toEqual(expectAction);
  });

  it('should clear the search term and update the search result', () => {
    const location = { city: 'city', country: 'country', lat: 10, lon: 10 };
    const expectAction = {
      type: SearchTypes.SEARCH_FOUND,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    expect(actions.choosenOne(location)).toEqual(expectAction);
  });

  it('should update options for search items', () => {
    const locations = [
      { city: 'city', country: 'country', lat: 10, lon: 10 },
      { city: 'city2', country: 'country2', lat: 20, lon: 20 },
    ];
    const expectAction = {
      type: SearchTypes.SEARCH_ITEMS_LOAD,
      error: undefined,
      meta: undefined,
      payload: locations,
    };

    expect(actions.addSearchItems(locations)).toEqual(expectAction);
  });

  it('should get the final search query', () => {
    const searchQuery = 'city, country';
    const expectAction = {
      type: SearchTypes.SEARCH_QUERY_SELECTED,
      error: undefined,
      meta: undefined,
      payload: searchQuery,
    };

    expect(actions.updateSearchResult(searchQuery)).toEqual(expectAction);
  });
});
