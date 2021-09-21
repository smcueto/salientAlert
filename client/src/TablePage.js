import React, { Component } from 'react';
import IceRaidTable from './iceraids/IceRaidTable';
import CheckPointTable from './checkpoints/CheckPointTable';
import MapDisplay from './MapDisplay';
import './index.css';

export default class TablePage extends Component {
  render() {
    return (
      <div className="container">
        <MapDisplay />
        <b className="tabletitle" style={{ marginLeft: 15}} >ICE Reports</b>
        <IceRaidTable />
        <b className="tabletitle" style={{ marginLeft: 15 }}> Checkpoint Reports</b>
        <CheckPointTable />
      </div>
    );
  }
}