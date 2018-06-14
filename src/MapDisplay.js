import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import keys from './keys';
import axios from 'axios';
// import IceRaidForm from './IceRaidForm';

mapboxgl.accessToken = keys.mapboxAccessToken;

export default class MapDisplay extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      lng: -95.87444616097513,
      lat: 40.0481814794457,
      zoom: 3,
    };
  }

  componentDidMount() {
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
    // new mapboxgl.Marker(serverports)
    //   .setLngLat([-122.42409,
    //     37.727826])
    //   .addTo(map);

    axios.get('http://localhost:4200/iceraids')
      .then((response) => {
        const serverports = response.data;
        for (let i = 0; i < serverports.length; i++) {
          console.log(serverports[i]);
          const iceRaidObject = serverports[i].iceRaidCity;
        }
        // function renderMapMarkers(city, accessToken) {
        //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?country=us&access_ token=${accessToken}`;
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}

