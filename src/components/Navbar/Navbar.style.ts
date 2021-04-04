import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: #222;
  padding: 0 15rem;

  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    li a {
      display: block;
      padding: 15px 5px;
      color: white;
      text-decoration: none;
    }

    .toggle {
      order: 1;
      font-size: 20px;
    }

    .logo {
      font-size: 20px;
      padding: 7.5px 10px 7.5px 0;
    }

    .item {
      padding: 10px;
      order: 3;
      width: 100%;
      text-align: center;
      display: none;

      a:hover,
      a:hover::after {
        color: #ccc;
      }
    }
  }

  .active .item {
    display: block;
  }

  /* Tablet menu */
  @media all and (min-width: 700px) {
    .menu {
      justify-content: center;

      .logo {
        flex: 1;
      }

      .toggle {
        flex: 1;
        text-align: right;
        order: 2;
      }
    }
  }
  /* Desktop menu */
  @media all and (min-width: 960px) {
    .menu {
      align-items: flex-start;
      flex-wrap: nowrap;
      background: none;

      .logo {
        order: 0;
      }
      .item {
        order: 1;
        position: relative;
        display: block;
        width: auto;
      }

      .toggle {
        display: none;
      }
    }
  }
`;
