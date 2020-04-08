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
  const [nodes, setNodes] = useState([]);
  const [tempNode, setTempNode] = useState(null);
  const [action, setAction] = useState(null);
  const [isWriting, setIsWriting] = useState(false);

  const addNodeToMap = e => {
    setTempNode({
      "position": nodes.length,
      "title": '',
      "content": '',
      "coords": e.lngLat
    });
    toggleIsWriting();
    setAction(null);
  }

  const toggleIsWriting = () => {
    setIsWriting(isWriting => !isWriting);
  }

  const updateStory = node => {
    if (nodes.length < node.position + 1) {
      setNodes([...nodes, node]);
    } else {
      let newNodes = nodes;
      newNodes[node.position] = node;
      setNodes(newNodes);
    }
  }

  const editNode = node => {
    setTempNode(node);
    toggleIsWriting();
  }

  const removeNode = e => {
    console.log('removed');
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
        onClick={e => { action === 'Add' ?
          addNodeToMap(e) :
          setAction(null)
        }}
      >
        <StoryNodes nodes={ nodes } />
        <StoryRoute nodes={ nodes } />
      </ReactMapGl>
      <Actions triggerAction={ chosenAction => setAction(chosenAction) } />
      <Story nodes={ nodes } editNode={ editNode } />
      {isWriting &&
        <Write
          tempNode={ tempNode } 
          toggleIsWriting={ toggleIsWriting }
          updateStory={ updateStory }
        />
      }
    </>
  )
}