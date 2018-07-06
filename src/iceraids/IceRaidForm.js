import React, { Component } from 'react';
import axios from 'axios';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import keys from '../keys';

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const googleKey = keys.googleAccessKey;


export default class IceRaidForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeIcePost = this.onChangeIcePost.bind(this);
    this.onChangeIceAddress = this.onChangeIceAddress.bind(this);
    this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
    this.onChangeIceCity = this.onChangeIceCity.bind(this);
    this.onChangeIceState = this.onChangeIceState.bind(this);
    this.onChangeIceDate = this.onChangeIceDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
  onSubmit(e) {
    e.preventDefault();
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
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
      .catch((err) => {
        this.setState({
          // set errors
        });
      });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Report Ice Raid</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Ice Raid Information:  </label>
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
          <div className="form-group">
            <input type="submit" value="Add Event" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
