import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeIcePost = this.onChangeIcePost.bind(this);
        this.onChangeIceZipcode = this.onChangeIceZipcode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {iceraidpost: '', iceraidzipcode: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ iceraidpost: response.data.iceraidpost, iceraidzipcode: response.data.iceraidzipcode });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeIcePost(e) {
        this.setState({
            iceraidpost: e.target.value
        });
    }
    onChangeIceZipcode(e) {
        this.setState({
            iceraidzipcode: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            iceraidpost: this.state.iceraidpost,
            iceraidzipcode: this.state.iceraidzipcode
        }
        axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, serverport)
        .then(res => this.props.history.push('/index'));
        this.setState({
            iceraidpost: '',
            iceraidzipcode: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 50}}>
            <h3>Edit Ice Raid Post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Edit Ice Raid Post:  </label>
                    <input type="text" value={this.state.iceraidpost || ''} className="form-control" onChange={this.onChangeIcePost}/>
                </div>
                <div className="form-group">
                    <label>Add Zipcode: </label>
                    <input type="text" value={this.state.iceraidzipcode || ''} className="form-control" onChange={this.onChangeIceZipcode}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update server" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}