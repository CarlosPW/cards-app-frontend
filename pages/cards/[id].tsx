import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { MainLayout } from "../../components/layouts";
import { Button, Modal } from "../../components/ui";
import { T } from "../../styles/Theme";
import { InputText, TextArea } from "../../styles/ui";
import { motion } from "framer-motion";
import { CardPageContainer } from "../../styles/pages/cardpageStyled";
import { DeleteCard } from "../../components/ui/Modal/uiModal";

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const [isDropdownOpen, setisDropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setisDropdownOpen((prev) => !prev);
  };

  return (
    <>
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
          <Button color={T.red} darkColor="black" onClick={toggleDeleteModal}>
            Eliminar Tarjeta
          </Button>
        </CardPageContainer>
      </MainLayout>
      {isDeleteModalOpen && (
        <Modal modalOpen={isDeleteModalOpen} handleClose={toggleDeleteModal}>
          <DeleteCard onCancel={toggleDeleteModal} />
        </Modal>
      )}
    </>
  );
};

export default CardPage;
