import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import ReviewPage from './pages/review';
import ReviewForm from './pages/form';
import { data } from './pages/home/movie-data.js';

function App() {
  return (
    <div className="App">
      <Router>
        {/* put Header here to apply to all pages */}
        <Switch>
          <Route exact path={'/'} >
            <Home data={data} />
          </Route>
          {data.map((movie, key) => (
            <Route exact path={movie.url} key={key}>
              <ReviewPage data={movie} />
            </Route>
          ))}
          {/* The url for review forms will just be the movie url + "/form" */}
          {data.map((movie, key) => (
            < Route exact path={movie.url + "/form"} key={key} >
              <ReviewForm data={movie} />
            </Route>
          ))}
          {/* Add new pages here */}
        </Switch>
      </Router>

    </div >
  );
}

export default App;
