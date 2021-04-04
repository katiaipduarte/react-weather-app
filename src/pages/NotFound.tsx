import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Link to="/" replace>
        Page not found
      </Link>
    </>
  );
};

export default NotFound;
