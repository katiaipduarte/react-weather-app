import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForecastList from '../components/ForecastList/ForecastList';
import CurrentWeatherInfo from '../components/CurrentWeatherInfo/CurrentWeatherInfo';
import { Location } from '../interfaces/location';
import { Weather } from '../interfaces/weather';
import LocationProvider from '../lib/location-provider';
import WeatherProvider from '../lib/weather-provider';
import { updateCurrentGeoLocation } from '../store/current-location/action';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';
import { GlobalState } from '../store/store';

const CurrentLocation = () => {
  const dispatch = useDispatch();
  const { getWeather } = WeatherProvider();
  const [weather, setWeather] = useState<Weather>();
  const currLocation = useSelector((state: GlobalState) => state.currentLocationState);

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords: Location = { city: '', country: '', lat: position.coords.latitude, lon: position.coords.longitude };
      LocationProvider().getLocationByCoords(position.coords.latitude, position.coords.longitude);
      dispatch(updateCurrentGeoLocation(coords));
      getWeather(position.coords.latitude, position.coords.longitude).then((weather: Weather) => setWeather(weather));
    });
  };

  return (
    <>
      <Navbar />
      {weather !== undefined && (
        <main style={{ backgroundImage: `url(${backgroundImage})` }}>
          <CurrentWeatherInfo weather={weather.today} city={currLocation.city} country={currLocation.country} />
          <ForecastList forecast={weather.forecast} />
        </main>
      )}
    </>
  );
};

export default CurrentLocation;
