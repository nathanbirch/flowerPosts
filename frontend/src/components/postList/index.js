import React from 'react';
import styles from './style.module.css';
export default function PostList(props) {
  const error = false;
  const charactersToDisplay = 30;
  const { posts } = props;
  return (
    <>
      {!error && posts && posts.length > 0 && (
        <>
          <h1>Recent Posts</h1>
          <br />
          <ul className={styles.postsUl}>
            {posts.map((post, i) => {
              return (
                <li key={i}>
                  <span>
                    <button
                      className={styles.postButton}
                      onClick={() => {
                        props.selectPostHandler(post);
                      }}>
                      {post.title.substring(0, charactersToDisplay)}
                      {post.title.length > charactersToDisplay ? '...' : ''}
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
