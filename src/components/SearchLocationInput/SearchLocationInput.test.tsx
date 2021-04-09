/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../../store/store';
import SearchLocationInput from './SearchLocationInput';

describe('<SearchLocationInput /> component Unit Test', () => {
  let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <SearchLocationInput />
      </Provider>,
    );
  });

  it('should render 1 <SearchLocationInput /> component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('form')).toHaveLength(1);
  });

  it('should not show clear button if input is empty', () => {
    expect(component.find('input').get(0).props.value).toBe('');
    expect(component.find('#clear-search-term-btn').get(0).props.style.visibility).toBe('hidden');
  });

  it('should show clear button if input is not empty', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: 'Hello' } });
    expect(component.find('#clear-search-term-btn').get(0).props.style.visibility).toBe('initial');
  });

  it('should clear input on click clear button', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: 'Hello' } });

    const clearBtn = component.find('#clear-search-term-btn');
    clearBtn.simulate('click');

    expect(component.find('input').get(0).props.value).toBe('');
    expect(component.find('#clear-search-term-btn').get(0).props.style.visibility).toBe('hidden');
  });

  it('should not show dropdown options if the input has less than 3 char', () => {
    const input = component.find('input');
    input.simulate('change', { target: { value: 'He' } });

    expect(component.find('form').get(0).props.className).toBe('');
  });

  it('should render an input of type text and allows at max 50 char', () => {
    const input = component.find('input');
    expect(input.get(0).props.type).toBe('text');
    expect(input.get(0).props.maxLength).toBe(50);
  });
});
