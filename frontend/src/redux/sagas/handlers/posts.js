import { call, put } from 'redux-saga/effects';
import { setPosts } from '../../ducks/posts';
import { getPosts } from '../requests/posts';

export function* handleGetPosts(action) {
  try {
    const response = yield call(getPosts);
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}
