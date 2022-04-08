import React from 'react';
import renderer from 'react-test-renderer';
import PostForm from './';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  const mockPost = {
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
    userId: 1,
  };
  it('Renders PostForm', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <PostForm post={mockPost} />
      </Provider>
    );
  });
});
