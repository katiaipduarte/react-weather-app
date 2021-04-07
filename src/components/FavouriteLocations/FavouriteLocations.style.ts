import styled from 'styled-components';

export const FavouriteLocationsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100vh;

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    justify-content: center;

    li {
      box-sizing: border-box;
      margin: 1rem 0.25em;
      cursor: pointer;
      border-radius: 20rem;
      background-color: rgba(0, 0, 0, 0.45);
      line-height: 1;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      height: 180rem;
      padding: 15rem;
      width: 150rem;
      div {
        position: absolute;
        bottom: 15rem;

        p {
          cursor: pointer;
          line-height: 30rem;

          span {
            margin-left: 5rem;
          }
        }
      }
    }
  }
`;
