import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import BlogCreate from './components/Blogs/BlogCreate';

import BlogDetails from './components/Blogs/BlogDetails';

function App() {
  return (
    <Router>
      <div>
        <nav className='navigation'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='/blogs/create'>New Blog</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/blogs' exact>
            <Blogs />
          </Route>
          <Route path='/blogs/create'>
            <BlogCreate />
          </Route>
          <Route path='/blogs/details/:id'>
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
