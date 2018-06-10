import React, { Component } from 'react';
import axios from 'axios';

export default class IceRaidForm extends Component {
    constructor(props) {
        super(props);
        // this.onChangeIceDateTime = this.onChangeIceDateTime.bind(this);
        this.onChangeIcePost = this.onChangeIcePost.bind(this);
        this.onChangeIceAddress = this.onChangeIceAddress.bind(this);
        this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
        this.onChangeIceCity = this.onChangeIceCity.bind(this);
        this.onChangeIceState = this.onChangeIceState.bind(this);
        this.onChangeIceDate = this.onChangeIceDate.bind(this);
        this.onChangeIceTime = this.onChangeIceTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            iceRaidDateTime: '',
            iceRaidPost: '',
            iceRaidAddress: '',
            iceRaidZipcode: '',
            iceRaidCity: '',
            iceRaidState: '',
            iceRaidDate: '',
            iceRaidTime: ''
        }
    }
    // onChangeIceDateTime(e) {
    //     this.setState({
    //         iceRaidDateTime: e.target.value
    //     });
    // }
    
    onChangeIcePost(e) {
        this.setState({
            iceRaidPost: e.target.value
        });
    }
    onChangeIceAddress(e) {
        this.setState({
            iceRaidAddress: e.target.value
        });
    }
    onChangeIceZipcode(e) {
        this.setState({
            iceRaidZipcode: e.target.value
        });
    }
    onChangeIceCity(e) {
        this.setState({
            iceRaidCity: e.target.value
        });
    }
    onChangeIceState(e) {
        this.setState({
            iceRaidState: e.target.value
        });
    }
    onChangeIceDate(e) {
        this.setState({
            iceRaidState: e.target.value
        });
    }
    onChangeIceTime(e) {
        this.setState({
            iceRaidState: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            // iceRaidDateTime: this.state.iceRaidDateTime,
            iceRaidPost: this.state.iceRaidPost,
            iceRaidAddress: this.state.iceRaidAddress,
            iceRaidZipcode: this.state.iceRaidZipcode,
            iceRaidCity: this.state.iceRaidCity,
            iceRaidState: this.state.iceRaidState,
            iceRaidDate: this.state.iceRaidDate,
            iceRaidTime: this.state.iceRaidTime
        }

        axios.post('http://localhost:4200/iceraids/add', serverport)
        .then(res => console.log(res.data));
        this.setState({
            // iceRaidDateTime: '',
            iceRaidPost: '',
            iceRaidAddress: '',
            iceRaidZipcode: '',
            iceRaidCity: '',
            iceRaidState: '',
            iceRaidDate: '',
            iceRaidTime: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
              <h3>Report Ice Raid</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Ice Raid Information:  </label>
                        <input type="text" value={this.state.iceRaidPost} className="form-control" onChange={this.onChangeIcePost}/>
                    </div>
                    <div className="form-group">
                        <label>Add Address</label>
                        <input type="text" value={this.state.iceRaidAddress} className="form-control" 
                        onChange={this.onChangeIceAddress}/>
                    </div>
                    <div className="formgit b-group">
                        <label>Add Zipcode</label>
                        <input type="text" value={this.state.iceRaidZipcode} className="form-control" onChange={this.onChangeIceZipcode}/>
                    </div>
                    <div className="form-group">
                        <label>Add City</label>
                        <input type="text" value={this.state.iceRaidCity} className="form-control" 
                        onChange={this.onChangeIceCity}/>
                    </div>
                    <div className="form-group">
                        <label>Add State</label>
                        <input type="text" value={this.state.iceRaidState} className="form-control" 
                        onChange={this.onChangeIceState}/>
                    </div>
                    <div className="form-group">
                        <label>Add Date</label>
                        <input type="text" value={this.state.iceRaidDate} className="form-control" 
                        onChange={this.onChangeIceDate}/>
                    </div>
                    <div className="form-group">
                        <label>Add Time</label>
                        <input type="text" value={this.state.iceRaidTime} className="form-control" 
                        onChange={this.onChangeIceTime}/>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Add Event" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}