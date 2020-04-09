import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import TopMenuComponent from "./component/TopMenuComponent";
import {Button} from "react-bootstrap";
import MainComponent from "./component/MainComponent";

function App() {
    return (
        <div className="App">
            <div>
                <TopMenuComponent/>
            </div>
        </div>
    );
}

export default App;