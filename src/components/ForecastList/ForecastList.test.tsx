/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../../store/store';
import ForecastList from './ForecastList';
import { Forecast } from '../../interfaces/forecast';

describe('<ForecastList /> component Unit Test', () => {
  const mockedForecast: Forecast[] = [
    { day: '', weather_icon: 'sun', weather_description: 'sunny', temp_min: 0, temp_max: 0 },
    { day: '', weather_icon: 'sun', weather_description: 'sunny', temp_min: 0, temp_max: 0 },
  ];

  const props = {
    forecast: mockedForecast,
  };

  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <ForecastList {...props} />
      </Provider>,
    );
  });

  it('should render 1 <ForecastList /> component', () => {
    expect(component).toHaveLength(1);
  });
});
