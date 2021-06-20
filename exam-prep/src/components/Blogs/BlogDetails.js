import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Card from '../UI/Card';
import styles from './BlogDetails.module.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const history = useHistory();

  const deleteBlogHandler = (blog) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/blogs');
    });
  };
  return (
    <div className={styles['blog-details']}>
      <h2>Blog Details - {id}</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {data && (
        <Card>
          <article>
            <h2 className='title'>{data.title}</h2>
            <div>
              <p>{data.body}</p>
            </div>
          </article>
          <button onClick={deleteBlogHandler}>Delete</button>
        </Card>
      )}
    </div>
  );
};

export default BlogDetails;
