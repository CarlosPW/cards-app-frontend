import styled from "styled-components";
import { T } from "../Theme";

export const CardPageContainer = styled.div`
  .cardpage--list {
    padding: 15px 0;
    max-width: 1200px;
    margin-bottom: 80px;

    .--block {
      border-bottom: 1px solid rgb(0, 0, 0, 0.1);
      border-top: 1px solid rgb(0, 0, 0, 0.1);
      position: relative;

      .block-hidden {
        padding: 10px 20px 10px 30px;

        svg {
          width: 25px;
          height: 25px;
        }
      }

      .block-header {
        cursor: pointer;
        display: grid;
        grid-template-columns: 1fr 100px;
        padding-left: 30px;
        place-items: center start;

        & > h6 {
          font-size: 16px;
          font-weight: 500;
          margin: 0;
          padding: 15px;
        }

        & > svg {
          color: ${T.purple};
          height: 25px;
          place-self: center;
          width: 25px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
      .sidebar {
        background-color: ${T.yellow};
        border-radius: 0 12px 12px 0;
        left: 0;
        position: absolute;
        top: 0;
        height: 100%;
        width: 10px;
      }
    }

    .--header {
      & > h6 {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        padding: 10px;
      }
    }
  }

  .cardpage--add {
    max-width: 650px;
    margin: 40px 0;

    padding: 20px;
    & > input,
    & > textarea {
      margin: 10px 0;
    }
  }
`;
