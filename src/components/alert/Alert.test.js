import React from 'react';
import {shallow} from 'enzyme';

import Alert from './Alert';

describe('Alert', () => {
  const wrapper = shallow(<Alert text="test message" />);

  it('should renders 1 <Alert /> component', () => {
    expect(wrapper.find('.alert')).toHaveLength(1);
  });

  it('should contain message inside', () => {
    expect(wrapper.text()).toBe('test message');
  });

  it('should has default class', () => {
    expect(wrapper.hasClass('alert-info')).toBeTruthy();
  });

  it('should renders props correctly', () => {
    const wrapper = shallow(<Alert text="other message" type="primary" />);

    expect(wrapper.text()).toBe('other message');
    expect(wrapper.hasClass('alert-primary')).toEqual(true);
  });
});
