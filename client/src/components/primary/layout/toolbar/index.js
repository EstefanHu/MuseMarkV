import React, {
  useState,
  useContext
} from 'react';

import { StoryContext } from '../../../../context';
import { withRouter } from 'react-router-dom';

import { FiPlusSquare } from 'react-icons/fi';
import { FaRegSave, FaRegDotCircle } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';

export const Toolbar = withRouter(props => {
  const { setStory } = useContext(StoryContext)
  const [isWriting, setIsWriting] = useState(false);

  const createStory = () => {
    setStory(null);
    setIsWriting(isWriting => !isWriting);
    // props.history.push('/app/create');
  }

  return (
    <nav id='toolbar' className='topNav'>
      <h1 className='logo'>:M</h1>
      <span>
        {!isWriting ? (
          <>
            <GoLocation
              className='toolbar__icons'
            />
            <FaRegDotCircle
              className='toolbar__icons'
            />
            <RiDeleteBin2Line
              className='toolbar__icons'
            />
            <MdModeEdit
              className='toolbar__icons'
            />
            <FaRegSave
              className='toolbar__icons'
              onClick={createStory}
            />
          </>
        ) : (
            <FiPlusSquare
              className='toolbar__icons'
              onClick={createStory}
            />
          )
        }
      </span>
    </nav >
  )
});