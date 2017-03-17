import React, { Component } from 'react';

import '../../sass/index.scss';

// Save exporting the class later on!
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
            <p>Hallo React-Datavis</p>
        </div>
    );
  }
}
