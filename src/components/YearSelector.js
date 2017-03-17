import React, { Component } from 'react';

export default class YearSelector extends Component {

    constructor (props) {
        super(props);

        // Initalise the state
        this.state = {};
    }

    labels () {

        return this.props.labels.map(label => {
            let isActive = label === this.props.activeYear ? "is-active" : "" ;
            let btnClass = `button is-primary ${isActive}`;
            return <a key={label} className={btnClass} onClick={() => this.props.chooseYear(label)}>{label}</a>
        })
    }

    render () {
        return (
            <div className="box year-selector">
                {this.labels()}
            </div>
        )
    }
}
