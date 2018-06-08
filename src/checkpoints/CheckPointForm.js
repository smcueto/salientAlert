import React, { Component } from 'react';
import axios from 'axios';

export default class CheckPointForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeCheckPointPost = this.onChangeCheckPointPost.bind(this);
        this.onChangeCheckPointAddress = this.onChangeCheckPointAddress.bind(this);
        this.onChangeCheckPointZipcode = this.onChangeCheckPointZipcode.bind(this);
        this.onChangeCheckPointCity = this.onChangeCheckPointCity.bind(this);
        this.onChangeCheckPointState = this.onChangeCheckPointState.bind(this);
        this.onChangeCheckPointDate = this.onChangeCheckPointDate.bind(this);
        this.onChangeCheckPointTime = this.onChangeCheckPointTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            checkPointPost: '',
            checkPointAddress: '',
            checkPointZipcode: '',
            checkPointCity: '',
            checkPointState: '',
            checkPointDate: '',
            checkPointTime: ''
        }
    }
    onChangeCheckPointPost(e) {
        this.setState({
            checkPointPost: e.target.value
        });
    }
    onChangeCheckPointAddress(e) {
        this.setState({
            checkPointAddress: e.target.value
        });
    }
    onChangeCheckPointZipcode(e) {
        this.setState({
            checkPointZipcode: e.target.value
        });
    }
    onChangeCheckPointCity(e) {
        this.setState({
            checkPointCity: e.target.value
        });
    }
    onChangeCheckPointState(e) {
        this.setState({
            checkPointState: e.target.value
        });
    }
    onChangeCheckPointDate(e) {
        this.setState({
            checkPointDate: e.target.value
        });
    }
    onChangeCheckPointTime(e) {
        this.setState({
            checkPointTime: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            checkPointPost: this.state.checkPointPost,
            checkPointAddress: this.state.checkPointAddress,
            checkPointZipcode: this.state.checkPointZipcode,
            checkPointCity: this.state.checkPointCity,
            checkPointState: this.state.checkPointState,
            checkPointDate: this.state.checkPointDate,
            checkPointTime: this.state.checkPointTime
        }

        axios.post('http://localhost:4200/checkpoints/add', serverport)
        .then(res => console.log(res.data));
        this.setState({
            checkPointPost: '',
            checkPointAddress: '',
            checkPointZipcode: '',
            checkPointCity: '',
            checkPointState: '',
            checkPointDate: '',
            checkPointTime: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
              <h3>Report Check Point</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Check Point Information:  </label>
                        <input type="text" value={this.state.checkPointPost} className="form-control" onChange={this.onChangeCheckPointPost}/>
                    </div>
                    <div className="form-group">
                        <label>Add Address</label>
                        <input type="text" value={this.state.checkPointAddress} className="form-control" 
                        onChange={this.onChangeCheckPointAddress}/>
                    </div>
                    <div className="formgit b-group">
                        <label>Add Zipcode</label>
                        <input type="text" value={this.state.checkPointZipcode} className="form-control" onChange={this.onChangeCheckPointZipcode}/>
                    </div>
                    <div className="form-group">
                        <label>Add City</label>
                        <input type="text" value={this.state.checkPointCity} className="form-control" 
                        onChange={this.onChangeCheckPointCity}/>
                    </div>
                    <div className="form-group">
                        <label>Add State</label>
                        <input type="text" value={this.state.checkPointState} className="form-control" 
                        onChange={this.onChangeCheckPointState}/>
                    </div>
                    <div className="form-group">
                        <label>Add Date</label>
                        <input type="text" value={this.state.checkPointDate} className="form-control" 
                        onChange={this.onChangeCheckPointDate}/>
                    </div>
                    <div className="form-group">
                        <label>Add Time</label>
                        <input type="text" value={this.state.checkPointTime} className="form-control" 
                        onChange={this.onChangeCheckPointTime}/>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Add Event" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}