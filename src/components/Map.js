import React from 'react';
import mapboxgl from 'mapbox-gl';
import '../App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
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

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const marker = new mapboxgl.Marker()
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{' '}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

export default Map;
