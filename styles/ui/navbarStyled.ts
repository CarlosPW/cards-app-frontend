import styled from "styled-components";

export const Nav = styled.nav`
  & > .navbar--icon {
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  .navbar--menu-hidden {
    width: 30px;
    height: 30px;
  }
`;

export const SearchInput = styled.div`
  position: relative;
  margin: 0 10px;
  & > input {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    border: none;
    outline: none;
    height: 35px;
    padding: 10px 10px 10px 30px;
    width: 100%;

    font-size: 16px;
    line-height: 15px;

    color: black;

    &::placeholder {
      color: #d9d9d9;
    }
  }

  & > svg {
    position: absolute;
    left: 10px;
    top: 10px;
    color: #d9d9d9;
  }
`;
