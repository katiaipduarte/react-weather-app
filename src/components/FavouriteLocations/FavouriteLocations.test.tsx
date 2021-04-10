/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../../store/store';
import FavouriteLocations from './FavouriteLocations';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<FavouriteLocations /> component Unit Test', () => {
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  describe('should render empty message', () => {
    const mockedLocations: LocationWeatherInformation[] = [];

    const props = {
      locations: mockedLocations,
    };

    beforeEach(() => {
      component = mount(
        <Provider store={store}>
          <FavouriteLocations {...props} />
        </Provider>,
      );
    });

    it('should render 1 <FavouriteLocations /> component', () => {
      expect(component).toHaveLength(1);
    });

    it('should render empty message', () => {
      expect(component.find('h2')).toHaveLength(1);
      expect(component.find('h2').get(0).props.children).toEqual("You don't have any favourite locations yet!");
    });
  });

  describe('should render Locations', () => {
    const mockedLocations: LocationWeatherInformation[] = [
      {
        location: { city: 'city', country: 'country', lat: 0, lon: 0 },
        weather: {
          date: '',
          temperature: 20,
          feels_like: 20,
          weather_icon: 'sun',
          weather_description: '',
          humidity: '',
          wind: '',
        },
      },
      {
        location: { city: 'city2', country: 'country2', lat: 0, lon: 0 },
        weather: {
          date: '',
          temperature: 20,
          feels_like: 20,
          weather_icon: 'sun',
          weather_description: '',
          humidity: '',
          wind: '',
        },
      },
    ];

    const props = {
      locations: mockedLocations,
    };

    beforeEach(() => {
      component = mount(
        <Provider store={store}>
          <FavouriteLocations {...props} />
        </Provider>,
      );
    });

    it('should render 1 <FavouriteLocations /> component', () => {
      expect(component).toHaveLength(1);
    });

    it('should render Locations list with 2 items and be able to select one', () => {
      expect(component.find('ul')).toHaveLength(1);
      expect(component.find('li')).toHaveLength(2);

      component.find('li').at(0).simulate('click');

      expect(mockHistoryPush).toHaveBeenCalledWith('/city/country');
    });
  });
});
