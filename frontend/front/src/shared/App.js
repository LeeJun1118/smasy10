import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css';
import { Route} from 'react-router-dom';
import { Home, About, Login, Mroom, Eroom} from "pages";
import Menu from "../pages/Menu";
import MroomComponent from "../component/MroomComponent";

class App extends Component{
    render() {
        return (
            // <div className="App">
            //     <div>
            //         <TopMenuComponent/>
            //     </div>
            // </div>
                <div>
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/makeAroom" component={Mroom}/>
                    <Route exact path="/enterAroom" component={Eroom}/>
                </div>

        );
    }
}

export default App;