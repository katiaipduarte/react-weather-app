import styled from 'styled-components';

export const List = styled.section`
  width: 50%;
  margin: 0 auto;
  border-radius: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  padding: 10rem;
  margin-top: 30rem;

  .flex-forecast {
    display: flex;
    justify-content: space-between;
    padding: 5rem 0;

    .weather-forecast-info {
      span {
        margin-left: 10rem;
      }
    }
  }
`;
