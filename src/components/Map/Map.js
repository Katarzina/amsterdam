import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MarkerMap from './MarkerMap'
import { commaToPointReplace } from '../../share/share'

const Map = withScriptjs(withGoogleMap((props) => {

    const markers = props.establishments.map( ({trcid , title, location: {latitude , longitude} }, index ) => <MarkerMap
        key={trcid + index}
        point={title}
        location={{lat: +commaToPointReplace(latitude), lng: +commaToPointReplace(longitude)}}
    />);

    return (
        <GoogleMap
            defaultZoom={12}
            center={ { lat: 52.379189, lng: 4.899431 } }
        >
        {markers}
        </GoogleMap>
        );
    }
))

export default Map;