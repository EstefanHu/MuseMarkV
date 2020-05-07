import React, { useState, useContext } from 'react';
import { LocatinContext, LocationContext } from '../../../context';

export const Location = () => {
  const { setLng, setLat } = useContext(LocationContext)
  const [updateLocation, setUpdateLocation] = useState(false);

  const doUpdateLocation = () => {
    console.log('updating');
  }

  return (
    <span>
      <button
        onClick={() => setUpdateLocation(updateLocation => !updateLocation)}
      >Update Location</button>
      {updateLocation &&
        <button
          onClick={doUpdateLocation}
        >Run Geolocation</button>
      }
    </span>
  )
}