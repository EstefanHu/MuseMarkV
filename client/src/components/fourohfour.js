import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
    <main>
        <Link
            to='/app/dashboard'
        >
            <p>Back to Site</p>
        </Link>
    </main>
)

export default FourOhFour;