import React from 'react'
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import AppointmentStore from '../Stores/AppointmentStore';

const axios = require('axios');

class TimeTable extends React.Component {
    requestedData = [];

    constructor(props) {
        super(props);
        if (AppointmentStore._items.length <= 0) {
            window.location.href = '/';
        }
        this.state = {
            dates: []
        }
    }

    validator() {
        let time = AppointmentStore._items.reduce((count, next) => {
            return count + next.Time;
        }, 0);
        if (time <= 60) {
            this.setState({dates: this.requestedData});
        } else if (time > 60 && time <= 120) {
            let helper = [];
            let current = this.requestedData[0];
            this.requestedData.forEach((item) => {
                if (current.clerk.id === item.clerk.id) {
                    if ((item.end - current.start === 2) && (item.booked === 0 && current.booked === 0)) {
                        helper.push({
                            id: current.id,
                            day: current.day,
                            start: current.start,
                            end: item.end,
                            booked: 0,
                            clerk: current.clerk
                        });
                    }
                }
                current = item;
            });
            this.setState({dates: helper});
        }
    }


    generateTimeTable() {
        let param = document.getElementById("appointmentSelect").value;
        axios.get('http://localhost:3001/Dates?booked=0&&day=' + param)
            .then((response) => {
                this.requestedData = response.data;
                this.validator();
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <Navbar name={'Debrecen'}/>
                <div className="container-fluid m-2">
                    <div className="row">
                        <div className="col-4"/>
                        <div className="col-4">
                            <label htmlFor="inputState" className="font-weight-bold">Select an appointment</label>
                            <select onChange={() => this.generateTimeTable()} id="appointmentSelect"
                                    className="form-control">
                                <option selected disabled>Choose Appointment</option>
                                <option value="1">Monday</option>
                                <option value="2">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="4">Thursday</option>
                                <option value="5">Friday</option>
                            </select>
                        </div>
                        <div className="col-4"/>
                    </div>
                    <div className="row mt-4">
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
                                                    <Link to={'/booking'} className="btn btn-outline-success">Book</Link>
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
                            <Link to={"/"} className="btn btn-outline-success">Back to issues</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TimeTable;
