import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get(`http://localhost:4200/iceraids/delete/${this.props.obj._id}`)
      .then((res) => {
        this.props.deleteReportObject(this.props.obj);
        // console.log('this is the ice raid date', this.props.obj.iceRaidDate);
      })
      .catch(err => console.log(err));
  }
  displayDate() {
    if (this.props.obj.iceRaidDate) {
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short',
      };
      return new Date(this.props.obj.iceRaidDate).toLocaleDateString(window.navigator.language, options);
    }
    return 'Date or Time not set.';
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.iceRaidPost}
        </td>
        <td>
          {this.props.obj.iceRaidAddress}
        </td>
        <td>
          {this.props.obj.iceRaidZipcode}
        </td>
        <td>
          {this.props.obj.iceRaidCity}
        </td>
        <td>
          {this.props.obj.iceRaidState}
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
