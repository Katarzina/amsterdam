import React from 'react';
import './App.css';
import LoadData from "./containers/LoadData"
import EventsInfo from './containers/EventsInfo'
import MapContainer from './containers/MapContainer'

const App = () => {
    return (
        <div className="container-fluid" >
          <div className="row">
            <div className="col-sm-12 col-md-6">
                <LoadData />
            </div>
            <div className="col-sm-12 col-md-6">
                <MapContainer />
                <EventsInfo />
            </div>
          </div>
        </div>
    );
}


/*const App = () => {
    return (
        <div style={{width: '100%', height: '400px'}}>
            <DoctorMapContainer />
        </div>
    );
}*/


export default App;
