import { API } from './api';
import { ContentfulService } from './integrations';

/**
 * @TODO move into a mocks folder
 */
jest.mock('./integrations', () => {
  return {
    ContentfulService: jest.fn(),
  };
});

describe('API', () => {
  it('should be defined', () => {
    expect(API).toBeDefined();
  });

  it('should be able to intialize with default integration', () => {
    const api = new API();
    expect(api).toBeInstanceOf(API);
    expect(ContentfulService).toHaveBeenCalledTimes(1);
  });
});
