import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const Map = ({ children, onMapMounted }) => (
  <GoogleMap
    defaultCenter={{ lat: 43.6966119, lng: 7.2873863 }}
    defaultZoom={5}
    ref={onMapMounted}
  >
    {children}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));
