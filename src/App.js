import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ReviewPage from './pages/review';

function App() {
  return (
    <div className="App">
      <Router>
        {/* put Header here to apply to all pages */}
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/movie-1'}>
            <ReviewPage title='Movie 1' description='Description here' />
          </Route>
          <Route exact path={'/movie-2'}>
            <ReviewPage title='Movie 2' description='Description here' />
          </Route>
          {/* Add new pages here */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
