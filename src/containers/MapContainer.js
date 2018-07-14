// MapContainer.js
import React from "react";
import Map from "../components/Map/Map";
import {connect} from 'react-redux'
import {stateSelector, currentSelector} from '../reducer/establishment'

class MapContainer extends React.Component {

    render() {
    const { establishment: {establishmentSelect} } = this.props

        return (
            <Map
                establishments={establishmentSelect}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAwfT9oB0sgGDMlD4r9eI1RRAOBoYgg4c0&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `55vh`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default connect((state) => ({
    establishment: stateSelector(state),
    establishmentSelect: currentSelector(state)
}))(MapContainer)
