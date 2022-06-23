import type { NextPage } from "next";
import { useContext } from "react";
import { UiContext } from "../contexts/ui";
import styled from "styled-components";
import { MainLayout } from "../components/layouts";
import { Button, Card, Modal } from "../components/ui";
import { NewCard } from "../components/ui/Modal/uiModal";

const Home: NextPage = () => {
  const { toggleNewCardModal, isNewCardModalOpen } = useContext(UiContext);

  return (
    <>
      <MainLayout>
        <Button onClick={toggleNewCardModal}>Crear</Button>
        <CardContainer>
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </MainLayout>
      {isNewCardModalOpen && (
        <Modal modalOpen={isNewCardModalOpen} handleClose={toggleNewCardModal}>
          <NewCard />
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
