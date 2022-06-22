import styled from "styled-components";

export const SidebarStyled = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  z-index: 10000;

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
    position: absolute;
    width: 100px;
    top: 0;
    left: 0;

    min-height: 550px;
    height: 100%;
    max-width: 120px;
    background-color: white;
    padding: 15px 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .sidebar--header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > hr {
        width: 100%;
        opacity: 0.1;
      }
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: gray;
        margin: 20px 0;
      }

      .close {
        & > svg {
          width: 30px;
          height: 30px;
          margin: 20px 0;
          cursor: pointer;
        }
      }
    }

    .sidebar--menu {
      padding: 0;
      margin: 0;
      flex: 1;

      & > li {
        margin: 20px 0;
      }
    }

    .sidebar--logout {
      & > svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
`;
