import styled from 'styled-components';

export const FavouriteButtonContainer = styled.button`
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-top: 25rem;

  &:focus {
    outline: none;
  }

  svg {
    font-size: 30rem;
  }

  @media (min-width: 1080px) {
    width: 80%;
  }
`;
