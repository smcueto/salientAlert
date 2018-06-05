import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeIcePost = this.onChangeIcePost.bind(this);
        this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {iceRaidPost: '', iceRaidZipcode: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ iceRaidPost: response.data.iceRaidPost, iceRaidZipcode: response.data.iceRaidZipcode });
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
        axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, serverport)
        .then(res => this.props.history.push('/index'));
        this.setState({
            iceRaidPost: '',
            iceRaidZipcode: ''
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
                    <label>Edit Zipcode: </label>
                    <input type="text" value={this.state.iceRaidZipcode || ''} className="form-control" onChange={this.onChangeIceZipcode}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update server" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}