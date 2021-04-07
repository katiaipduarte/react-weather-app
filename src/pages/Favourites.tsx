import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';
import FavouriteLocations from '../components/FavouriteLocations/FavouriteLocations';

const Favourites = () => {
  return (
    <>
      <Navbar />
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        <FavouriteLocations />
      </main>
    </>
  );
};

export default Favourites;
