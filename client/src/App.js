import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import IceRaidForm from './iceraids/IceRaidForm';
import CheckPointForm from './checkpoints/CheckPointForm';

import About from './About';
import ResourcesPage from './ResourcesPage';
import MapDisplay from './MapDisplay';
import HomePage from './HomePage';
import TablePage from './TablePage';
import IceRaidEdit from './iceraids/IceRaidEdit';
import CheckPointEdit from './checkpoints/CheckPointEdit';


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Salient Alert</Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link">Resources</Link>
              </li>
              <li className="nav-item">
                <Link to="/iceraidform" className="nav-link">Report ICE</Link>
              </li>
              <li className="nav-item">
                <Link to="/checkpointform" className="nav-link">Report Checkpoint</Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className="nav-link">Reports</Link>
              </li>
              <li className="nav-item">
                <Link to="/map" className="nav-link">Map</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={ResourcesPage} />
            <Route exact path="/iceraidform" component={IceRaidForm} />
            <Route exact path="/checkpointform" component={CheckPointForm} />
            <Route path="/reports" component={TablePage} />
            <Route exact path="/map" component={MapDisplay} />
            <Route exact path="/edit/:id" component={IceRaidEdit} />
            <Route exact path="/edit/:id" component={CheckPointEdit} />
          </Switch>  
      </div>
    </Router>
  );
}

export default App;
