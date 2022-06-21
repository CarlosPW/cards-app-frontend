import { FC } from "react";
import styled from "styled-components";
import { Button } from "../Button";

import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { MdLogout, MdOutlineClose } from "react-icons/md";

interface Props {}

export const Sidebar: FC<Props> = () => {
  return (
    <SidebarStyled>
      <div className="sidebar">
        <div className="sidebar--header">
          <span className="close">
            <MdOutlineClose />
          </span>

          <hr />

          <div className="avatar"></div>

          <hr />
        </div>

        <ul className="sidebar--menu">
          <li>
            <Button px="5px 10px">
              <AiFillHome />
            </Button>
          </li>
          <li>
            <Button px="5px 10px">
              <AiFillHeart />
            </Button>
          </li>
          <li>
            <Button px="5px 10px">
              <BiBarChart />
            </Button>
          </li>
        </ul>

        <div className="sidebar--logout">
          <MdLogout />
        </div>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 120px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .sidebar {
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
