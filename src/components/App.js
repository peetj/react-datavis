import React, { Component } from 'react';
import MainPage from './MainPage';

import '../sass/index.scss';

// Save exporting the class later on!
// We should think about making the class stateless as a 'Page' type should probably just display
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //The title would be injected from meta-data but for now is hardcoded
    return (
        <MainPage title="Infringements on Sydney Trains"/>
    );
  }
}
