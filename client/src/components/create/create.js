import React, { Component } from 'react';

import './create.css';
import Nav from '../Layout/nav';
import Map from './map';
import Loading from '../Layout/loading';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0.0,
      longitude: 0.0,
      api: '',
    }
  }

  componentDidMount() {
    this.geoLocate();
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => this.setState({ api: res }))
      .catch(console.error);
  }

  geoLocate() {
    navigator.geolocation
      .getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.setState({
        latitude: latitude,
        longitude: longitude,
      });
    }, error => {
      console.log(error);
    });
  }

  render() {
    return this.state.api !== '' ? (
      <>
        <Nav />
        <Map
          longitude={ this.state.longitude }
          latitude={ this.state.latitude }
          apikey={ this.state.api }
        />
      </>
    ) : (
      <Loading />
    )
  }
}

export default Create;