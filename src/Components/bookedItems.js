import React from 'react';
import AppointmentStore from '../Stores/AppointmentStore';
import {Link} from "react-router-dom";


class bookedItems extends React.Component {

    constructor() {
        super();
        this.state = {booked: AppointmentStore._items};
        this.onChangeOfBookedItems = this.onChangeOfBookedItems.bind(this);
    }

    onChangeOfBookedItems() {
        this.setState({
            booked: AppointmentStore._items
        });
    }

    componentDidMount() {
        AppointmentStore.addOnChangeListener(this.onChangeOfBookedItems);
    }

    componentWillUnmount() {
        AppointmentStore.removeChangeListener(this.onChangeOfBookedItems);
    }

    render() {
        return (
            <div className='row mt-3'  style={{display: this.state.booked.length === 0 ? 'none' : ''}}>
                <div className='col-2'/>
                <div className='col-8'>
                    <h3>This table collect your selections:</h3>
                    <div>
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.booked.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.Name}</td>
                                            <td>{item.Time} minutes</td>
                                        </tr>
                                    );
                                })
                            }
                            <tr>
                                <td>Sum</td>
                                <td>{this.state.booked.reduce((start, item) => {
                                    return start + item.Time
                                }, 0)} minutes
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="row" style={{display: this.state.booked.length === 0 ? 'none' : ''}}>
                            <div className="col-4"/>
                            <div className="col-4">
                                <Link to="/timetable" className="btn btn-outline-primary"
                                      style={{minHeight: 50 + 'px', fontSize: 20 + 'px'}}>Show possible
                                    appointments</Link>
                            </div>
                            <div className="col-4"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default bookedItems;
