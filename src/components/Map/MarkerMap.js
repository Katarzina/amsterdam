import React from "react";
import { Marker } from "react-google-maps";
import EstablishmentIcon from "../../icon.svg";

export default class MarkerMap extends React.Component {

    render(){
        return(
            <Marker
                position={this.props.location}
                icon={EstablishmentIcon}
            >
            </Marker>
        );
    }
}