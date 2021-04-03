import React from 'react';

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
  return <p>Hello {city}</p>;
};

export default City;
