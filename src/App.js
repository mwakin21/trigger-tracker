import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ReviewPage from './pages/review';
import { data } from './pages/home/movie-data.js';

function App() {
  return (
    <div className="App">
      <Router>
        {/* put Header here to apply to all pages */}
        <Switch>
          <Route exact path={'/'} component={Home} data={data} />
          {data.map((movie, key) => (
            <Route exact path={movie.url} key={key}>
              <ReviewPage data={movie} />
            </Route>
          ))}
          {/* Add new pages here */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
