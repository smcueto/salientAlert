import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import MapDisplay from './components/MapDisplay';

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
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Submit Ice Raid</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Report Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
              </ul>
          </nav>
          </div>
          <div className="container">
          <Switch>
              <Route exact path='/' component={MapDisplay} />
              <Route exact path='/create' component={CreateComponent} />
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
