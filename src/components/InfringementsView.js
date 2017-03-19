import React, { Component } from 'react';
import YearSelector from './YearSelector';
import DataDisplaySelector from './DataDisplaySelector';
import Pie from './Pie';
import Bar from './Bar';
import Infringements from './Data/Infringements';

// This is our 'type' of View Class - in this case a view to display Infringements !!
// It supplies it's own <header> and <footer> sections

export default class InfringementsView extends Component {

    constructor (props) {
        super(props);

        // Initalise the state
        this.state = { activeYear: "2013", activeDisplay: "Pie", activeData: Infringements[0]["offences"] }; // Pass in from initial state

        // Bindings
        this.chooseYear = this.chooseYear.bind(this);
        this.chooseDisplay = this.chooseDisplay.bind(this);
    }

    componentDidMount () {
        {/* Normally we would probably fetch the state here from some remote service, however, we will use
            our test data module for simplicity. */}
        this.setState({ infringements: Infringements });
    }

    chooseYear (year) {
        // We need to set the activeYear state
        let data = Infringements.find((el) => {
            return el.year == year;
        });        
        this.setState({ activeYear: year, activeData: data.offences });
    }

    chooseDisplay (display) {
        // We need to set the displayType state
        this.setState({ activeDisplay: display });
    }

    // Simply remove the header method to use the Generic Header
    header () {
        return (
            <header className="view-infringement-header">
                <YearSelector
                    labels={["2013", "2014"]}
                    chooseYear={this.chooseYear}
                    activeYear={this.state.activeYear} />
            </header>
        )
    }

    // Likewise with the footer!
    footer () {
        return (
            <footer className="view-infringement-footer">
                <DataDisplaySelector
                    labels={["Pie", "Bar", "Table"]}
                    chooseDisplay={this.chooseDisplay}
                    activeDisplay={this.state.activeDisplay} />
            </footer>
        )
    }

    // We may need to filter/massage the dataset for the display type.
    aggregatedPieData () {
        let others = { key: "Others", value: 0, faceValue: 0, label: "Others"};
        let data = this.state.activeData.filter(datum => {
            if(datum.value < 1500){
                others.value += datum.value;
                others.faceValue += datum.faceValue;
            }
            return datum.value > 1500;
        });
        if(others.value > 0)
            data.push(others);
        return data;
    }

    aggregatedBarData () {
        let data = this.state.activeData.map((datum, i) => {
            var obj = {};
            obj.x = i+1;
            obj.y = datum.value;
            obj.faceValue += datum.faceValue;
            obj.key = datum.key;
            return obj;
        });
        return data;
    }

    getPie (data) {
        return (
            <Pie data={data} />
        )
    }

    getBar (data) {
        return (
            <Bar data={data} />
        )
    }

    getTable (data) {
        return (
            <div>
                <h1>TABLE</h1>
                <p>This is a placeholder for a table view which (when finished) would add an extra view for the Desktop more conducive to this type of display</p>
                <p>To remove the Table view, simply take 'Table' out of the initial state.</p>
            </div>
        )
    }

    render () {
        // Shall we use the Generic Header/Footer or our own ? !!
        let header = this.header && this.header() || this.props.header;
        let footer = this.footer && this.footer() || this.props.footer;
        let data = null;

        // For Pie charts, we are going to Aggregate small Values
        if(this.state.activeDisplay === "Pie"){
            data = this.aggregatedPieData();
        }
        else if(this.state.activeDisplay === "Bar"){
            data = this.aggregatedBarData();
        }
        else{
            data = this.state.activeData;
        }

        return (
            <div className="view-infringement">

                {header}

                <div className="box view-infringement-body">
                {
                    this.state.activeDisplay === "Pie"
                    ? this.getPie(data)
                    : this.state.activeDisplay === "Table"
                        ? this.getTable(data)
                        : this.getBar(data)
                }
                </div>

                {footer}

            </div>
        )
    }
}
