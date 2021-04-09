/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import FavouriteButton from './FavouriteButton';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import store from '../../store/store';

describe('<FavouriteButton /> component Unit Test', () => {
  const mockedInformation: LocationWeatherInformation = {
    location: { city: '', country: 'country', lat: 10, lon: 10 },
    weather: {
      date: '',
      temperature: 20,
      feels_like: 20,
      weather_icon: 'icon',
      weather_description: '',
      humidity: '',
      wind: '',
    },
  };
  const props = {
    information: mockedInformation,
  };
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <FavouriteButton {...props} />
      </Provider>,
    );
  });

  it('should render 1 <FavouriteButton /> component, with 2 buttons', () => {
    expect(component).toHaveLength(1);
    expect(component.find('button').length).toEqual(2);
  });

  it('should only have one button visible', () => {
    expect(component.find('.unfavourite-btn').get(0).props.style.display).toEqual('none');
    expect(component.find('.favourite-btn').get(0).props.style.display).toEqual('flex');
  });

  it('should change button visibility on click', () => {
    expect(component.find('.favourite-btn').get(0).props.style.display).toEqual('flex');
    component.find('.favourite-btn').at(0).simulate('click');
    expect(component.find('.favourite-btn').get(0).props.style.display).toEqual('none');
    expect(component.find('.unfavourite-btn').get(0).props.style.display).toEqual('flex');
  });
});
