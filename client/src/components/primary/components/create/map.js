import React, { useState, useContext } from 'react';
import { StoryContext } from '../../../../context';
import { useHistory } from 'react-router-dom';
import ReactMapGl from 'react-map-gl';

import './create.css';
import { Banner } from './banner';
import { Actions } from './actions';
import { Story } from './story';
import { StoryNodes } from './storyNodes';
import { StoryRoute } from './storyRoute';
import { Write } from './write';

export const Map = props => {
  const { story, setStory } = useContext(StoryContext);
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });
  const [tempNode, setTempNode] = useState(null);
  const [action, setAction] = useState(null);
  const [isWriting, setIsWriting] = useState(false);

  let history = useHistory();

  const addToMap = e => {
    if (action === 'Add Node') {
      setTempNode({
        "type": "node",
        "position": story.route.length,
        "name": '',
        "markdown": '',
        "coordinates": e.lngLat
      });
      setIsWriting(isWriting => !isWriting);
    } else if (action === 'Add Turn') {
      updateStory({
        "type": "turn",
        "position": story.route.length,
        "coordinates": e.lngLat
      });
    }
    setAction(null);
  }

  const updateStory = node => {
    let update;

    if (story.route.length < node.position + 1) {
      update = [...story.route, node];
    } else {
      let newstory = story.route;
      newstory[node.position] = node;
      update = newstory;
    }
    setStory({
      ...story,
      "route": update
    });
  }

  const engageNode = nodeId => {
    if (action === 'Remove') {
      story.route.splice(nodeId, 1);
      for (let i = 0; i < story.route.length; i++) {
        story.route[i].position = i;
      }
    } else if (action === 'Edit') {
      let node = story.route[nodeId];
      if (node.type === 'node') {
        editNode(node);
      }
    }
    setAction(null);
  }

  const editNode = node => {
    setTempNode(node);
    setIsWriting(isWriting => !isWriting);
  }

  const saveStory = () => {
    if (story === null ||
      story.title === '' ||
      story.description === '')
      return alert('You seem to be missing a pitch');
    if (story.route.length === 0)
      return alert('There seems to be no story nodes');

    fetch('http://localhost:4000/story/create', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": story.id,
        "title": story.title,
        "description": story.description,
        "genre": story.genre,
        "location": story.route[0].coordinates,
        "route": story.route
      })
    })
      .then(res => res.json())
      .catch(console.error);
    setStory({ "route": [] });
    history.goBack();
  }

  return (
    <>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={props.apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
        onClick={e => addToMap(e)}
      >
        <StoryNodes engageNode={engageNode} />
        <StoryRoute />
      </ReactMapGl>
      <Banner togglePitch={() => props.togglePitch()} />
      <Actions
        triggerAction={chosenAction => setAction(chosenAction)}
        action={action}
        saveStory={saveStory}
      />
      <Story editNode={node => editNode(node)} />
      {isWriting &&
        <Write
          tempNode={tempNode}
          toggleIsWriting={() => setIsWriting(isWriting => !isWriting)}
          updateStory={updateStory}
        />
      }
    </>
  )
}