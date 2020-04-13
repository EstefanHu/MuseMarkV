import React, { useEffect } from 'react';

import Register from './register';
import Login from './login';

export const Body = props => {
  // TODO:L tab index update on selected nav item
  useEffect(() => {
    if (props.subject !== '') {
      let selected = document.getElementById('title__' + props.subject);
      selected.classList.add('selected_subject');
      let selectedBody = document.getElementById('body__' + props.subject);
      selectedBody.classList.add('selectedBody_subject');
      return () => {
        selected.classList.remove('selected_subject');
        selectedBody.classList.remove('selectedBody_subject');
      }
    }
  }, [props.subject])

  return (
    <section className='landing__body'>
      <div className='landing__body--title'>
        <h1
          className='body__title'
          id='title__mission'>
            Our Mission.
        </h1>
        <h1
          className='body__title'
          id='title__creator'>
            Who Am I?
        </h1>
        <h1
          className='body__title'
          id='title__register'>
            Register.
        </h1>
        <h1
          className='body__title'
          id='title__login'>
            Request Access.
        </h1>
      </div>
      <div className='landing__body--main'>
        <section
          className='body__main'
          id='body__mission'
        ></section>
        <section
          className='body__main'
          id='body__creator'
        ></section>
        <section
          className='body__main'
          id='body__register'
        >
          <Register />
        </section>
        <section
          className='body__main'
          id='body__login'
        >
          <Login />
        </section>
      </div>
    </section>
  )
}