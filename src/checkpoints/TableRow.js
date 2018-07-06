import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get(`/checkpoints/delete/${this.props.obj._id}`)
      .then((res) => {
        this.props.deleteReportObject(this.props.obj);
        console.log('check point date', this.props.obj.checkPointDate);
      })
      .catch(err => console.log(err));
  }
  displayDate() {
    if (this.props.obj.checkPointDate) {
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short',
      };
      return new Date(this.props.obj.checkPointDate).toLocaleDateString(window.navigator.language, options);
    }
    return 'Date or Time not set.';
  }
  render() {
    return (
      <tr>
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
          {this.displayDate()}
        </td>
        <td>
          <Link to={`/edit/${this.props.obj._id}`} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>

    );
  }
}

export default TableRow;
