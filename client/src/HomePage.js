import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './index.css';
import IceRaidForm from './iceraids/IceRaidForm';
import CheckPointForm from './checkpoints/CheckPointForm';

function HomePage() {
  return (
    <div className="welcome-text">
      <a className="title"><center>Welcome to <br /><i><b>Salient Alert</b></i></center></a>
      <p id="shortAbout"> An online community space to report ICE Raids or Checkpoints and avoid them.</p>
      <Link to="/iceraidform">
        <button className="btn btn-warning btn-lg">
         Report ICE
        </button>
      </Link>
      <Link to="/checkpointform">
        <button className="btn btn-warning btn-lg">
        Report Checkpoint
        </button>
      </Link>
      <Switch>
        <Route exact path="/iceraidform" component={IceRaidForm} />
        <Route exact path="/checkpointform" component={CheckPointForm} />
      </Switch>
    </div>
  );
}
export default HomePage;
