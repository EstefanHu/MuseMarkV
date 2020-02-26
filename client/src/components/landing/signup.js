import React, { useState } from 'react';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName + ' ' + lastName);
  }

  return (
    <section id='signup'>
      <div id='splash'>
        <h1>Muse</h1>
      </div>
      <div id='form__holder'>
        <form onSubmit={ handleSubmit }>
          <input
            type='text'
            value={ firstName }
            onChange={ e => setFirstName(e.target.value) }
          />
          <input
            type='text'
            value={ lastName }
            onChange={ e => setLastName(e.target.value) }
          />
          <input type='submit' value='Register' />
        </form>
      </div>
    </section>
  )
}

export default Signup;