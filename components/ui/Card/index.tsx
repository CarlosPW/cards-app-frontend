import styled from "styled-components";
import { T } from "../../../styles/Theme";

import { BsLightningChargeFill } from "react-icons/bs";
// import { BiStats } from "react-icons/bi";
import { GrMoreVertical } from "react-icons/gr";
import { motion } from "framer-motion";

export const Card = () => {
  return (
    <CardStyled>
      <div className="card--sidebarcolor"></div>
      <div className="card--content">
        <motion.div
          className="-title noselect"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1 }}
        >
          <p>Palabras peliculas Harry Potter</p>
        </motion.div>

        <div className="-counter">
          <p>12/20</p>
        </div>

        <div className="-footer">
          <PracticeButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
            <BsLightningChargeFill /> Practicar
          </PracticeButton>
          {/* <BiStats /> */}
          <GrMoreVertical className="-more" />
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  min-height: 180px;
  margin: 20px 0;
  position: relative;

  @media (min-width: 768px) {
    min-width: 350px;
  }

  .card--content {
    margin-left: 12px;

    & > .-title {
      cursor: pointer;
      font-weight: 600;
      padding: 10px 20px;
    }

    & > .-counter {
      margin: 0;
      padding: 0 20px;
    }

    & > .-footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 20px;
      padding: 10px 0;

      .-more {
      }

      & > svg {
        cursor: pointer;
        width: 20px;
        height: 20px;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  .card--sidebarcolor {
    background-color: ${T.yellow};
    border-radius: 12px 0 0 12px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 12px;
  }
`;

const PracticeButton = styled(motion.button)`
  align-items: center;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #000000;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  height: 25px;
  margin: 5px 0;
  padding: 0 20px 0 15px;

  & > svg {
    color: ${T.yellow};
    margin-right: 5px;
  }
`;
