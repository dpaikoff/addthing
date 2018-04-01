import React from 'react';
import ReactDom from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        height: 500,
        width: 500,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        style: 'mapbox://styles/mapbox/streets-v9',
      }
    };
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
    );
  };
};

export default Map;
