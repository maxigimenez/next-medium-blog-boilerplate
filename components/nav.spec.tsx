import React from 'react';
import { render } from 'enzyme';
import { Nav } from './nav';

describe('nav', () => {
  describe('snapshots', () => {
    test('render without categories', () => {
      const component = render(<Nav categories={[]} />);
      expect(component).toMatchSnapshot();
    });

    test('render with categories', () => {
      const categories = [{
        name: 'Category 1',
        slug: 'category-1'
      }, {
        name: 'Category 2',
        slug: 'category-2'
      }];
      const component = render(<Nav categories={categories} />);
      expect(component).toMatchSnapshot();
    });

    test('render if categories undefined', () => {
      const component = render(<Nav categories={undefined} />);
      expect(component).toMatchSnapshot();
    });
  });
});
