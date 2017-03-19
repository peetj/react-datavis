import React, { Component } from 'react';
import { BarChart } from 'react-easy-chart';

const INNERWIDTH_MARGIN = 150;
const INNERHEIGHT_MARGIN = 400;

export default class Bar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            width: (window.innerWidth - INNERWIDTH_MARGIN) > 1200 ? 1200 : (window.innerWidth - INNERWIDTH_MARGIN),
            height: (window.innerHeight - INNERHEIGHT_MARGIN) > 800 ? 800 : (window.innerHeight - INNERHEIGHT_MARGIN)
        };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount () {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions () {
        this.setState({
            width: (window.innerWidth - INNERWIDTH_MARGIN) > 1200 ? 1200 : (window.innerWidth - INNERWIDTH_MARGIN),
            height: (window.innerHeight - INNERHEIGHT_MARGIN) > 800 ? 800 : (window.innerHeight - INNERHEIGHT_MARGIN)
        });
    }

    render() {
        let colorBars = true;
        let axes = true;

        return (
            <div>
                <BarChart
                    axes
                    colorBars
                    height={this.state.height}
                    width={this.state.width}
                    data={this.props.data}
                    margin={{top: 0, right: 10, bottom: 10, left: 50}}
                />
                <p className="bar-key-container">
                {
                    this.props.data.map((d, i) => {
                        return <span key={d.key} className="bar-key">{i+1}. {d.key}, </span>
                    })
                }
                </p>
            </div>
        );
    }
}
