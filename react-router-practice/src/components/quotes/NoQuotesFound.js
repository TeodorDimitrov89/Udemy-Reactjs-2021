import { Link, useRouteMatch } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link to={`${match.path}/add`} className='btn'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
