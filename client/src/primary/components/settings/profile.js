import React from 'react';

export const Profile = ({firstName, lastName, email}) => (
  <section
    className='settings__profile'
  >
    <h1>{firstName} {lastName}</h1>
    <h2>{email}</h2>
  </section>
)