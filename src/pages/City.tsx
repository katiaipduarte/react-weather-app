import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/background.jpg';
import CurrentWeatherInfo from '../components/CurrentWeatherInfo/CurrentWeatherInfo';
import ForecastList from '../components/ForecastList/ForecastList';
import { Weather } from '../interfaces/weather';
import WeatherProvider from '../lib/weather-provider';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../store/store';
import FavouriteButton from '../components/FavouriteButton/FavouriteButton';
import { LocationWeatherInformation } from '../interfaces/location-weather-info';
import { recentlyViewed } from '../store/recently-viewed/action';
import LocationProvider from '../lib/location-provider';
import { Location } from '../interfaces/location';
import Loader from 'react-loader-spinner';
import { CurrentWeather } from '../interfaces/current-weather';

type Props = {
  match: {
    params: {
      city: string;
      country: string;
    };
  };
};

const City = ({ match }: Props) => {
  const { getWeather } = WeatherProvider();

  const searchState = useSelector((state: GlobalState) => state.searchState);
  const locations = useSelector((state: GlobalState) => state.recentlyViewedState);
  const dispatch = useDispatch();

  const [weather, setWeather] = useState<Weather>();
  const [location, setLocation] = useState<Location>(searchState.searchedResult);

  useEffect(() => {
    const found = alreadyViewedLocation();

    if (
      !found ||
      searchState.searchedResult.city === '' ||
      (searchState.searchedResult.city !== match.params.city &&
        searchState.searchedResult.country !== match.params.country)
    ) {
      LocationProvider()
        .getLocationByName(match.params.city, match.params.country)
        .then((response: Location) => {
          setLocation(response);
          getWeatherInformation(response.lat, response.lon);
        });
    } else {
      getWeatherInformation(searchState.searchedResult.lat, searchState.searchedResult.lon);
    }
  }, []);

  const getWeatherInformation = (lat: number, lon: number): void => {
    getWeather(lat, lon).then((weather: Weather) => {
      setWeather(weather);
      dispatch(recentlyViewed(treatDataToFavourite()));
    });
  };

  const alreadyViewedLocation = (): LocationWeatherInformation | undefined => {
    return locations.viewed.find(
      (i: LocationWeatherInformation) =>
        i.location.city === searchState.searchedResult.city &&
        i.location.country === searchState.searchedResult.country,
    );
  };

  const treatDataToFavourite = (): LocationWeatherInformation => {
    return {
      location: searchState.searchedResult.city === undefined ? (location as Location) : searchState.searchedResult,
      weather: weather?.today as CurrentWeather,
    };
  };

  return (
    <>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        {weather === undefined && location === undefined && (
          <div className="page-loader">
            <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
          </div>
        )}
        {weather !== undefined && location !== undefined && (
          <>
            <FavouriteButton information={treatDataToFavourite()} />
            <CurrentWeatherInfo weather={weather.today} city={location.city} country={location.country} />
            <ForecastList forecast={weather.forecast} />
          </>
        )}
      </main>
    </>
  );
};

export default City;
