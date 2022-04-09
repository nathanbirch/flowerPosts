/* eslint-disable no-undef */
import React from 'react';
import PostSearch from './';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  const mockPosts = [
    { userId: 1, id: 1, title: 'Test Title', body: 'Test Body' },
    { userId: 1, id: 2, title: 'Test Title', body: 'Test Body' },
  ];

  it('Renders PostSearch', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <PostSearch posts={mockPosts} />
      </Provider>
    );
  });
});
