import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render input for number of events', () => {
    expect(NumberOfEventsWrapper.find('#numberOfEvents__input')).toHaveLength(
      1
    );
  });

  test('render default input for number of events of 32', () => {
    expect(
      NumberOfEventsWrapper.find('#numberOfEvents__input').prop('value')
    ).toBe(32);
  });
});