import React, { Component } from 'react';

import './dashboard.css';

import { Actions } from './actions';
import { Stories } from './stories';
import { Delete } from './delete';

export class Dashboard extends Component {
    render() {
        return (
            <section id='dashboard'>
                <h1>Dashboard</h1>
                <Actions />
                <Stories />
                <Delete />
            </section>
        )
    }
}