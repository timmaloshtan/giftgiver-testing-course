import React from 'react';
import { mount } from 'enzyme';

import Gift from './Gift';

describe('Gift component', () => {
  const gift = mount(<Gift />);

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
      gift.find('.input-person').at(0).simulate('change', { target: { value: PERSON } })
    });

    it('should update the person in state', () => {
      expect(gift.state().person).toEqual(PERSON);
    })
    
  });
  
  
});
