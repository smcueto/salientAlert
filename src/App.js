import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import IceRaidForm from './iceraids/IceRaidForm';
import IceRaidTable from './iceraids/IceRaidTable';
import IceRaidEdit from './iceraids/IceRaidEdit';


import CheckPointForm from './checkpoints/CheckPointForm';
// import CheckPointTable from './checkpoints/CheckPointTable';

import ResourcesPage from './ResourcesPage';
import MapDisplay from './MapDisplay';
import HomePage from './HomePage';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Salient Alert
            </Link>
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/resources'} className="nav-link">Resources</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Report Ice Raid</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/checkpointform'} className="nav-link">Report CheckPoint</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Reports</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/map'} className="nav-link">Map</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
              </ul>
          </nav>
          </div>
          <div className="container">
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/resources' component={ResourcesPage} />
              <Route exact path='/create' component={IceRaidForm} />
              <Route exact path='/checkpointform' component={CheckPointForm} />
              <Route exact path='/map' component={MapDisplay} />
              <Route path='/edit/:id' component={IceRaidEdit} />
              <Route path='/index' component={IceRaidTable} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
