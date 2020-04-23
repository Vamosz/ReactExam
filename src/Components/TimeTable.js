import React from 'react'
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

const axios = require('axios');

class TimeTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
        let param = props.match.params.day;
        axios.get('http://localhost:3001/Dates?booked=0&&day=' + param)
            .then((response) => {
                this.setState({dates: response.data});
                console.log(this.state.dates);
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <Navbar name={'Government'}/>
                <div className="container-fluid m-2">
                    <div className="row">
                        <div className="col-12">
                            <h3>You can choose an Appointment below:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-striped table-bordered mt-4">
                                <thead>
                                <tr>
                                    <th>Start time</th>
                                    <th>End time</th>
                                    <th>Clerk</th>
                                    <th>Book</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.dates.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.start} o'clock</td>
                                                <td>{item.end} o'clock</td>
                                                <td><strong>{item.clerk.firstName} {item.clerk.lastName}</strong></td>
                                                <td className="text-center">
                                                    <button className="btn btn-outline-success">Book</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link to={"/"} className="btn btn-outline-success">Back to home</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TimeTable;
