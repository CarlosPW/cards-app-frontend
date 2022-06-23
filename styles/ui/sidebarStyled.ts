import styled from "styled-components";

export const SidebarStyled = styled.div<{ isMenuOpen: boolean }>`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .sidebar {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    left: 0;
    max-width: 120px;
    min-height: 550px;
    padding: 15px 2px;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100px;

    .sidebar--header {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;

      & > hr {
        width: 100%;
        opacity: 0.1;
      }
      .logo {
        margin: 15px;
      }
      .avatar {
        background-color: gray;
        border-radius: 50%;
        height: 60px;
        margin: 20px 0;
        width: 60px;
      }

      .close {
        & > svg {
          cursor: pointer;
          height: 30px;
          margin: 20px 0;
          width: 30px;
        }
      }
    }

    .sidebar--menu {
      flex: 1;
      margin: 0;
      padding: 0;

      & > li {
        margin: 20px 0;
      }
    }

    .sidebar--logout {
      & > svg {
        cursor: pointer;
        height: 30px;
        width: 30px;
      }
    }
  }
`;
