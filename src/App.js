import React from 'react';
import './App.css';
import LoadData from "./containers/LoadData"

const App = () => {
    return (
        <div className="container-fluid" >
          <div className="row">
            <LoadData />
          </div>
        </div>
    );
}

export default App;
