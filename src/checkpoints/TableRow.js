import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get(`http://localhost:4200/checkpoints/delete/${this.props.obj._id}`)
      .then((res) => {
        this.props.deleteReportObject(this.props.obj);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.checkPointPost}
          </td>
          <td>
            {this.props.obj.checkPointAddress}
          </td>
          <td>
            {this.props.obj.checkPointZipcode}
          </td>
          <td>
            {this.props.obj.checkPointCity}
          </td>
          <td>
            {this.props.obj.checkPointState}
          </td>
          <td>
            {this.props.obj.checkPointDate}
          </td>
          <td>
            <Link to={'/edit/' + this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>

    );
  }
}

export default TableRow;
