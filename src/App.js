import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Map from './components/Map';
import DrivingDirection from './components/DrivingDirection';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='buttons'>
          <Link to='/map' className='button'>
            Map
          </Link>
          <Link to='/direction' className='button'>
            Direction
          </Link>
        </div>
        <Switch>
          <Route path='/map' component={Map} />
          <Route path='/direction' component={DrivingDirection} />
        </Switch>
      </Router>
    );
  }
}

export default App;
