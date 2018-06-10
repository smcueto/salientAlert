import React, { Component } from 'react';
import axios from 'axios';

export default class IceRaidEdit extends Component {
    constructor(props) {
        super(props);
        this.onChangeIcePost = this.onChangeIcePost.bind(this);
        this.onChangeIceAddress = this.onChangeIceAddress.bind(this);
        this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
        this.onChangeIceCity = this.onChangeIceCity.bind(this);
        this.onChangeIceState = this.onChangeIceState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {iceRaidPost: '',iceRaidAddress: '', iceRaidZipcode: '', iceRaidCity: '',iceRaidState: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/iceraids/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                iceRaidPost: response.data.iceRaidPost, 
                iceRaidAddress: response.data.iceRaidAddress, 
                iceRaidZipcode: response.data.iceRaidZipcode, 
                iceRaidCity: response.data.iceRaidCity,
                iceRaidState: response.data.iceRaidState
             });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

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
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            iceRaidPost: this.state.iceRaidPost,
            iceRaidAddress: this.state.iceRaidAddress,
            iceRaidZipcode: this.state.iceRaidZipcode,
            iceRaidCity: this.state.iceRaidCity,
            iceRaidState: this.state.iceRaidState
        }
        axios.post('http://localhost:4200/iceraids/update/'+this.props.match.params.id, serverport)
        .then(res => this.props.history.push('/index'));
        this.setState({
            iceRaidPost: '',
            iceRaidAddress: '',
            iceRaidZipcode: '',
            iceRaidCity: '',
            iceRaidState: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 50}}>
            <h3>Edit Ice Raid Post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Edit Ice Raid Post:  </label>
                    <input type="text" value={this.state.iceRaidPost || ''} className="form-control" onChange={this.onChangeIcePost}/>
                </div>
                <div className="form-group">
                    <label>Edit Ice Raid Address:  </label>
                    <input type="text" value={this.state.iceRaidAddress || ''} className="form-control" onChange={this.onChangeIceAddress}/>
                </div>
                <div className="form-group">
                    <label>Edit Zipcode: </label>
                    <input type="text" value={this.state.iceRaidZipcode || ''} className="form-control" onChange={this.onChangeIceZipcode}/>
                </div>
                <div className="form-group">
                        <label>Edit City:</label>
                        <input type="text" value={this.state.iceRaidCity || ''} className="form-control" 
                        onChange={this.onChangeIceCity}/>
                    </div>
                <div className="form-group">
                <label>Edit Ice Raid State:  </label>
                <input type="text" value={this.state.iceRaidState || ''} className="form-control" onChange={this.onChangeIceState}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update server" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}