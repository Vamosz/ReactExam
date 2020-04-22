import React from 'react';
import AppointmentStore from '../Stores/AppointmentStore';


class bookedItems extends React.Component {


    constructor() {
        super();
        this.state = {booked: []};
        this.onChangeOfBookedItems = this.onChangeOfBookedItems.bind(this);
    }

    onChangeOfBookedItems() {
        this.setState({
            booked: AppointmentStore._items
        });
        console.log(this.state.booked);
    }

    componentDidMount() {
        AppointmentStore.addOnChangeListener(this.onChangeOfBookedItems);
    }

    componentWillUnmount() {
        AppointmentStore.removeChangeListener(this.onChangeOfBookedItems);
    }

    render() {
        return (
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
                    <td>{this.state.booked.reduce((start,item)=> { return start + item.Time},0)} minutes</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default bookedItems
