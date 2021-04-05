import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FavouriteButtonContainer } from './FavouriteButton.style';
import { addFavouriteLocation, deleteFavouriteLocation } from '../../store/favourite-locations/action';
import { useDispatch } from 'react-redux';
import { Location } from '../../interfaces/location';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

type Props = {
  location: Location;
};

const FavouriteButton = (props: Props) => {
  const { location } = props;
  const [showFavButton, setShowFavButton] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onFavouriteLocation = (): void => {
    dispatch(addFavouriteLocation(location));
    setShowFavButton(true);
  };

  const onUnfavouriteLocation = (): void => {
    dispatch(deleteFavouriteLocation(location));
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
