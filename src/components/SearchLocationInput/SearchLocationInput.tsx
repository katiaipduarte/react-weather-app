import { faSearchLocation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, KeyboardEvent, MouseEvent, FocusEvent, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Location } from '../../interfaces/location';
import LocationProvider from '../../lib/location-provider';
import { addSearchItems, clearSearch, doSearch, updateSearchResult } from '../../store/search/action';
import { GlobalState } from '../../store/store';
import { SearchBarContainer } from './SearchLocationInput.style';

const SearchLocationInput = (): JSX.Element => {
  const history = useHistory();
  const searchState = useSelector((state: GlobalState) => state.searchState);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSearchOptions, setShowSearchOptions] = useState<boolean>(false);
  const [active, setActive] = useState(-1);

  const [locations, setLocations] = useState<Location[]>([]);
  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  const { searchForPlaces } = LocationProvider();
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return function cleanup() {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [showSearchOptions]);

  const handleClickOutside = (event: Event): void => {
    const target = event.target as HTMLElement;

    if (
      showSearchOptions &&
      !(target.closest('input') || target.closest('li') || document.querySelector('form')?.contains(target))
    ) {
      setShowSearchOptions(false);
      setActive(-1);
    }
  };

  const handleClearSearch = (): void => {
    setShowSearchOptions(false);
    dispatch(clearSearch());
    setSearchTerm('');
    setActive(-1);
    setShowClearButton(false);
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setSearchTerm(event.target.value);
    setShowClearButton(event.target.value.length !== 0);

    if (event.target.value.length >= 3) {
      search(event.target.value);
      setShowSearchOptions(true);
      dispatch(doSearch(event.target.value));
    } else {
      setShowSearchOptions(false);
    }
  };

  const search = async (searchTerm: string): Promise<void> => {
    searchForPlaces(searchTerm).then((locations: Location[]) => {
      setLocations(locations);
      dispatch(addSearchItems(locations));
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (searchTerm.length >= 3 && (searchState.locations.length !== 0 || locations.length !== 0)) {
      if (event.keyCode === 13) {
        onClickSearchOption(searchTerm);
      } else {
        if (event.keyCode === 38) {
          event.preventDefault();

          const nextActive = active > -1 ? active - 1 : searchState.locations.length - 1;
          previewSearchOption(nextActive);
        } else if (event.keyCode === 40) {
          event.preventDefault();

          const nextActive = active < searchState.locations.length - 1 ? active + 1 : -1;
          previewSearchOption(nextActive);
        }
      }
    }
  };

  const handleMGBClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    if (searchTerm.length >= 3 && (searchState.locations.length !== 0 || locations.length !== 0)) {
      onClickSearchOption(searchTerm);
    }
  };

  const previewSearchOption = (newIndex: number): void => {
    setActive(newIndex);
    const query =
      newIndex === -1
        ? searchState.searchQuery
        : `${searchState.locations[newIndex].city}, ${searchState.locations[newIndex].country}`;
    setSearchTerm(query);
  };

  const onClickSearchOption = (item: string): void => {
    if (item !== '') {
      setShowSearchOptions(false);
      setSearchTerm(item);
      setActive(-1);
      dispatch(updateSearchResult(item));

      createNewUrl(item);
    }
  };

  const createNewUrl = (item: string): void => {
    const city = item.split(', ')[0].replace(/\s+/g, '-').toLowerCase();
    history.push(`/${city}`);
  };

  const renderEmptySearch = (): JSX.Element => {
    return (
      <ul id="no-search-options">
        <li id="no-results">
          No results found for <i>{searchTerm}</i>
        </li>
      </ul>
    );
  };

  const renderSearchOptions = (): JSX.Element => {
    return (
      <ul id="search-options">
        {locations.map(
          (location: Location, index: number): JSX.Element => {
            return (
              <li key={index} onClick={() => onClickSearchOption(`${location.city}, ${location.country}`)}>
                {location.city}, {location.country}
              </li>
            );
          },
        )}
      </ul>
    );
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();

    if (searchTerm.length >= 3) {
      search(searchTerm);
      setShowSearchOptions(true);
      dispatch(doSearch(searchTerm));
    }
  };

  return (
    <SearchBarContainer>
      <form className={showSearchOptions ? 'open-search-dropdown' : ''}>
        <button
          id="search-term-btn"
          aria-label="Click to search"
          onClick={(event: MouseEvent<HTMLButtonElement>) => handleMGBClick(event)}
        >
          <FontAwesomeIcon icon={faSearchLocation} />
        </button>

        <input
          type="text"
          placeholder="Get weather for new locations..."
          value={searchTerm}
          maxLength={50}
          onChange={(event) => handleChange(event)}
          onKeyDown={(event) => handleKeyDown(event)}
          onFocus={(event) => handleFocus(event)}
        />
        <button
          id="clear-search-term-btn"
          aria-label="Click to clear search"
          onClick={() => handleClearSearch()}
          style={{ visibility: showClearButton ? 'initial' : 'hidden' }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </form>
      {showSearchOptions && searchState.locations.length === 0 && locations.length === 0 && renderEmptySearch()}
      {showSearchOptions && (searchState.locations.length !== 0 || locations.length !== 0) && renderSearchOptions()}
    </SearchBarContainer>
  );
};

export default SearchLocationInput;
