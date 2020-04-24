import React, { useState } from 'react';

import './dashboard.css';

import { Actions } from './actions';
import { Stories } from './stories';
import { Delete } from './delete';

export const Dashboard = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    return(
        <section id='dashboard'>
            <h1>Dashboard</h1>
            <Actions />
            <Stories
                toggleIsDeleting={
                    () => setIsDeleting(isDeleting => !isDeleting)
                }
            />
            {isDeleting && 
                <Delete 
                    toggleIsDeleting={
                        () => setIsDeleting(isDeleting => !isDeleting)
                    }
                />
            }
        </section>
    )
}