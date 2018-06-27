import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './index.css';
import IceRaidForm from './iceraids/IceRaidForm';
import CheckPointForm from './checkpoints/CheckPointForm';

function HomePage() {
  return (
    <div className="welcome-context">
      <h1><center>Welcome to <br /><i>Salient Alert</i></center></h1>
      <Link to="/create"><button className="btn btn-warning btn-lg" >
         Report Ice
      </button>
      </Link>
      <Link to="/checkpointform">
        <button className="btn btn-warning btn-lg">
        Report Check Point
        </button>
      </Link>
      <Switch>
        <Route exact path="/create" component={IceRaidForm} />
        <Route exact path="/checkpointform" component={CheckPointForm} />
      </Switch>
    </div>
  );
}
export default HomePage;
