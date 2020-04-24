import React, { useContext } from 'react';

import { StoryContext } from '../../../../context';
import { withRouter } from 'react-router';

export const Actions = withRouter(props => {
  const { setStory } = useContext(StoryContext);

  const createStory = () => {
    setStory(null);
    props.history.push('/app/create');
  }

  return (
    <span className='dashboard__actions'>
      <button
        onClick={createStory}
      >Create Story</button>
    </span>
  )
});