import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import { GlobalState } from '../../store/store';
import { FavouriteLocationsContainer } from './FavouriteLocations.style';

const FavouriteLocations = () => {
  const favouritesLocations = useSelector((state: GlobalState) => state.favouriteLocationsState);
  const symbol = '\u00b0C';
  const history = useHistory();

  const onSelectLocation = (location: LocationWeatherInformation): void => {
    const city = location.location.city.split(', ')[0].replace(/\s+/g, '-').toLowerCase();
    history.push(`/${city}`);
  };

  const renderEmptyFavourites = (): JSX.Element => {
    return <h2>You don't have any favourite locations yet!</h2>;
  };

  const renderFavourites = (): JSX.Element => {
    return (
      <ul>
        {favouritesLocations.favourites.map(
          (entry: LocationWeatherInformation, index: number): JSX.Element => {
            return (
              <li key={index} onClick={() => onSelectLocation(entry)}>
                <div>
                  <p>{entry.location.city}</p>
                  <p className="weather-forecast-info">
                    {entry.weather.today.weather_icon !== '' && (
                      <FontAwesomeIcon icon={entry.weather.today.weather_icon as IconProp} />
                    )}
                    <span>{`${entry.weather.today.temperature} ${symbol}`}</span>
                  </p>
                </div>
              </li>
            );
          },
        )}
      </ul>
    );
  };

  return (
    <FavouriteLocationsContainer>
      {favouritesLocations.favourites.length === 0 && renderEmptyFavourites()}
      {favouritesLocations.favourites.length !== 0 && renderFavourites()}
    </FavouriteLocationsContainer>
  );
};

export default FavouriteLocations;
