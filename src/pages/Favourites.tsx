import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import backgroundImage from '../assets/background.jpg';
import FavouriteLocations from '../components/FavouriteLocations/FavouriteLocations';
import { LocationWeatherInformation } from '../interfaces/location-weather-info';
import { GlobalState } from '../store/store';

const Favourites = () => {
  const favouritesLocations = useSelector((state: GlobalState) => state.favouriteLocationsState);
  const [locations, setLocations] = useState<LocationWeatherInformation[]>();

  useEffect(() => {
    setLocations(favouritesLocations.favourites);
  }, [favouritesLocations.favourites]);

  return (
    <>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        {locations === undefined && (
          <div className="page-loader">
            <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
          </div>
        )}
        {locations !== undefined && <FavouriteLocations locations={locations} />}
      </main>
    </>
  );
};

export default Favourites;
