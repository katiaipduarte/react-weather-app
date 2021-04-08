import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useCookies } from 'react-cookie';

import { FavouriteButtonContainer } from './FavouriteButton.style';
import { addFavouriteLocation, deleteFavouriteLocation } from '../../store/favourite-locations/action';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import { GlobalState } from '../../store/store';

type Props = {
  information: LocationWeatherInformation;
};

const FavouriteButton = (props: Props) => {
  const { information } = props;
  const [showFavButton, setShowFavButton] = useState<boolean>(false);
  const favouritesLocations = useSelector((state: GlobalState) => state.favouriteLocationsState);
  const [cookies, setCookie] = useCookies([favouritesLocations.cookie_key]);

  const dispatch = useDispatch();

  useEffect(() => {
    const isFavourite = favouritesLocations.favourites.find(
      (i: LocationWeatherInformation) =>
        i.location.city === information.location.city && i.location.country === information.location.country,
    );

    setShowFavButton(isFavourite !== undefined);
  }, [favouritesLocations.favourites]);

  useEffect(() => {
    setCookie(favouritesLocations.cookie_key, favouritesLocations.favourites);
  }, [favouritesLocations.favourites]);

  const onFavouriteLocation = (): void => {
    dispatch(addFavouriteLocation(information));
    setShowFavButton(true);
  };

  const onUnfavouriteLocation = (): void => {
    dispatch(deleteFavouriteLocation(information));
    setShowFavButton(false);
  };

  return (
    <>
      <FavouriteButtonContainer
        onClick={() => onUnfavouriteLocation()}
        style={{ display: showFavButton ? 'flex' : 'none' }}
        title="Unfavourite Location"
        aria-label="Unfavourite Location"
      >
        <FontAwesomeIcon icon={faHeart} />
      </FavouriteButtonContainer>
      <FavouriteButtonContainer
        onClick={() => onFavouriteLocation()}
        style={{ display: showFavButton ? 'none' : 'flex' }}
        title="Favourite Location"
        aria-label="Favourite Location"
      >
        <FontAwesomeIcon icon={farHeart} />
      </FavouriteButtonContainer>
    </>
  );
};

export default FavouriteButton;
