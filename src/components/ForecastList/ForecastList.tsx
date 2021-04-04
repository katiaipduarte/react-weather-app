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
          const symbol = '\u00b0';

          return (
            <React.Fragment key={i}>
              <div className="flex-forecast">
                <p>{entry.day}</p>
                {entry.weather_icon !== '' && <FontAwesomeIcon icon={entry.weather_icon as IconProp} />}
                <p>
                  {entry.temp_min}
                  {symbol} / {entry.temp_max}
                  {symbol}
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
