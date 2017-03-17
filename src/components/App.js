import React, { Component } from 'react';
import MainPage from './MainPage';

import '../sass/index.scss';

// Save exporting the class later on!
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <MainPage title="Infringements on Sydney Trains"/>
    );
  }
}
