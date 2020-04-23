import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {BrowserRouter, Route} from "react-router-dom";
import TimeTable from "./Components/TimeTable";





ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={ App }/>
        <Route path="/timetable/:day" component={ TimeTable }/>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
