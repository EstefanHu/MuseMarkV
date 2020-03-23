import React, { Component } from 'react';

import './dashboard.css';

import ItemContainer from './items/itemContainer';

class Dashboard extends Component {
    render() {
        return (
            <section id='dashboard'>
                <ItemContainer />
            </section>
        )
    }
}

export default Dashboard;