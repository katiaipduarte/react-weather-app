import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';
import { HomeTemplate } from './Home.style';
import SearchLocationInput from '../components/SearchLocationInput/SearchLocationInput';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeTemplate style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Welcome!</h1>
        <h3>Select your city to view the weather forecast.</h3>
        <SearchLocationInput />
      </HomeTemplate>
    </>
  );
};

export default Home;
