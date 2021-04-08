import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';
import SearchLocationInput from '../components/SearchLocationInput/SearchLocationInput';

const Home = () => {
  return (
    <>
      <main style={{ backgroundImage: `url(${backgroundImage})` }} className="centered-container">
        <h1>Welcome!</h1>
        <h3>Select your city to view the weather forecast.</h3>
        <SearchLocationInput />
      </main>
    </>
  );
};

export default Home;
