import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './BlogCreate.module.css';
const BlogCreate = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Teo');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const createBlogHandler = (event) => {
    event.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true);

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        history.push('/blogs');
      });
    }, 1000);
  };
  return (
    <div className={styles['blog-create']}>
      <form onSubmit={createBlogHandler}>
        <h2>Add new blog</h2>
        <div className={styles['blog-row']}>
          <label htmlFor='title'>Blog Title:</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className={styles['blog-row']}>
          <label htmlFor='body'>Blog Body:</label>
          <textarea
            name='body'
            id='body'
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={styles['blog-row']}>
          <label>Blog Author: </label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            name='authors'
          >
            <option value='Teo'>Teo</option>
            <option value='Pesho'>Pesho</option>
          </select>
        </div>
        <div className={styles['blog-row']}>
          {!isPending && <button type='submit'>Add Blog</button>}
          {isPending && <div>Adding ...</div>}
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
