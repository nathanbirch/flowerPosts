import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Renders Posts', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );
  });
});
