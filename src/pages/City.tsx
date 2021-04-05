import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';
import CurrentWeatherInfo from '../components/CurrentWeatherInfo/CurrentWeatherInfo';
import ForecastList from '../components/ForecastList/ForecastList';
import { Weather } from '../interfaces/weather';
import WeatherProvider from '../lib/weather-provider';
import { useSelector } from 'react-redux';
import { GlobalState } from '../store/store';

type Props = {
  match: {
    params: {
      city: string;
    };
  };
};

const City = (props: Props) => {
  const { match } = props;
  const { city } = match.params;

  const { getWeather } = WeatherProvider();
  const [weather, setWeather] = useState<Weather>();
  const searchState = useSelector((state: GlobalState) => state.searchState);

  useEffect(() => {
    getWeather(searchState.searchedResult.lat, searchState.searchedResult.lon).then((weather: Weather) =>
      setWeather(weather),
    );
  }, []);

  return (
    <>
      <Navbar />
      {weather !== undefined && (
        <main style={{ backgroundImage: `url(${backgroundImage})` }}>
          <CurrentWeatherInfo
            weather={weather.today}
            city={searchState.searchedResult.city}
            country={searchState.searchedResult.country}
          />
          <ForecastList forecast={weather.forecast} />
        </main>
      )}
    </>
  );
};

export default City;
