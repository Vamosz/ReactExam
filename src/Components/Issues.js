import React from 'react'
import IssueCard from "./IssueCard";
import AppointmentStore from "../Stores/AppointmentStore";

const axios = require('axios');

class Issues extends React.Component {

    constructor(props) {
        super(props);
        AppointmentStore._items = [];
        this.state = {
            issueItems: []
        }
        this.getIssues();

    }

    getIssues(){
        axios.get('http://localhost:3001/Issues')
            .then((response) => {
                this.setState({issueItems: response.data});
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <div className="row">
                {this.state.issueItems.map((issue)=>{
                    return (
                        <div key={issue.id} className="col-12 col-md-4 mt-4">
                            <IssueCard item={issue}/>
                        </div>
                    );
                })}
            </div>

        );
    }

}

export default Issues;
