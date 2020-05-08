import React from 'react';
import { render } from 'enzyme';
import { Footer } from './footer';

describe('footer', () => {
  describe('snapshots', () => {
    test('render', () => {
      const component = render(<Footer />);
      expect(component).toMatchSnapshot();
    });
  });
});
