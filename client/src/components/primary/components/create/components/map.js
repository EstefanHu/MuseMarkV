import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

import '../create.css';
import { Actions } from './actions';
import { Story } from './story';
import { StoryNodes } from './storyNodes';
import { StoryRoute } from './storyRoute';
import { Write } from './write';

export const Map = props => {
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
        "position": story.length,
        "title": '',
        "content": '',
        "coords": e.lngLat
      });
      setIsWriting(isWriting => !isWriting);
    } else if (action === 'Add Turn') {
      updateStory({
        "type": "turn",
        "position": story.length,
        "coords": e.lngLat
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
    } else if (action === 'Save') {
      console.log('hello');
    }
    setAction(null);
  }

  const editNode = node => {
    setTempNode(node);
    setIsWriting(isWriting => !isWriting);
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
      <Actions
        triggerAction={chosenAction => setAction(chosenAction)}
        action={ action }
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