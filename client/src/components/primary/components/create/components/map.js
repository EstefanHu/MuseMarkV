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
    if (action === 'Add Node') {
      setTempNode({
        "position": nodes.length,
        "title": '',
        "content": '',
        "coords": e.lngLat
      });
      setIsWriting(isWriting => !isWriting);
      setAction(null);
    } else if (action === 'Add Turn') {
      console.log('turn');
    }
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

  const engageNode = nodeId => {
    if (action === 'Remove') {
      nodes.splice(nodeId, 1);
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].position = i;
      }
      setAction(null);
    }
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
        onClick={e => addNodeToMap(e)}
      >
        <StoryNodes
          plottedNodes={ nodes }
          engageNode={ engageNode }
        />
        <StoryRoute nodes={ nodes } />
      </ReactMapGl>
      <Actions
        triggerAction={chosenAction => setAction(chosenAction)}
        action={ action }
      />
      <Story
        nodes={ nodes }
        editNode={
          node => {
            setTempNode(node);
            setIsWriting(isWriting => !isWriting);
        }}
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