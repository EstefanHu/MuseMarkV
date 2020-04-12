import React, { useEffect } from 'react';

export const Body = props => {
  useEffect(() => {
    if (props.subject !== '') {
      let selected = document.getElementById('title__' + props.subject);
      selected.classList.add('selected_subject');
      return () => {
        selected.classList.remove('selected_subject');
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
          id='title__join'>
            Register.
        </h1>
        <h1
          className='body__title'
          id='title__create'>
            Request Access.
        </h1>
      </div>
    </section>
  )
}