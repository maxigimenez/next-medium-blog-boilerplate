import React from 'react';
import { shallow } from 'enzyme';

describe('footer', () => {
  test('dummy test', () => {
    const footer = shallow(<p>Hello</p>);
    expect(footer.text()).toMatch('Hello');
  });
});
