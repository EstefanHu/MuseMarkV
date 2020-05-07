import React, { useState, useContext } from 'react';
import { LocationContext } from '../../../context';

export const Location = () => {
  const { setLng, setLat } = useContext(LocationContext)
  const [updateLocation, setUpdateLocation] = useState(false);

  // TODO: IS BROKEN
  const doUpdateLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
    }, error => {
      if (error.code === 3) {
        console.log('Locating...\n');
        doUpdateLocation();
      } else {
        console.log(error);
      }
    }, { timeout: 2000 });
  }

  return (
    <span>
      <button
        onClick={() => setUpdateLocation(updateLocation => !updateLocation)}
      >
        {updateLocation ? 'That is Accurate' : 'Update Location'}
      </button>
      {updateLocation &&
        <button
          onClick={doUpdateLocation}
        >Run Geolocation</button>
      }
    </span>
  )
}