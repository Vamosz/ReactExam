import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import Issues from "./Components/Issues";
import BookedItems from "./Components/bookedItems";

class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar name={"Debrecen"}/>
                <div className="container-fluid">
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <h3>You can select the issues above: </h3>
                        </div>
                    </div>
                    <Issues/>
                    <BookedItems/>
                </div>
            </div>
        );
    }
}

export default App;
