import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import { UiContext, AuthContext } from "../contexts/";
import { MainLayout } from "../components/layouts";
import { Button, Card, Modal } from "../components/ui";
import { NewCard } from "../components/ui/Modal/uiModal";
import cardsApi from "../api/cardsApi";
import { Cards } from "../interfaces";

const Home: NextPage = () => {
  const { toggleNewCardModal, isNewCardModalOpen } = useContext(UiContext);
  const { configHeaders } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [cardsData, setCardsData] = useState<Cards[]>([]);

  const getData = async () => {
    setLoading(true);
    const { data } = await cardsApi.get<Cards[]>("/cards", configHeaders);
    setLoading(false);
    setCardsData(data);
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <MainLayout>
        <Button onClick={toggleNewCardModal}>Crear</Button>
        <CardContainer>
          {cardsData &&
            cardsData.map((cardData) => (
              <Card key={cardData.id} data={cardData} />
            ))}
        </CardContainer>
      </MainLayout>
      {isNewCardModalOpen && (
        <Modal modalOpen={isNewCardModalOpen} handleClose={toggleNewCardModal}>
          <NewCard onCancel={toggleNewCardModal} getData={getData} />
        </Modal>
      )}
    </>
  );
};

export default Home;

const CardContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    grid-gap: 0 20px;
  }
`;
