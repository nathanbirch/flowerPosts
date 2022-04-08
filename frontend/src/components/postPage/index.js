import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PostList from '../postList';
import PostSearch from '../postSearch';
import PostForm from '../postForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/react';
import styles from './style.module.css';
import PuffLoader from 'react-spinners/PuffLoader';
import { useDispatch } from 'react-redux';
import { setPosts } from '../../redux/ducks/posts';

export default function Posts(posts) {
  const emptyPost = {
    body: '',
    id: null,
    title: '',
    userId: null,
  };
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(emptyPost);
  const loading = false;

  const override = css`
    display: block;
    margin: 0 auto;
    bordergit branch-color: red;
  `;

  const selectPost = (post) => {
    setSelectedPost(post);
  };

  const searchByTitle = (title) => {
    const post = posts.posts.find((post) => post.title === title);
    if (post) {
      setSelectedPost(post);
      toast(`Auto-populated form with post from title:\n ${post.title}`);
    }
  };

  const updateSearch = (post) => {
    if (post) {
      setSelectedPost(post);
      toast(`Successfully found post`);
    } else {
      setSelectedPost(emptyPost);
    }
  };
  const updatePosts = (newPost) => {
    const newPosts = posts.posts.map((post) =>
      post.id === newPost.id ? newPost : post
    );
    dispatch(setPosts(newPosts));
    toast.success('Post updated successfully');
    setSelectedPost(emptyPost);
  };
  return (
    <div className='d-flex flex-column justify-content-center w-100 h-100'>
      <ToastContainer />
      {loading && <PuffLoader color={'white'} css={override} size={80} />}
      <Container>
        {posts.posts && (
          <>
            <Row>
              <div className='mt-4 p-5 text-white rounded'>
                <h1 className='display-1'>Amazing Dummy Posts</h1>
              </div>
            </Row>
            <Row>
              <PostSearch setHandler={updateSearch} {...posts} />
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <PostList
                  {...posts}
                  {...selectedPost}
                  selectPostHandler={selectPost}
                />
              </Col>
              <Col sm={12} md={6}>
                <PostForm
                  post={selectedPost}
                  searchHandler={searchByTitle}
                  saveHandler={updatePosts}
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}
