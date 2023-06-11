import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const Home = () => {
  return (
    <div className='p-4 flex flex-col items-center justify-center'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>NIT Trichy Map using Leaflet JS</h2>
      <p className='text-2xl md:text-3xl lg:text-4xl p-4'>You can Look at any places near the location</p>
    </div>
  )
}

export default Home