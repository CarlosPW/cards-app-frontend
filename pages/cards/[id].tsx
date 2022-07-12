import React, { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/router";

import { MainLayout } from "../../components/layouts";
import { Button, DropdownItem, Modal } from "../../components/ui";
import { T } from "../../styles/Theme";
import { InputText, TextArea } from "../../styles/ui";
import { CardPageContainer } from "../../styles/pages/cardpageStyled";
import { DeleteCard } from "../../components/ui/Modal/uiModal";
import cardsApi from "../../api/cardsApi";

import { GetServerSideProps, NextPage } from "next";
import { CardItem, Cards } from "../../interfaces";
import { AuthContext } from "../../contexts";

interface Props {
  data: Cards;
}

const CardPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  const { configHeaders } = useContext(AuthContext);

  const [cardData, setCardData] = useState<Cards>(data);

  const [loading, setLoading] = useState<boolean>(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const [word, setWord] = useState({
    title: "",
    description: "",
  });

  const handleChangeAddWord = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWord({
      ...word,
      [e.target.name]: e.target.value,
    });
  };

  const handleRefreshCardData = async () => {
    setLoading(true);
    const resCards = await cardsApi.get(`cards/${data.id}`);
    setCardData(resCards.data);
    setLoading(false);
  };

  const handleSubmitAddWord = async () => {
    if (word.title.trim() === "" || word.description.trim() === "") return;

    setLoading(true);
    await cardsApi.post(`carditem/${data.id}`, word, configHeaders);

    setWord({
      title: "",
      description: "",
    });

    handleRefreshCardData();
    setLoading(false);
  };

  const goBack = () => {
    router.push("/");
  };

  return (
    <>
      <MainLayout>
        <CardPageContainer>
          <Button
            color="white"
            darkColor="black"
            textColor="black"
            onClick={goBack}
          >
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
            <Button onClick={handleSubmitAddWord} loading={loading}>
              Añadir
            </Button>
          </div>

          <div className="cardpage--list box">
            <div className="--header">
              <h6>{data.title}</h6>
            </div>
            <>
              {cardData.items.map((item: CardItem) => {
                return (
                  <DropdownItem
                    key={item.id}
                    item={item}
                    handleRefreshCardData={handleRefreshCardData}
                  />
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
