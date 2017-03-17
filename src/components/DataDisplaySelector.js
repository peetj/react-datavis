import React, { Component } from 'react';

export default class DataDisplaySelector extends Component {

    constructor (props) {
        super(props);

        {/* Initalise the state */}
        this.state = {};
    }

    labels () {
        return this.props.labels.map(label => {
            return <a key={label} className="button is-info">{label}</a>
        })
    }

    render () {
        return (
            <div className="box data-display-selector">
                {this.labels()}
            </div>
        )
    }
}
