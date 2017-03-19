import React, { Component } from 'react';
import {PieChart, ToolTip} from 'react-easy-chart';
import format from 'format-number';

const INNERWIDTH_MARGIN = 90;

export default class Pie extends Component {
  constructor(props) {
    super(props);

    this.state = { width: (window.innerWidth - INNERWIDTH_MARGIN) > 600 ? 600 : (window.innerWidth - INNERWIDTH_MARGIN) }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount () {
      // Simple way to add a window resize listener
      window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount () {
      // Making sure we remove the window resize listener
      window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions () {
      this.setState({ width: (window.innerWidth - INNERWIDTH_MARGIN) > 600 ? 600 : (window.innerWidth - INNERWIDTH_MARGIN)});
  }

  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      toolTipText: `${format({})(d.data.faceValue)}`,
      toolTipPrefix: d.data.key
    });
  }

  mouseOutHandler() {
    this.setState({
        showToolTip: false,
        toolTipText: "",
        toolTipPrefix: ""
    });
  }

  render() {
    let labels = true;

    return (
        <div>
            <PieChart
                labels
                className="piechart"
                size={this.state.width}
                data={this.props.data}
                mouseOverHandler={this.mouseOverHandler.bind(this)}
                mouseOutHandler={this.mouseOutHandler.bind(this)}
                clickHandler={(d) => this.setState({showToolTip: true, toolTipText: `${format({})(d.data.faceValue)}`, toolTipPrefix: d.data.key})}
            />
            {this.state.showToolTip
                ?   <p className="toolTipTextContainer">
                        <span className="toolTipPrefix">{this.state.toolTipPrefix}: </span><span className="toolTipText">{this.state.toolTipText}</span>
                    </p>
                :   <span></span>}
        </div>
    );
  }
}
