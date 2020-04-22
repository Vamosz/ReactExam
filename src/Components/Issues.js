import React from 'react'
import IssueCard from "./IssueCard";


class Issues extends React.Component {

    issueItems = [];

    constructor(props) {
        super(props);
        this.issueItems.push({
            "id": 1,
            "Name": "Get Married Licence",
            "Time": 10
        });
        this.issueItems.push({
            "id": 2,
            "Name": "Birth Certificate",
            "Time": 20
        });
        this.issueItems.push({
            "id": 3,
            "Name": "Renew the Driving License",
            "Time": 30
        });
    }

    render() {
        return (
            <div className="row">
                {this.issueItems.map((issue)=>{
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
