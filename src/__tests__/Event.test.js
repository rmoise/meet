import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("test that component is rendered", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("test that event wrapping div is rendered", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("test that event wrapping div just shows event__Overview", () => {
    expect(EventWrapper.find(".event").children()).toHaveLength(1);
  });

  test("test that event__Overview is rendered", () => {
    expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
  });

  test("test that event__Overview children are rendered", () => {
    expect(EventWrapper.find(".event__Overview").children()).toHaveLength(4);
  });


    test('Do not render details by default', () => {
    expect(EventWrapper.find('.event__Details')).toHaveLength(0);
  });

    test('Render details when show details button is clicked', () => {
    EventWrapper.find('.details-btn').at(0).simulate('click');
    expect(EventWrapper.find('.event__Details')).toHaveLength(1);
  });

  test('render button to hide details when details visible', () => {
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('Do not render details when hide details button is clicked', () => {
    EventWrapper.setState({ detailsVisible: true });
    EventWrapper.find('.details-btn').at(0).simulate('click');
    expect(EventWrapper.find('.event__Details')).toHaveLength(0);
  });
});