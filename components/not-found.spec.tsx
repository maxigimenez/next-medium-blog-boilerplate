import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './not-found';

describe('not-found', () => {
  describe('snapshots', () => {
    test('render default', () => {
      const component = shallow(<NotFound />);
      expect(component).toMatchSnapshot();
    });
  });
});
