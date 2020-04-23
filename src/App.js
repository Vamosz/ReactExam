import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import Issues from "./Components/Issues";
import BookedItems from "./Components/bookedItems";
import {Link} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar name={"Government"}/>
                <div className="container-fluid">
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <h2>You can select the issues above: </h2>
                        </div>
                    </div>
                    <Issues/>
                    <div className='row mt-3'>
                        <div className='col-2'/>
                        <div className='col-8'>
                            <h2>This table collect your selections.</h2>
                            <BookedItems/>
                        </div>
                        <div className='col-2'/>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-1"/>
                       <div className={"col-2"}>
                           <Link className="btn btn-outline-success" to={"/timetable/1"}>Show Monday appointments</Link>
                       </div>
                       <div className={"col-2"}>
                           <Link className="btn btn-outline-success" to={"/timetable/2"}>Show Tuesday appointments</Link>
                       </div>
                       <div className={"col-2"}>
                           <Link className="btn btn-outline-success" to={"/timetable/3"}>Show Wednesday appointments</Link>
                       </div>
                       <div className={"col-2"}>
                           <Link className="btn btn-outline-success" to={"/timetable/4"}>Show Thursday appointments</Link>
                       </div>
                       <div className={"col-2"}>
                           <Link className="btn btn-outline-success" to={"/timetable/5"}>Show Friday appointments</Link>
                       </div>
                        <div className="col-1"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
