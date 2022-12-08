import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, test => {
    let AppWrapper;
    // Scenario 1
     test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the list of events is open', async () => {
             AppWrapper = await mount(<App />);
             AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);

        });

        when('the user is viewing upcoming events', () => {

        });

        then('all event details should be hidden', () => {
            expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
        });
    });

    // Scenario 2
     test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the list of events is open', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

        when('the user clicks on show details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

        then('the event details of that event should be shown', () => {
            expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
        });
    });

    // Scenario 3
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has viewed an event', () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
        });

        when('the user clicks on hide details', () => {
        AppWrapper.update();
        AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });



        then('the user should be able to hide an event by clicking on the hide details button', () => {
            expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
        });
    });

});