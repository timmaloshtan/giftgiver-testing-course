import React from 'react';
import { mount } from 'enzyme';

import Gift from './Gift';

describe('Gift component', () => {
  const removeGift = jest.fn();
  const GIFT_ID = 1;

  const props = {
    removeGift,
    gift: { id: GIFT_ID },
  };

  const gift = mount(<Gift {...props} />);

  it('should render properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('should initialize a person and a present in state', () => {
    expect(gift.state()).toEqual({
      person: '',
      present: '',
    });
  });

  describe('when typing into the person input', () => {
    const PERSON = 'Dad';

    beforeEach(() => {
      gift.find('.input-person').at(0).simulate('change', { target: { value: PERSON } });
    });

    it('should update the person in state', () => {
      expect(gift.state().person).toEqual(PERSON);
    })
    
  });
  
  describe('when typing into the present input', () => {
    const PRESENT = 'Golf clubs';

    beforeEach(() => {
      gift.find('.input-present').at(0).simulate('change', { target: { value: PRESENT } });
    });

    it('should update the present in state', () => {
      expect(gift.state().present).toEqual(PRESENT);
    });
  });

  describe('when clicking the remove button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').at(0).simulate('click');
    });

    it('should call removeGift callback', () => {
      expect(removeGift).toHaveBeenCalledWith(GIFT_ID);
    });
  });
});
