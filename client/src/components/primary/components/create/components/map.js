import React, { useState, useContext } from 'react';
import { PitchContext } from '../../../../../context';

import ReactMapGl from 'react-map-gl';

import '../create.css';
import { Banner } from './banner';
import { Actions } from './actions';
import { Story } from './story';
import { StoryNodes } from './storyNodes';
import { StoryRoute } from './storyRoute';
import { Write } from './write';

export const Map = props => {
  const {pitch, setPitch} = useContext(PitchContext);
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });
  const [story, setStory] = useState([]);
  const [tempNode, setTempNode] = useState(null);
  const [action, setAction] = useState(null);
  const [isWriting, setIsWriting] = useState(false);

  const addToMap = e => {
    if (action === 'Add Node') {
      setTempNode({
        "type": "node",
        "position": story.length,
        "name": '',
        "markdown": '',
        "coordinates": e.lngLat
      });
      setIsWriting(isWriting => !isWriting);
    } else if (action === 'Add Turn') {
      updateStory({
        "type": "turn",
        "position": story.length,
        "coordinates": e.lngLat
      });
    }
    setAction(null);
  }

  const updateStory = node => {
    if (story.length < node.position + 1) {
      setStory([...story, node]);
    } else {
      let newstory = story;
      newstory[node.position] = node;
      setStory(newstory);
    }
  }

  const engageNode = nodeId => {
    if (action === 'Remove') {
      story.splice(nodeId, 1);
      for (let i = 0; i < story.length; i++) {
        story[i].position = i;
      }
    } else if (action === 'Edit') {
      let node = story[nodeId];
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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": pitch.title,
        "description": pitch.description,
        "location": story[0].coordinates,
        "route": story,
        "authorId": 1 //TODO: Chagne to call current UserId
      })
    };
    fetch('http://localhost:4000/story/create', requestOptions)
      .then(res => res.json())
      .catch(console.error);
    setPitch(null);
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
        <StoryNodes
          plottedNodes={ story }
          engageNode={ engageNode }
        />
        <StoryRoute nodes={ story } />
      </ReactMapGl>
      <Banner togglePitch={() => props.togglePitch()} />
      <Actions
        triggerAction={chosenAction => setAction(chosenAction)}
        action={ action }
        saveStory={ saveStory }
      />
      <Story
        nodes={ story }
        editNode={node => editNode(node)}
      />
      {isWriting &&
        <Write
          tempNode={ tempNode } 
          toggleIsWriting={() => setIsWriting(isWriting => !isWriting)}
          updateStory={ updateStory }
        />
      }
    </>
  )
}