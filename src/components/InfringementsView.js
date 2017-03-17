import React, { Component } from 'react';
import YearSelector from './YearSelector';
import DataDisplaySelector from './DataDisplaySelector';
import Infringements from './Data/Infringements';

export default class InfringementsView extends Component {

    constructor (props) {
        super(props);

        // Initalise the state
        this.state = { activeYear: "2013"}; // Pass in from initial state

        // Bindings
        this.chooseYear = this.chooseYear.bind(this);
    }

    componentDidMount () {
        {/* Normally we would probably fetch the state here from some remote service, however, we will use
            our test data module for simplicity. */}
        this.setState({ infringements: Infringements });
    }

    chooseYear (year) {
        console.log("Clicked Year:" + year);
        // We need to set the activeYear state
        this.setState({ activeYear: year });
    }

    // Simply remove the header method to use the Generic Header
    header () {
        return (
            <header className="view-infringement-header">
                <YearSelector labels={["2013", "2014"]} chooseYear={this.chooseYear} activeYear={this.state.activeYear}/>
            </header>
        )
    }

    // Likewise with the footer!
    footer () {
        return (
            <footer className="view-infringement-footer">
                <DataDisplaySelector labels={["Bar", "Graph", "Table"]} />
            </footer>
        )
    }

    render () {
        let header = this.header && this.header() || this.props.header;
        let footer = this.footer && this.footer() || this.props.footer;

        return (
            <div className="view-infringement">

                {header}

                <div className="box view-infringement-body">
                    INSERT DATA HERE!!!
                </div>

                {footer}

            </div>
        )
    }
}
