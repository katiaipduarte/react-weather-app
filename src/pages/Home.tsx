import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';
import backgroundImage from '../assets/background.jpg';
import { HomeTemplate } from './Home.style';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeTemplate style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Welcome!</h1>
        <h3>Select your city to view the weather forecast.</h3>
        <Form />
      </HomeTemplate>
    </>
  );
};

export default Home;
