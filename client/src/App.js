import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import IceRaidForm from './iceraids/IceRaidForm';
import CheckPointForm from './checkpoints/CheckPointForm';

import ResourcesPage from './ResourcesPage';
import MapDisplay from './MapDisplay';
import HomePage from './HomePage';
import TablePage from './TablePage';
import IceRaidEdit from './iceraids/IceRaidEdit';


function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <Link to="/" className="navbar-brand">Salient Alert
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link">Resources</Link>
              </li>
              <li className="nav-item">
                <Link to="/iceraidform" className="nav-link">Report Ice Raid</Link>
              </li>
              <li className="nav-item">
                <Link to="/checkpointform" className="nav-link">Report CheckPoint</Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className="nav-link">Reports</Link>
              </li>
              <li className="nav-item">
                <Link to="/map" className="nav-link">Map</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/resources" component={ResourcesPage} />
            <Route exact path="/iceraidform" component={IceRaidForm} />
            <Route exact path="/checkpointform" component={CheckPointForm} />
            <Route exact path="/map" component={MapDisplay} />
            <Route exact path="/edit/:id" component={IceRaidEdit} />
            <Route path="/reports" component={TablePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
