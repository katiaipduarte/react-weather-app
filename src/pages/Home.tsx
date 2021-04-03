import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import { Location } from '../interfaces/location';
import { Weather } from '../interfaces/weather';
import WeatherProvider from '../lib/weather-provider';
import { updateCurrentLocation } from '../store/current-location/action';

const Home = () => {
  const dispatch = useDispatch();
  const { getWeatherByCoords } = WeatherProvider();
  const [currLocationWeather, setCurrLocationWeather] = useState<Weather>();

  useEffect(() => {
    fetchCurrentLocation();
    getWeatherByCoords().then((weather: Weather) => setCurrLocationWeather(weather));
  }, []);

  const fetchCurrentLocation = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords: Location = { lat: position.coords.latitude, lon: position.coords.longitude };
      dispatch(updateCurrentLocation(coords));
    });
  };

  return <>{currLocationWeather !== undefined && <WeatherCard weather={currLocationWeather} />}</>;
};

export default Home;
