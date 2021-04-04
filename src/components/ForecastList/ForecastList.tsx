import React from 'react';
import { Forecast } from '../../interfaces/forecast';
import { List } from './ForecastList.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  forecast: Forecast[];
};

const ForecastList = (props: Props) => {
  const { forecast } = props;

  const renderList = (): JSX.Element => {
    return (
      <>
        {forecast.map((entry: Forecast, i: number) => {
          const symbol = '\u00b0C';

          return (
            <React.Fragment key={i}>
              <div className="flex-forecast">
                <p>{entry.day}</p>
                <p className="weather-forecast-info">
                  {entry.weather_icon !== '' && <FontAwesomeIcon icon={entry.weather_icon as IconProp} />}
                  <span>{`${entry.temp_max} ${symbol}`}</span>
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return <List aria-label="forecast data">{renderList()}</List>;
};

export default ForecastList;
