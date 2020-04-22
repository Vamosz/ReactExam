import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import Issues from "./Components/Issues";

function App() {
    return (
        <div>
            <Navbar name={"Government"}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4"/>
                    <div className="col-4 text-center">Choose</div>
                    <div className="col-4"/>
                </div>
                <div className={'row'}>
                    <div className="col-12">
                        <Issues/>
                    </div>

                </div>
            </div>
        </div>

        // <div className="container-fluid">
        //   <div className="row">
        //     <div className="col-md-12"></div>
        //   </div>
        //   <div className="row">
        //     <div className="col-md-3"></div>
        //     <div className="col-md-9"></div>
        //   </div>
        // </div>
    )
        ;
}

export default App;
