export const GET_POSTS = 'GET_POSTS';
const SET_POSTS = 'SET_POSTS';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});

const initialState = { posts: undefined };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      // eslint-disable-next-line no-case-declarations
      const { posts } = action;
      return { ...state, posts };
    default:
      return state;
  }
};
