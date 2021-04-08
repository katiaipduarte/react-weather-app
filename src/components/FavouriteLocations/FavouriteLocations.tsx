import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import { GlobalState } from '../../store/store';
import { FavouriteLocationsContainer } from './FavouriteLocations.style';

type Props = {
  locations: LocationWeatherInformation[];
};

const FavouriteLocations = (props: Props) => {
  const { locations } = props;
  const symbol = '\u00b0C';
  const history = useHistory();

  const onSelectLocation = (location: LocationWeatherInformation): void => {
    const city = location.location.city.replace(/\s+/g, '-').toLowerCase();
    const country = location.location.country.replace(/\s+/g, '-').toLowerCase();
    history.push(`/${city}/${country}`);
  };

  const renderEmptyFavourites = (): JSX.Element => {
    return <h2>You don't have any favourite locations yet!</h2>;
  };

  const renderFavourites = (): JSX.Element => {
    return (
      <ul>
        {locations.map(
          (entry: LocationWeatherInformation, index: number): JSX.Element => {
            return (
              <li key={index} onClick={() => onSelectLocation(entry)}>
                <div>
                  <p>{entry.location.city}</p>
                  <p className="weather-forecast-info">
                    {entry.weather?.today.weather_icon !== '' && (
                      <FontAwesomeIcon icon={entry.weather?.today.weather_icon as IconProp} />
                    )}
                    <span>{`${entry.weather?.today.temperature} ${symbol}`}</span>
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
      {locations.length === 0 && renderEmptyFavourites()}
      {locations.length !== 0 && renderFavourites()}
    </FavouriteLocationsContainer>
  );
};

export default FavouriteLocations;
