import React from "react";
import styled from "styled-components";
import { InputText } from "../../../../styles/ui/inputStyled";
import { Button } from "../../Button";

export const NewCard = () => {
  return (
    <NewCardStyled>
      <h6 className="newcard--title">Crear Baraja</h6>

      <InputText
        className="newcard--input"
        type="text"
        placeholder="Ingresar nombre..."
      />

      <div className="newcard--button-container">
        <Button
          color="white"
          darkColor="black"
          textColor="black"
          px="15px 35px"
        >
          Cancelar
        </Button>
        <Button px="15px 50px">Crear</Button>
      </div>
    </NewCardStyled>
  );
};

const NewCardStyled = styled.div`
  padding: 20px;
  .newcard--title {
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin: 0 auto;
  }

  .newcard--input {
    margin: 25px 0;
  }

  .newcard--button-container {
    display: flex;
    justify-content: center;
  }
`;
