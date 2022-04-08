import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getPosts } from './posts';
const apiEndpoint = 'http://localhost:8080/posts';
describe('fetchPosts', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('when API call is successful', () => {
    it('should return posts list', async () => {
      // given
      const posts = [];
      mock.onGet(apiEndpoint).reply(200, posts);

      // when
      const result = await getPosts();

      // then
      expect(mock.history.get[0].url).toEqual(apiEndpoint);
      expect(result.data).toEqual(posts);
    });
  });
});
