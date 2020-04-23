import React, { Component } from 'react';

import './dashboard.css';

import { Actions } from './actions';
import { Stories } from './stories';

export class Dashboard extends Component {
    render() {
        return (
            <section id='dashboard'>
                <h1>Dashboard</h1>
                <Actions />
                <Stories />
            </section>
        )
    }
}