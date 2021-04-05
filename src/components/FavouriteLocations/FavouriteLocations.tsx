import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/store';
import { FavouriteLocationsContainer } from './FavouriteLocations.style';

const FavouriteLocations = () => {
  const favourites = useSelector((state: GlobalState) => state.favouriteLocationsState);
  const symbol = '\u00b0C';

  const renderEmptyFavourites = (): JSX.Element => {
    return <></>;
  };

  const renderFavourites = (): JSX.Element => {
    return <></>;
  };

  return (
    <FavouriteLocationsContainer>
      {favourites.locations.length === 0 && renderEmptyFavourites()}
      {favourites.locations.length !== 0 && renderFavourites()}
    </FavouriteLocationsContainer>
  );
};

export default FavouriteLocations;
