/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../../store/store';
import { CurrentWeather } from '../../interfaces/current-weather';
import CurrentWeatherInfo from './CurrentWeatherInfo';

describe('<CurrentWeatherInfo /> component Unit Test', () => {
  const mockedWeather: CurrentWeather = {
    date: '',
    temperature: 20,
    feels_like: 20,
    weather_icon: 'sun',
    weather_description: '',
    humidity: '',
    wind: '',
  };

  const props = {
    weather: mockedWeather,
    country: 'country',
    city: 'city',
  };

  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <CurrentWeatherInfo {...props} />
      </Provider>,
    );
  });

  it('should render 1 <CurrentWeatherInfo /> component', () => {
    expect(component).toHaveLength(1);
  });
});
