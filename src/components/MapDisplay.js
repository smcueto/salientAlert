import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import keys from '../keys';

mapboxgl.accessToken = keys.mapboxAccessToken;

export default class MapDisplay extends Component {

    constructor(props) {
      super(props);
      this.state = {
        lng: -95.87444616097513,
        lat: 40.0481814794457,
        zoom: 4
      };
    }
  
    componentDidMount() {
      const { lng, lat, zoom } = this.state;

      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom 
      });
  
      map.on('move', () => {
        const { lng, lat } = map.getCenter();
  
        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
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
  
  