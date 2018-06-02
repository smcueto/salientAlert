import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import keys from '../keys';
console.log(keys);

mapboxgl.accessToken = keys.mapboxAccessToken;

export default class mapComp extends React.Component {

    constructor(props: Props) {
      super(props);
      this.state = {
        lng: 5,
        lat: 34,
        zoom: 1.5
      };
    }
  
    componentDidMount() {
    //   const { lng, lat, zoom } = this.state;
      const lng = this.state.lng;
      const lat = this.state.lat;
      const zoom = this.state.zoom;

      console.log(mapboxgl)
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
      const { lng, lat, zoom } = this.state;
  
      return (
        <div>
          <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
      );
    }
  }
  
  