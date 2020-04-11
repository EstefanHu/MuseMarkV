import React from 'react';
import {
  MdEmail
} from 'react-icons/md'

export const Contact = () => {
  return (
    <section className='landing__contact'>
      <h1>PROJECT:MUSE - the future of story telling</h1>
      <span>
        <MdEmail />
        <p>info@projectmuse.co</p>
      </span>
    </section>
  )
}