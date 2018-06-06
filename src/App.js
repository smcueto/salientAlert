import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import MapDisplay from './components/MapDisplay';
import HomePage from './components/HomePage';
import CreateCheckPoint from './components/CreateCheckPoint';
import ResourcesPage from './components/ResourcesPage';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <a className="navbar-brand">Salient Alert</a>
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
                  <Link to={'/createcheckpoint'} className="nav-link">Report CheckPoint</Link>
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
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/resources' component={ResourcesPage} />
              <Route exact path='/create' component={CreateComponent} />
              <Route exact path='/createcheckpoint' component={CreateCheckPoint} />
              <Route exact path='/map' component={MapDisplay} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/index' component={IndexComponent} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
