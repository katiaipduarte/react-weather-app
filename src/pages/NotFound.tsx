import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import backgroundImage from '../assets/background.jpg';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p>
          Page not found - the path, <code>{location.pathname}</code>, did not match any React Router routes. Go back to
          <Link to="/" replace>
            homepage.
          </Link>
        </p>
      </main>
    </>
  );
};

export default NotFound;
