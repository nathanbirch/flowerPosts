import React, { useState, useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import styles from './style.module.css';

export default function PostForm(props) {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  useEffect(() => {
    setTitle(props.post.title);
    setBody(props.post.body);
  }, [props]);
  const save = () => {
    if (!props.post.id) {
      toast.error('Please select a valid post to edit');
      return;
    }
    const p = {
      userId: props.post.userId,
      id: props.post.id,
      title: title,
      body: body,
    };
    props.saveHandler(p);
  };
  return (
    <div>
      <h1>Edit Post</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formFirstName'>
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type='text'
            value={title}
            className={styles.regularInput}
            onChange={(e) => {
              setTitle(e.target.value);
              props.searchHandler(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formLastName'>
          <Form.Label>Post Body</Form.Label>
          <Form.Control
            type='text'
            value={body}
            className={styles.regularInput}
            onChange={(e) => {
              setBody(e.target.value);
              // props.searchHandler(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formLastName'>
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type='text'
            defaultValue={props.post.userId}
            className={styles.regularInput}
            disabled
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formLastName'>
          <Form.Label>Post Id</Form.Label>
          <Form.Control
            type='text'
            defaultValue={props.post.id}
            className={styles.regularInput}
            disabled
          />
        </Form.Group>
        {/* <Row className={`${styles.modifyIcons} text-center`}> */}
        <Col className={styles.iconContainer} onClick={save}>
          Save
        </Col>
        {/* </Row> */}
      </Form>
    </div>
  );
}
