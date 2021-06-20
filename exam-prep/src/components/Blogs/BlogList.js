import React from 'react';
import Blog from './Blog';
import './BlogList.css';
const BlogList = (props) => {
  const blogs = props.blogs.map((blog) => {
    return <Blog key={blog.id} blog={blog} />;
  });
  return <div className='blogs'>{blogs}</div>;
};

export default BlogList;
