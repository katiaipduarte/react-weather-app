import React from 'react';
import Navbar from '../components/Navbar/Navbar';

type Props = {
  match: {
    params: {
      city: string;
    };
  };
};

const City = (props: Props) => {
  const { match } = props;
  const { city } = match.params;
  return (
    <>
      <Navbar />
      <p>Hello {city}</p>
    </>
  );
};

export default City;
