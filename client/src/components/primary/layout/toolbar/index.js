import React, {
  useState,
  useContext
} from 'react';

import { StoryContext } from '../../../../context';
import { withRouter } from 'react-router-dom';

export const Toolbar = withRouter(props => {
  const { setStory } = useContext(StoryContext)
  const [isWriting, setIsWriting] = useState(false);

  const createStory = () => {
    setStory(null);
    setIsWriting(isWriting => !isWriting);
    props.history.push('/app/create');
  }

  return (
    <nav id='toolbar' className='topNav'>
      <h1 className='logo'>:M</h1>
      <span>
        {isWriting ? (
          <h1>Creating</h1>
        ) : (
            <button
              className='button'
              onClick={createStory}
            >Create Story</button>
          )
        }
      </span>
    </nav >
  )
});