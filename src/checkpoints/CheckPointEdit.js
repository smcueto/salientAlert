import React, { Component } from 'react';
import axios from 'axios';

export default class CheckPointEdit extends Component {
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

        this.state = {checkPointPost: '',checkPointAddress: '', checkPointZipcode: '', checkPointCity: '',checkPointState: '', checkPointDate: '', checkPointTime: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/checkpoints/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                checkPointPost: response.data.checkPointPost, 
                checkPointAddress: response.data.checkPointAddress, 
                checkPointZipcode: response.data.checkPointZipcode, 
                checkPointCity: response.data.checkPointCity,
                checkPointState: response.data.checkPointState,
                checkPointDate: response.data.checkPointDate,
                checkPointTime: response.data.checkPointTime
             });
        })
        .catch(function (error) {
            console.log(error);
        })
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
        axios.post('http://localhost:4200/checkpoints/update/'+this.props.match.params.id, serverport)
        .then(res => this.props.history.push('/index'));
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
            <h3>Edit Check Point Post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Edit Check point Post:  </label>
                    <input type="text" value={this.state.checkPointPost || ''} className="form-control" onChange={this.onChangeCheckPointPost}/>
                </div>
                <div className="form-group">
                    <label>Edit Address:  </label>
                    <input type="text" value={this.state.checkPointAddress || ''} className="form-control" onChange={this.onChangeCheckPointAddress}/>
                </div>
                <div className="form-group">
                    <label>Edit Zipcode: </label>
                    <input type="text" value={this.state.checkPointZipcode || ''} className="form-control" onChange={this.onChangeCheckPointZipcode}/>
                </div>
                <div className="form-group">
                        <label>Edit City:</label>
                        <input type="text" value={this.state.checkPointCity || ''} className="form-control" 
                        onChange={this.onChangeCheckPointCity}/>
                    </div>
                <div className="form-group">
                <label>Edit State:  </label>
                <input type="text" value={this.state.checkPointState || ''} className="form-control" onChange={this.onChangeCheckPointState}/>
                </div>
                <div className="form-group">
                    <label>Edit Date</label>
                    <input type="text" value={this.state.checkPointDate || ''} className="form-control" 
                    onChange={this.onChangeCheckPointDate}/>
                </div>
                <div className="form-group">
                    <label>Edit Time</label>
                    <input type="text" value={this.state.checkPointTime || ''} className="form-control" 
                    onChange={this.onChangeCheckPointTime}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update server" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}