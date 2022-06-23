import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";

import { MainLayout } from "../../components/layouts";
import { Button } from "../../components/ui";
import { T } from "../../styles/Theme";
import { InputText, TextArea } from "../../styles/ui";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const CardPage = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setisDropdownOpen((prev) => !prev);
  };

  return (
    <MainLayout>
      <CardPageContainer>
        <Button color="white" darkColor="black" textColor="black">
          Volver
        </Button>
        <div className="cardpage--add box">
          <InputText type="text" placeholder="Ingrese palabra o frase..." />
          <TextArea placeholder="Ingrese descripción..."></TextArea>
          <Button>Añadir</Button>
        </div>

        <div className="cardpage--list box">
          <div className="--header">
            <h6>Palabras peliculas Harry Potter</h6>
          </div>
          <div className="--block">
            <div className="sidebar"></div>
            <div className="block-header noselect" onClick={toggleDropdown}>
              <h6>Palabra 1</h6>
              <AiFillCaretDown />
            </div>
            {isDropdownOpen && (
              <motion.div
                className="block-hidden"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <TextArea disabled></TextArea>
                <Button color={T.red} darkColor="black" px="10px 15px">
                  <BsFillTrashFill />
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </CardPageContainer>
    </MainLayout>
  );
};

export default CardPage;

const CardPageContainer = styled.div`
  .cardpage--list {
    padding: 15px 0;
    max-width: 1200px;

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
