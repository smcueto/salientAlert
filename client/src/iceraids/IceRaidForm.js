import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import TablePage from './TablePage';

export default class IceRaidForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeIcePost = this.onChangeIcePost.bind(this);
    this.onChangeIceAddress = this.onChangeIceAddress.bind(this);
    this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
    this.onChangeIceCity = this.onChangeIceCity.bind(this);
    this.onChangeIceState = this.onChangeIceState.bind(this);
    this.onChangeIceDate = this.onChangeIceDate.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      iceRaidPost: '',
      iceRaidAddress: '',
      iceRaidZipcode: '',
      iceRaidCity: '',
      iceRaidState: '',
      iceRaidDate: null,
    };
  }
  onChangeIcePost(e) {
    this.setState({
      iceRaidPost: e.target.value,
    });
  }

  onChangeIceAddress(e) {
    this.setState({
      iceRaidAddress: e.target.value,
    });
  }
  onChangeIceZipcode(e) {
    this.setState({
      iceRaidZipcode: e.target.value,
    });
  }
  onChangeIceCity(e) {
    this.setState({
      iceRaidCity: e.target.value,
    });
  }
  onChangeIceState(e) {
    this.setState({
      iceRaidState: e.target.value,
    });
  }
  onChangeIceDate(e) {
    this.setState({
      iceRaidDate: e,
    });
  }

  handleClick() {
    if (this.state.iceRaidDate == null) {
      alert('invalid input');
      return;
    }
    window.navigator.geolocation.getCurrentPosition((position) => {
    }, (error) => {
      console.log(error);
    });
    const raid = {
      iceRaidPost: this.state.iceRaidPost,
      iceRaidAddress: this.state.iceRaidAddress,
      iceRaidZipcode: this.state.iceRaidZipcode,
      iceRaidCity: this.state.iceRaidCity,
      iceRaidState: this.state.iceRaidState,
      iceRaidDate: this.state.iceRaidDate.toISOString(),
    };

    axios.post('/iceraids/add', raid)
      .then((res) => {
        console.log(res.data);
        this.setState({
          iceRaidPost: '',
          iceRaidAddress: '',
          iceRaidZipcode: '',
          iceRaidCity: '',
          iceRaidState: '',
          iceRaidDate: null,
        });
      })
      // code for re-routing
      .catch((err) => {
        this.setState({
          // set errors
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 50 }}>
          <h3>Report ICE</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>ICE Report Information:  </label>
              <input type="text" value={this.state.iceRaidPost} className="form-control" onChange={this.onChangeIcePost} />
            </div>
            <div className="form-group">
              <label>Add Address</label>
              <input
                type="text"
                value={this.state.iceRaidAddress}
                className="form-control"
                onChange={this.onChangeIceAddress}
                required
              />
            </div>
            <div className="formgit b-group">
              <label>Add Zipcode</label>
              <input type="number" value={this.state.iceRaidZipcode} className="form-control" onChange={this.onChangeIceZipcode} />
            </div>

            <div className="form-group">
              <label>Add City</label>
              <input
                type="text"
                value={this.state.iceRaidCity}
                className="form-control"
                onChange={this.onChangeIceCity}
                required
              />
            </div>

            <div className="form-group">
              <label>Add State</label>
              <input
                type="text"
                value={this.state.iceRaidState}
                className="form-control"
                onChange={this.onChangeIceState}
                required
              />
            </div>

            <div className="form-group">
              <label>Add Date and Time</label><br />
              <ReactDatePicker
                selected={this.state.iceRaidDate}
                onChange={this.onChangeIceDate}
                showTimeSelect
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
                required
              />
            </div>
              {/* <Router> */}
                <div className="form-group">
              {/* <Link to="/reports">*/}
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Add Report
                    </button>
              {/*</Link>*/}
                {/*<Switch>
                  <Route path="/reports" component={TablePage} />
                  </Switch>*/}
                </div>
            {/*</Router>*/}
          </form>
        </div>
      </div>
    );
  }
}