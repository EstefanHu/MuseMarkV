import React, { useState } from 'react';

import './dashboard.css';

import { Stories } from './stories';
import { Delete } from './delete';

export const Dashboard = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [id, setId] = useState();

    return (
        <section className='container'>
            <Stories
                toggleIsDeleting={
                    () => setIsDeleting(isDeleting => !isDeleting)
                }
                setId={id => setId(id)}
            />
            {isDeleting &&
                <Delete
                    toggleIsDeleting={
                        () => setIsDeleting(isDeleting => !isDeleting)
                    }
                    id={id}
                />
            }
        </section>
    )
}