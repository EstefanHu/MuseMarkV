import React, { useState, useEffect, useContext } from 'react';
import { StoryContext, NodeContext } from '../../../context';

export const Write = props => {
  const { story, setStory } = useContext(StoryContext);
  const { node, setNode} = useContext(NodeContext);
  const [name, setName] = useState(node.name);
  const [markdown, setMarkdown] = useState(node.markdown);
  const [longitude, setLongitude] = useState(node.coordinates[0]);
  const [latitude, setLatitude] = useState(node.coordinates[1]);

  useEffect(() => {
    const modal = document.getElementById('writeModal');
    const modalToggle = e => {
      if (e.target === modal) {
        props.toggleNode();
      }
    }
    modal.addEventListener('click', modalToggle);

    return (() => {
      modal.removeEventListener('click', modalToggle);
    });
  });

  // submit to story
  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') return alert('Story Nodes must have a name')

    const newNode = {
      "type": node.type,
      "position": node.position,
      "name": name,
      "markdown": markdown,
      "coordinates": [longitude, latitude]
    }

    let update;

    if (story.route.length === newNode.position) {
      update = [...story.route, newNode];
    } else {
      let newStory = story.route;
      newStory[newNode.position] = newNode;
      update = newStory;
    }

    setStory({ ...story, "route": update });
    setNode(null);
  }

  return (
    <div className='modal' id='writeModal'>
      <div className='modal-content' id='storyNode__form'>
        <span className='close' onClick={() => { props.toggleNode() }}>&times;</span>
        <h1>Add Node to Story</h1>
        <form onSubmit={handleSubmit} >
          <label>Title for Story Node</label>
          <input
            className='storyNode__input'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Create a Name for this Node'
          />
          <span className='storyNode__horizontal'>
            <span>
              <label>Longitude</label>
              <input
                className='storyNode__input'
                type='text'
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                placeholder={node.coordinates[0]}
                disabled
              />
            </span>
            <span>
              <label>Latitude</label>
              <input
                className='storyNode__input'
                type='text'
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                placeholder={node.coordinates[1]}
                disabled
              />
            </span>
          </span>
          <label>Markdown for Story Node - <a
            href='https://www.markdownguide.org/'
            rel='noopener noreferrer'
            target='_blank'>What is Markdown?</a>
          </label>
          <textarea
            className='storyNode__input'
            type='text'
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            placeholder='Story Markdown'
          />
          <span className='storyNode__horizontal'>
            <input className='plotNode' type='submit' value='Plot Node' />
            <button className='cancelNode' onClick={() => props.toggleNode()}>Cancel</button>
          </span>
        </form>
      </div>
    </div>
  )
}