import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import keys from './keys';
// import IceRaidForm from './IceRaidForm';

mapboxgl.accessToken = keys.mapboxAccessToken;

export default class MapDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -95.87444616097513,
      lat: 40.0481814794457,
      zoom: 3,
    };
  }

  componentDidMount() {
    // function getURL(address, city, keys) {
    //   return `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}, ${city}.json?country=us&access_keys=${keys.mapboxAccessToken}`;
    // }

    // // define address, city and keys earlier in the program

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', getURL(address, city, keys));

    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom,
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // san francisco location
    new mapboxgl.Marker()
      .setLngLat([-122.42409,
        37.727826])
      .addTo(map);
  }

  // axios call
  // componentDidMount(){
  // axios.get()
  // .then(response => {
  //   this.setState({ serverports: response.data });
  // })
  // .catch(fucntion(error) {
  //   console.log(error);8
  // })
  // }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}

