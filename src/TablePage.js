import React, { Component } from 'react';
import IceRaidTable from './iceraids/IceRaidTable';
import CheckPointTable from './checkpoints/CheckPointTable';
import MapDisplay from './MapDisplay';

export default class TablePage extends Component {
  render() {
    return (
      <div>
        <MapDisplay />
        <h2>Ice Raid Reports</h2>
        <IceRaidTable />
        <h2> Check Point Reports</h2>
        <CheckPointTable />
      </div>
    );
  }
}
