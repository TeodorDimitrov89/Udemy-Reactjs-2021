import useFetch from '../Hooks/useFetch';
import BlogList from './BlogList';

const Blogs = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div style={{ textAlign: 'center' }}>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </>
  );
};

export default Blogs;
