import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Link to="/" replace>
      Page not found
    </Link>
  );
};

export default NotFound;
