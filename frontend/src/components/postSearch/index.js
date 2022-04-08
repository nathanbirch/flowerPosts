import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function PostSearch(props) {
  return (
    <>
      <Typeahead
        labelKey={(option) => `${option.title}`}
        minLength={3}
        id='postsTitlesTypeahead'
        placeholder='Search by title'
        selectHintOnEnter
        onChange={(selectedPost) => {
          props.setHandler(selectedPost[0]);
        }}
        options={props.posts}
        className='mb-4'
      />
    </>
  );
}
