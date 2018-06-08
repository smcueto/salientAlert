import React, { Component } from 'react';
import IceRaidTablePage from './iceraids/IceRaidTable';
import CheckPointTable from './checkpoints/CheckPointTable';

export default class TablePage extends Component {
    
    
    render() {
        return(
            <div>
                Ice Raid Reports
            <IceRaidTablePage/ >
                Check Point Reports
            <CheckPointTable/ >
           </div>
        );
    }
}