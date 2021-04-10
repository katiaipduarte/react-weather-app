/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../../store/store';
import Navbar from './Navbar';
import { HashRouter } from 'react-router-dom';

describe('<Navbar /> component Unit Test', () => {
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <HashRouter>
          <Navbar />
        </HashRouter>
      </Provider>,
    );
  });

  it('should render 1 <Navbar /> component', () => {
    expect(component).toHaveLength(1);
  });

  it('should add active to className in ul, when clicking the faBars icon', () => {
    const toggle = component.find('.toggle');
    expect(toggle).toBeTruthy();
    expect(component.find('ul').get(0).props.className).toEqual('menu');

    toggle.find('a').at(0).simulate('click');
    expect(component.find('ul').get(0).props.className).toEqual('menu active');
  });
});
