import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class CheckPointTable extends Component {
    constructor(props) {
        super(props);
        this.state = {serverports: []};
        this.tabRow.bind(this);
        this.deleteReportObject.bind(this);
        
      }
      
      componentDidMount(){
        axios.get('/checkpoints')
        .then(response => {
          this.setState({ serverports: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      }

      deleteReportObject = (obj) => {
        const currObjs = this.state.serverports.filter( currObj => currObj._id !== obj._id);
        this.setState({
            ...this.state,
            serverports: currObjs
        })
      }

      tabRow(deleteReportObject){
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
                  <td>Post Info</td>
                  <td>Address</td>
                  <td>Zipcode</td>
                  <td>City</td>
                  <td>State</td>
                  <td>Date and Time to Happen:</td>
                  <td>Edit Post</td>
                  <td>Delete Post</td>
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