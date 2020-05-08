import React from 'react';
import { shallow } from 'enzyme';
import { Subscription } from './subscription';

describe('subscription', () => {
  describe('snapshots', () => {
    let component;
    beforeEach(() => {
      component = shallow(<Subscription />);
    });

    test('render default', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
