import React, { useState } from 'react';

const Form = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    // fetchWeather(e, city, country);
    setCity('');
    setCountry('');
  };

  return (
    <form onSubmit={(e) => handleSubmit()}>
      <input
        type="text"
        name="city"
        placeholder="City..."
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <input
        type="text"
        name="country"
        placeholder="Country..."
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
