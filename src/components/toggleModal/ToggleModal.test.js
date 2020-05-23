import React from 'react';
import {shallow} from 'enzyme';

import ToggleModal from './ToggleModal';

describe('ToggleModal', () => {
  const mockFn = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ToggleModal onClick={mockFn} />);
  });

  it('should renders 1 <ToggleModal /> component', () => {
    expect(wrapper.find('.toggle-modal')).toHaveLength(1);
  });

  it('should contain 1 <div> element with class "menu-icon"', () => {
    expect(wrapper.find('div.menu-icon').length).toBe(1);
  });

  it('should contain 1 <span> element', () => {
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('inside <span> element should contains text "Favourite"', () => {
    expect(
      wrapper.containsMatchingElement(<span>Favourite</span>)
    ).toBeTruthy();
  });

  it('should call onClick handler when ToggleModal component is clicked', () => {
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should be added class "active" when active prop is "true"', () => {
    const wrapper = shallow(<ToggleModal onClick={mockFn} active={true} />);

    expect(wrapper.find('.toggle-modal').hasClass('active')).toEqual(true);
  });

  it('should set props correctly', () => {
    wrapper.setProps({
      onClick: mockFn,
      active: true,
      className: 'test-className',
    });
    expect(
      wrapper.find('div.toggle-modal').hasClass('active test-className')
    ).toEqual(true);
    expect(typeof wrapper.props().onClick).toEqual('function');
  });
});
