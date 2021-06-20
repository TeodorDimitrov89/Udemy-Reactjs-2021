import React from 'react';
import styles from './Blog.module.scss';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  return (
    <Card className={styles.blog} onClick={props.onDeleteBlog}>
      <div className='user-id'>Author: {props.blog.userId}</div>
      <Link to={`/blogs/details/${props.blog.id}`}>
        <h3 className='title'>Title: {props.blog.title}</h3>
        <div className='body'>
          <p>{props.blog.body}</p>
        </div>
      </Link>
    </Card>
  );
};

export default Blog;
