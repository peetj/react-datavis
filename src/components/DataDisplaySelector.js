import React, { Component } from 'react';

// There is an overlap between this class and the YearSelector. We should refactor them to be cleaner
export default class DataDisplaySelector extends Component {

    constructor (props) {
        super(props);

        {/* Initalise the state */}
        this.state = {};
    }

    labels () {
        return this.props.labels.map(label => {
            let isActive = label === this.props.activeDisplay ? "is-active" : "" ;

            // This is where we can choose to display/not display the button based on Device type in our Media Queries
            let btnClass = `button is-info ${isActive} is-${label.toLowerCase()}`;
            return <a key={label} className={btnClass} onClick={() => this.props.chooseDisplay(label)}>{label}</a>
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
