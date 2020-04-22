import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import Issues from "./Components/Issues";
import BookedItems from "./Components/bookedItems";

function App() {
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
                        <BookedItems />
                    </div>
                    <div className='col-2'/>
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
