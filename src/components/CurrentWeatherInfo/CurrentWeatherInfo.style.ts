import styled from 'styled-components';

export const WeatherInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  h1,
  h2 {
    font-weight: bold;
  }

  h3 {
    font-weight: 500;
  }

  p {
    margin-top: 25rem;
  }

  svg {
    margin-top: 25rem;
    font-size: 60rem;
  }
`;
