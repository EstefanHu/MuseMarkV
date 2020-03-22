import React, { Component } from 'react';

import './dashboard.css';

import Map from './items/map';

class Dashboard extends Component {
    render() {
        return (
            <section id='dashboard'>
                <Map />
            </section>
        )
    }
}

export default Dashboard;