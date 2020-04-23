import React, { useState, useEffect } from 'react';
import { useParams } from 'react-route-dom';  

export const Nodes = () => {
  let { id } = useParams();
  
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/story/' + id)
      .then(res => res.json())
      .then(res => setNodes(res))
      .catch(console.errors);
  }, []);

  return (
    <h1>Hello from Nodes</h1>
  )
}