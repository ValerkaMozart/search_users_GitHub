import React from "react";
import classes from './App.module.css'
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Profile from "./components/Profile/Profile";
import Alert from "./components/Alert/Alert";
import Context from "./Context/Context";


function App() {
    return (
        <BrowserRouter>
            <Context>
                <NavBar/>
                <Alert props={{textAlert: 'Внимание, не правильно введено имя'}}/>
                <div className={classes.AppContainer}>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/profile/:name'} component={Profile}/>
                    </Switch>
                </div>
            </Context>

        </BrowserRouter>


    )
}

export default App;
