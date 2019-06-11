import React from 'react';
import { shallow } from 'enzyme'

import App from './App.js';

describe('App component', () => {
  const app = shallow(<App />);
  
  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should initialize the state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the "add gift" button', () => {
    const GIFT_ID = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });
    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('should add a new gift to state', () => {
      expect(app.state().gifts).toEqual([{ id: GIFT_ID }]);
    });

    it('should add a new gift to gift list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should create a new Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and removind the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(GIFT_ID);
      });

      it('should remove the gift from gift-list', () => {
        expect(app.find('Gift').exists()).toBe(false);
      });
    });
  });
});
