import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {serverports: []};
        this.tabRow.bind(this);
        this.deleteReportObject.bind(this);
        
      }


      componentDidMount(){
        axios.get('http://localhost:4200/serverport')
        .then(response => {
          this.setState({ serverports: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      }


      deleteReportObject = (obj) => {
        console.log( 'BEFORE', this.state.serverports);
        const currObjs = this.state.serverports.filter( currObj => currObj._id !== obj._id);
        this.setState({
            ...this.state,
            serverports: currObjs
        })
        console.log('AFTER', currObjs);

      }

      tabRow(deleteReportObject){
        console.log('In TabRow');
        console.log(deleteReportObject);
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={object} key={i} deleteReportObject={deleteReportObject}/>;
        });
      }

    render() {

        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Zipcode</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow(this.deleteReportObject)}
              </tbody>
            </table>
        </div>
        );
    }
}