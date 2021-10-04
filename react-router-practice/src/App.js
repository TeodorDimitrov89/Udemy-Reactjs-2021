import Layout from './components/layout/Layout';
import { Redirect, Route, Switch } from 'react-router';
import AllQuotes from './components/pages/AllQuotes';
import AddQuote from './components/pages/AddQuote';
import QuoteDetails from './components/pages/QuoteDetails';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/add' exact>
          <AddQuote />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetails />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
