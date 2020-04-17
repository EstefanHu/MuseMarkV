import React from 'react';

import { Map } from './map';
import { Stories } from './stories';

const ItemContainer = () => {
  return (
    <section id='dashboard__itemcontainer'>
      <Map />
      <Stories />
    </section>
  )
}

export default ItemContainer;