import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '../App.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

class DrivingDirection extends React.Component {
  state = {
    lng: 2.333,
    lat: 48.83,
    zoom: 14,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling',
    });

    map.addControl(directions, 'top-left');
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

export default DrivingDirection;
