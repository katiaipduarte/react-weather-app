import React from 'react';
import { WeatherCardContainer } from './WeatherCard.style';
import { CurrentWeather } from '../../interfaces/current-weather';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  weather: CurrentWeather;
};

const WeatherCard = (props: Props) => {
  const { weather } = props;

  const renderWeatherCard = (): JSX.Element => {
    return (
      <>
        {Object.entries(weather).map((entry: [string, string | number], i: number) => {
          const label: string = entry[0].replace('_', ' ');
          const symbol: string = entry[0] === 'temperature' || entry[0] === 'feels_like' ? '\u00b0C' : '';

          return (
            <React.Fragment key={i}>
              {entry[0] === 'weather_icon' && entry[1] !== '' && <FontAwesomeIcon icon={entry[1] as IconProp} />}
              {entry[0] !== 'weather_icon' && (
                <p>
                  {label}:
                  <span>
                    {entry[1]}
                    {symbol}
                  </span>
                </p>
              )}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return <WeatherCardContainer>{renderWeatherCard()}</WeatherCardContainer>;
};

export default WeatherCard;
