import React from 'react';

export const Delete = props => {
  const handleDelete = id => {
    fetch('http://localhost:4000/story/delete/' + id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }})
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
  }

  return (
    <div className='modal' id='deleteModal'>
      <div className='modal-content' id='deleteStory__form'>
        <span className='close' onClick={() => {props.toggleIsDeleting()}}>&times;</span>
        <h1>Are you sure?</h1>
        <form onSubmit={ () => handleDelete(props.id) }>
          <button type='submit'>Yes, Delete this Story</button>
        </form>
      </div>
    </div>
  )
}