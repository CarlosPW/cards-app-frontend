import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { MainLayout } from "../../components/layouts";
import { Button, Modal } from "../../components/ui";
import { T } from "../../styles/Theme";
import { InputText, TextArea } from "../../styles/ui";
import { motion } from "framer-motion";
import { CardPageContainer } from "../../styles/pages/cardpageStyled";
import { DeleteCard } from "../../components/ui/Modal/uiModal";
import { useEffect } from "react";
import cardsApi from "../../api/cardsApi";

import { GetServerSideProps, NextPage } from "next";
import { CardItem, Cards } from "../../interfaces";
import { configHeaders } from "../../helpers/headersConfig";

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

interface Props {
  data: Cards;
}

const CardPage: NextPage<Props> = ({ data }) => {
  console.log(data);

  const [cardData, setCardData] = useState<Cards>(data);

  const [loading, setLoading] = useState<boolean>(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const [isDropdownOpen, setisDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setisDropdownOpen((prev) => !prev);
  };

  const [word, setWord] = useState({
    title: "",
    description: "",
  });
  console.log(word);

  const handleChangeAddWord = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWord({
      ...word,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAddWord = async () => {
    if (word.title.trim() === "" || word.description.trim() === "") return;
    setLoading(true);

    const res = await cardsApi.post(`carditem/${data.id}`, word, configHeaders);

    setWord({
      title: "",
      description: "",
    });

    const resCards = await cardsApi.get(`cards/${data.id}`, configHeaders);
    setCardData(resCards.data);
    setLoading(false);
  };

  return (
    <>
      <MainLayout>
        <CardPageContainer>
          <Button color="white" darkColor="black" textColor="black">
            Volver
          </Button>
          <div className="cardpage--add box">
            <InputText
              type="text"
              name="title"
              placeholder="Ingrese palabra o frase..."
              onChange={handleChangeAddWord}
              value={word.title}
            />
            <TextArea
              name="description"
              placeholder="Ingrese descripción..."
              onChange={handleChangeAddWord}
              value={word.description}
            ></TextArea>
            <Button onClick={handleSubmitAddWord}>Añadir</Button>
          </div>

          <div className="cardpage--list box">
            <div className="--header">
              <h6>{data.title}</h6>
            </div>
            <>
              {cardData.items.map((item: CardItem) => {
                return (
                  <div className="--block" key={item.id}>
                    <div className="sidebar"></div>
                    <div
                      className="block-header noselect"
                      onClick={toggleDropdown}
                    >
                      <h6>{item.title}</h6>
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
                        <TextArea disabled value={item.description}></TextArea>
                        <Button color={T.red} darkColor="black" px="10px 15px">
                          <BsFillTrashFill />
                        </Button>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </>
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

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const token = ctx.req.headers.cookie.split("=")[1];

  const res = await cardsApi.get(`cards/${ctx.params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res || res.data.message === "Esta tarjeta no existe.") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { data } = res;
  return { props: { data } };
};

export default CardPage;
