import React from 'react';
import {shallow} from 'enzyme';

import RadioButton from './RadioButton';

describe('RadioButton', () => {
  const mockFn = jest.fn();
  const props = {
    label: 'test label',
    active: 'test mode',
    value: 'test value',
    name: 'test name',
    className: 'test-className',
    onChange: mockFn,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RadioButton {...props} />);
  });

  it('should render 1 <RadioButton /> component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div.custom-radio')).toHaveLength(1);
  });

  it('should render props correctly', () => {
    expect(wrapper.find('label').text()).toEqual('test label');
  });

  it('should call onChange handler when component is clicked', () => {
    wrapper.find('input').simulate('change');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
