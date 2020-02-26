import React, { Component } from 'react';

import './create.css';
import Map from './map';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0.0,
      longitude: 0.0,
      geoFetched: false,
      api: '',
    }
  }

  componentWillMount() {
    navigator
    .geolocation
    .getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.setState({
        latitude: latitude,
        longitude: longitude,
        geoFetched: true,
      });
    }, error => {
      console.log(error);
    });
  }

  componentDidMount() {
    console.log('mounted');
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => this.setState({api: res}))
      .catch(console.error);
  }

  render() {
    return this.state.geoFetched ? (
      <div>
        {/* <Map
          longitude={ this.state.longitude }
          latitude={ this.state.latitude }
          apikey={ this.state.api }
        /> */}
      </div>
    ) : (
      <div>
        Loading...
      </div>
    )
  }
}

export default Create;