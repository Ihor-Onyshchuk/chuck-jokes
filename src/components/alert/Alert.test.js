import React from 'react';

import {shallow} from 'enzyme';
import Alert from './Alert';

const text = 'Test text';
let wrapped = shallow(<Alert>{text}</Alert>);

describe('Alert', () => {
  it('should render the Alert Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the text', () => {
    expect(wrapped.find('div').children.length).toEqual(1);
  });
});
