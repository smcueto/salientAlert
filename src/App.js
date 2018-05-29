import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Express Tutorial</h2>
          <ul>
          <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/create'}>Create</Link></li>
            <li><Link to={'/index'}>List</Link></li>
            <li><Link to={'/edit/:id'}>Edit</Link></li>
          </ul>
          <hr />
          <Switch>
              <Route exact path='/create' component={CreateComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/index' component={IndexComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
