import React, { Component } from 'react';

import './create.css';
import Map from './map';
import Loading from '../Layout/loading';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0.0,
      longitude: 0.0,
      loading: false,
      api: '',
    }
  }

  componentWillMount() {
    this.setState({ loading: true });
    navigator
    .geolocation
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

  componentDidMount() {
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => {
        this.setState({
          api: res,
          loading: false,
        })
      })
      .then(console.log(this.state.api))
      .catch(console.error);
  }

  render() {
    return !this.state.loading ? (
      <div>
        <Map
          longitude={ this.state.longitude }
          latitude={ this.state.latitude }
          apikey={ this.state.api }
        />
      </div>
    ) : (
      <Loading />
    )
  }
}

export default Create;