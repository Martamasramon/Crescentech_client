import React from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types';

/* eslint-disable no-undef, no-unused-vars */

const Map = ({ center, locs, zoomLevel }) => {

  return(
  <div className="map">
    <div className="google-map" style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA23Z1usS46CvOXr2icwjugrqyrXga_79g' }}
        defaultCenter={center}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({map}) =>{
          locs.map((loc)=> new google.maps.Circle({
              strokeColor: loc.colour,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: loc.colour,
              fillOpacity: 0.3,
              map,
              center: loc.coordinates,
              radius: 10,
            }))}
      }>

      </GoogleMapReact>
    </div>
  </div>
)
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  locs: PropTypes.object.isRequired,
  zoomLevel: PropTypes.number.isRequired,
};

export default Map;
