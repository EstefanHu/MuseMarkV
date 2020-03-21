import React, { Component } from 'react';

import './create.css';
import Nav from '../layout/nav/nav';
import Map from './mapComponents/map';
import Loading from '../layout/loading';
import NewLayer from './IA/newLayer';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 47.655548,
      longitude: -122.303200,
      api: '',
    }
  }

  componentDidMount() {
    // this.geoLocate();
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => this.setState({ api: res }))
      .catch(console.error);
  }

  // For Centering map on Geolocated space of user
  // geoLocate(times) {
  //   navigator.geolocation
  //     .getCurrentPosition(position => {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     this.setState({
  //       latitude: latitude,
  //       longitude: longitude,
  //     });
  //   }, error => {
  //     if (error.code === 3) {
  //       if (times === 5) {
  //         console.log('Recursion failed...');
  //       }
  //       console.log('Recurring...\n');
  //       this.geoLocate(times + 1);
  //     } else {
  //       console.log(error);
  //     }
  //   }, { timeout: 2000 });
  // }

  render() {
    return this.state.api !== '' ? (
      <>
        <Nav />
        <Map
          longitude={ this.state.longitude }
          latitude={ this.state.latitude }
          apikey={ this.state.api }
        />
        <NewLayer />
      </>
    ) : (
      <Loading />
    )
  }
}

export default Create;