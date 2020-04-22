import React from 'react'


class IssueCard extends React.Component{

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <h1>{this.props.item.Name}</h1>

        );
    }

}
export default IssueCard;
