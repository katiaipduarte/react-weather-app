import React, { useState } from 'react';
import { Temperature } from '../../interfaces/temperature';
import { WeatherCardContainer } from './WeatherCard.style';
import { FiPlusSquare } from 'react-icons/fi';

type Props = {
  weather: any;
};

const WeatherCard = (props: Props) => {
  const { weather } = props;
  const [showFullTempInfo, setShowFullTempInfo] = useState<boolean>(false);

  const renderWeatherCard = (): JSX.Element => {
    return (
      <>
        {Object.entries(weather).map((entry: [string, any], i: number) => {
          return (
            <React.Fragment key={i}>
              {entry[0] === 'temp' && renderTemperature(entry[1])}
              {entry[0] !== 'temp' && (
                <p>
                  {entry[0]}: <span>{entry[1]}</span>
                </p>
              )}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  const renderTemperature = (temp: Temperature): JSX.Element => {
    return (
      <>
        {Object.entries(temp).map((entry: [string, number], i: number) => {
          const label: string = entry[0].replace('temp', 'temperature').replace('_', ' ');
          const symbol: string = entry[0].includes('temp') ? '\u00b0C' : '';

          return (
            <React.Fragment key={i}>
              <p style={{ display: showFullTempInfo || label === 'temperature' ? 'inherit' : 'none' }}>
                {label}:
                <span>
                  {entry[1]}
                  {symbol}
                </span>
                {label === 'temperature' && (
                  <button
                    onClick={() => setShowFullTempInfo(!showFullTempInfo)}
                    aria-label="Click to see all temperature related information"
                  >
                    <FiPlusSquare />
                  </button>
                )}
              </p>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return <WeatherCardContainer>{renderWeatherCard()}</WeatherCardContainer>;
};

export default WeatherCard;
