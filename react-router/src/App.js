import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/welcome' component={Welcome}></Route>
        <Route path='/products' component={Products}></Route>
      </main>
    </div>
  );
}

export default App;
