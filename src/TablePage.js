import React, { Component } from 'react';
import IceRaidTablePage from './iceraids/IceRaidTable';
import CheckPointTable from './checkpoints/CheckPointTable';

export default class TablePage extends Component {
  render() {
    return (
      <div>
        <h2>Ice Raid Reports</h2>
        <IceRaidTablePage />
        <h2> Check Point Reports</h2>
        <CheckPointTable />
      </div>
    );
  }
}
