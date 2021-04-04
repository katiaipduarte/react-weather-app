import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ForecastList from '../components/ForecastList/ForecastList';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import { Location } from '../interfaces/location';
import { Weather } from '../interfaces/weather';
import WeatherProvider from '../lib/weather-provider';
import { updateCurrentLocation } from '../store/current-location/action';

const Home = () => {
  const dispatch = useDispatch();
  const { getWeather } = WeatherProvider();
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    fetchCurrentLocation();
    getWeather().then((weather: Weather) => setWeather(weather));
  }, []);

  const fetchCurrentLocation = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords: Location = { lat: position.coords.latitude, lon: position.coords.longitude };
      dispatch(updateCurrentLocation(coords));
    });
  };

  return (
    <>
      {weather !== undefined && (
        <>
          <WeatherCard weather={weather.today} />
          <ForecastList forecast={weather.forecast} />
        </>
      )}
    </>
  );
};

export default Home;
