import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './footer';

describe('footer', () => {
  describe('snapshots', () => {
    test('render', () => {
      const component = shallow(<Footer />);
      expect(component).toMatchSnapshot();
    });
  });
});
