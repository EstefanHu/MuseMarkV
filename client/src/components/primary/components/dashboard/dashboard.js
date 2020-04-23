import React, { Component } from 'react';

import './dashboard.css';

import { Actions } from './components/actions';
import { Stories } from './components/stories';

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