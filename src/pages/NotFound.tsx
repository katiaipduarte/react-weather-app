import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main style={{ backgroundImage: `url(${backgroundImage})` }} className="centered-container">
        <h1>
          Page not found. Go back to
          <Link to="/" replace>
            {` homepage.`}
          </Link>
        </h1>
      </main>
    </>
  );
};

export default NotFound;
