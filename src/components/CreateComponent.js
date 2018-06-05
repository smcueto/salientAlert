import React, { Component } from 'react';
import axios from 'axios';

export default class CreateComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeIcePost = this.onChangeIcePost.bind(this);
        this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            iceRaidPost: '',
            iceRaidZipcode: ''
        }
    }
    onChangeIcePost(e) {
        this.setState({
            iceRaidPost: e.target.value
        });
    }
    onChangeIceZipcode(e) {
        this.setState({
            iceRaidZipcode: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            iceRaidPost: this.state.iceRaidPost,
            iceRaidZipcode: this.state.iceRaidZipcode
        }

        axios.post('http://localhost:4200/serverport/add', serverport)
        .then(res => console.log(res.data));
        this.setState({
            iceRaidPost: '',
            iceRaidZipcode: ''
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
                        <label>Add Zipcode</label>
                        <input type="text" value={this.state.iceRaidZipcode} className="form-control" onChange={this.onChangeIceZipcode}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Event" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}