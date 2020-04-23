import React from 'react'
import IssueAction from "../Actions/IssueAction";
import AppointmentStore from '../Stores/AppointmentStore';

class IssueCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        AppointmentStore._items = [];
        this.state = {
            wasClick: false
        }
    }

    buttonClick(item) {
        this.setState({wasClick: !this.state.wasClick})
        if (this.state.wasClick) {
            IssueAction.removeItemById(item.id);
        } else {
            IssueAction.insertItem(item)
        }
    }

    render() {
        return (
            <div className="card">
                <h5 className="card-header">{this.props.item.Name}</h5>
                <div className="card-body">

                    <div className='row w-100 mr-0'>
                        <div className='col-5'>
                            <h5 className="card-title">Takes {this.props.item.Time} minutes.</h5>
                        </div>
                        <div className='col-7 w-100  p-0 m-0 text-right'>
                            <button
                                className={"btn text-right" + (!this.state.wasClick ? ' btn-outline-success' : ' btn-outline-danger')}
                                onClick={() => {
                                    // IssueAction.removeItemById(this.props.item.id);
                                    this.buttonClick(this.props.item)
                                }}>
                                {!this.state.wasClick ? 'Click to book' : 'Booked'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default IssueCard;
