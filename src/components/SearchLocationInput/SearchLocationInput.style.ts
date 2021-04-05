import styled from 'styled-components';

export const SearchBarContainer = styled.section`
  margin-top: 50rem;
  width: 100%;

  .open-search-dropdown {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-style: 1px solid #222;
  }

  form {
    background: white;
    border-radius: 4rem;

    input {
      border: none;
      color: #222;
      margin: 8rem 0;
      outline: none;
      font-size: 14rem;
      width: calc(100% - 60rem);
    }

    #search-term-btn,
    #clear-search-term-btn {
      width: 30rem;
      height: 36rem;
      background: none;
      border: none;
      cursor: pointer;
      vertical-align: top;

      svg {
        color: #222;
      }

      &:focus {
        outline: none;
      }
    }
  }

  #search-options,
  #no-search-options {
    height: auto;
    background: white;
    border-style: none;

    li {
      color: #222;
      height: 36rem;
      font-size: 13rem;
      padding: 8rem 16rem;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;

      &:hover,
      &.active {
        background: rgba(0, 129, 141, 0.2);
        cursor: pointer;
      }

      &#no-results {
        cursor: default;
        opacity: 0.8;
        svg {
          color: #222;
        }
        &:hover {
          background: unset;
          color: unset;
        }
      }
    }
  }
  @media (min-width: 1080px) {
    form,
    #no-search-options,
    #search-options {
      width: 50%;
      margin: 0 auto;
    }
  }
`;
